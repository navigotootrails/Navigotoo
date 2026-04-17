import Image from 'next/image';
import { Clock, MapPin, Users, TrendingUp, DollarSign } from 'lucide-react';
import Breadcrumb from '@/components/common/Breadcrumb';
import Badge from '@/components/ui/Badge';
import type { ItineraryFrontmatter } from '@/types/itinerary';

const difficultyVariant: Record<string, 'forest' | 'sky' | 'earth'> = {
  Easy: 'forest',
  Moderate: 'sky',
  Challenging: 'earth',
};

export default function ItineraryHero({
  title,
  tagline,
  coverImage,
  duration,
  difficulty,
  region,
  country,
  price,
  groupSize,
}: Omit<ItineraryFrontmatter, 'slug' | 'highlights' | 'publishedAt' | 'featured'>) {
  return (
    <section className="relative min-h-[70vh] flex items-end pb-12">
      <Image src={coverImage} alt={title} fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/90 via-brand-slate/40 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Itineraries', href: '/itineraries' },
            { label: title },
          ]}
        />

        <div className="mt-6">
          <Badge variant={difficultyVariant[difficulty] ?? 'sky'} className="mb-3">
            {difficulty}
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
            {title}
          </h1>
          <p className="mt-3 text-white/70 text-lg max-w-2xl">{tagline}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/80">
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-brand-sky" /> {duration}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-brand-sky" /> {region}, {country}
          </span>
          <span className="flex items-center gap-2">
            <Users size={16} className="text-brand-sky" /> {groupSize}
          </span>
          <span className="flex items-center gap-2">
            <TrendingUp size={16} className="text-brand-sky" /> {difficulty}
          </span>
          <span className="flex items-center gap-2">
            <DollarSign size={16} className="text-brand-sky" /> {price}
          </span>
        </div>
      </div>
    </section>
  );
}
