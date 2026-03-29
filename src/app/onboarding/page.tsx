"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const TOTAL_STEPS = 4;

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const { user, isLoading } = useAuth();
  const router = useRouter();

  // Step 1 - Profile
  const [displayName, setDisplayName] = useState("");
  const [linkSlug, setLinkSlug] = useState("");
  const [bio, setBio] = useState("");

  // Step 2 - Theme
  const [selectedTheme, setSelectedTheme] = useState("dark-glass");

  // Step 3 - Links
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");
  const [customLink, setCustomLink] = useState("");

  // Step 4 - copied state
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
    if (user) {
      setDisplayName(user.displayName || "");
      setLinkSlug(user.username || "");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
      <div className="min-h-screen bg-[#09070c] flex items-center justify-center">
        <div className="text-violet-400 text-sm animate-pulse">Loading...</div>
      </div>
    );
  }

  const next = () => {
    if (step < TOTAL_STEPS) setStep(step + 1);
  };
  const back = () => {
    if (step > 1) setStep(step - 1);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(`soulz.lol/${linkSlug || user.username}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const finishOnboarding = () => {
    localStorage.setItem("soulz_onboarded", "true");
    router.push("/dashboard");
  };

  const themes = [
    {
      id: "dark-glass",
      name: "Dark glass",
      bg: "bg-[#13101a]",
      preview: (
        <div className="w-full h-24 rounded-lg bg-[#13101a] border border-white/10 flex flex-col items-center justify-center gap-1.5 p-3">
          <div className="w-6 h-6 rounded-full bg-violet-500/60"></div>
          <div className="w-16 h-1.5 rounded-full bg-white/20"></div>
          <div className="w-12 h-1.5 rounded-full bg-white/10"></div>
        </div>
      ),
    },
    {
      id: "minimal",
      name: "Minimal",
      bg: "bg-[#f5f5f0]",
      preview: (
        <div className="w-full h-24 rounded-lg bg-[#f5f5f0] border border-gray-200 flex flex-col items-center justify-center gap-1.5 p-3">
          <div className="w-6 h-6 rounded-full bg-gray-400/60"></div>
          <div className="w-16 h-1.5 rounded-full bg-gray-300"></div>
          <div className="w-12 h-1.5 rounded-full bg-gray-200"></div>
        </div>
      ),
    },
    {
      id: "neubrutalist",
      name: "Neubrutalist",
      bg: "bg-white",
      preview: (
        <div className="w-full h-24 rounded-lg bg-white border-2 border-black flex flex-col items-center justify-center gap-1.5 p-3">
          <div className="w-6 h-6 rounded-sm bg-black"></div>
          <div className="w-16 h-1.5 rounded-sm bg-black/30"></div>
          <div className="w-12 h-1.5 rounded-sm bg-black/15"></div>
        </div>
      ),
    },
  ];

  const inputClass =
    "w-full py-3.5 px-4 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all";

  return (
    <main className="min-h-screen bg-[#09070c] relative overflow-hidden flex flex-col items-center justify-center px-4 py-12">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="w-[800px] h-[400px] bg-violet-600/10 rounded-[100%] blur-[150px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      </div>

      {/* Top Progress Bar */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ${
              i < step
                ? "w-10 bg-violet-500"
                : i === step
                ? "w-6 bg-violet-500/40"
                : "w-6 bg-white/10"
            }`}
          />
        ))}
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-lg">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Border glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-transparent p-[1px]">
            <div className="w-full h-full rounded-3xl bg-[#0f0c14]"></div>
          </div>

          <div className="relative z-10 p-8 md:p-10">
            {/* Step 1: Profile */}
            {step === 1 && (
              <div>
                <div className="inline-block px-3 py-1.5 rounded-lg bg-violet-600/15 border border-violet-500/25 text-violet-300 text-xs font-medium mb-6">
                  Step 1 of 4 · Profile
                </div>
                <h1 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                  Set up your identity
                </h1>
                <p className="text-gray-400 text-sm mb-8">
                  This is how you&apos;ll appear to visitors on your soulz page.
                </p>

                <div className="flex flex-col gap-5">
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">Display name</label>
                    <input
                      type="text"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      placeholder="e.g. Arjun Sharma"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">Your link</label>
                    <div className="relative flex items-center">
                      <span className="absolute left-4 text-gray-500 text-sm pointer-events-none">soulz.lol/</span>
                      <input
                        type="text"
                        value={linkSlug}
                        onChange={(e) => setLinkSlug(e.target.value.toLowerCase().replace(/[^a-z0-9._-]/g, ""))}
                        placeholder="yourname"
                        className={`${inputClass} pl-[88px]`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">Bio</label>
                    <input
                      type="text"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      placeholder="Creator · Designer · whatever fits"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <button
                    onClick={next}
                    className="text-gray-400 hover:text-white px-5 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm font-medium transition-all"
                  >
                    Skip
                  </button>
                  <button
                    onClick={next}
                    className="flex-1 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-all"
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Theme */}
            {step === 2 && (
              <div>
                <div className="inline-block px-3 py-1.5 rounded-lg bg-violet-600/15 border border-violet-500/25 text-violet-300 text-xs font-medium mb-6">
                  Step 2 of 4 · Theme
                </div>
                <h1 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                  Pick your aesthetic
                </h1>
                <p className="text-gray-400 text-sm mb-8">
                  You can change this any time from your dashboard.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {themes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => setSelectedTheme(theme.id)}
                      className={`rounded-2xl p-3 border-2 transition-all flex flex-col items-center gap-2.5 ${
                        selectedTheme === theme.id
                          ? "border-violet-500 bg-violet-600/5 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                          : "border-white/10 bg-white/[0.02] hover:border-white/20"
                      }`}
                    >
                      {theme.preview}
                      <span className={`text-xs font-medium ${selectedTheme === theme.id ? "text-violet-300" : "text-gray-400"}`}>
                        {theme.name}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={back}
                    className="px-6 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-gray-300 font-medium text-sm hover:bg-white/[0.08] transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={next}
                    className="flex-1 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-all"
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Links */}
            {step === 3 && (
              <div>
                <div className="inline-block px-3 py-1.5 rounded-lg bg-violet-600/15 border border-violet-500/25 text-violet-300 text-xs font-medium mb-6">
                  Step 3 of 4 · Links
                </div>
                <h1 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                  Add your first links
                </h1>
                <p className="text-gray-400 text-sm mb-8">
                  These become cards on your Bento grid. Start with what matters most.
                </p>

                <div className="flex flex-col gap-5">
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">Instagram</label>
                    <input
                      type="text"
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                      placeholder="instagram.com/yourhandle"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">YouTube</label>
                    <input
                      type="text"
                      value={youtube}
                      onChange={(e) => setYoutube(e.target.value)}
                      placeholder="youtube.com/@yourchannel"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">Custom link</label>
                    <input
                      type="text"
                      value={customLink}
                      onChange={(e) => setCustomLink(e.target.value)}
                      placeholder="Any URL"
                      className={inputClass}
                    />
                  </div>

                  <p className="text-violet-400 text-xs font-medium">+ Add more links in the editor</p>
                </div>

                <div className="flex gap-3 mt-8">
                  <button
                    onClick={back}
                    className="px-6 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-gray-300 font-medium text-sm hover:bg-white/[0.08] transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={next}
                    className="flex-1 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-all"
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Go Live */}
            {step === 4 && (
              <div>
                <div className="inline-block px-3 py-1.5 rounded-lg bg-emerald-600/15 border border-emerald-500/25 text-emerald-300 text-xs font-medium mb-6">
                  Step 4 of 4 · Go live
                </div>
                <h1 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                  Your page is ready
                </h1>
                <p className="text-gray-400 text-sm mb-8">
                  Share your soulz link wherever your audience is. You can always come back to add products and customise.
                </p>

                {/* Live Link */}
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 flex items-center justify-between mb-6">
                  <span className="text-emerald-300 font-semibold text-sm">
                    soulz.lol/{linkSlug || user.username}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                    Live
                  </span>
                </div>

                {/* Action buttons */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <button
                    onClick={copyLink}
                    className="py-3 rounded-xl bg-white/[0.04] border border-white/10 text-gray-300 font-medium text-sm hover:bg-white/[0.08] transition-all"
                  >
                    {copied ? "✓ Copied!" : "Copy link"}
                  </button>
                  <button
                    onClick={finishOnboarding}
                    className="py-3 rounded-xl bg-white/[0.04] border border-white/10 text-gray-300 font-medium text-sm hover:bg-white/[0.08] transition-all"
                  >
                    Add product
                  </button>
                </div>

                <button
                  onClick={finishOnboarding}
                  className="w-full py-3.5 rounded-xl bg-white/[0.06] border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-all"
                >
                  Go to dashboard ↗
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i + 1 === step ? "bg-violet-500" : "bg-white/15"
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
