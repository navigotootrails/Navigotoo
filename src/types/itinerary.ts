export interface ItineraryFrontmatter {
  title: string;
  slug: string;
  tagline: string;
  coverImage: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  region: string;
  country: string;
  price: string;
  groupSize: string;
  highlights: string[];
  publishedAt: string;
  featured: boolean;
}

export interface Itinerary extends ItineraryFrontmatter {
  content: string;
}
