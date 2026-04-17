import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-brand-mist">
      <p className="text-7xl font-display font-bold text-brand-sky">404</p>
      <h1 className="mt-4 text-2xl font-display font-bold text-brand-slate">Page not found</h1>
      <p className="mt-2 text-brand-slate/60">
        Looks like this trail doesn&apos;t exist. Let&apos;s get you back on the map.
      </p>
      <div className="mt-8">
        <Button href="/" size="lg">Back to Home</Button>
      </div>
    </div>
  );
}
