"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const sidebarLinks = [
  { label: "Overview", icon: "grid", active: true },
  { label: "Bio page", icon: "layout" },
  { label: "Products", icon: "box" },
  { label: "Analytics", icon: "chart" },
];

const sidebarBottom = [
  { label: "Themes", icon: "palette" },
  { label: "Settings", icon: "settings" },
];

const checklistSteps = [
  { step: 1, title: "Profile", desc: "Name & photo added", done: true },
  { step: 2, title: "Theme", desc: "Dark glass selected", done: true },
  { step: 3, title: "Add links", desc: "Build your grid", done: false, current: true },
  { step: 4, title: "First product", desc: "Start earning", done: false },
  { step: 5, title: "Go live", desc: "Share your link", done: false },
];

interface UserLink {
  id: number;
  title: string;
  url: string;
  icon: string;
}

function SidebarIcon({ icon, active }: { icon: string; active?: boolean }) {
  const cls = `w-5 h-5 ${active ? "text-violet-400" : "text-gray-500"}`;
  switch (icon) {
    case "grid":
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case "layout":
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
        </svg>
      );
    case "box":
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />
        </svg>
      );
    case "chart":
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" /><path d="M12 2a10 10 0 0 1 10 10" /><path d="M12 12 2 12" /><path d="M12 12V2" />
        </svg>
      );
    case "palette":
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.75 1.5-1.5 0-.39-.15-.74-.39-1.01-.24-.28-.39-.63-.39-1.01 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.17-4.49-9.48-10-9.98z" />
          <circle cx="7.5" cy="11.5" r="1.5" /><circle cx="11" cy="7.5" r="1.5" /><circle cx="16.5" cy="11.5" r="1.5" />
        </svg>
      );
    case "settings":
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [links, setLinks] = useState<UserLink[]>([
    { id: 1, title: "Instagram", url: "https://instagram.com/yourname", icon: "📸" },
    { id: 2, title: "Twitter / X", url: "https://x.com/yourname", icon: "𝕏" },
  ]);
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [showAddLink, setShowAddLink] = useState(false);
  const { user, isLoading, logout } = useAuth();
  const router = useRouter();
  const username = user?.username || "guest";
  const displayName = user?.displayName || "Guest";

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
      <div className="min-h-screen bg-[#09070c] flex items-center justify-center">
        <div className="text-violet-400 text-sm animate-pulse">Loading...</div>
      </div>
    );
  }

  const addLink = () => {
    if (!newTitle.trim() || !newUrl.trim()) return;
    setLinks([...links, { id: Date.now(), title: newTitle, url: newUrl, icon: "🔗" }]);
    setNewTitle("");
    setNewUrl("");
    setShowAddLink(false);
  };

  const removeLink = (id: number) => {
    setLinks(links.filter((l) => l.id !== id));
  };

  const completedSteps = checklistSteps.filter((s) => s.done).length;
  const progress = Math.round((completedSteps / checklistSteps.length) * 100);

  const greeting = () => {
    const h = new Date().getHours();
    if (h < 12) return "Good morning";
    if (h < 17) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="min-h-screen bg-[#09070c] flex">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 border-r border-white/5 bg-[#0d0b11] flex flex-col py-6 px-4 fixed h-screen z-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 px-3 mb-8 group">
          <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.4)]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-heading font-bold text-base text-white">soulz<span className="text-violet-400">.lol</span></span>
        </Link>

        {/* Nav */}
        <nav className="flex flex-col gap-1">
          {sidebarLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === item.label
                  ? "bg-violet-600/15 text-violet-300 border border-violet-500/20"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <SidebarIcon icon={item.icon} active={activeTab === item.label} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="h-px bg-white/5 my-4 mx-3"></div>

        <nav className="flex flex-col gap-1">
          {sidebarBottom.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === item.label
                  ? "bg-violet-600/15 text-violet-300 border border-violet-500/20"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <SidebarIcon icon={item.icon} active={activeTab === item.label} />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div className="mt-auto px-3">
          <div className="rounded-xl bg-violet-600/10 border border-violet-500/20 p-4">
            <p className="text-xs text-violet-200 mb-2 font-medium">Upgrade to Pro</p>
            <p className="text-[10px] text-gray-400 mb-3">Unlock custom domains, analytics & more</p>
            <Link href="/payment?plan=pro" className="block text-center bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)]">
              Upgrade →
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-56">
        {/* Top Bar */}
        <header className="sticky top-0 z-10 bg-[#09070c]/80 backdrop-blur-xl border-b border-white/5 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-heading font-bold text-white">
              {greeting()}, <span className="capitalize">{displayName}</span>
            </h1>
            <p className="text-gray-500 text-xs mt-0.5">
              soulz.lol/{username} · 0 visitors today
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-gray-400 text-xs font-medium">
              soulz.lol/{username}
            </div>
            <button
              onClick={() => { logout(); router.push("/"); }}
              className="px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium hover:bg-red-500/20 transition-all"
            >
              Logout
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(139,92,246,0.4)]">
              {displayName[0].toUpperCase()}
            </div>
          </div>
        </header>

        <div className="p-8 max-w-6xl">
          {/* Setup Progress Banner */}
          <div className="rounded-2xl border border-violet-500/20 bg-violet-600/5 p-6 mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-white font-semibold mb-1">Finish setting up your page</h2>
              <p className="text-gray-400 text-sm mb-3">
                {5 - completedSteps} steps left · takes about 5 minutes
              </p>
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  {checklistSteps.map((s, i) => (
                    <div key={i} className={`h-2 rounded-full transition-all ${s.done ? "w-4 bg-violet-500" : s.current ? "w-6 bg-violet-600" : "w-3 bg-white/10"}`} />
                  ))}
                </div>
                <span className="text-gray-400 text-xs">{progress}%</span>
              </div>
            </div>
            <button className="px-6 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-all">
              Continue setup
            </button>
          </div>

          {/* Setup Checklist */}
          <div className="mb-10">
            <h3 className="text-gray-400 text-xs uppercase tracking-wider font-medium mb-4">Setup Checklist</h3>
            <div className="grid grid-cols-5 gap-4">
              {checklistSteps.map((step) => (
                <div
                  key={step.step}
                  className={`rounded-2xl p-4 border flex flex-col items-start transition-all ${
                    step.done
                      ? "border-emerald-500/30 bg-emerald-500/5"
                      : step.current
                      ? "border-violet-500/30 bg-violet-600/5"
                      : "border-white/5 bg-white/[0.02]"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-3 ${
                    step.done
                      ? "bg-emerald-500 text-white"
                      : step.current
                      ? "bg-violet-600 text-white"
                      : "bg-white/10 text-gray-400"
                  }`}>
                    {step.done ? (
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step.step
                    )}
                  </div>
                  <span className={`text-sm font-semibold mb-0.5 ${step.done ? "text-emerald-300" : step.current ? "text-violet-300" : "text-gray-300"}`}>
                    {step.title}
                  </span>
                  <span className="text-gray-500 text-xs">{step.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats + Preview Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Stats */}
            <div>
              <h3 className="text-gray-400 text-xs uppercase tracking-wider font-medium mb-4">Your Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Views", value: "0", sub: "Share to get started" },
                  { label: "Clicks", value: "0", sub: "Awaiting traffic" },
                  { label: "Revenue", value: "₹0", sub: "Add a product" },
                  { label: "Link CTR", value: "—", sub: "No data yet" },
                ].map((stat, i) => (
                  <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                    <span className="text-gray-400 text-[10px] uppercase tracking-wider font-medium">{stat.label}</span>
                    <div className="text-white text-3xl font-bold mt-2 mb-1">{stat.value}</div>
                    <span className="text-gray-500 text-xs">{stat.sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Page Preview */}
            <div>
              <h3 className="text-gray-400 text-xs uppercase tracking-wider font-medium mb-4">Page Preview</h3>
              <div className="rounded-2xl border border-white/5 bg-[#0d0b11] p-5 overflow-hidden">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="flex-1 mx-4 px-4 py-1.5 rounded-lg bg-white/[0.05] border border-white/5 text-gray-400 text-xs text-center">
                    soulz.lol/{username}
                  </div>
                </div>

                {/* Preview Content */}
                <div className="flex flex-col items-center py-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 mb-3 shadow-[0_0_20px_rgba(139,92,246,0.3)]"></div>
                  <h4 className="text-white font-bold text-lg capitalize">{username}</h4>
                  <p className="text-gray-400 text-xs mb-5">@{username} · Creator</p>

                  {/* Link Previews */}
                  <div className="w-full flex flex-col gap-2.5 px-4">
                    {links.map((link) => (
                      <div key={link.id} className="w-full h-10 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-center text-gray-300 text-xs">
                        {link.icon} {link.title}
                      </div>
                    ))}
                    {links.length === 0 && (
                      <div className="text-center text-gray-500 text-xs py-4">No links yet. Add your first link below!</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Link Manager */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400 text-xs uppercase tracking-wider font-medium">Your Links</h3>
              <button
                id="add-link-btn"
                onClick={() => setShowAddLink(!showAddLink)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600/15 border border-violet-500/20 text-violet-300 text-sm font-medium hover:bg-violet-600/25 transition-all"
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                </svg>
                Add Link
              </button>
            </div>

            {/* Add Link Form */}
            {showAddLink && (
              <div className="rounded-2xl border border-violet-500/20 bg-violet-600/5 p-6 mb-4 animate-in">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Title</label>
                    <input
                      type="text"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder="e.g. YouTube, Portfolio, Spotify..."
                      className="w-full py-3 px-4 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">URL</label>
                    <input
                      type="url"
                      value={newUrl}
                      onChange={(e) => setNewUrl(e.target.value)}
                      placeholder="https://..."
                      className="w-full py-3 px-4 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={addLink}
                    className="px-5 py-2.5 rounded-xl bg-violet-600 text-white font-semibold text-sm hover:bg-violet-500 transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                  >
                    Add Link
                  </button>
                  <button
                    onClick={() => setShowAddLink(false)}
                    className="px-5 py-2.5 rounded-xl bg-white/5 text-gray-300 font-medium text-sm hover:bg-white/10 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Links List */}
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <div
                  key={link.id}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 flex items-center justify-between group hover:bg-white/[0.04] hover:border-white/10 transition-all"
                >
                  <div className="flex items-center gap-4">
                    {/* Drag Handle */}
                    <div className="text-gray-600 cursor-grab">
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <circle cx="5" cy="3" r="1.5" /><circle cx="11" cy="3" r="1.5" />
                        <circle cx="5" cy="8" r="1.5" /><circle cx="11" cy="8" r="1.5" />
                        <circle cx="5" cy="13" r="1.5" /><circle cx="11" cy="13" r="1.5" />
                      </svg>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-lg">
                      {link.icon}
                    </div>

                    <div>
                      <h4 className="text-white font-semibold text-sm">{link.title}</h4>
                      <p className="text-gray-500 text-xs truncate max-w-[300px]">{link.url}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-all">
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => removeLink(link.id)}
                      className="p-2 rounded-lg hover:bg-red-500/10 text-gray-400 hover:text-red-400 transition-all"
                    >
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}

              {links.length === 0 && (
                <div className="rounded-2xl border border-dashed border-white/10 p-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-3">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-gray-500">
                      <path d="M13.828 10.172a4 4 0 0 0-5.656 0l-4 4a4 4 0 1 0 5.656 5.656l1.102-1.101" strokeLinecap="round" />
                      <path d="M10.172 13.828a4 4 0 0 0 5.656 0l4-4a4 4 0 0 0-5.656-5.656l-1.1 1.1" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm font-medium mb-1">No links yet</p>
                  <p className="text-gray-600 text-xs">Click &quot;Add Link&quot; to start building your page</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
