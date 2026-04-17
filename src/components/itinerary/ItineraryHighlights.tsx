import { CheckCircle } from 'lucide-react';

export default function ItineraryHighlights({ highlights }: { highlights: string[] }) {
  return (
    <div className="bg-brand-mist rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-display font-bold text-brand-slate mb-4">Trip Highlights</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {highlights.map((h) => (
          <li key={h} className="flex items-start gap-3 text-brand-slate/80 text-sm">
            <CheckCircle size={16} className="text-brand-sky mt-0.5 shrink-0" />
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}
