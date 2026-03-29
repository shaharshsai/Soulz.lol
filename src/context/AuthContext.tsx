"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

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
  signup: (username: string, email: string, password: string) => Promise<boolean>;
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

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  login: async () => false,
  signup: async () => false,
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch {}
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 600));

    const entry = MOCK_USERS[email.toLowerCase()];
    if (entry && entry.password === password) {
      setUser(entry.user);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entry.user));
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
    setUser(newUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    return true;
  };

  const signup = async (username: string, email: string, password: string): Promise<boolean> => {
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
    setUser(newUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
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
