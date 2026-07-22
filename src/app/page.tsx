'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
import InteractiveHeading from '@/components/InteractiveHeading';

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
      <main className="flex-1 bg-slate-50 dark:bg-[#0B0F19] transition-colors duration-300">
        
        {/* 2. Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 md:py-24 border-b border-gray-200 dark:border-white/5">
          {/* Turbine background photo with dark overlay */}
          <div className="absolute inset-0 opacity-[0.85] dark:opacity-[0.18] pointer-events-none">
            <Image
              src="/turbine_hero_bg.png"
              alt="Background Turbine"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          {/* Futuristic grid mesh background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
          
          {/* Gradient blobs */}
          <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-16 md:pt-24">
              {/* Left text panel */}
              <div className="lg:col-span-7 flex flex-col gap-6 text-left">
                {/* Micro branding badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 bg-white/70 dark:bg-[#111827]/70 border border-gray-200 dark:border-white/10 px-3 py-1.5 rounded-full self-start"
                >
                  <Shield className="w-4 h-4 text-accent animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-gray-900 dark:text-gray-300 uppercase">
                    INDIA&apos;S HIGHEST TURBINE EXPERIENCE
                  </span>
                </motion.div>

                {/* H1 Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="mt-2"
                >
                  <InteractiveHeading />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="text-lg sm:text-xl font-bold text-[#F5F7FA] -mt-2 sm:-mt-4"
                >
                  Empowering Progress.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                    Energizing Tomorrow.
                  </span>
                </motion.p>

                {/* Subtext description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-gray-900 dark:text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-semibold"
                >
                  Erection, Commissioning, and Major Overhauling of Steam Turbines, Gas Turbines, and Generators up to 1000 MW. Trust nuclear-grade precision for your captive and utility assets.
                </motion.p>

                {/* Mobile-only Turbine Animation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                  className="lg:hidden flex justify-center relative my-4"
                >
                  <div className="absolute w-60 h-60 bg-primary/20 rounded-full blur-[70px] -z-10 animate-pulse" />
                  <div className="relative w-64 h-64 flex items-center justify-center drop-shadow-[0_0_25px_rgba(0,180,216,0.3)]">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                      <img src="/gear.png" alt="Rotating Gear" className="w-[115%] h-[115%] max-w-none object-contain animate-[spin_15s_linear_infinite]" style={{ willChange: 'transform' }} />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                      <img src="/s.png" alt="SSES Logo S" className="w-[50%] h-[50%] object-contain" style={{ willChange: 'transform' }} />
                    </div>
                  </div>
                </motion.div>

                {/* Call-to-actions buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto"
                >
                  <Link
                    href="/services"
                    className="bg-primary hover:bg-primary/95 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-300 border border-secondary/20 shadow-[0_0_15px_rgba(0,87,184,0.3)] hover:shadow-[0_0_20px_rgba(0,180,216,0.5)] cursor-pointer shimmer-btn flex items-center justify-center gap-1.5 w-full sm:w-auto"
                  >
                    Explore Services
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-slate-200 hover:bg-slate-300 dark:bg-white/10 dark:hover:bg-white/20 text-gray-900 dark:text-white font-semibold px-6 py-3 rounded-xl text-sm border border-gray-300 dark:border-white/10 transition-all cursor-pointer flex items-center justify-center gap-1.5 w-full sm:w-auto shadow-sm dark:shadow-none"
                  >
                    Contact Engineers
                  </Link>
                </motion.div>

                {/* Animated Stats banner */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-gray-300 dark:border-white/10 mt-4"
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
                      <span className="text-[10px] text-gray-900 dark:text-gray-300 font-mono uppercase tracking-wider font-semibold">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right rotating Turbine graphics */}
              <div className="hidden lg:flex lg:col-span-5 justify-center relative">
                {/* Background glowing rings */}
                <div className="absolute w-80 h-80 sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px] bg-primary/20 rounded-full blur-[90px] -z-10 animate-pulse" />
                
                {/* Premium Animated Logo */}
                <div className="relative w-80 h-80 sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] flex items-center justify-center drop-shadow-[0_0_35px_rgba(0,180,216,0.3)]">
                  {/* Outer gear (Rotating) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                    <img 
                      src="/gear.png" 
                      alt="Rotating Gear" 
                      className="w-[115%] h-[115%] max-w-none object-contain animate-[spin_15s_linear_infinite]"
                      style={{ willChange: 'transform' }}
                    />
                  </div>
                  
                  {/* Stationary S (Fixed at Center) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <img 
                      src="/s.png" 
                      alt="SSES Logo S" 
                      className="w-[50%] h-[50%] object-contain" 
                      style={{ willChange: 'transform' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Continuous Marquee scrolling clients */}
        <section className="py-12 bg-slate-100 dark:bg-[#060911] overflow-hidden border-b border-gray-200 dark:border-white/5 relative">
          <div className="absolute inset-0 opacity-[0.85] dark:opacity-[0.06] pointer-events-none">
            <Image
              src="/client_bg.png"
              alt="Client Background"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-4 relative z-10">
            <span className="text-[10px] text-gray-500 dark:text-gray-400 font-mono tracking-widest uppercase text-center block mb-2">
              Trusted by Leading Corporate Entities & Outage Managers
            </span>
            <ClientLogos />
          </div>
        </section>

        {/* 4. Modular Summary Sections for Navigation */}
        
        {/* About Summary Block */}
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-12">
          <div className="absolute inset-0 opacity-[0.85] dark:opacity-[0.18] pointer-events-none z-0">
            <Image
              src="/engineers_at_work_bg.png"
              alt="Engineers at work"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs text-secondary font-mono tracking-widest uppercase block bg-white/60 dark:bg-gray-900/60 backdrop-blur px-3 py-1.5 rounded-lg w-fit shadow-md">Corporate Profile</span>
                <div className="">
                  <h3 className="text-gray-900 dark:text-white font-extrabold text-3xl sm:text-4xl mb-4">
                    Over Two Decades of Engineering Dedication
                  </h3>
                  <p className="text-sm sm:text-base text-gray-900 dark:text-gray-200 leading-relaxed font-semibold">
                    Siva Sai Engineering Services (SSES) is a premier industrial engineering and turbine services company. Established in 2011 by Mr. M. Rajendra Prasad, an engineering specialist with over 28 years of power plant experience, SSES has completed over 120 prestigious projects across India.
                  </p>
                </div>
                <div>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-secondary hover:text-gray-900 dark:hover:text-white font-semibold transition-all duration-200"
                  >
                    <span>Read Our Core Story & Advisory Council</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-white/60 dark:bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/50 dark:border-white/10 shadow-lg">
                  <h4 className="text-gray-900 dark:text-white font-bold mb-3 font-mono text-sm">EXPERT TEAM CREDENTIALS</h4>
                  <p className="text-xs text-gray-900 dark:text-gray-200 leading-relaxed mb-4 font-semibold">
                    Our core advisory counsel comprises ex-BHEL & ex-Siemens steam path engineers with a combined outage experience exceeding 100 years.
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center bg-white hover:bg-gray-50 dark:bg-white/5 dark:hover:bg-white/10 text-gray-900 dark:text-white font-semibold py-2 px-4 rounded-xl text-xs border border-gray-200 dark:border-white/10 transition-colors w-full shadow-sm dark:shadow-none"
                  >
                    Meet the Engineers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Summary Block */}
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-12">
          <div className="absolute inset-0 opacity-[0.85] dark:opacity-[0.18] pointer-events-none z-0">
            <Image
              src="/services_bg.png"
              alt="Services Background"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6 lg:order-2">
                <span className="text-xs text-secondary font-mono tracking-widest uppercase block bg-white/60 dark:bg-gray-900/60 backdrop-blur px-3 py-1.5 rounded-lg w-fit shadow-md">Our Capabilities</span>
                <div className="">
                  <h3 className="text-gray-900 dark:text-white font-extrabold text-3xl sm:text-4xl mb-4">
                    Steam & Gas Turbine Service Lines
                  </h3>
                  <p className="text-sm sm:text-base text-gray-900 dark:text-gray-200 leading-relaxed font-semibold">
                    We specialize in the leveling, centering, and major overhauling of high-pressure cylinders, LP cylinders casing box-ups, generator rotor threading, and emergency mechanical troubleshooting.
                  </p>
                </div>
                <div>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-secondary hover:text-gray-900 dark:hover:text-white font-semibold transition-all duration-200"
                  >
                    <span>Check Out Our Service Sectors</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 lg:order-1">
                <div className="bg-white/60 dark:bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/50 dark:border-white/10 shadow-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Factory className="w-5 h-5 text-accent" />
                    <h4 className="text-gray-900 dark:text-white font-bold font-mono text-sm">UTILITY AND CAPTIVE SERVICES</h4>
                  </div>
                  <p className="text-xs text-gray-900 dark:text-gray-200 leading-relaxed mb-4 font-semibold">
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
            </div>
          </div>
        </section>

        {/* Simulator Section */}
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-12">
          <div className="absolute inset-0 opacity-[0.85] dark:opacity-[0.18] pointer-events-none z-0">
            <Image
              src="/turbine_hero_bg.png"
              alt="Simulator Background"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <span className="text-xs text-secondary font-mono tracking-widest uppercase mb-1 bg-white/60 dark:bg-gray-900/60 backdrop-blur px-3 py-1.5 rounded-lg inline-block shadow-md">Rotor Flow Simulator</span>
              <div className="max-w-2xl mx-auto mt-4">
                <h3 className="text-gray-900 dark:text-white font-bold text-3xl mb-3">Interactive Turbine Deck</h3>
                <p className="text-xs sm:text-sm text-gray-900 dark:text-gray-200 mx-auto leading-relaxed font-semibold">
                  Experience physical power output calculation by varying rotor angular momentum and steam pressure.
                </p>
              </div>
            </div>
            <TurbineCanvas />
          </div>
        </section>

        {/* Projects & Map Summary Block */}
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-12">
          <div className="absolute inset-0 opacity-[0.85] dark:opacity-[0.18] pointer-events-none z-0">
            <Image
              src="/projects_bg.png"
              alt="Projects Background"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs text-secondary font-mono tracking-widest uppercase block bg-white/60 dark:bg-gray-900/60 backdrop-blur px-3 py-1.5 rounded-lg w-fit shadow-md">Work Portfolio</span>
                <div className="">
                  <h3 className="text-gray-900 dark:text-white font-extrabold text-3xl sm:text-4xl mb-4">
                    120+ Installations Across India
                  </h3>
                  <p className="text-sm sm:text-base text-gray-900 dark:text-gray-200 leading-relaxed font-semibold">
                    From 1000MW Kudankulam LP cylinder overhauls to AMNS Hazira SST300 overhauls and JSW Torngallu alignment fixes. Explore our geographical layout on the interactive map.
                  </p>
                </div>
                <div>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-1.5 text-secondary hover:text-gray-900 dark:hover:text-white font-semibold transition-all duration-200"
                  >
                    <span>Launch Projects Map & Case Studies</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-white/60 dark:bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/50 dark:border-white/10 shadow-lg">
                  <h4 className="text-gray-900 dark:text-white font-bold mb-3 font-mono text-sm">INTERACTIVE PROJECT PINMAP</h4>
                  <p className="text-xs text-gray-900 dark:text-gray-200 leading-relaxed mb-4 font-semibold">
                    Explore our regional presence and outage records by clicking on states in the geographical India map outline.
                  </p>
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center bg-white hover:bg-gray-50 dark:bg-white/5 dark:hover:bg-white/10 text-gray-900 dark:text-white font-semibold py-2 px-4 rounded-xl text-xs border border-gray-200 dark:border-white/10 transition-colors w-full shadow-sm dark:shadow-none"
                  >
                    Open Interactive Map
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us & Safety Summary Block */}
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-12">
          <div className="absolute inset-0 opacity-[0.85] dark:opacity-[0.18] pointer-events-none z-0">
            <Image
              src="/whychooseus_bg.png"
              alt="Why Choose Us Background"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6 lg:order-2">
                <span className="text-xs text-secondary font-mono tracking-widest uppercase block bg-white/60 dark:bg-gray-900/60 backdrop-blur px-3 py-1.5 rounded-lg w-fit shadow-md">Our Standards</span>
                <div className="">
                  <h3 className="text-gray-900 dark:text-white font-extrabold text-3xl sm:text-4xl mb-4">
                    Nuclear-Grade Safety Standards
                  </h3>
                  <p className="text-sm sm:text-base text-gray-900 dark:text-gray-200 leading-relaxed font-semibold">
                    Operating in Kudankulam radiation-controlled zones has built a highly disciplined safety mindset. We enforce this strict quality culture on every site we operate.
                  </p>
                </div>
                <div>
                  <Link
                    href="/why-choose-us"
                    className="inline-flex items-center gap-1.5 text-secondary hover:text-gray-900 dark:hover:text-white font-semibold transition-all duration-200"
                  >
                    <span>Read Safety Compliance Documents</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 lg:order-1">
                <div className="bg-white/60 dark:bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/50 dark:border-white/10 shadow-lg space-y-4">
                  <div className="flex gap-2.5 items-center text-xs font-mono font-bold text-gray-900 dark:text-gray-300">
                    <Award className="w-4 h-4 text-accent shrink-0" />
                    <span>Udyam Registered MSME Enterprise</span>
                  </div>
                  <div className="flex gap-2.5 items-center text-xs font-mono font-bold text-gray-900 dark:text-gray-300">
                    <UserCheck className="w-4 h-4 text-secondary shrink-0" />
                    <span>Ex-BHEL & Ex-Siemens Commissioning Crew</span>
                  </div>
                  <div className="flex gap-2.5 items-center text-xs font-mono font-bold text-gray-900 dark:text-gray-300">
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
            </div>
          </div>
        </section>

        {/* Contact Summary Block */}
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-12">
          <div className="absolute inset-0 opacity-[0.85] dark:opacity-[0.18] pointer-events-none z-0">
            <Image
              src="/contactus_bg.png"
              alt="Contact Background"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-2xl mx-auto">
            <span className="text-xs text-secondary font-mono tracking-widest uppercase mb-1 bg-white/60 dark:bg-gray-900/60 backdrop-blur px-3 py-1.5 rounded-lg inline-block shadow-md">Get In Touch</span>
            <div className="mt-4 mb-8 max-w-2xl mx-auto">
              <h3 className="text-gray-900 dark:text-white font-extrabold text-3xl mb-4">
                Need Expert Turbine Engineering?
              </h3>
              <p className="text-sm text-gray-900 dark:text-gray-200 leading-relaxed font-semibold">
                Submit your project scope, repair specifications or outage schedules. Our response team will revert with consultation and capabilities within 24 hours.
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/95 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-300 border border-secondary/20 shadow-[0_0_15px_rgba(0,87,184,0.3)] hover:shadow-[0_0_20px_rgba(0,180,216,0.5)] cursor-pointer"
              >
                Inquire Now
              </Link>
              <Link
                href="/contact"
                className="bg-slate-200 hover:bg-slate-300 dark:bg-white/10 dark:hover:bg-white/20 text-gray-900 dark:text-white font-semibold px-6 py-3 rounded-xl text-sm border border-gray-300 dark:border-white/10 transition-colors shadow-sm dark:shadow-none"
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
            className="w-11 h-11 rounded-full bg-white dark:bg-[#111827]/85 border border-gray-200 dark:border-white/10 flex items-center justify-center text-black dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#1f2937]/90 transition-all duration-300 shadow-xl cursor-pointer"
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
