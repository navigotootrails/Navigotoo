'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/data/site';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-2 text-brand-slate"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <span className="text-xl font-display font-bold text-brand-slate">Navigotoo</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
              <X size={24} className="text-brand-slate" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 p-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-display font-semibold text-brand-slate py-3 border-b border-gray-100 hover:text-brand-sky transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/lets-talk"
              onClick={() => setOpen(false)}
              className="mt-6 inline-block text-center bg-brand-sky text-white font-semibold rounded-full px-8 py-4 text-lg hover:bg-brand-ocean transition-colors"
            >
              Let&apos;s Talk
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
