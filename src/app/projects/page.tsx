'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import IndiaMap from '@/components/IndiaMap';
import ProjectShowcase from '@/components/ProjectShowcase';

export default function ProjectsPage() {
  return (
    <main className="flex-1 bg-slate-50 dark:bg-[#0B0F19] pt-28 pb-24 relative overflow-hidden">
      {/* Background visual decorations */}
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      {/* Page-specific background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.85] dark:opacity-[0.10] pointer-events-none"
        style={{ backgroundImage: 'url("/projects_bg.png")' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/70 dark:bg-[#111827]/70 border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full mb-4"
          >
            <Briefcase className="w-4 h-4 text-accent" />
            <span className="text-[10px] sm:text-xs font-mono font-medium text-black dark:text-gray-300 tracking-wider">
              OUR WORK PORTFOLIO
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-900 dark:text-white text-4xl sm:text-5xl font-black tracking-tight mb-4"
          >
            Prestigious Completed Installations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-black dark:text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            Explore our geographic footprint across major Indian states and our verified project completion directory.
          </motion.p>
        </div>

        {/* Interactive Map */}
        <section className="mb-24">
          <IndiaMap />
        </section>

        {/* Projects Showcase */}
        <section className="border-t border-gray-200 dark:border-white/5 pt-20">
          <div className="text-center mb-16">
            <span className="text-xs text-secondary font-mono tracking-widest uppercase block mb-1">
              Project List
            </span>
            <h2 className="text-gray-900 dark:text-white font-bold text-3xl">Verified Outages & Repairs</h2>
            <p className="text-xs sm:text-sm text-black dark:text-gray-500 max-w-md mx-auto leading-relaxed mt-2">
              Filter by industry type or use the search bar to locate specific installations.
            </p>
          </div>
          <ProjectShowcase />
        </section>

      </div>
    </main>
  );
}
