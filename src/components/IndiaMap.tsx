'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Info, CheckCircle2, Factory } from 'lucide-react';
import { MAP_STATES_DATA } from '@/data/profileData';
import { INDIA_STATE_PATHS } from './IndiaMapPaths';

interface Pin {
  id: string;
  name: string;
  stateKey: string;
  x: number; // percentage from left
  y: number; // percentage from top
  capacity: string;
  type: string;
}

const projectPins: Pin[] = [
  { id: 'kudankulam', name: 'Kudankulam Nuclear Plant', stateKey: 'IN-TN', x: 48, y: 88, capacity: '1000 MWe', type: 'Nuclear' },
  { id: 'raichur', name: 'Raichur Thermal Power Station', stateKey: 'IN-KA', x: 43, y: 74, capacity: '210/250 MW', type: 'Utility Thermal' },
  { id: 'hazira', name: 'AMNS Hazira / Reliance', stateKey: 'IN-GJ', x: 30, y: 56, capacity: '19 MW / 6 MW', type: 'Heavy Industry' },
  { id: 'kakrapar', name: 'Kakrapar Atomic Project', stateKey: 'IN-GJ', x: 31, y: 59, capacity: '2x700 MWe', type: 'Nuclear Condenser' },
  { id: 'angul', name: 'NALCO CPP Angul', stateKey: 'IN-OD', x: 66, y: 54, capacity: '120 MW', type: 'Utility Thermal' },
  { id: 'visakhapatnam', name: 'Rain CII Carbon / Laurus Labs', stateKey: 'IN-AP', x: 58, y: 64, capacity: '18 MW / 4.5 MW', type: 'Process & Biotech' },
  { id: 'bellary', name: 'JSW Steel Torngallu / BTPS', stateKey: 'IN-KA', x: 43, y: 76, capacity: '100MW / 500MW', type: 'Steel Captive' },
  { id: 'faridkot', name: 'Sukhbir Agro Biomass Power', stateKey: 'IN-PB', x: 35, y: 23, capacity: '18 MW', type: 'Agro Cogen' },
  { id: 'bijnor', name: 'Dhampur Sugar Mills', stateKey: 'IN-UP', x: 44, y: 26, capacity: '5.5 MW', type: 'Sugar Cogen' },
  { id: 'raipur', name: 'SBPIL Raipur', stateKey: 'IN-CT', x: 56, y: 52, capacity: '30 MW', type: 'Process Cogen' },
  { id: 'chaliyama', name: 'Rungta Mines Chaliyama', stateKey: 'IN-JH', x: 62, y: 48, capacity: '2x40 MW', type: 'Steel Captive' },
];

const keyToSvgId: Record<string, string> = {
  "IN-AP": "ap",
  "IN-TN": "tn",
  "IN-KA": "ka",
  "IN-GJ": "gj",
  "IN-OD": "or",
  "IN-CT": "ct",
  "IN-UP": "up",
  "IN-JH": "jh",
  "IN-PB": "pb",
  "IN-MH": "mh"
};

const svgIdToKey = Object.fromEntries(
  Object.entries(keyToSvgId).map(([k, v]) => [v, k])
);

