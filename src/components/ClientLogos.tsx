'use client';

import React from 'react';

interface ClientLogo {
  name: string;
  logo: React.ReactNode;
}

export const CLIENT_LOGOS: ClientLogo[] = [
  {
    name: 'SIEMENS',
    logo: (
      <svg viewBox="0 0 120 30" className="w-24 h-7 text-gray-600 dark:text-gray-300 group-hover:text-[#009999] fill-current transition-colors duration-300">
        {/* Siemens Typographic SVG */}
        <text x="5" y="22" className="font-sans font-black tracking-[0.2em] text-lg uppercase fill-current">SIEMENS</text>
        <rect x="108" y="7" width="4" height="4" className="fill-accent group-hover:fill-secondary transition-colors duration-300" />
      </svg>
    )
  },
  {
    name: 'BHEL',
    logo: (
      <svg viewBox="0 0 100 35" className="w-20 h-7 text-gray-600 dark:text-gray-300 group-hover:text-blue-500 fill-current transition-colors duration-300">
        {/* BHEL Circle & Typography */}
        <circle cx="20" cy="17" r="12" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M12 17 H28 M20 9 V25" stroke="currentColor" strokeWidth="1.5" />
        <text x="38" y="23" className="font-sans font-black tracking-wider text-base fill-current">BHEL</text>
      </svg>
    )
  },
  {
    name: 'NPCIL',
    logo: (
      <svg viewBox="0 0 120 35" className="w-24 h-8 text-gray-600 dark:text-gray-300 group-hover:text-green-400 fill-current transition-colors duration-300">
        {/* Nuclear Atom Graphic & Text */}
        <g transform="translate(18, 17)">
          <circle cx="0" cy="0" r="3" className="fill-current" />
          <ellipse rx="10" ry="3" stroke="currentColor" strokeWidth="1.25" fill="none" transform="rotate(30)" />
          <ellipse rx="10" ry="3" stroke="currentColor" strokeWidth="1.25" fill="none" transform="rotate(90)" />
          <ellipse rx="10" ry="3" stroke="currentColor" strokeWidth="1.25" fill="none" transform="rotate(150)" />
        </g>
        <text x="36" y="23" className="font-sans font-black text-sm tracking-widest fill-current">NPCIL</text>
      </svg>
    )
  },
  {
    name: 'RELIANCE',
    logo: (
      <svg viewBox="0 0 120 30" className="w-24 h-7 text-gray-600 dark:text-gray-300 group-hover:text-red-500 fill-current transition-colors duration-300">
        {/* Reliance flame and word */}
        <path d="M10 24 C10 12, 17 8, 20 5 C21 12, 25 15, 25 24 C25 28, 10 28, 10 24 Z" className="fill-current" />
        <text x="32" y="21" className="font-sans font-extrabold text-xs tracking-wider fill-current">Reliance</text>
      </svg>
    )
  },
  {
    name: 'JSW STEEL',
    logo: (
      <svg viewBox="0 0 120 30" className="w-24 h-7 text-gray-600 dark:text-gray-300 group-hover:text-cyan-400 fill-current transition-colors duration-300">
        {/* JSW Steel Emblem */}
        <path d="M5 22 L15 8 L22 8 L12 22 Z" className="fill-current" />
        <path d="M15 22 L25 8 L32 8 L22 22 Z" className="fill-accent group-hover:fill-secondary transition-colors" />
        <text x="38" y="20" className="font-sans font-black tracking-widest text-xs fill-current">JSW STEEL</text>
      </svg>
    )
  },
  {
    name: 'L&T',
    logo: (
      <svg viewBox="0 0 100 30" className="w-20 h-7 text-gray-600 dark:text-gray-300 group-hover:text-yellow-500 fill-current transition-colors duration-300">
        {/* L&T Typography */}
        <text x="5" y="22" className="font-sans font-black tracking-wider text-lg fill-current">L&T</text>
        <path d="M45 5 L65 5 L60 25 L40 25 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="52" cy="15" r="4" className="fill-accent" />
      </svg>
    )
  },
  {
    name: 'ONGC',
    logo: (
      <svg viewBox="0 0 100 30" className="w-20 h-7 text-gray-600 dark:text-gray-300 group-hover:text-red-400 fill-current transition-colors duration-300">
        {/* ONGC Square symbol */}
        <rect x="5" y="5" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <circle cx="15" cy="15" r="4" className="fill-current" />
        <text x="32" y="21" className="font-sans font-extrabold tracking-widest text-sm fill-current">ONGC</text>
      </svg>
    )
  },
  {
    name: 'NALCO',
    logo: (
      <svg viewBox="0 0 110 30" className="w-24 h-7 text-gray-600 dark:text-gray-300 group-hover:text-blue-400 fill-current transition-colors duration-300">
        {/* NALCO Design */}
        <rect x="5" y="5" width="22" height="20" rx="2" className="fill-none stroke-current" strokeWidth="2" />
        <path d="M12 10 L20 20" stroke="currentColor" strokeWidth="2" />
        <text x="34" y="21" className="font-sans font-black tracking-widest text-sm fill-current">NALCO</text>
      </svg>
    )
  },
  {
    name: 'ITC LIMITED',
    logo: (
      <svg viewBox="0 0 100 30" className="w-20 h-7 text-gray-600 dark:text-gray-300 group-hover:text-orange-400 fill-current transition-colors duration-300">
        {/* ITC logo */}
        <polygon points="5,5 25,5 20,25 10,25" className="stroke-current fill-none" strokeWidth="2.5" />
        <text x="32" y="21" className="font-sans font-black tracking-widest text-sm fill-current">ITC</text>
      </svg>
    )
  },
  {
    name: 'ADITYA BIRLA',
    logo: (
      <svg viewBox="0 0 120 30" className="w-24 h-7 text-gray-600 dark:text-gray-300 group-hover:text-yellow-600 fill-current transition-colors duration-300">
        {/* Rising Sun */}
        <path d="M5 24 C5 15, 25 15, 25 24" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <line x1="15" y1="12" x2="15" y2="5" stroke="currentColor" strokeWidth="2" />
        <line x1="8" y1="15" x2="3" y2="9" stroke="currentColor" strokeWidth="1.5" />
        <line x1="22" y1="15" x2="27" y2="9" stroke="currentColor" strokeWidth="1.5" />
        <text x="32" y="20" className="font-sans font-black tracking-wider text-[11px] fill-current">BIRLA GROUP</text>
      </svg>
    )
  }
];

export default function ClientLogos() {
  return (
    <div className="w-full flex relative overflow-hidden pointer-events-none">
      {/* Dynamic double-marquee for infinite scrolling loop */}
      <div className="flex gap-16 items-center whitespace-nowrap animate-marquee py-4 shrink-0">
        {CLIENT_LOGOS.concat(CLIENT_LOGOS).map((client, idx) => (
          <div
            key={idx}
            className="group flex items-center justify-center bg-white/45 dark:bg-[#111827]/30 border border-gray-200 dark:border-white/5 px-6 py-3.5 rounded-2xl hover:border-gray-300 dark:hover:border-white/10 hover:bg-white/55 dark:hover:bg-[#111827]/60 pointer-events-auto transition-all duration-300 shadow-sm dark:shadow-lg backdrop-blur-sm"
          >
            {client.logo}
          </div>
        ))}
      </div>
    </div>
  );
}
