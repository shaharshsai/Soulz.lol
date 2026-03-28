import React from 'react';

export function DashboardMockup() {
  return (
    <div className="relative w-[700px] h-[450px] transform -rotate-2 scale-90 md:scale-100 flex-shrink-0 origin-right transition-transform duration-700 hover:-translate-y-2 hover:-rotate-1 z-10">
      {/* Outer Glow / Border */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-violet-500/30 via-[rgba(255,255,255,0.05)] to-transparent p-[2px] shadow-[0_0_80px_rgba(139,92,246,0.15)] overflow-hidden ring-1 ring-white/10">
        
        {/* Main Interface Window */}
        <div className="bg-[#0f0c13] w-full h-full rounded-[2.4rem] flex flex-col overflow-hidden relative border border-white/5">
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
          
          <div className="flex h-full p-6 gap-6 relative z-10">
            {/* Sidebar */}
            <div className="w-56 flex flex-col gap-6">
              {/* Profile Header */}
              <div className="flex items-center gap-3 px-2">
                <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center shrink-0 border border-violet-400/50 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </div>
                <div>
                  <div className="text-white text-sm font-bold truncate">soulz.lol</div>
                  <div className="text-violet-300/70 text-xs">@creator</div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-1">
                {[
                  { label: "Dashboard", icon: "grid", active: true },
                  { label: "Bento Editor", icon: "layout", active: false },
                  { label: "Links", icon: "link", active: false },
                  { label: "Revenue 0%", icon: "dollar-sign", active: false },
                  { label: "Media Hosting", icon: "image", active: false },
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${item.active ? 'bg-[rgba(139,92,246,0.2)] text-white border border-violet-500/20' : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'}`}>
                    <div className={item.active ? "text-violet-400" : "opacity-60"}>
                       {/* Placeholder icon shapes */}
                       <div className="w-4 h-4 rounded-sm border-2 border-current opacity-80" />
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Bottom CTA in sidebar */}
              <div className="mt-auto flex flex-col gap-2">
                <div className="bg-[rgba(139,92,246,0.1)] border border-violet-500/20 rounded-xl p-4 text-center">
                  <div className="text-xs text-violet-200 mb-2">Check out your page</div>
                  <div className="bg-violet-600/90 hover:bg-violet-500 text-white text-xs font-semibold py-2 px-4 rounded-lg flex justify-center items-center gap-2 cursor-pointer transition-all shadow-lg hover:shadow-[0_0_15px_rgba(139,92,246,0.6)]">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    My Page
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Top Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Profile Views", val: "142,893", icon: "A" },
                  { label: "Link Clicks", val: "84,302", icon: "B" },
                  { label: "Store Revenue", val: "\$1,240.50", icon: "C" },
                ].map((stat, i) => (
                  <div key={i} className="bg-[#17141d] rounded-2xl p-3 border border-[rgba(255,255,255,0.03)] flex flex-col justify-between min-w-0">
                     <div className="flex justify-between items-start mb-2">
                       <span className="text-gray-400 text-[10px] font-medium leading-tight">{stat.label}</span>
                       <div className="w-5 h-5 rounded-md bg-white/5 flex items-center justify-center text-violet-400/80 text-[10px] shrink-0">●</div>
                     </div>
                     <div className="text-white text-lg font-bold truncate">{stat.val}</div>
                  </div>
                ))}
              </div>

              {/* Graph Area */}
              <div className="flex-1 bg-[#17141d] rounded-2xl p-5 border border-[rgba(255,255,255,0.03)] flex flex-col relative overflow-hidden">
                <div className="text-gray-200 text-sm font-semibold mb-6">Profile Views in the last 12 hours</div>
                
                {/* CSS Graph Silhouette mimicking the screenshot's purple hills */}
                <div className="absolute bottom-0 left-0 right-0 h-[60%] flex items-end opacity-90 px-5">
                   <div className="w-full h-full relative flex items-end overflow-hidden">
                     <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full drop-shadow-[0_10px_20px_rgba(139,92,246,0.5)]">
                       <path d="M0,40 L0,25 C5,20 10,25 15,15 C20,5 25,20 30,22 C35,24 40,5 45,10 C50,15 55,20 60,8 C65,0 70,30 75,32 C80,34 85,15 90,8 C95,0 100,20 100,20 L100,40 Z" fill="rgba(139, 92, 246, 0.2)" stroke="var(--color-primary)" strokeWidth="0.5" strokeLinejoin="round" />
                     </svg>
                   </div>
                </div>
                
                {/* Horizontal grid lines */}
                <div className="absolute inset-x-5 inset-y-16 flex flex-col justify-between pointer-events-none opacity-10">
                   <div className="h-px w-full bg-white"></div>
                   <div className="h-px w-full bg-white"></div>
                   <div className="h-px w-full bg-white"></div>
                </div>
                
                {/* X-axis labels */}
                <div className="mt-auto flex justify-between text-[10px] text-gray-500 relative z-10 px-2">
                  <span>04:00</span>
                  <span>08:00</span>
                  <span>12:00</span>
                  <span>16:00</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
