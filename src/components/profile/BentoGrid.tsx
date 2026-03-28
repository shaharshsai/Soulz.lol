import React from 'react';

interface BentoGridProps {
  children: React.ReactNode;
}

export function BentoGrid({ children }: BentoGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 auto-rows-[minmax(120px,auto)] px-4 max-w-2xl w-full mx-auto pb-20">
      {children}
    </div>
  );
}
