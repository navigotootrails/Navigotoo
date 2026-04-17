import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({ title, subtitle, centered, className }: SectionHeadingProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-slate">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-brand-slate/60 text-lg max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
