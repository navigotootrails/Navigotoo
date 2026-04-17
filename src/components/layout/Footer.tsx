import Link from 'next/link';
import { Instagram, Mail } from 'lucide-react';
import { siteConfig } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-brand-slate text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="text-xl font-display font-bold mb-3">Navigotoo</p>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">
              Explore
            </p>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/lets-talk"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Let&apos;s Talk
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">
              Connect
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/70 hover:text-brand-sky transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="text-white/70 hover:text-brand-sky transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-white/50 text-sm mt-4">{siteConfig.email}</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/40 text-xs">
          © {new Date().getFullYear()} Navigotoo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
