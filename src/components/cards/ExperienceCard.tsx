import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import type { ExperienceFrontmatter } from '@/types/experience';

const categoryVariant: Record<string, 'sky' | 'forest' | 'sand' | 'earth' | 'mist'> = {
  Adventure: 'sky',
  Cultural: 'sand',
  Culinary: 'earth',
  Wildlife: 'forest',
  Wellness: 'mist',
};

export default function ExperienceCard({
  title,
  slug,
  tagline,
  coverImage,
  location,
  country,
  category,
  duration,
  price,
}: Omit<ExperienceFrontmatter, 'difficulty' | 'featured' | 'publishedAt'>) {
  return (
    <Link
      href={`/experiences/${slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
    >
      <div className="relative aspect-card overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <Badge variant={categoryVariant[category] ?? 'sky'}>{category}</Badge>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <h3 className="text-lg font-display font-bold text-brand-slate group-hover:text-brand-sky transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-brand-slate/60 text-sm mt-1 line-clamp-2">{tagline}</p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-brand-slate/60">
          <span className="flex items-center gap-1">
            <MapPin size={12} /> {location}, {country}
          </span>
          <span>{duration}</span>
        </div>

        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-brand-slate font-semibold text-sm">{price}</span>
          <span className="text-brand-sky text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            Explore <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
