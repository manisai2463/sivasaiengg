'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Flame, Network, ShieldCheck, Globe } from 'lucide-react';
import { COMPANY_HISTORY } from '@/data/profileData';

const icons = [Briefcase, Building2, ShieldCheck, Flame, Network, Globe];

export default function Timeline() {
  return (
    <div className="relative">
      {/* Central line */}
      <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent -translate-x-1/2 hidden md:block" />
      <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent -translate-x-1/2 md:hidden" />

      <div className="space-y-12">
        {COMPANY_HISTORY.map((item, index) => {
          const Icon = icons[index % icons.length];
          const isEven = index % 2 === 0;

          return (
            <div
              key={item.year}
              className={`flex flex-col md:flex-row items-stretch ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Left/Right empty column for alignment */}
              <div className="w-full md:w-1/2" />

              {/* Central icon indicator */}
              <div className="relative z-10 flex items-center justify-center shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#111827] border-2 border-secondary shadow-[0_0_15px_rgba(0,180,216,0.3)] mx-6 md:mx-0 my-4 md:my-0 self-start md:self-center">
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>

              {/* Content Card */}
              <div className="w-full md:w-1/2 px-6 md:px-10 flex">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl relative w-full flex flex-col justify-between"
                >
                  {/* Decorative glowing marker */}
                  <div className="absolute top-6 -left-2 w-4 h-4 bg-secondary rotate-45 rounded-sm border-l border-b border-white/5 md:hidden" />
                  
                  {isEven ? (
                    <div className="absolute top-1/2 -left-2 w-4 h-4 bg-secondary rotate-45 rounded-sm border-l border-b border-white/5 hidden md:block -translate-y-1/2" />
                  ) : (
                    <div className="absolute top-1/2 -right-2 w-4 h-4 bg-secondary rotate-45 rounded-sm border-r border-t border-white/5 hidden md:block -translate-y-1/2" />
                  )}

                  <div>
                    <span className="inline-block text-accent font-mono font-bold text-lg md:text-xl tracking-wider mb-2 glow-text-yellow">
                      {item.year}
                    </span>
                    <h3 className="text-white font-bold text-lg md:text-xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
