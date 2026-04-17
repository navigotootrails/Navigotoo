import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import type { BlogPostFrontmatter } from '@/types/blog';

export default function BlogCard({
  title,
  slug,
  excerpt,
  coverImage,
  publishedAt,
  tags,
  readingTime,
}: Omit<BlogPostFrontmatter, 'featured' | 'updatedAt' | 'authorAvatar'>) {
  return (
    <Link
      href={`/blog/${slug}`}
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
      </div>

      <div className="flex flex-col flex-1 p-5 gap-3">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs text-brand-sky font-medium bg-brand-sky/10 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className="text-lg font-display font-bold text-brand-slate group-hover:text-brand-sky transition-colors leading-snug line-clamp-2">
          {title}
        </h3>

        <p className="text-brand-slate/60 text-sm line-clamp-2">{excerpt}</p>

        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-brand-slate/50">
          <span className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Calendar size={11} /> {formatDate(publishedAt)}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={11} /> {readingTime}
            </span>
          </span>
          <span className="text-brand-sky font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            Read <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  );
}
