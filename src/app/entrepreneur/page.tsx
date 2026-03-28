import { ProfileHero } from "@/components/profile/ProfileHero";
import { BentoGrid } from "@/components/profile/BentoGrid";
import { BentoCard } from "@/components/profile/BentoCard";

export default function EntrepreneurProfile() {
  const THEME_COLOR = "#10b981"; // Emerald 500

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
          name="Sarah Chen"
          bio="Building SaaS in public. $50k MRR. Sharing my frameworks so you can escape the 9-5."
          avatarUrl="/creator4.png"
          themeColor={THEME_COLOR}
        />

        <div className="mt-8">
          <BentoGrid>
            <BentoCard 
              colSpan={4} 
              rowSpan={2}
              title="SaaS Growth Playbook (\$49) 🚀"
              subtitle="The exact marketing framework I used to take my startup from \$0 to \$10k MRR in 3 months."
              url="https://soulz.lol/product"
              highlighted={true}
              themeColor={THEME_COLOR}
              icon={
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            />

            <BentoCard 
              colSpan={2}
              title="Book a 1:1 Call"
              subtitle="Consulting for startups"
              url="https://calendly.com"
            />
            
            <BentoCard 
              colSpan={2}
              title="LinkedIn"
              subtitle="Where I post daily"
              url="https://linkedin.com"
            />

            <BentoCard 
              colSpan={4}
              title="Read My Blog"
              url="https://medium.com"
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              }
            />
          </BentoGrid>
        </div>
      </div>
    </main>
  );
}
