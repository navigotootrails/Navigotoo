export interface BlogPostFrontmatter {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  author: string;
  authorAvatar?: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  readingTime: string;
  featured: boolean;
}

export interface BlogPost extends BlogPostFrontmatter {
  content: string;
}
