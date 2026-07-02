import { CheckCircle2, ShieldCheck, Clock, BadgeIndianRupee } from 'lucide-react';
import { LeadForm } from '@/components/cta/lead-form';

const points = [
  { icon: BadgeIndianRupee, text: 'Free, no-obligation quote' },
  { icon: Clock, text: 'Fast WhatsApp reply, any time' },
  { icon: CheckCircle2, text: 'Custom sizes & finishes' },
  { icon: ShieldCheck, text: 'Up to 2-year warranty' },
];

export function QuoteSection({ defaultCity, defaultProduct }: { defaultCity?: string; defaultProduct?: string }) {
  return (
    <section className="section bg-cream-50" id="quote">
      <div className="container-tight">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Get a Free Quote</span>
            <h2 className="heading-lg mt-4 text-balance">
              Tell us about your space — get pricing today
            </h2>
            <p className="lead mt-4">
              Share a few details and we’ll send a custom quote on WhatsApp — we reply round the clock. No pushy sales
              calls, just clear, honest pricing.
            </p>
            <ul className="mt-7 space-y-3">
              {points.map((p) => (
                <li key={p.text} className="flex items-center gap-3 text-sm font-medium text-ink">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-leaf-50 text-leaf">
                    <p.icon className="h-5 w-5" />
                  </span>
                  {p.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-cream-200 bg-white p-6 shadow-card sm:p-8">
            <LeadForm defaultCity={defaultCity} defaultProduct={defaultProduct} />
          </div>
        </div>
      </div>
    </section>
  );
}
