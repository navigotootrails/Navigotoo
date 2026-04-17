import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import CardGrid from '@/components/sections/CardGrid';
import BlogCard from '@/components/cards/BlogCard';
import { getAll } from '@/lib/mdx';
import type { BlogPost } from '@/types/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Travel guides, destination tips, and stories from the road.',
};

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getAll<BlogPost>('blog');

  return (
    <>
      <HeroSection
        title="Stories from the Road"
        subtitle="Travel guides, tips, and honest dispatches from destinations we love."
        backgroundImage="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&q=80"
        height="medium"
      />

      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <CardGrid>
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </CardGrid>
      </section>
    </>
  );
}
