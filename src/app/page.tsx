import { Navbar } from "@/components/layout/Navbar";
import { DashboardMockup } from "@/components/landing/DashboardMockup";
import { MobileMockup } from "@/components/landing/MobileMockup";
import { Pricing } from "@/components/landing/Pricing";
import { Stats } from "@/components/landing/Stats";
import Link from 'next/link';

export default function PlatformLanding() {
  return (
    <main className="min-h-screen bg-[#09070c] relative overflow-hidden flex flex-col">
      {/* Background Ambience similar to guns.lol deep glow */}
      <div className="absolute top-0 inset-x-0 h-screen overflow-hidden pointer-events-none z-0 flex justify-center">
        <div className="w-[1000px] h-[500px] bg-violet-600/10 rounded-[100%] blur-[120px] absolute -top-40 opacity-70"></div>
        
        {/* Repeating subtle gun/brand icon pattern as seen on guns.lol */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: `url('data:image/svg+xml;utf8,<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M40 40h10v10h-10zm20 30h10v10h-10zm-30 20h10v10h-10zm60-60h10v10h-10zM10 90h10v10H10z" fill="%23ffffff" fill-rule="evenodd"/></svg>')`,
               backgroundSize: '160px 160px',
               rotate: '-15deg'
             }}>
        </div>
      </div>

      <Navbar />

      <section className="flex-1 flex flex-col items-center justify-start pt-48 md:pt-64 px-6 relative z-0 w-full max-w-[1400px] mx-auto">
        
        {/* Hero Copy */}
        <div className="text-center max-w-3xl flex flex-col items-center mb-32 md:mb-40 z-[100] relative">
          <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-bold text-white font-heading tracking-tight leading-[1.1] mb-6 drop-shadow-md">
            Everything you want, <br className="hidden md:block"/> right here.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-sans leading-relaxed mb-10 max-w-2xl text-balance">
            soulz.lol is your go-to platform for modern, hyper-optimized link-in-bio pages and fast, zero-fee digital product hosting.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/login" className="px-8 py-3.5 rounded-full bg-violet-600/20 text-violet-300 border border-violet-500 hover:bg-violet-600 hover:text-white transition-all font-semibold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] text-lg min-w-48 backdrop-blur-sm text-center">
              Sign Up for Free
            </Link>
            <Link 
              href="#pricing"
              className="px-8 py-3.5 rounded-full bg-[rgba(255,255,254,0.03)] text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white transition-all font-semibold text-lg min-w-48 backdrop-blur-sm text-center"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Hero Mockups overlapping each other - Now with enough height to prevent overflow */}
        <div className="relative w-full max-w-6xl mx-auto min-h-[600px] md:min-h-[750px] z-10">
          
          {/* Dashboard Left Side */}
          <div className="relative md:absolute md:left-0 md:top-24 z-20 hidden md:block opacity-90 scale-[0.85] origin-left">
            <DashboardMockup />
          </div>

          {/* Mobile Right Side */}
          <div className="relative z-30 md:absolute md:right-0 md:top-0 md:ml-0 drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]">
            <MobileMockup />
          </div>
          
        </div>
      </section>

      <Stats />

      <Pricing />

      <footer className="py-20 text-center border-t border-white/5 opacity-50 text-sm font-sans flex items-center justify-center gap-1">
        <span>powered by</span>
        <span className="font-heading font-bold text-base glow-hover">soulz.lol</span>
      </footer>

    </main>
  );
}
