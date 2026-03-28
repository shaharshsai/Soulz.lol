import { ProfileHero } from "@/components/profile/ProfileHero";
import { BentoGrid } from "@/components/profile/BentoGrid";
import { BentoCard } from "@/components/profile/BentoCard";

export default function MusicianProfile() {
  const THEME_COLOR = "#f59e0b"; // Amber 500

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
          name="Jay Beats"
          bio="Indie Producer & Artist. My new EP 'Midnight Drives' is out now everywhere."
          avatarUrl="/creator3.png"
          verified={false}
          themeColor={THEME_COLOR}
        />

        <div className="mt-8">
          <BentoGrid>
            <BentoCard 
              colSpan={4} 
              rowSpan={2}
              title="Stream 'Midnight Drives' EP 🎧"
              subtitle="Available now on Spotify, Apple Music, and everywhere you listen to music."
              url="https://spotify.com"
              highlighted={true}
              themeColor="#1DB954"
              icon={
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.2-1.26 11.28-1.02 15.721 1.62.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              }
            />

            <BentoCard 
              colSpan={2}
              title="Apple Music"
              url="https://music.apple.com"
            />
            <BentoCard 
              colSpan={2}
              title="SoundCloud"
              url="https://soundcloud.com"
            />

            <BentoCard 
              colSpan={4}
              title="Buy My Merch"
              subtitle="Limited edition vinyls and hoodies here."
              url="https://soulz.lol/shop"
              icon={
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              }
            />
          </BentoGrid>
        </div>
      </div>
    </main>
  );
}
