'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Shield, MessageSquare } from 'lucide-react';
import InquiryForm from '@/components/InquiryForm';
import { OFFICE_CONTACTS, PHONE_NUMBERS, EMAILS } from '@/data/profileData';

export default function ContactPage() {
  return (
    <main className="flex-1 bg-[#0B0F19] pt-28 pb-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      {/* Page-specific background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.10] pointer-events-none"
        style={{ backgroundImage: 'url("/contactus_bg.png")' }}
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
            <MessageSquare className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono font-medium text-gray-300 tracking-wider">
              GET IN TOUCH
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-4xl sm:text-5xl font-black tracking-tight mb-4"
          >
            Connect with our Turbine Experts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            Submit outage specifications or consultation requests. We respond within 24 hours.
          </motion.p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Contacts Directory */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-white font-bold text-lg border-b border-white/5 pb-3 font-mono tracking-wide">
                  SSES Directory
                </h3>

                <div className="space-y-6 mt-6">
                  {/* Phones */}
                  <div className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-accent" />
                    </div>
                    <div className="flex flex-col text-sm">
                      <span className="text-gray-500 font-mono text-[10px] uppercase">Phone Contacts</span>
                      {PHONE_NUMBERS.map(phone => (
                        <a key={phone} href={`tel:${phone.replace(/\s+/g, '')}`} className="text-gray-300 hover:text-white transition-colors mt-0.5">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Emails */}
                  <div className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-accent" />
                    </div>
                    <div className="flex flex-col text-sm">
                      <span className="text-gray-500 font-mono text-[10px] uppercase">Emails</span>
                      {EMAILS.map(email => (
                        <a key={email} href={`mailto:${email}`} className="text-gray-300 hover:text-white transition-colors mt-0.5 break-all">
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Head Office AP */}
                  <div className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-accent" />
                    </div>
                    <div className="flex flex-col text-sm leading-normal">
                      <span className="text-gray-500 font-mono text-[10px] uppercase">Head Office (Vijayawada)</span>
                      <span className="text-gray-300 mt-1">{OFFICE_CONTACTS[0].address}</span>
                      <span className="text-[10px] font-mono text-gray-500 mt-1">GSTIN: {OFFICE_CONTACTS[0].gstin}</span>
                    </div>
                  </div>

                  {/* Branch Office Surat */}
                  <div className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-accent" />
                    </div>
                    <div className="flex flex-col text-sm leading-normal">
                      <span className="text-gray-500 font-mono text-[10px] uppercase">Surat Branch (Gujarat)</span>
                      <span className="text-gray-300 mt-1">{OFFICE_CONTACTS[1].address}</span>
                      <span className="text-[10px] font-mono text-gray-500 mt-1">GSTIN: {OFFICE_CONTACTS[1].gstin}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0e1424]/60 border border-white/5 p-4 rounded-xl flex items-center gap-3 text-xs text-gray-500 leading-relaxed font-mono mt-6">
                <Shield className="w-5 h-5 text-primary shrink-0" />
                <span>GST Registered and EPF/ESI Compliant. Fully certified for nuclear and heavy industry utility plant access.</span>
              </div>
            </div>

            {/* Google Maps link block */}
            <div className="glass-panel p-4 rounded-2xl border border-white/5 h-48 relative overflow-hidden flex flex-col justify-end shadow-xl">
              <div className="absolute inset-0 bg-slate-900 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
              
              <svg className="absolute inset-0 w-full h-full text-slate-800/40" viewBox="0 0 400 200">
                <path d="M 50 150 Q 200 80 350 120" stroke="rgba(0,180,216,0.3)" strokeWidth="1.5" fill="none" />
                <circle cx="50" cy="150" r="3" fill="#FFD60A" />
                <circle cx="350" cy="120" r="3" fill="#00B4D8" />
              </svg>

              <div className="relative z-10 bg-[#070b13]/85 p-3.5 rounded-xl border border-white/5 flex justify-between items-center text-xs">
                <div className="flex gap-2.5 items-center">
                  <MapPin className="w-5 h-5 text-accent animate-bounce" />
                  <div>
                    <strong className="text-white block font-mono text-[10px]">VIJAYAWADA HEADQUARTERS</strong>
                    <span className="text-gray-400">Pipula Road, Ajith Singh Nagar</span>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps?q=16.543546312037645,80.64361267802512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/20 border border-primary/30 text-white font-mono px-3 py-1.5 rounded-lg text-[10px] hover:bg-primary transition-colors cursor-pointer"
                >
                  OPEN MAPS
                </a>
              </div>
            </div>
          </motion.div>

          {/* Inquiry Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex"
          >
            <InquiryForm />
          </motion.div>

        </div>

      </div>
    </main>
  );
}
