import { ProfileHero } from "@/components/profile/ProfileHero";
import { BentoGrid } from "@/components/profile/BentoGrid";
import { BentoCard } from "@/components/profile/BentoCard";

export default function GamerProfile() {
  const THEME_COLOR = "#3b82f6"; // Blue 500

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
          name="X-Slayer"
          bio="Pro Valorant Player 🎯 Late night streams & toxic lobbies. Welcome to the grind."
          avatarUrl="/creator2.png"
          verified={true}
          themeColor={THEME_COLOR}
        />

        <div className="mt-8">
          <BentoGrid>
            <BentoCard
              colSpan={4}
              rowSpan={2}
              title="Watch Me Live 🎮"
              subtitle="Currently streaming Valorant Ranked Grind to Radiant. Come say hi in chat!"
              url="https://twitch.tv"
              highlighted={true}
              themeColor="#9146FF"
              icon={
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
                </svg>
              }
            />

            <BentoCard
              colSpan={2}
              title="YouTube"
              subtitle="Highlight Reels & Montages"
              url="https://youtube.com"
              icon={
                <svg className="w-6 h-6 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              }
            />

            <BentoCard
              colSpan={2}
              title="Twitter (X)"
              subtitle="Hot takes & clip drops"
              url="https://twitter.com"
            />

            <BentoCard
              colSpan={4}
              title="My Setup / PC Specs"
              subtitle="Get the same exact mouse, keyboard, and monitor layout I use."
              url="https://amazon.com"
              icon={
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />
          </BentoGrid>
        </div>
      </div>
    </main>
  );
}
