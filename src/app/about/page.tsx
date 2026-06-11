'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, UserCheck, CheckCircle2, Users, BookOpen } from 'lucide-react';
import Timeline from '@/components/Timeline';
import { BRIEF_ABOUT, CORE_VALUES, EXPERT_TEAM, TAX_REGISTRATIONS } from '@/data/profileData';

export default function AboutPage() {
  return (
    <main className="flex-1 bg-[#0B0F19] pt-28 pb-24 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      {/* Page-specific background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12] pointer-events-none"
        style={{ backgroundImage: 'url("/about_us_bg.png")' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#111827]/70 border border-white/10 px-3 py-1 rounded-full mb-4"
          >
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-[10px] sm:text-xs font-mono font-medium text-gray-300 tracking-wider">
              WHO WE ARE
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-4xl sm:text-5xl font-black tracking-tight mb-4"
          >
            About Siva Sai Engineering
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            A premier industrial turbine overhauling enterprise delivering precision, speed, and safety compliance across India and overseas.
          </motion.p>
        </div>

        {/* Corporate Profile Letter & Values */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center gap-2 text-secondary font-mono text-xs tracking-widest uppercase">
              <BookOpen className="w-4 h-4" />
              <span>Corporate Profile</span>
            </div>
            <h2 className="text-white font-extrabold text-3xl sm:text-4xl leading-tight">
              Over Two Decades of Engineering Dedication
            </h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed whitespace-pre-line">
              {BRIEF_ABOUT}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {CORE_VALUES.map((val) => (
                <div key={val.title} className="glass-panel p-5 rounded-xl flex flex-col gap-2 border border-white/5">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    {val.title}
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Founder and Partner Spotlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex h-full flex-col gap-6"
          >
            {EXPERT_TEAM.slice(0, 2).map((member, index) => (
              <div key={member.name} className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5 relative overflow-hidden w-full flex flex-col justify-between">
                <div className="absolute top-0 right-0 bg-primary/20 border-b border-l border-white/5 px-3 py-1.5 text-[10px] text-accent font-mono uppercase tracking-wider rounded-bl-xl">
                  {index === 0 ? 'Founder Spotlight' : 'Partner Spotlight'}
                </div>

                <div className="flex flex-col gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/15 border border-secondary/30 flex items-center justify-center shadow-lg">
                    <UserCheck className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">{member.name}</h3>
                    <span className="text-xs text-accent font-mono font-medium block mt-1">{member.role}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                    {member.details}
                  </p>
                </div>
              </div>
            ))}

            <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5 text-[10px] sm:text-xs text-gray-500 font-mono leading-relaxed">
              <div>Registered Office: Vijayawada, AP</div>
              <div>Founding Year: March 2011</div>
              <div>EPF Est ID: {TAX_REGISTRATIONS.epf}</div>
              <div>ESI Code: {TAX_REGISTRATIONS.esi}</div>
              <div className="text-secondary font-semibold mt-1">{TAX_REGISTRATIONS.udyam}</div>
            </div>
          </motion.div>
        </section>

        {/* Advisory Team */}
        <section className="border-t border-white/5 pt-20 mb-24">
          <div className="text-center mb-16">
            <span className="text-xs text-secondary font-mono tracking-widest uppercase block mb-1">
              Advisory Counsel
            </span>
            <h2 className="text-white font-bold text-2xl md:text-3xl flex items-center justify-center gap-2">
              <Users className="w-6 h-6 text-accent" />
              Expert Power Engineers
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto leading-relaxed mt-2">
              Our core Advisory and service managers bring a combined experience of over 100 years across BHEL and Siemens utility turbine commissioning.
            </p>
          </div>

          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-4 md:pb-0 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full -mx-4 px-4 md:mx-0 md:px-0">
            {EXPERT_TEAM.slice(2).map((member) => (
              <div key={member.name} className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/5 flex flex-col justify-between w-[290px] shrink-0 md:w-auto md:shrink">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-mono tracking-wider uppercase border ${
                      member.background === 'Siemens'
                        ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                        : 'bg-orange-500/10 border-orange-500/20 text-orange-400'
                    }`}>
                      {member.background} Background
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono font-semibold">{member.experience}</span>
                  </div>
                  <h4 className="text-white font-bold text-base mt-2">{member.name}</h4>
                  <span className="text-xs text-secondary font-mono font-medium">{member.role}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed border-t border-white/5 pt-4 mt-4">
                  {member.details}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Journey */}
        <section className="border-t border-white/5 pt-20">
          <div className="text-center mb-16">
            <span className="text-xs text-secondary font-mono tracking-widest uppercase block mb-1">
              Our Journey
            </span>
            <h2 className="text-white font-bold text-3xl">Corporate Timeline</h2>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto leading-relaxed mt-2">
              Tracing the engineering roadmap of SSES from 1998 technician foundations to international turbine maintenance operations.
            </p>
          </div>
          <Timeline />
        </section>

      </div>
    </main>
  );
}
