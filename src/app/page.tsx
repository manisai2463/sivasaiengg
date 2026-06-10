'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Shield,
  Factory,
  Settings,
  ArrowUp,
  MessageSquare,
  Award,
  UserCheck
} from 'lucide-react';

// Components
import TurbineCanvas from '@/components/TurbineCanvas';
import ClientLogos from '@/components/ClientLogos';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Container */}
      <main className="flex-1 bg-[#0B0F19] pt-28">
        
        {/* 2. Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 md:py-24 border-b border-white/5">
          {/* Turbine background photo with dark overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.18] mix-blend-luminosity pointer-events-none"
            style={{ backgroundImage: 'url("/turbine_hero_bg.png")' }}
          />
          {/* Futuristic grid mesh background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
          
          {/* Gradient blobs */}
          <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left text panel */}
              <div className="lg:col-span-7 flex flex-col gap-6 text-left">
                {/* Micro branding badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 bg-[#111827]/70 border border-white/10 px-3 py-1.5 rounded-full self-start"
                >
                  <Shield className="w-4 h-4 text-accent animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-mono font-medium text-gray-300 tracking-wider">
                    INDIA&apos;S HIGHEST TURBINE EXPERIENCE
                  </span>
                </motion.div>

                {/* H1 Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-white text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none"
                >
                  Empowering Progress.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                    Energizing Tomorrow.
                  </span>
                </motion.h2>

                {/* Subtext description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl"
                >
                  Erection, Commissioning, and Major Overhauling of Steam Turbines, Gas Turbines, and Generators up to 1000 MW. Trust nuclear-grade precision for your captive and utility assets.
                </motion.p>

                {/* Call-to-actions buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="flex flex-wrap gap-4 mt-2"
                >
                  <Link
                    href="/services"
                    className="bg-primary hover:bg-primary/95 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-300 border border-secondary/20 shadow-[0_0_15px_rgba(0,87,184,0.3)] hover:shadow-[0_0_20px_rgba(0,180,216,0.5)] cursor-pointer shimmer-btn flex items-center gap-1.5"
                  >
                    Explore Services
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-white/5 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl text-sm border border-white/10 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    Contact Engineers
                  </Link>
                </motion.div>

                {/* Animated Stats banner */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 border-t border-white/5 pt-8"
                >
                  {[
                    { val: '15+', label: 'Years Experience' },
                    { val: '120+', label: 'Projects Completed' },
                    { val: '25k+', label: 'MW Served' },
                    { val: '40+', label: 'Heavy Clients' }
                  ].map((stat, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <span className="text-2xl sm:text-3xl font-black text-secondary font-mono leading-none tracking-tight">
                        {stat.val}
                      </span>
                      <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right rotating Turbine graphics */}
              <div className="lg:col-span-5 flex justify-center relative">
                {/* Background glowing rings */}
                <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-primary/20 rounded-full blur-[80px] -z-10 animate-pulse" />
                
                {/* 3D spinning gear wireframe graphic */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center p-6 bg-slate-900/30 rounded-full border border-white/5 backdrop-blur-sm shadow-2xl">
                  {/* Outer gear */}
                  <div className="absolute inset-0 border-2 border-dashed border-secondary/35 rounded-full animate-spin-slow" />
                  {/* Mid ring */}
                  <div className="absolute inset-6 border border-slate-700/50 rounded-full flex items-center justify-center">
                    {/* Inner rotor */}
                    <div className="relative w-40 h-40 border border-accent/30 rounded-full flex items-center justify-center bg-[#070b13]/60 shadow-[inset_0_0_20px_rgba(0,180,216,0.2)]">
                      <Settings className="w-20 h-20 text-accent animate-spin-slow" />
                      <div className="absolute inset-0 border-t-2 border-t-secondary rounded-full animate-spin" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Continuous Marquee scrolling clients */}
        <section className="py-12 bg-[#060911] overflow-hidden border-b border-white/5 relative">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.06] pointer-events-none"
            style={{ backgroundImage: 'url("/client_bg.png")' }}
          />
          <div className="flex flex-col gap-4 relative z-10">
            <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase text-center block mb-2">
              Trusted by Leading Corporate Entities & Outage Managers
            </span>
            <ClientLogos />
          </div>
        </section>

        {/* 4. Modular Summary Sections for Navigation */}
        
        {/* About Summary Block */}
        <section className="py-20 relative border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs text-secondary font-mono tracking-widest uppercase block">Corporate Profile</span>
                <h3 className="text-white font-extrabold text-3xl sm:text-4xl">
                  Over Two Decades of Engineering Dedication
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  Siva Sai Engineering Services (SSES) is a premier industrial engineering and turbine services company. Established in 2011 by Mr. M. Rajendra Prasad, an engineering specialist with over 28 years of power plant experience, SSES has completed over 120 prestigious projects across India.
                </p>
                <div>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-secondary hover:text-white font-semibold transition-all duration-200"
                  >
                    <span>Read Our Core Story & Advisory Council</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="glass-panel p-6 rounded-2xl border border-white/5">
                  <h4 className="text-white font-bold mb-3 font-mono text-sm">EXPERT TEAM CREDENTIALS</h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    Our core advisory counsel comprises ex-BHEL & ex-Siemens steam path engineers with a combined outage experience exceeding 100 years.
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white font-semibold py-2 px-4 rounded-xl text-xs border border-white/10 transition-colors w-full"
                  >
                    Meet the Engineers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Summary Block */}
        <section className="py-20 bg-[#080d17]/40 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="glass-panel p-6 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-2 mb-3">
                    <Factory className="w-5 h-5 text-accent" />
                    <h4 className="text-white font-bold font-mono text-sm">UTILITY AND CAPTIVE SERVICES</h4>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    Complete overhauling, parts replacements, rotor alignment checks, bearing repairs and power piping erection from 1 MW up to 1000 MW.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center bg-primary hover:bg-primary/95 text-white font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors w-full"
                  >
                    View Services Directory
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs text-secondary font-mono tracking-widest uppercase block">Our Capabilities</span>
                <h3 className="text-white font-extrabold text-3xl sm:text-4xl">
                  Steam & Gas Turbine Service Lines
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  We specialize in the leveling, centering, and major overhauling of high-pressure cylinders, LP cylinders casing box-ups, generator rotor threading, and emergency mechanical troubleshooting.
                </p>
                <div>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-secondary hover:text-white font-semibold transition-all duration-200"
                  >
                    <span>Check Out Our Service Sectors</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Simulator Section */}
        <section className="py-20 relative border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <span className="text-xs text-secondary font-mono tracking-widest uppercase block mb-1">Rotor Flow Simulator</span>
              <h3 className="text-white font-bold text-3xl">Interactive Turbine Deck</h3>
              <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto leading-relaxed mt-2">
                Experience physical power output calculation by varying rotor angular momentum and steam pressure.
              </p>
            </div>
            <TurbineCanvas />
          </div>
        </section>

        {/* Projects & Map Summary Block */}
        <section className="py-20 bg-[#080d17]/40 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs text-secondary font-mono tracking-widest uppercase block">Work Portfolio</span>
                <h3 className="text-white font-extrabold text-3xl sm:text-4xl">
                  120+ Installations Across India
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  From 1000MW Kudankulam LP cylinder overhauls to AMNS Hazira SST300 overhauls and JSW Torngallu alignment fixes. Explore our geographical layout on the interactive map.
                </p>
                <div>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-1.5 text-secondary hover:text-white font-semibold transition-all duration-200"
                  >
                    <span>Launch Projects Map & Case Studies</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="glass-panel p-6 rounded-2xl border border-white/5">
                  <h4 className="text-white font-bold mb-3 font-mono text-sm">INTERACTIVE PROJECT PINMAP</h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    Explore our regional presence and outage records by clicking on states in the geographical India map outline.
                  </p>
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white font-semibold py-2 px-4 rounded-xl text-xs border border-white/10 transition-colors w-full"
                  >
                    Open Interactive Map
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us & Safety Summary Block */}
        <section className="py-20 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
                  <div className="flex gap-2.5 items-center text-xs font-mono text-gray-400">
                    <Award className="w-4 h-4 text-accent shrink-0" />
                    <span>Udyam Registered MSME Enterprise</span>
                  </div>
                  <div className="flex gap-2.5 items-center text-xs font-mono text-gray-400">
                    <UserCheck className="w-4 h-4 text-secondary shrink-0" />
                    <span>Ex-BHEL & Ex-Siemens Commissioning Crew</span>
                  </div>
                  <div className="flex gap-2.5 items-center text-xs font-mono text-gray-400">
                    <Shield className="w-4 h-4 text-secondary shrink-0" />
                    <span>Zero accidents over 120 major outages</span>
                  </div>
                  <Link
                    href="/why-choose-us"
                    className="inline-flex items-center justify-center bg-primary hover:bg-primary/95 text-white font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors w-full mt-2"
                  >
                    View Safety Certifications
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs text-secondary font-mono tracking-widest uppercase block">Our Standards</span>
                <h3 className="text-white font-extrabold text-3xl sm:text-4xl">
                  Nuclear-Grade Safety Standards
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  Operating in Kudankulam radiation-controlled zones has built a highly disciplined safety mindset. We enforce this strict quality culture on every site we operate.
                </p>
                <div>
                  <Link
                    href="/why-choose-us"
                    className="inline-flex items-center gap-1.5 text-secondary hover:text-white font-semibold transition-all duration-200"
                  >
                    <span>Read Safety Compliance Documents</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Summary Block */}
        <section className="py-20 bg-[#080d17]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-2xl mx-auto">
            <span className="text-xs text-secondary font-mono tracking-widest uppercase block mb-1">Get In Touch</span>
            <h3 className="text-white font-extrabold text-3xl mb-4">
              Need Expert Turbine Engineering?
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-8">
              Submit your project scope, repair specifications or outage schedules. Our response team will revert with consultation and capabilities within 24 hours.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/95 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-300 border border-secondary/20 shadow-[0_0_15px_rgba(0,87,184,0.3)] hover:shadow-[0_0_20px_rgba(0,180,216,0.5)] cursor-pointer"
              >
                Inquire Now
              </Link>
              <Link
                href="/contact"
                className="bg-white/5 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl text-sm border border-white/10 transition-colors"
              >
                View Offices Map
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Floating Buttons Panel */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Scroll to top */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-11 h-11 rounded-full bg-[#111827]/85 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#1f2937]/90 transition-all duration-300 shadow-xl cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5 text-secondary" />
          </button>
        )}

        {/* Floating Inquiry trigger */}
        <Link
          href="/contact"
          className="w-11 h-11 rounded-full bg-primary border border-secondary/35 flex items-center justify-center text-white shadow-2xl hover:bg-primary/95 transition-all duration-300 animate-pulse cursor-pointer"
          aria-label="Contact Support"
        >
          <MessageSquare className="w-5 h-5 text-accent" />
        </Link>
      </div>
    </>
  );
}
