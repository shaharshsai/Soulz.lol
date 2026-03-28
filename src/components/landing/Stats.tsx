import React from 'react';

const stats = [
  {
    label: "Profile Views",
    value: "61,800,000+",
    icon: (
      <svg className="w-6 h-6 text-violet-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
      </svg>
    )
  },
  {
    label: "Users",
    value: "1,590,000+",
    icon: (
      <svg className="w-6 h-6 text-violet-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    )
  },
  {
    label: "File Uploads",
    value: "560,000+",
    icon: (
      <svg className="w-6 h-6 text-violet-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
      </svg>
    )
  },
  {
    label: "Subscribers",
    value: "44,900+",
    icon: (
      <svg className="w-6 h-6 text-violet-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    )
  }
];

export function Stats() {
  return (
    <section className="pt-40 pb-20 px-6 relative z-10 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="glass-card p-6 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col items-start gap-3 transition-all hover:bg-white/[0.04] min-w-0 overflow-hidden">
            <div className="w-full flex justify-between items-center gap-3 min-w-0">
              <span className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-none truncate">
                {stat.value}
              </span>
              <div className="p-2 rounded-xl bg-violet-600/10 border border-violet-500/20 shrink-0">
                {stat.icon}
              </div>
            </div>
            <span className="text-gray-400 text-xs font-medium tracking-wider uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
