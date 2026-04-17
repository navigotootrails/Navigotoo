import Image from 'next/image';
import { MapPin, Clock } from 'lucide-react';
import Breadcrumb from '@/components/common/Breadcrumb';
import Badge from '@/components/ui/Badge';
import type { ExperienceFrontmatter } from '@/types/experience';

const categoryVariant: Record<string, 'sky' | 'forest' | 'sand' | 'earth' | 'mist'> = {
  Adventure: 'sky',
  Cultural: 'sand',
  Culinary: 'earth',
  Wildlife: 'forest',
  Wellness: 'mist',
};

export default function ExperienceHero({
  title,
  tagline,
  coverImage,
  location,
  country,
  category,
  duration,
  price,
}: Omit<ExperienceFrontmatter, 'slug' | 'difficulty' | 'featured' | 'publishedAt'>) {
  return (
    <section className="relative min-h-[70vh] flex items-end pb-12">
      <Image src={coverImage} alt={title} fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/90 via-brand-slate/40 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Experiences', href: '/experiences' },
            { label: title },
          ]}
        />

        <div className="mt-6">
          <Badge variant={categoryVariant[category] ?? 'sky'} className="mb-3">
            {category}
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
            {title}
          </h1>
          <p className="mt-3 text-white/70 text-lg max-w-2xl">{tagline}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/80">
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-brand-sky" /> {location}, {country}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-brand-sky" /> {duration}
          </span>
          <span className="font-semibold text-white">{price}</span>
        </div>
      </div>
    </section>
  );
}
