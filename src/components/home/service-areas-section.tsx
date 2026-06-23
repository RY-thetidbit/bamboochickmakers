import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { cities } from '@/data/cities';

export function ServiceAreasSection() {
  return (
    <section className="section bg-cream-50">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Service Areas"
          title="Local bamboo chick experts near you"
          description="We manufacture and install across Delhi NCR — South Delhi, New Delhi, Gurgaon, Noida and beyond. Find your area below."
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.03}>
              <Link
                href={`/${c.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-cream-200 bg-white px-5 py-4 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="font-medium text-ink">Bamboo Chick in {c.city}</span>
                </span>
                <ArrowRight className="h-4 w-4 text-brand-300 transition group-hover:translate-x-1 group-hover:text-brand" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
