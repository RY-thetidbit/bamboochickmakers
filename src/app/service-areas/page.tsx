import Link from 'next/link';
import type { Metadata } from 'next';
import { MapPin, ArrowRight, Phone } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { PageHero } from '@/components/ui/page-hero';
import { Reveal } from '@/components/ui/reveal';
import { CtaBand } from '@/components/cta/cta-band';
import { cities } from '@/data/cities';
import { site } from '@/lib/site';
import { telLink } from '@/lib/utils';

export const metadata: Metadata = buildMetadata({
  title: 'Service Areas — Bamboo Chick Across Delhi NCR',
  description:
    'Bamboo Chick Makers serves Delhi NCR — Vasant Vihar, Vasant Kunj, Greater Kailash, Defence Colony, Saket, Hauz Khas, South Delhi, New Delhi, Dwarka, Gurgaon and Noida. Find your local service area.',
  path: '/service-areas',
  keywords: ['bamboo chick service areas', 'bamboo chick delhi ncr', 'bamboo chick gurgaon noida'],
});

export default function ServiceAreasPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Service Areas', path: '/service-areas' }]} />
      <PageHero
        eyebrow="Service Areas"
        title="Local bamboo chick experts across Delhi NCR"
        description="Based in Vasant Vihar, we manufacture and install across South Delhi, New Delhi, Dwarka, Gurgaon and Noida. Choose your area for local pricing, FAQs and service information."
      />

      <section className="section">
        <div className="container-tight">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.04}>
                <Link
                  href={`/${c.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-cream-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 font-heading text-lg font-semibold text-ink">Bamboo Chick in {c.city}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {c.intro[0].slice(0, 120)}…
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    View {c.city} page
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-cream-200 bg-cream-50 p-6 text-center">
            <p className="text-muted-foreground">
              Don’t see your area? We cover the wider Delhi NCR region too.{' '}
              <Link href={telLink(site.phone)} className="inline-flex items-center gap-1.5 font-semibold text-brand">
                <Phone className="h-4 w-4" /> Call {site.phoneDisplay}
              </Link>
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
