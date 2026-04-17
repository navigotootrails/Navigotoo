import { MDXRemote } from 'next-mdx-remote/rsc';

export default function BlogPostBody({ source }: { source: string }) {
  return (
    <article className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-a:text-brand-sky prose-img:rounded-xl">
      <MDXRemote source={source} />
    </article>
  );
}
