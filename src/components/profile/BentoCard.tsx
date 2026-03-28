import React from 'react';
import Link from 'next/link';

interface BentoCardProps {
  title: string;
  subtitle?: string;
  url: string;
  icon?: React.ReactNode;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2;
  highlighted?: boolean;
  themeColor?: string;
}

export function BentoCard({ 
  title, 
  subtitle, 
  url, 
  icon, 
  colSpan = 2, 
  rowSpan = 1,
  highlighted = false,
  themeColor = "#8b5cf6"
}: BentoCardProps) {
  
  const spanClasses = {
    col: {
      1: "col-span-1",
      2: "col-span-2",
      3: "col-span-3",
      4: "col-span-2 sm:col-span-4",
    },
    row: {
      1: "row-span-1 min-h-[120px]",
      2: "row-span-2 min-h-[256px]",
    }
  };

  return (
    <Link 
      href={url}
      className={`glass-card glass-card-hover rounded-3xl p-6 flex flex-col relative overflow-hidden group ${spanClasses.col[colSpan]} ${spanClasses.row[rowSpan]}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {highlighted && (
        <div 
          className="absolute inset-0 opacity-10 blur-xl group-hover:opacity-20 transition-opacity"
          style={{ backgroundColor: themeColor }}
        />
      )}
      
      <div className="z-10 flex flex-col h-full justify-between">
        {icon && (
          <div className="mb-4">
            <div 
              className="p-3 rounded-2xl inline-flex shadow-sm"
              style={{ backgroundColor: highlighted ? themeColor : 'rgba(255,255,255,0.05)' }}
            >
              {icon}
            </div>
          </div>
        )}
        
        <div className="mt-auto">
          <h3 className="font-heading font-semibold text-lg text-foreground tracking-tight group-hover:text-white transition-colors">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-[#a8a29e] mt-1 font-sans line-clamp-2">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 !duration-300">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </Link>
  );
}
