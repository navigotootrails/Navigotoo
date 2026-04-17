import { cn } from '@/lib/utils';

interface CardGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

const colClasses = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
};

export default function CardGrid({ children, columns = 3, className }: CardGridProps) {
  return (
    <div className={cn('grid grid-cols-1 gap-6 lg:gap-8', colClasses[columns], className)}>
      {children}
    </div>
  );
}
