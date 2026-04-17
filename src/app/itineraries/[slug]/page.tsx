import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllSlugs, getBySlug } from '@/lib/mdx';
import type { Itinerary } from '@/types/itinerary';
import ItineraryHero from '@/components/itinerary/ItineraryHero';
import ItineraryHighlights from '@/components/itinerary/ItineraryHighlights';
import BlogPostBody from '@/components/blog/BlogPostBody';
import CTABanner from '@/components/sections/CTABanner';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs('itineraries').map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const item = await getBySlug<Itinerary>('itineraries', params.slug);
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

export default async function ItineraryDetailPage({ params }: Props) {
  let item: Itinerary;
  try {
    item = await getBySlug<Itinerary>('itineraries', params.slug);
  } catch {
    notFound();
  }

  return (
    <>
      <ItineraryHero
        title={item.title}
        tagline={item.tagline}
        coverImage={item.coverImage}
        duration={item.duration}
        difficulty={item.difficulty}
        region={item.region}
        country={item.country}
        price={item.price}
        groupSize={item.groupSize}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-10">
        <ItineraryHighlights highlights={item.highlights} />
        <BlogPostBody source={item.content} />
      </div>

      <CTABanner
        title={`Ready to explore ${item.region}?`}
        subtitle="Let's tailor this itinerary exactly to your dates and preferences."
      />
    </>
  );
}
