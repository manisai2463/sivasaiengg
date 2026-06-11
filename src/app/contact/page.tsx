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
            className="lg:col-span-5 flex flex-col"
          >
            {/* Contacts Directory */}
            <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/5 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-white font-bold text-base border-b border-white/5 pb-2.5 font-mono tracking-wide">
                  SSES Directory
                </h3>

                <div className="space-y-4 mt-4">
                  {/* Phones */}
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Phone className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <div className="flex flex-col text-xs sm:text-sm">
                      <span className="text-gray-500 font-mono text-[9px] uppercase">Phone Contacts</span>
                      {PHONE_NUMBERS.map(phone => (
                        <a key={phone} href={`tel:${phone.replace(/\s+/g, '')}`} className="text-gray-300 hover:text-white transition-colors mt-0.5">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Emails */}
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Mail className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <div className="flex flex-col text-xs sm:text-sm">
                      <span className="text-gray-500 font-mono text-[9px] uppercase">Emails</span>
                      {EMAILS.map(email => (
                        <a key={email} href={`mailto:${email}`} className="text-gray-300 hover:text-white transition-colors mt-0.5 break-all">
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Head Office AP */}
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <div className="flex flex-col text-xs sm:text-sm leading-normal">
                      <span className="text-gray-500 font-mono text-[9px] uppercase">Head Office (Vijayawada)</span>
                      <span className="text-gray-300 mt-0.5">{OFFICE_CONTACTS[0].address}</span>
                      <span className="text-[9px] font-mono text-gray-500 mt-0.5">GSTIN: {OFFICE_CONTACTS[0].gstin}</span>
                    </div>
                  </div>

                  {/* Branch Office Surat */}
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <div className="flex flex-col text-xs sm:text-sm leading-normal">
                      <span className="text-gray-500 font-mono text-[9px] uppercase">Surat Branch (Gujarat)</span>
                      <span className="text-gray-300 mt-0.5">{OFFICE_CONTACTS[1].address}</span>
                      <span className="text-[9px] font-mono text-gray-500 mt-0.5">GSTIN: {OFFICE_CONTACTS[1].gstin}</span>
                    </div>
                  </div>

                  {/* Branch Office Kanyakumari */}
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <div className="flex flex-col text-xs sm:text-sm leading-normal">
                      <span className="text-gray-500 font-mono text-[9px] uppercase">Kanyakumari Branch (Tamil Nadu)</span>
                      <span className="text-gray-300 mt-0.5">{OFFICE_CONTACTS[2]?.address}</span>
                      <span className="text-[9px] font-mono text-gray-500 mt-0.5">GSTIN: {OFFICE_CONTACTS[2]?.gstin}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps block inside Directory */}
              <div className="relative rounded-xl border border-white/5 h-40 overflow-hidden shadow-inner my-2">
                <iframe 
                  src="https://maps.google.com/maps?q=16.543546,80.643612&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full opacity-70 hover:opacity-90 transition-opacity"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(30%) contrast(90%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                
                <div className="absolute bottom-2 left-2 right-2 z-10 bg-[#070b13]/90 p-2 rounded-lg border border-white/5 flex justify-between items-center text-[10px]">
                  <div className="flex gap-1.5 items-center">
                    <MapPin className="w-3.5 h-3.5 text-accent animate-bounce shrink-0" />
                    <div>
                      <strong className="text-white block font-mono text-[8px] leading-none mb-0.5">VIJAYAWADA HEAD OFFICE</strong>
                      <span className="text-gray-400 text-[9px] leading-none">Pipula Road, Ajith Singh Nagar</span>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps?q=16.543546312037645,80.64361267802512"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/20 border border-primary/30 text-white font-mono px-2 py-1 rounded hover:bg-primary transition-colors cursor-pointer text-[8px]"
                  >
                    OPEN MAPS
                  </a>
                </div>
              </div>

              <div className="bg-[#0e1424]/60 border border-white/5 p-3 rounded-xl flex items-center gap-2.5 text-[10px] sm:text-xs text-gray-500 leading-relaxed font-mono">
                <Shield className="w-4.5 h-4.5 text-primary shrink-0" />
                <span>GST Registered and EPF/ESI Compliant. Fully certified for nuclear and heavy industry utility plant access.</span>
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
