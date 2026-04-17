import Button from '@/components/ui/Button';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function CTABanner({
  title = 'Ready to Plan Your Next Adventure?',
  subtitle = "Let's design a journey that's uniquely yours.",
  ctaLabel = "Let's Talk",
  ctaHref = '/lets-talk',
}: CTABannerProps) {
  return (
    <section className="bg-brand-slate py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">{title}</h2>
        <p className="mt-4 text-white/60 text-lg">{subtitle}</p>
        <div className="mt-8">
          <Button href={ctaHref} size="lg">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
