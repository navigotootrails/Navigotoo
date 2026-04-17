import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllSlugs, getBySlug } from '@/lib/mdx';
import type { BlogPost } from '@/types/blog';
import BlogHero from '@/components/blog/BlogHero';
import BlogPostBody from '@/components/blog/BlogPostBody';
import CTABanner from '@/components/sections/CTABanner';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs('blog').map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await getBySlug<BlogPost>('blog', params.slug);
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: { images: [post.coverImage], type: 'article' },
    };
  } catch {
    return {};
  }
}

export const revalidate = 86400;

export default async function BlogPostPage({ params }: Props) {
  let post: BlogPost;
  try {
    post = await getBySlug<BlogPost>('blog', params.slug);
  } catch {
    notFound();
  }

  return (
    <>
      <BlogHero
        title={post.title}
        excerpt={post.excerpt}
        coverImage={post.coverImage}
        author={post.author}
        publishedAt={post.publishedAt}
        readingTime={post.readingTime}
        tags={post.tags}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <BlogPostBody source={post.content} />
      </div>

      <CTABanner
        title="Inspired to Travel?"
        subtitle="Let's plan the journey you just read about."
        ctaLabel="Plan My Trip"
      />
    </>
  );
}
