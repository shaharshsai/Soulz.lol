import React from 'react';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-card rounded-2xl px-6 py-3 border border-[rgba(255,255,255,0.05)] bg-[#110e15]/80">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(139,92,246,0.5)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-violet-200 transition-colors">soulz.lol</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/help" className="hover:text-white transition-colors">Help Center</Link>
          <div className="relative group cursor-pointer">
            <span className="hover:text-white transition-colors">Demos</span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="glass-card flex flex-col w-40 p-2 rounded-xl">
                <Link href="/amelia" className="px-4 py-2 hover:bg-white/5 rounded-lg text-white">Creator</Link>
                <Link href="/gamer" className="px-4 py-2 hover:bg-white/5 rounded-lg text-white">Gamer</Link>
                <Link href="/musician" className="px-4 py-2 hover:bg-white/5 rounded-lg text-white">Musician</Link>
              </div>
            </div>
          </div>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/login" className="hover:text-white transition-colors">Login</Link>
          <Link 
            href="/login" 
            className="px-5 py-2.5 rounded-full bg-[rgba(139,92,246,0.15)] text-violet-300 border border-violet-500/30 hover:bg-violet-600 hover:text-white hover:border-violet-500 transition-all font-semibold shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]"
          >
            Sign Up Free
          </Link>
        </div>

        {/* Mobile Menu Button (Placeholder) */}
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
