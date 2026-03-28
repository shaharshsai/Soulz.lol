import React from 'react';
import Image from 'next/image';

export function MobileMockup() {
  return (
    <div className="relative w-[320px] h-[600px] flex-shrink-0 transform rotate-3 scale-90 md:scale-100 z-20 transition-transform duration-700 hover:-translate-y-4 hover:rotate-6">
      
      {/* Main Foreground Phone */}
      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-violet-400/20 to-black p-[2px] shadow-[0_20px_50px_rgba(0,0,0,0.5),_0_0_80px_rgba(139,92,246,0.2)] z-10 overflow-hidden ring-1 ring-white/10">
        
        {/* Phone screen content */}
        <div className="bg-[#0a080c] w-full h-full rounded-[2.9rem] flex flex-col overflow-hidden relative border-4 border-black">
          
          {/* Dynamic Island / Notch placeholder */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30"></div>
          
          {/* Mockup Profile Content - Similar to Gamer demo or guns.lol mobile page */}
          <div className="absolute inset-0 z-0">
             {/* Gradient Background mimicking the dark theme */}
             <div className="absolute top-0 inset-x-0 h-[40%] bg-gradient-to-b from-indigo-900/40 to-transparent"></div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center pt-24 px-5 h-full">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-gray-800 border-2 border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)] overflow-hidden relative mb-4 flex items-center justify-center p-1">
               <div className="w-full h-full rounded-full bg-indigo-600/30">
                 <Image src="/creator1.png" alt="Avatar" width={96} height={96} className="rounded-full w-full h-full object-cover" />
               </div>
            </div>
            
            {/* Name */}
            <h2 className="text-white text-2xl font-heading font-bold mb-1 flex items-center gap-1">
               amelia
               <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
            </h2>
            
            <p className="text-gray-400 text-xs mb-6 px-4 text-center">Lifestyle, aesthetics & mindful living ✨ Turning everyday moments into art.</p>
            
            {/* Bento Links Simulator */}
            <div className="w-full flex flex-col gap-3">
               <div className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-4 flex items-center justify-between shadow-lg backdrop-blur-sm relative overflow-hidden group">
                 <div className="absolute inset-0 bg-violet-600/10 hidden group-hover:block"></div>
                 <div className="flex items-center gap-3 relative z-10">
                    <div className="w-8 h-8 rounded-xl bg-violet-500/20 flex items-center justify-center text-violet-300">
                       <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z"/></svg>
                    </div>
                    <span className="text-white text-sm font-semibold">Instagram</span>
                 </div>
                 <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500 relative z-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
               </div>

               <div className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-4 flex items-center justify-between shadow-lg backdrop-blur-sm relative overflow-hidden group">
                 <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-pink-500 to-indigo-500"></div>
                 <div className="flex flex-col relative z-10 w-full">
                    <span className="text-white text-sm font-semibold mb-1">My Lightroom Presets 📸</span>
                    <span className="text-gray-400 text-xs line-clamp-1">Get the exact cinematic and moody editing pack I use.</span>
                 </div>
               </div>
               
               <div className="w-full h-12 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-2xl shrink-0"></div>
            </div>
            
            <div className="mt-auto pb-6 text-[10px] text-gray-500 font-semibold opacity-50 flex items-center justify-center gap-1">
               powered by <span className="text-white tracking-widest font-heading">soulz.lol</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
