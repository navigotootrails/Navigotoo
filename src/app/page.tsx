import HeroSection from '@/components/sections/HeroSection';
import CardGrid from '@/components/sections/CardGrid';
import CTABanner from '@/components/sections/CTABanner';
import SectionHeading from '@/components/ui/SectionHeading';
import ItineraryCard from '@/components/cards/ItineraryCard';
import ExperienceCard from '@/components/cards/ExperienceCard';
import BlogCard from '@/components/cards/BlogCard';
import { getAll } from '@/lib/mdx';
import type { Itinerary } from '@/types/itinerary';
import type { Experience } from '@/types/experience';
import type { BlogPost } from '@/types/blog';

export const revalidate = 3600;

export default async function HomePage() {
  const [itineraries, experiences, posts] = await Promise.all([
    getAll<Itinerary>('itineraries'),
    getAll<Experience>('experiences'),
    getAll<BlogPost>('blog'),
  ]);

  const featuredItineraries = itineraries.filter((i) => i.featured).slice(0, 3);
  const featuredExperiences = experiences.filter((e) => e.featured).slice(0, 3);
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      <HeroSection
        title="Travel Differently. Live Fully."
        subtitle="Handcrafted itineraries and immersive experiences across South & Southeast Asia."
        backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
        ctaPrimary={{ label: 'Browse Itineraries', href: '/itineraries' }}
        ctaSecondary={{ label: 'Our Experiences', href: '/experiences' }}
        height="full"
      />

      {featuredItineraries.length > 0 && (
        <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
          <SectionHeading
            title="Featured Itineraries"
            subtitle="Carefully designed journeys for the curious traveller."
            className="mb-10"
          />
          <CardGrid>
            {featuredItineraries.map((item) => (
              <ItineraryCard key={item.slug} {...item} />
            ))}
          </CardGrid>
        </section>
      )}

      {featuredExperiences.length > 0 && (
        <section className="py-20 px-4 sm:px-6 bg-brand-mist">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Signature Experiences"
              subtitle="One-of-a-kind moments that turn trips into stories."
              className="mb-10"
            />
            <CardGrid>
              {featuredExperiences.map((item) => (
                <ExperienceCard key={item.slug} {...item} />
              ))}
            </CardGrid>
          </div>
        </section>
      )}

      <CTABanner />

      {latestPosts.length > 0 && (
        <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
          <SectionHeading
            title="From the Blog"
            subtitle="Travel guides, tips, and stories from the road."
            className="mb-10"
          />
          <CardGrid>
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </CardGrid>
        </section>
      )}
    </>
  );
}
