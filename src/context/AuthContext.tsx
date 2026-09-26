"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";

export interface MockUser {
  id: string;
  username: string;
  email: string;
  displayName: string;
  avatar: string;
  plan: "free" | "pro" | "business";
  createdAt: string;
}

interface AuthContextType {
  user: MockUser | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (username: string, email: string) => Promise<boolean>;
  logout: () => void;
}

const MOCK_USERS: Record<string, { password: string; user: MockUser }> = {
  "demo@soulz.lol": {
    password: "demo1234",
    user: {
      id: "usr_001",
      username: "arjun",
      email: "demo@soulz.lol",
      displayName: "Arjun",
      avatar: "",
      plan: "free",
      createdAt: new Date().toISOString(),
    },
  },
  "pro@soulz.lol": {
    password: "pro1234",
    user: {
      id: "usr_002",
      username: "sarah",
      email: "pro@soulz.lol",
      displayName: "Sarah",
      avatar: "",
      plan: "pro",
      createdAt: new Date().toISOString(),
    },
  },
};

const STORAGE_KEY = "soulz_mock_auth";
const AUTH_STORAGE_EVENT = "soulz-auth-change";
const hydrationListeners = new Set<() => void>();
let hasHydrated = false;

function subscribeToAuth(onChange: () => void) {
  if (typeof window === "undefined") return () => {};

  window.addEventListener("storage", onChange);
  window.addEventListener(AUTH_STORAGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(AUTH_STORAGE_EVENT, onChange);
  };
}

function getAuthSnapshot(): string | null {
  if (typeof window === "undefined") return null;

  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function subscribeToHydration(onChange: () => void) {
  hydrationListeners.add(onChange);
  return () => hydrationListeners.delete(onChange);
}

function getHydrationSnapshot() {
  return hasHydrated;
}

function getServerHydrationSnapshot() {
  return false;
}

function notifyAuthChanged() {
  window.dispatchEvent(new Event(AUTH_STORAGE_EVENT));
}

function storeUser(user: MockUser) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  notifyAuthChanged();
}

function removeStoredUser() {
  window.localStorage.removeItem(STORAGE_KEY);
  notifyAuthChanged();
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  login: async () => false,
  signup: async () => false,
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const storedUser = useSyncExternalStore(
    subscribeToAuth,
    getAuthSnapshot,
    () => null,
  );
  const isHydrated = useSyncExternalStore(
    subscribeToHydration,
    getHydrationSnapshot,
    getServerHydrationSnapshot,
  );
  const user = useMemo(() => {
    if (!storedUser) return null;

    try {
      return JSON.parse(storedUser) as MockUser;
    } catch {
      return null;
    }
  }, [storedUser]);
  const isLoading = !isHydrated;

  useEffect(() => {
    hasHydrated = true;
    hydrationListeners.forEach((listener) => listener());
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 600));

    const entry = MOCK_USERS[email.toLowerCase()];
    if (entry && entry.password === password) {
      storeUser(entry.user);
      return true;
    }

    // Allow any email/password combo for demo purposes
    const newUser: MockUser = {
      id: "usr_" + Date.now(),
      username: email.split("@")[0].toLowerCase().replace(/[^a-z0-9]/g, ""),
      email: email,
      displayName: email.split("@")[0],
      avatar: "",
      plan: "free",
      createdAt: new Date().toISOString(),
    };
    storeUser(newUser);
    return true;
  };

  const signup = async (username: string, email: string): Promise<boolean> => {
    await new Promise((r) => setTimeout(r, 600));

    const newUser: MockUser = {
      id: "usr_" + Date.now(),
      username: username.toLowerCase().replace(/[^a-z0-9]/g, ""),
      email,
      displayName: username,
      avatar: "",
      plan: "free",
      createdAt: new Date().toISOString(),
    };
    storeUser(newUser);
    return true;
  };

  const logout = () => {
    removeStoredUser();
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
