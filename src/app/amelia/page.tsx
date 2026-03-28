import { ProfileHero } from "@/components/profile/ProfileHero";
import { BentoGrid } from "@/components/profile/BentoGrid";
import { BentoCard } from "@/components/profile/BentoCard";

export default function Home() {
  const THEME_COLOR = "#f43f5e"; // Rose 500

  return (
    <main className="min-h-screen py-10 overflow-x-hidden">
      {/* Background Effect Layer */}
      <div className="fixed inset-0 pointer-events-none z-[-1]" aria-hidden="true">
        <div 
          className="absolute top-0 right-1/4 w-96 h-96 -mt-20 opacity-20 blur-[120px] rounded-full animate-pulse-glow"
          style={{ backgroundColor: THEME_COLOR }}
        />
        <div 
          className="absolute bottom-0 left-1/4 w-96 h-96 -mb-20 opacity-10 blur-[120px] rounded-full animate-float"
          style={{ backgroundColor: THEME_COLOR }}
        />
      </div>

      <div className="container mx-auto">
        <ProfileHero 
          name="Amelia Rose"
          bio="Lifestyle, aesthetics & mindful living ✨ Turning everyday moments into art."
          avatarUrl="/creator1.png"
          verified={true}
          themeColor={THEME_COLOR}
        />

        <div className="mt-8">
          <BentoGrid>
            {/* Main CTA Card */}
            <BentoCard 
              colSpan={4} 
              rowSpan={2}
              title="Join The Inner Circle 💌"
              subtitle="Get my weekly newsletter with private photo dumps, aesthetic edits, and exclusive lifestyle tips before anyone else."
              url="https://soulz.lol"
              highlighted={true}
              themeColor={THEME_COLOR}
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />

            {/* Social Links */}
            <BentoCard 
              colSpan={2}
              title="Instagram"
              subtitle="@ameliarose"
              url="https://instagram.com"
              icon={
                <svg className="w-6 h-6 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              }
            />
            
            <BentoCard 
              colSpan={2}
              title="TikTok"
              subtitle="@ameliarose"
              url="https://tiktok.com"
              icon={
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z"/>
                </svg>
              }
            />

            {/* Shop Product */}
            <BentoCard 
              colSpan={4}
              rowSpan={2}
              title="My Lightroom Presets 📸"
              subtitle="Get the exact cinematic and moody editing pack I use for all my social posts. Just 1 click."
              url="https://soulz.lol"
              icon={
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
            />

            {/* Miscellaneous */}
            <BentoCard 
              colSpan={2}
              title="My Amazon Storefront"
              url="https://amazon.com"
            />
            
            <BentoCard 
              colSpan={2}
              title="Business Inquiries"
              url="mailto:hello@ameliarose.com"
            />
          </BentoGrid>
        </div>
        
        {/* Footer branding */}
        <div className="text-center pb-8 opacity-50 text-sm font-sans flex items-center justify-center gap-1 group cursor-pointer hover:opacity-100 transition-opacity">
          <span>powered by</span>
          <span className="font-heading font-bold text-base glow-hover">soulz.lol</span>
        </div>
      </div>
    </main>
  );
}
