import type { Metadata } from 'next';
import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'The story behind Navigotoo and the people who make it happen.',
};

const values = [
  {
    icon: '🗺️',
    title: 'Authenticity First',
    description: 'We go beyond the tourist trail to craft experiences that feel genuinely local.',
  },
  {
    icon: '🌿',
    title: 'Sustainable Travel',
    description: 'Every itinerary is designed to support local communities and minimise impact.',
  },
  {
    icon: '✨',
    title: 'Crafted with Care',
    description: 'Each trip is personally researched and tested so you can travel with confidence.',
  },
  {
    icon: '🤝',
    title: 'You-Centred',
    description: 'Your travel style, budget, and interests shape every recommendation we make.',
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="We Believe Travel Changes Everything"
        subtitle="Navigotoo was born from a love of roads less travelled and stories worth telling."
        backgroundImage="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80"
        height="large"
      />

      <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-display font-bold text-brand-slate mb-6">Our Story</h2>
        <div className="prose prose-lg prose-slate max-w-none">
          <p>
            Navigotoo started as a personal project between a group of friends who were tired of
            cookie-cutter tours and overpriced packages. We wanted to travel in a way that felt
            real — staying in family-run guesthouses, eating where the locals eat, and discovering
            the kind of places that don&apos;t make it onto most itineraries.
          </p>
          <p>
            Today, we work with a small but passionate team of destination specialists and local
            experts to design travel experiences that are as unique as the people who take them.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-mist px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-brand-slate mb-10 text-center">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <span className="text-3xl">{v.icon}</span>
                <h3 className="mt-3 text-lg font-display font-bold text-brand-slate">{v.title}</h3>
                <p className="mt-2 text-brand-slate/60 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <div className="relative w-full rounded-3xl overflow-hidden aspect-video">
          <Image
            src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1280&q=80"
            alt="Navigotoo team"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 80vw"
          />
        </div>
        <p className="mt-6 text-brand-slate/50 text-sm">The Navigotoo team scouting in Kerala, 2024</p>
      </section>

      <CTABanner
        title="Want to Travel With Us?"
        subtitle="Tell us where you want to go and we'll craft a journey around you."
      />
    </>
  );
}
