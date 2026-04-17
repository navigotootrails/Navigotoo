import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import CardGrid from '@/components/sections/CardGrid';
import ExperienceCard from '@/components/cards/ExperienceCard';
import { getAll } from '@/lib/mdx';
import type { Experience } from '@/types/experience';

export const metadata: Metadata = {
  title: 'Experiences',
  description: 'Immersive, one-of-a-kind travel experiences designed to create lasting memories.',
};

export const revalidate = 3600;

export default async function ExperiencesPage() {
  const experiences = await getAll<Experience>('experiences');

  return (
    <>
      <HeroSection
        title="Signature Experiences"
        subtitle="One-of-a-kind moments designed to stay with you forever."
        backgroundImage="https://images.unsplash.com/photo-1512036666432-2181c1f26420?w=1920&q=80"
        height="medium"
      />

      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <CardGrid>
          {experiences.map((item) => (
            <ExperienceCard key={item.slug} {...item} />
          ))}
        </CardGrid>
      </section>
    </>
  );
}