export default function IndiaMap() {
  const [selectedStateKey, setSelectedStateKey] = useState<string>('IN-TN');

  const selectedState = MAP_STATES_DATA[selectedStateKey];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 items-center">
      {/* Map Column */}
      <div className="lg:col-span-7 flex flex-col items-center relative">
        <div className="text-center mb-4 md:mb-6">
          <p className="text-xs text-secondary font-mono tracking-widest uppercase mb-1">Interactive Project Map</p>
          <h3 className="text-gray-900 dark:text-white font-bold text-lg md:text-2xl">Geographic Footprint across India</h3>
        </div>

        {/* Styled Container for Map */}
        <div className="glass-panel w-full max-w-[260px] md:max-w-[550px] rounded-3xl p-3 md:p-6 overflow-hidden">
          {/* Relative wrapper with no padding for SVG and Pins */}
          <div className="relative w-full">
            {/* Futuristic grid mesh background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
            
            {/* Detailed SVG Map of India */}
            <svg
              className="w-full h-auto select-none block"
              viewBox="0 0 612 696"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {INDIA_STATE_PATHS.map((state) => {
                const stateKey = svgIdToKey[state.id];
                const isActive = !!stateKey;
                const isSelected = selectedStateKey === stateKey;
                
                const fillClass = isActive
                  ? (isSelected ? 'fill-secondary/35' : 'fill-primary/20')
                  : 'fill-slate-200 dark:fill-slate-800/45';
                  
                const strokeClass = isActive
                  ? (isSelected ? 'stroke-accent' : 'stroke-secondary/65')
                  : 'stroke-black/60 dark:stroke-white/15';
                  
                const strokeWidth = isSelected ? 2 : 0.5;
                
                return (
                  <path
                    key={state.id}
                    d={state.d}
                    strokeWidth={strokeWidth}
                    className={`${fillClass} ${strokeClass} state-path transition-all duration-300 ${isActive ? 'active-state cursor-pointer' : ''} ${isSelected ? 'selected-state' : ''}`}
                    onClick={() => {
                      if (isActive) {
                        setSelectedStateKey(stateKey);
                      }
                    }}
                  />
                );
              })}
            </svg>

            {/* Interactive Glowing Pins */}
            {projectPins.map((pin) => {
              const isSelected = selectedStateKey === pin.stateKey;
              return (
                <div
                  key={pin.id}
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group p-3 flex items-center justify-center"
                  onClick={() => setSelectedStateKey(pin.stateKey)}
                >
                  {/* Outer pulsing ring */}
                  <div
                    className={`absolute inset-1 rounded-full transition-all duration-300 ${
                      isSelected
                        ? 'bg-secondary/35 animate-ping'
                        : 'bg-primary/20 group-hover:bg-primary/45 group-hover:animate-ping'
                    }`}
                  />
                  
                  {/* Core dot */}
                  <div
                    className={`w-3.5 h-3.5 rounded-full border border-white/20 transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.4)] relative z-10 ${
                      isSelected ? 'bg-accent' : 'bg-primary group-hover:bg-secondary'
                    }`}
                  />

                  {/* Micro tooltip */}
                  <div className="absolute left-1/2 bottom-full -translate-x-1/2 mb-2 bg-gray-900 dark:bg-[#111827] border border-gray-700 dark:border-white/10 px-2 py-0.5 rounded text-[10px] text-white font-mono opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap shadow-xl">
                    {pin.name} ({pin.capacity})
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Map Helper note */}
        <div className="flex items-center gap-2 mt-2 md:mt-4 text-[10px] md:text-xs text-black font-mono">
          <Info className="w-3.5 h-3.5 text-secondary animate-pulse" />
          <span>Click highlighted states on the map to filter projects</span>
        </div>
      </div>

      {/* Details Column */}
      <div className="lg:col-span-5 flex flex-col h-full justify-center">
        {/* State Selection Tabs */}
        <div className="flex overflow-x-auto md:flex-wrap gap-2 mb-4 md:mb-6 pb-2 md:pb-0 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full">
          {Object.keys(MAP_STATES_DATA).map((stateKey) => (
            <button
              key={stateKey}
              onClick={() => setSelectedStateKey(stateKey)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                selectedStateKey === stateKey
                  ? 'bg-secondary/10 border-secondary text-secondary shadow-[0_0_10px_rgba(0,180,216,0.1)]'
                  : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/5 text-black dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/10'
              }`}
            >
              {MAP_STATES_DATA[stateKey].stateName}
            </button>
          ))}
        </div>

        {/* State Details Panel */}
        <AnimatePresence mode="wait">
          {selectedState && (
            <motion.div
              key={selectedStateKey}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="glass-panel p-4 md:p-8 rounded-3xl border border-gray-200 dark:border-white/10 relative overflow-hidden"
            >
              {/* Decorative side accent bar */}
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-primary to-secondary" />

              <div className="flex justify-between items-start mb-4 md:mb-6">
                <div>
                  <span className="text-[10px] text-secondary font-mono tracking-widest uppercase">Project Hub</span>
                  <h4 className="text-gray-900 dark:text-white font-bold text-lg md:text-2xl mt-0.5">{selectedState.stateName}</h4>
                </div>
                <div className="bg-primary/20 border border-primary/30 rounded-xl px-3 py-1.5 text-center shadow-lg">
                  <span className="block text-[9px] text-black dark:text-gray-400 uppercase font-mono tracking-wider">Completed</span>
                  <span className="text-base font-extrabold text-accent font-mono">{selectedState.projectsCount}+ Projects</span>
                </div>
              </div>

              <div className="mb-4 md:mb-6">
                <h5 className="text-black dark:text-gray-300 font-semibold text-xs md:text-sm mb-2 md:mb-3 flex items-center gap-2">
                  <Factory className="w-3.5 h-3.5 text-secondary" />
                  Key Turbine Installations & Overhauls
                </h5>
                <ul className="space-y-1.5 md:space-y-3">
                  {selectedState.keyProjects.map((project, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-xs md:text-sm text-black dark:text-gray-400 leading-normal">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                      <span>{project}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden lg:flex bg-gray-100 dark:bg-[#0e1424]/60 border border-gray-200 dark:border-white/5 p-4 rounded-xl items-center gap-3 text-xs text-black dark:text-gray-500 leading-relaxed font-mono">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Pan-India turbine mobilizing capability, bringing ex-BHEL & ex-Siemens tools and expert technicians directly to site.</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
