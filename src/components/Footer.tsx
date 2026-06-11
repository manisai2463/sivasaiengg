'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { COMPANY_NAME, OFFICE_CONTACTS, PHONE_NUMBERS, EMAILS, TAX_REGISTRATIONS } from '@/data/profileData';

export default function Footer() {
  return (
    <footer className="relative bg-[#060911] border-t border-white/5 pt-10 sm:pt-16 pb-6 sm:pb-8 text-gray-400 overflow-hidden">
      {/* Decorative backdrop glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 sm:mb-16">
          {/* Company Intro & Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white rounded-lg p-0.5 overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="SSES Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-base tracking-wider leading-none">SIVA SAI</h3>
                <span className="text-[10px] text-gray-500 font-mono tracking-widest leading-none block mt-1">ENGINEERING SERVICES</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Industrial turbine overhauling & engineering services specializing in 1 MW to 1000 MW steam & gas turbines, generators, and auxiliaries erection.
            </p>
            <div className="flex flex-col gap-2 mt-2 text-xs font-mono text-gray-500">
              <div>PAN: <span className="text-gray-400">{TAX_REGISTRATIONS.pan}</span></div>
              <div>EPF ID: <span className="text-gray-400">{TAX_REGISTRATIONS.epf}</span></div>
              <div>ESI Code: <span className="text-gray-400">{TAX_REGISTRATIONS.esi}</span></div>
              <div className="text-secondary font-semibold">{TAX_REGISTRATIONS.udyam}</div>
            </div>
          </div>

          {/* Quick Links & Core Services wrapper (side-by-side) */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-xs sm:text-sm uppercase tracking-widest border-l-2 border-secondary pl-2.5 mb-3.5 sm:mb-6">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About Us', href: '/about' },
                  { label: 'Services', href: '/services' },
                  { label: 'Projects', href: '/projects' },
                  { label: 'Why Choose Us', href: '/why-choose-us' },
                  { label: 'Contact', href: '/contact' },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all duration-200"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-secondary shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Services */}
            <div>
              <h4 className="text-white font-semibold text-xs sm:text-sm uppercase tracking-widest border-l-2 border-secondary pl-2.5 mb-3.5 sm:mb-6">Our Services</h4>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                {[
                  { name: 'Steam Turbine Services', href: '/services' },
                  { name: 'Gas Turbine Services', href: '/services' },
                  { name: 'Generator Overhauling', href: '/services' },
                  { name: 'Rotor Balancing & Realignment', href: '/services' },
                  { name: 'Shutdown Maintenance', href: '/services' },
                  { name: 'Piping & Condenser Erection', href: '/services' }
                ].map((service) => (
                  <li key={service.name}>
                    <Link href={service.href} className="flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all duration-200">
                      <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="truncate sm:whitespace-normal">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <h4 className="text-white font-semibold text-xs sm:text-sm uppercase tracking-widest border-l-2 border-secondary pl-2.5 mb-3.5 sm:mb-6">Contact Info</h4>
            
            <div className="flex flex-col gap-4 text-xs sm:text-sm">
              {/* Phone & Email side-by-side on mobile and desktop */}
              <div className="flex flex-col gap-4">
                {/* Phone Contacts */}
                <div className="flex gap-2.5 items-start">
                  <Phone className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-gray-500 font-mono text-[9px] uppercase tracking-wider block mb-1">Phone</span>
                    {PHONE_NUMBERS.map(phone => (
                      <a key={phone} href={`tel:${phone.replace(/\s+/g, '')}`} className="text-gray-300 hover:text-white transition-colors leading-tight whitespace-nowrap">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Email Contacts */}
                <div className="flex gap-2.5 items-start">
                  <Mail className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-gray-500 font-mono text-[9px] uppercase tracking-wider block mb-1">Email</span>
                    {EMAILS.slice(0, 2).map(email => (
                      <a key={email} href={`mailto:${email}`} className="text-gray-300 hover:text-white transition-colors leading-tight break-words block" title={email}>
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Address details */}
              <div className="flex gap-2.5 items-start border-t border-white/5 pt-3">
                <MapPin className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                <div className="flex flex-col gap-2.5 text-[11px] text-gray-500 leading-normal">
                  <div>
                    <strong className="text-gray-300 block text-[11px]">Head Office (Vijayawada):</strong>
                    {OFFICE_CONTACTS[0].address}
                  </div>
                  <div>
                    <strong className="text-gray-300 block text-[11px]">Surat Branch (Gujarat):</strong>
                    {OFFICE_CONTACTS[1].address}
                  </div>
                  {OFFICE_CONTACTS[2] && (
                    <div>
                      <strong className="text-gray-300 block text-[11px]">Kanyakumari Branch (Tamil Nadu):</strong>
                      {OFFICE_CONTACTS[2].address}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed for Nuclear-Grade Industrial Erection Services</span>
            <span className="text-accent">•</span>
            <span>1 MW to 1000 MW</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
