'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Factory, Settings, CheckCircle2, Cpu } from 'lucide-react';
import { SERVICES_LIST, INDUSTRIES_SERVED } from '@/data/profileData';

export default function ServicesPage() {
  return (
    <main className="flex-1 bg-[#0B0F19] pt-28 pb-24 relative overflow-hidden">
      {/* Background visual decorations */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      {/* Page-specific background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12] pointer-events-none"
        style={{ backgroundImage: 'url("/services_bg.png")' }}
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
            <Settings className="w-4 h-4 text-accent animate-spin-slow" />
            <span className="text-[10px] sm:text-xs font-mono font-medium text-gray-300 tracking-wider">
              OUR CAPABILITIES
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-4xl sm:text-5xl font-black tracking-tight mb-4"
          >
            Turbine & Generator Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            High-precision mechanical engineering, alignment checking, and complete overhauls for utility and captive power plants.
          </motion.p>
        </div>

        {/* Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {SERVICES_LIST.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass-panel glass-panel-hover p-4 md:p-6 rounded-2xl border border-white/5 flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                {/* Icon mapping indicator */}
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 md:mb-5 shadow-md">
                  {idx % 3 === 0 ? (
                    <Gauge className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                  ) : idx % 3 === 1 ? (
                    <Factory className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  ) : (
                    <Settings className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  )}
                </div>

                <h3 className="text-white font-bold text-base md:text-lg mb-1.5 md:mb-3">{service.title}</h3>
                <p className="text-[11px] md:text-xs text-gray-400 mb-4 md:mb-6 leading-relaxed">{service.description}</p>
              </div>

              <ul className="space-y-2 md:space-y-2.5 border-t border-white/5 pt-3.5 md:pt-5 text-[11px] md:text-xs text-gray-500 leading-normal">
                {service.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex gap-2 items-start">
                    <CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5 text-accent mt-0.5 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </section>

        {/* Sectors We Serve */}
        <section className="border-t border-white/5 pt-20">
          <div className="text-center mb-16">
            <span className="text-xs text-secondary font-mono tracking-widest uppercase block mb-1">
              Sectors
            </span>
            <h2 className="text-white font-bold text-3xl flex items-center justify-center gap-2">
              <Cpu className="w-6 h-6 text-accent" />
              Industries We Serve
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto leading-relaxed mt-2">
              Delivering high-reliability service support to core infrastructure, process plants, and power generators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_SERVED.map((ind, idx) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-panel p-4 md:p-6 rounded-2xl border border-white/5 flex flex-col justify-between relative overflow-hidden"
              >
                <div className="flex flex-col gap-2 md:gap-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white font-bold text-sm md:text-base tracking-wide">{ind.name}</h3>
                    <Factory className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-[11px] md:text-xs text-gray-400 leading-relaxed">
                    {ind.description}
                  </p>
                </div>
                
                <div className="border-t border-white/5 pt-3 md:pt-4 mt-4 md:mt-6 flex flex-wrap gap-1.5 items-center">
                  <span className="text-[9px] text-gray-500 font-mono uppercase tracking-wider mr-1">
                    Clients Served:
                  </span>
                  {ind.clients.map((client) => (
                    <span key={client} className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] text-gray-300 font-mono">
                      {client}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
