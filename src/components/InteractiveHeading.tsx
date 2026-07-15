'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
  { first: 'S', rest: 'IVA' },
  { first: 'S', rest: 'AI' },
  { first: 'E', rest: 'NGINEERING' },
  { first: 'S', rest: 'ERVICES' },
];

export default function InteractiveHeading() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-row flex-wrap items-baseline justify-start h-auto gap-3 sm:gap-4 lg:gap-6 overflow-visible">
      {words.map((word, index) => {
        const isHovered = hoveredIndex === index;
        
        return (
          <motion.div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            layout
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="cursor-default flex items-baseline transition-all duration-300"
            style={{
              filter: isHovered ? 'drop-shadow(0 0 16px rgba(30, 136, 229, 0.4))' : 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))'
            }}
          >
            <motion.span 
              layout 
              className={`text-6xl sm:text-8xl lg:text-[8rem] font-black tracking-tighter transition-all duration-300 leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#1E88E5] to-[#4FC3F7] ${
                isHovered ? 'scale-105' : ''
              }`}
            >
              {word.first}
            </motion.span>
            <AnimatePresence mode="wait">
              {isHovered && (
                <motion.span
                  key="rest"
                  layout
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 'auto', opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7FA] overflow-hidden whitespace-nowrap ml-1 uppercase"
                >
                  {word.rest}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
