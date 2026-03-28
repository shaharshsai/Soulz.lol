import { ProfileHero } from "@/components/profile/ProfileHero";
import { BentoGrid } from "@/components/profile/BentoGrid";
import { BentoCard } from "@/components/profile/BentoCard";

export default function WriterProfile() {
  const THEME_COLOR = "#8b5cf6"; // Violet 500

  return (
    <main className="min-h-screen py-10 overflow-x-hidden">
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
          name="The Daily Byte"
          bio="Tech news that actually matters. Read by 50,000+ engineers every morning."
          avatarUrl="/creator5.png"
          verified={true}
          themeColor={THEME_COLOR}
        />

        <div className="mt-8">
          <BentoGrid>
            <BentoCard 
              colSpan={4} 
              rowSpan={2}
              title="Subscribe to the Newsletter 📬"
              subtitle="Join 50k+ readers getting the best tech insights every Monday and Thursday."
              url="https://soulz.lol/subscribe"
              highlighted={true}
              themeColor={THEME_COLOR}
              icon={
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />

            <BentoCard 
              colSpan={2}
              title="Latest Post"
              subtitle="The AI Winter is Here?"
              url="https://soulz.lol/post/1"
            />
            
            <BentoCard 
              colSpan={2}
              title="Previous Post"
              subtitle="Why React is dying..."
              url="https://soulz.lol/post/2"
            />

            <BentoCard 
              colSpan={4}
              title="Sponsor the Newsletter"
              subtitle="Reach high-intent developers and founders."
              url="https://soulz.lol/sponsor"
              icon={
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              }
            />
          </BentoGrid>
        </div>
      </div>
    </main>
  );
}
