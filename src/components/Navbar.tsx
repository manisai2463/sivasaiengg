'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, PhoneCall } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      document.body.style.overflow = 'hidden';

      const focusable = overlayRef.current?.querySelectorAll<HTMLElement>(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

      if (focusable && focusable.length) {
        focusable[0].focus();
      }

      const handleKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
          previousFocusRef.current?.focus();
        }

        if (e.key === 'Tab') {
          const focusList = focusable ? Array.from(focusable) : [];
          if (focusList.length === 0) return;
          const first = focusList[0];
          const last = focusList[focusList.length - 1];

          if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          } else if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        }
      };

      window.addEventListener('keydown', handleKey);
      return () => {
        window.removeEventListener('keydown', handleKey);
        document.body.style.overflow = '';
        previousFocusRef.current?.focus();
      };
    }

    return;
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F19] border-b border-white/5 py-3 shadow-lg'
          : 'bg-[#0B0F19]/95 border-b border-white/5 py-5 shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 bg-white rounded-lg p-0.5 overflow-hidden transition-transform duration-300 group-hover:scale-105 border border-white/20">
              <Image
                src="/logo.jpg"
                alt="Siva Sai Engineering Services Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-wider text-sm sm:text-base group-hover:text-secondary transition-colors">
                SIVA SAI
              </span>
              <span className="text-[10px] sm:text-xs text-gray-400 font-mono tracking-widest leading-none">
                ENGINEERING SERVICES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative py-2 text-sm font-medium tracking-wide transition-colors ${
                    active
                      ? 'text-secondary font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-primary hover:bg-primary/95 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-300 border border-secondary/20 shadow-[0_0_15px_rgba(0,87,184,0.3)] hover:shadow-[0_0_20px_rgba(0,180,216,0.5)] shimmer-btn"
            >
              <PhoneCall className="w-4 h-4 text-accent" />
              Inquire Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-lg border border-white/10 bg-[#111827]/50"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        className={`md:hidden fixed inset-0 z-40 bg-[#0B0F19] border-t border-white/5 transition-all duration-300 ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col p-6 gap-6 h-full pt-[84px]">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium py-2 border-b border-white/5 ${
                  active
                    ? 'text-secondary font-bold pl-2 border-l-2 border-l-secondary'
                    : 'text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 rounded-lg text-base mt-4 shadow-lg"
          >
            <PhoneCall className="w-5 h-5 text-accent" />
            Inquire Now
          </Link>
        </div>
      </div>
    </header>
  );
}
