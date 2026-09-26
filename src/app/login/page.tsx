"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { login, signup } = useAuth();

  return (
    <main className="min-h-screen bg-[#09070c] relative overflow-hidden flex items-center justify-center px-4 py-12">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="w-[800px] h-[400px] bg-violet-600/15 rounded-[100%] blur-[150px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
        <div className="w-[400px] h-[200px] bg-indigo-500/10 rounded-[100%] blur-[100px] absolute top-[20%] left-[20%] opacity-40"></div>
        <div className="w-[300px] h-[150px] bg-purple-600/10 rounded-[100%] blur-[80px] absolute bottom-[20%] right-[20%] opacity-40"></div>

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M40 40h10v10h-10zm20 30h10v10h-10zm-30 20h10v10h-10zm60-60h10v10h-10zM10 90h10v10H10z" fill="%23ffffff" fill-rule="evenodd"/></svg>')`,
            backgroundSize: "160px 160px",
            rotate: "-15deg",
          }}
        ></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        {/* Back Button */}
        <Link
          href="/"
          id="back-to-home"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium mb-8 transition-colors group"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:-translate-x-1 transition-transform"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          Back to home
        </Link>
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-10 group">
          <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.5)] group-hover:shadow-[0_0_35px_rgba(139,92,246,0.7)] transition-all">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
          </div>
          <span className="text-2xl font-heading font-bold text-white tracking-tight">
            soulz.lol
          </span>
        </Link>

        {/* Glass Card */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-violet-500/20 via-white/5 to-transparent p-[1px]">
            <div className="w-full h-full rounded-3xl bg-[#0f0c14]"></div>
          </div>

          <div className="relative z-10 p-8 md:p-10">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                {isSignUp ? "Create your account" : "Welcome back"}
              </h1>
              <p className="text-gray-400 text-sm">
                {isSignUp
                  ? "Start building your dream page today"
                  : "Sign in to manage your soulz.lol profile"}
              </p>
            </div>

            {/* Social Auth Buttons */}
            <div className="flex flex-col gap-3 mb-6">
              <button
                id="google-login-btn"
                className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-white/[0.05] border border-white/10 text-white font-medium text-sm hover:bg-white/[0.08] hover:border-white/15 transition-all duration-200 group"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </button>

              <button
                id="discord-login-btn"
                className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-[#5865F2]/10 border border-[#5865F2]/20 text-white font-medium text-sm hover:bg-[#5865F2]/20 hover:border-[#5865F2]/30 transition-all duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#5865F2">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
                </svg>
                Continue with Discord
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="text-gray-500 text-xs uppercase tracking-widest font-medium">
                or
              </span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            {/* Form */}
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setError("");
                setLoading(true);
                try {
                  const ok = isSignUp
                    ? await signup(username, email)
                    : await login(email, password);
                  if (ok) {
                    const onboarded = localStorage.getItem("soulz_onboarded");
                    router.push(onboarded ? "/dashboard" : "/onboarding");
                  }
                  else setError("Invalid credentials. Try demo@soulz.lol / demo1234");
                } catch {
                  setError("Something went wrong.");
                } finally {
                  setLoading(false);
                }
              }}
              className="flex flex-col gap-4"
            >
              {isSignUp && (
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-300 mb-1.5"
                  >
                    Username
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                      soulz.lol/
                    </span>
                    <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="yourname"
                      className="w-full py-3 pl-[88px] pr-4 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                    />
                  </div>
                </div>
              )}

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full py-3 px-4 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Password
                  </label>
                  {!isSignUp && (
                    <Link
                      href="#"
                      className="text-xs text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      Forgot password?
                    </Link>
                  )}
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full py-3 px-4 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                />
              </div>

              {/* Error */}
              {error && (
                <div className="text-red-400 text-xs text-center bg-red-500/10 border border-red-500/20 rounded-xl py-2.5 px-4">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                id="submit-login-btn"
                type="submit"
                disabled={loading}
                className="w-full py-3.5 mt-2 rounded-xl bg-violet-600 text-white font-semibold text-sm hover:bg-violet-500 transition-all shadow-[0_0_25px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
              >
                {loading ? "Please wait..." : isSignUp ? "Create Account" : "Sign In"}
              </button>
            </form>

            {/* Toggle */}
            <p className="text-center text-gray-400 text-sm mt-6">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                id="toggle-auth-mode"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-violet-400 hover:text-violet-300 font-medium transition-colors"
              >
                {isSignUp ? "Sign in" : "Sign up for free"}
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 text-xs mt-8">
          By continuing, you agree to our{" "}
          <Link href="#" className="text-gray-400 hover:text-white transition-colors underline underline-offset-2">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-gray-400 hover:text-white transition-colors underline underline-offset-2">
            Privacy Policy
          </Link>
        </p>
      </div>
    </main>
  );
}
