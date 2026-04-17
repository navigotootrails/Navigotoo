import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import Breadcrumb from '@/components/common/Breadcrumb';
import { formatDate } from '@/lib/utils';
import type { BlogPostFrontmatter } from '@/types/blog';

export default function BlogHero({
  title,
  excerpt,
  coverImage,
  author,
  publishedAt,
  readingTime,
  tags,
}: Omit<BlogPostFrontmatter, 'slug' | 'featured' | 'updatedAt' | 'authorAvatar'>) {
  return (
    <section className="relative min-h-[65vh] flex items-end pb-12">
      <Image src={coverImage} alt={title} fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/95 via-brand-slate/50 to-transparent" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: title },
          ]}
        />

        {tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-brand-sky font-medium bg-brand-sky/20 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
          {title}
        </h1>
        <p className="mt-3 text-white/70 text-lg">{excerpt}</p>

        <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/60">
          <span className="text-white font-medium">{author}</span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} /> {formatDate(publishedAt)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} /> {readingTime}
          </span>
        </div>
      </div>
    </section>
  );
}
