import Image from 'next/image';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  height?: 'full' | 'large' | 'medium';
  overlayOpacity?: number;
}

const heightClasses = {
  full: 'min-h-screen',
  large: 'min-h-[80vh]',
  medium: 'min-h-[60vh]',
};

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  ctaPrimary,
  ctaSecondary,
  height = 'large',
  overlayOpacity = 50,
}: HeroSectionProps) {
  return (
    <section className={cn('relative flex items-center justify-center', heightClasses[height])}>
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-brand-slate"
        style={{ opacity: overlayOpacity / 100 }}
      />
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {(ctaPrimary || ctaSecondary) && (
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            {ctaPrimary && (
              <Button href={ctaPrimary.href} size="lg">
                {ctaPrimary.label}
              </Button>
            )}
            {ctaSecondary && (
              <Button href={ctaSecondary.href} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-slate">
                {ctaSecondary.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
