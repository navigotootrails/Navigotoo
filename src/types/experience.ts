export interface ExperienceFrontmatter {
  title: string;
  slug: string;
  tagline: string;
  coverImage: string;
  location: string;
  country: string;
  category: 'Adventure' | 'Cultural' | 'Culinary' | 'Wildlife' | 'Wellness';
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  price: string;
  featured: boolean;
  publishedAt: string;
}

export interface Experience extends ExperienceFrontmatter {
  content: string;
}
