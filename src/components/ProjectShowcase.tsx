'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Shield, Zap, Briefcase } from 'lucide-react';
import { COMPLETED_PROJECTS } from '@/data/profileData';

type CategoryFilter = 'All' | 'Nuclear & Utility' | 'CPP & Heavy Industry' | 'Cogeneration & Process';

export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = useMemo(() => {
    return COMPLETED_PROJECTS.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        project.clientName.toLowerCase().includes(query) ||
        project.title.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.capacity.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      <div className="glass-panel flex flex-col md:flex-row gap-4 justify-between items-center p-4 rounded-2xl">
        {/* Categories Grid */}
        <div className="flex overflow-x-auto md:flex-wrap gap-2 w-full md:w-auto pb-2 md:pb-0 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {(['All', 'Nuclear & Utility', 'CPP & Heavy Industry', 'Cogeneration & Process'] as CategoryFilter[]).map(
            (category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide border transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === category
                    ? 'bg-primary border-secondary/35 text-white shadow-lg'
                    : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/5 text-black dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
          <input
            type="text"
            placeholder="Search projects by client, site..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white dark:bg-[#070b13] border border-gray-200 dark:border-white/10 pl-10 pr-4 py-2.5 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-secondary transition-all"
          />
        </div>
      </div>

      {/* Grid count summary */}
      <div className="text-xs text-black font-mono pl-1">
        Showing {filteredProjects.length} of {COMPLETED_PROJECTS.length} verified corporate installations
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="glass-panel glass-panel-hover p-4 md:p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden"
            >
              {/* Badge for nuclear/large-scale */}
              <div className="absolute top-0 right-0 bg-primary/10 border-b border-l border-gray-200 dark:border-white/5 rounded-bl-xl px-2 py-0.5 md:px-3 md:py-1 flex items-center gap-1">
                {project.category === 'Nuclear & Utility' ? (
                  <Shield className="w-2.5 h-2.5 md:w-3 md:h-3 text-accent" />
                ) : (
                  <Zap className="w-2.5 h-2.5 md:w-3 md:h-3 text-secondary" />
                )}
                <span className="text-[9px] md:text-[10px] text-black dark:text-gray-300 font-mono uppercase tracking-wider">{project.capacity}</span>
              </div>

              <div>
                <h4 className="text-gray-900 dark:text-white font-bold text-base md:text-lg mb-1.5 md:mb-2 leading-snug group-hover:text-secondary pr-16 pt-3 md:pt-2">
                  {project.title}
                </h4>
                <p className="text-[11px] md:text-xs text-black dark:text-gray-400 mb-3 md:mb-5 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-2 md:space-y-3 pt-3 md:pt-4 border-t border-gray-200 dark:border-white/5">
                {/* Client detail */}
                <div className="flex gap-2 items-center text-[11px] md:text-xs">
                  <Briefcase className="w-3.5 h-3.5 text-secondary shrink-0" />
                  <span className="text-black dark:text-gray-300 font-medium truncate">{project.clientName}</span>
                </div>

                {/* Location detail */}
                <div className="flex gap-2 items-center text-[11px] md:text-xs">
                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span className="text-black dark:text-gray-400 truncate">{project.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </div>
  );
}
