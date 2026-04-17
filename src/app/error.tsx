'use client';

import Button from '@/components/ui/Button';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-brand-mist">
      <p className="text-5xl mb-4">⚠️</p>
      <h2 className="text-2xl font-display font-bold text-brand-slate">Something went wrong</h2>
      <p className="mt-2 text-brand-slate/60">An unexpected error occurred. Please try again.</p>
      <div className="mt-8 flex gap-4">
        <Button onClick={reset} variant="outline">Try Again</Button>
        <Button href="/">Go Home</Button>
      </div>
    </div>
  );
}
