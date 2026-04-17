import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllSlugs, getBySlug } from '@/lib/mdx';
import type { Experience } from '@/types/experience';
import ExperienceHero from '@/components/experience/ExperienceHero';
import BlogPostBody from '@/components/blog/BlogPostBody';
import CTABanner from '@/components/sections/CTABanner';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs('experiences').map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const item = await getBySlug<Experience>('experiences', params.slug);
    return {
      title: item.title,
      description: item.tagline,
      openGraph: { images: [item.coverImage] },
    };
  } catch {
    return {};
  }
}

export const revalidate = 86400;

export default async function ExperienceDetailPage({ params }: Props) {
  let item: Experience;
  try {
    item = await getBySlug<Experience>('experiences', params.slug);
  } catch {
    notFound();
  }

  return (
    <>
      <ExperienceHero
        title={item.title}
        tagline={item.tagline}
        coverImage={item.coverImage}
        location={item.location}
        country={item.country}
        category={item.category}
        duration={item.duration}
        price={item.price}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <BlogPostBody source={item.content} />
      </div>

      <CTABanner
        title={`Book the ${item.title}`}
        subtitle="Spots fill up fast. Get in touch to secure your place."
      />
    </>
  );
}
