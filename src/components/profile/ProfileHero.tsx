import React from 'react';
import Image from 'next/image';

interface ProfileHeroProps {
  name: string;
  bio: string;
  avatarUrl: string;
  themeColor?: string;
  verified?: boolean;
}

export function ProfileHero({ name, bio, avatarUrl, themeColor = "#8b5cf6", verified = false }: ProfileHeroProps) {
  return (
    <div className="flex flex-col items-center text-center animate-fade-in pb-6 pt-12">
      <div className="relative mb-4 group animate-float">
        <div 
          className="absolute -inset-0.5 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
          style={{ backgroundColor: themeColor }}
        />
        <div className="relative h-28 w-28 rounded-full overflow-hidden border-2 border-[--color-glass-border] bg-white">
          <Image
            src={avatarUrl}
            alt={`${name}'s profile picture`}
            fill
            sizes="112px"
            className="object-cover"
            priority // Preload the critical LCP image
          />
        </div>
      </div>
      <h1 className="text-3xl font-heading font-bold text-foreground flex items-center gap-2 mb-2 tracking-tight">
        {name}
        {verified && (
          <span className="text-blue-500" title="Verified Creator">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
            </svg>
          </span>
        )}
      </h1>
      <p className="text-[#a8a29e] max-w-sm px-4 leading-relaxed font-sans text-sm">{bio}</p>
    </div>
  );
}
