'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  capacity: string;
  message: string;
}

const initialFormState: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  capacity: '1-10 MW',
  message: '',
};

export default function InquiryForm() {
  const [formData, setFormData] = useState<FormData>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#0057B8', '#00B4D8', '#FFD60A'],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#0057B8', '#00B4D8', '#FFD60A'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validations
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE';
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          capacity: formData.capacity,
          message: formData.message,
          subject: `New SSES Outage Inquiry from ${formData.name}`,
          from_name: 'SSES Website Inquiry Form',
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        triggerConfetti();
        setFormData(initialFormState);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message || 'Submission failed. Please try again later.');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full relative">
      {submitStatus === 'success' ? (
        <div className="glass-panel p-8 rounded-3xl border border-green-500/20 text-center flex flex-col items-center gap-4 relative overflow-hidden">
          <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="text-white font-bold text-2xl">Inquiry Submitted Successfully</h3>
          <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
            Thank you for contacting Siva Sai Engineering Services. Our turbine division manager will review your technical request and reply within 24 hours.
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="mt-4 flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg border border-white/5 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5 text-secondary" />
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5 space-y-6">
          <div className="border-b border-white/5 pb-4">
            <h3 className="text-white font-bold text-lg font-mono tracking-wide">
              Please leave a message
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Submit your technical requirements or queries below and we will get back to you shortly.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-semibold text-gray-400 font-mono">
                Full Name <span className="text-accent">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Ramesh Kumar"
                className="bg-[#070b13] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-secondary transition-all placeholder-gray-600"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-gray-400 font-mono">
                Email Address <span className="text-accent">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="client@powerplant.com"
                className="bg-[#070b13] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-secondary transition-all placeholder-gray-600"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-xs font-semibold text-gray-400 font-mono">
                Phone Number <span className="text-accent">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="bg-[#070b13] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-secondary transition-all placeholder-gray-600"
              />
            </div>

            {/* Company Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="company" className="text-xs font-semibold text-gray-400 font-mono">
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Power Gen Corp"
                className="bg-[#070b13] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-secondary transition-all placeholder-gray-600"
              />
            </div>

            {/* Capacity Dropdown */}
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="capacity" className="text-xs font-semibold text-gray-400 font-mono">
                Turbine / Generator Capacity
              </label>
              <select
                id="capacity"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                className="bg-[#070b13] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-secondary transition-all appearance-none cursor-pointer"
              >
                <option value="1-10 MW">Small Industrial (1 MW to 10 MW)</option>
                <option value="10-100 MW">Medium Captive (10 MW to 100 MW)</option>
                <option value="100-500 MW">Large Utility (100 MW to 500 MW)</option>
                <option value="500-1000 MW">Supercritical Nuclear/Coal (500 MW to 1000 MW)</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="message" className="text-xs font-semibold text-gray-400 font-mono">
                Technical Requirements / Scope of Work <span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Please describe the overhaul, rotor balancing, casing bellows, or alignment requirements..."
                className="bg-[#070b13] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-secondary transition-all resize-none placeholder-gray-600"
              />
            </div>
          </div>

          {/* Errors display */}
          {submitStatus === 'error' && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 flex items-center gap-2 text-xs text-red-400">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-white font-semibold py-3 px-6 rounded-xl text-sm transition-all duration-300 border border-secondary/20 shadow-[0_0_15px_rgba(0,87,184,0.2)] hover:shadow-[0_0_20px_rgba(0,180,216,0.4)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-white" />
                Submitting Inquiry...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-accent" />
                Submit Technical Inquiry
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
