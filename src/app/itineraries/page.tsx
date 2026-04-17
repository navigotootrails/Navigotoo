import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import CardGrid from '@/components/sections/CardGrid';
import ItineraryCard from '@/components/cards/ItineraryCard';
import { getAll } from '@/lib/mdx';
import type { Itinerary } from '@/types/itinerary';

export const metadata: Metadata = {
  title: 'Itineraries',
  description: 'Browse handcrafted travel itineraries across South and Southeast Asia.',
};

export const revalidate = 3600;

export default async function ItinerariesPage() {
  const itineraries = await getAll<Itinerary>('itineraries');

  return (
    <>
      <HeroSection
        title="Explore Our Itineraries"
        subtitle="Every route handpicked, every day thoughtfully planned."
        backgroundImage="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80"
        height="medium"
      />

      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <CardGrid>
          {itineraries.map((item) => (
            <ItineraryCard key={item.slug} {...item} />
          ))}
        </CardGrid>
      </section>
    </>
  );
}
