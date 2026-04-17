import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'sky' | 'sand' | 'forest' | 'earth' | 'mist';
  className?: string;
}

const variants = {
  sky: 'bg-brand-sky/10 text-brand-ocean',
  sand: 'bg-brand-sand text-brand-earth',
  forest: 'bg-green-50 text-brand-forest',
  earth: 'bg-amber-50 text-brand-earth',
  mist: 'bg-brand-mist text-brand-slate/70',
};

export default function Badge({ children, variant = 'sky', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
