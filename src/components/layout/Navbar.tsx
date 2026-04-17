'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/data/site';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const isHome = pathname === '/';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isHome && !scrolled
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link
          href="/"
          className={cn(
            'text-xl font-display font-bold tracking-tight transition-colors',
            isHome && !scrolled ? 'text-white' : 'text-brand-slate'
          )}
        >
          Navigotoo
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                pathname === item.href
                  ? 'text-brand-sky'
                  : isHome && !scrolled
                    ? 'text-white/90 hover:text-white'
                    : 'text-brand-slate/70 hover:text-brand-slate'
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/lets-talk"
            className={cn(
              'ml-3 px-5 py-2 rounded-full text-sm font-semibold transition-colors',
              isHome && !scrolled
                ? 'bg-white text-brand-slate hover:bg-brand-sky hover:text-white'
                : 'bg-brand-sky text-white hover:bg-brand-ocean'
            )}
          >
            Let&apos;s Talk
          </Link>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
