import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentRoot = path.join(process.cwd(), 'content');

export function getAllSlugs(contentType: 'itineraries' | 'experiences' | 'blog'): string[] {
  const dir = path.join(contentRoot, contentType);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export async function getBySlug<T extends { content: string }>(
  contentType: 'itineraries' | 'experiences' | 'blog',
  slug: string
): Promise<T> {
  const filePath = path.join(contentRoot, contentType, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return { ...data, slug, content } as unknown as T;
}

export async function getAll<T extends { content: string; publishedAt: string; featured?: boolean }>(
  contentType: 'itineraries' | 'experiences' | 'blog'
): Promise<T[]> {
  const slugs = getAllSlugs(contentType);
  const items = await Promise.all(slugs.map((s) => getBySlug<T>(contentType, s)));
  return items.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
