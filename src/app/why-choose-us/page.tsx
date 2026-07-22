'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Award, UserCheck, Cpu, Gauge } from 'lucide-react';

export default function WhyChooseUsPage() {
  const points = [
    {
      title: 'Experienced Team',
      desc: 'Managed by former BHEL & Siemens personnel with 35+ to 45+ years in utility turbines up to 1000 MW.',
      icon: UserCheck,
      color: 'text-secondary bg-secondary/15 border-secondary/30'
    },
    {
      title: 'Fast Outage Execution',
      desc: 'Outages cost millions. We mobilize emergency crews and dedicated tooling packages inside 24 hours.',
      icon: Gauge,
      color: 'text-accent bg-accent/15 border-accent/30'
    },
    {
      title: 'Safety Certification',
      desc: 'Nuclear station certified radiation-zone technicians adhering strictly to radiological and industrial safety norms.',
      icon: Shield,
      color: 'text-primary bg-primary/15 border-primary/30'
    },
    {
      title: 'Pan-India Operations',
      desc: 'Operational capabilities spanning AP, Tamil Nadu, Gujarat, Odisha, Uttar Pradesh, Jharkhand, Chhattisgarh, and Punjab.',
      icon: Cpu,
      color: 'text-yellow-400 bg-yellow-400/15 border-yellow-400/30'
    },
  ];

  return (
    <main className="flex-1 bg-slate-50 dark:bg-[#0B0F19] pt-28 pb-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      {/* Page-specific background image */}
      <div className="absolute inset-0 opacity-[0.85] dark:opacity-[0.10] pointer-events-none">
        <Image
          src="/whychooseus_bg.png"
          alt="Why Choose Us Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/70 dark:bg-[#111827]/70 border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full mb-4"
          >
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-[10px] sm:text-xs font-mono font-medium text-black dark:text-gray-300 tracking-wider">
              WHY CHOOSE US
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-900 dark:text-white text-4xl sm:text-5xl font-black tracking-tight mb-4"
          >
            Nuclear-Grade Safety Standards
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-black dark:text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            Applying strict nuclear safety culture and mechanical excellence to captive and utility sites nationwide.
          </motion.p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center mb-10 sm:mb-20">
          
          {/* Left Text Detail */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-xs text-secondary font-mono tracking-widest uppercase block">
              Core Credentials
            </span>
            <h2 className="text-gray-900 dark:text-white font-extrabold text-3xl sm:text-4xl leading-tight">
              Uncompromising Quality & Execution Speed
            </h2>
            <p className="text-sm text-black dark:text-gray-400 leading-relaxed">
              Executing turbine overhauls inside reactor buildings (NPCIL Kudankulam & Kakrapar) demands absolute compliance. This high level of diligence guides our work across all industrial, steel, chemical, and cogeneration plants in India.
            </p>
            
            <div className="space-y-4 font-mono text-xs text-black dark:text-gray-500">
              <div className="flex gap-2.5 items-center">
                <Award className="w-4 h-4 text-accent shrink-0" />
                <span>Udyam Registered MSME Enterprise</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <UserCheck className="w-4 h-4 text-secondary shrink-0" />
                <span>Ex-BHEL & Ex-Siemens Commissioning Crew</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Shield className="w-4 h-4 text-secondary shrink-0" />
                <span>Zero accidents over 120 major outages</span>
              </div>
            </div>
          </motion.div>

          {/* Right Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-5"
          >
            {points.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.title} className="glass-panel p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-white/5 flex flex-col gap-3 sm:gap-4">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center border ${item.color}`}>
                    <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-bold text-xs sm:text-sm mb-1 sm:mb-2 leading-tight">{item.title}</h3>
                    <p className="text-[10px] sm:text-xs text-black dark:text-gray-400 leading-normal sm:leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </main>
  );
}
