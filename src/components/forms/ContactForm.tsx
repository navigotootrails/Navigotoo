'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

interface FormState {
  name: string;
  email: string;
  phone: string;
  destination: string;
  message: string;
}

const destinations = [
  'Kerala, India',
  'Wayanad, India',
  'East Java, Indonesia',
  'Bali, Indonesia',
  'Other',
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-16">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-display font-bold text-brand-slate">We&apos;ve got your message!</h3>
        <p className="text-brand-slate/60 mt-2">We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-xl border border-gray-200 px-4 py-3 text-brand-slate text-sm focus:outline-none focus:ring-2 focus:ring-brand-sky transition bg-white';

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-slate mb-1.5">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-slate mb-1.5">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-brand-slate mb-1.5">
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="+91 98765 43210"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="destination" className="block text-sm font-medium text-brand-slate mb-1.5">
          Destination Interest
        </label>
        <select
          id="destination"
          name="destination"
          value={form.destination}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select a destination…</option>
          {destinations.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-slate mb-1.5">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your dream trip…"
          className={inputClass}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
      )}

      <Button type="submit" size="lg" disabled={status === 'loading'} className="w-full">
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  );
}
