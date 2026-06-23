import Image from 'next/image';
import type { Metadata } from 'next';
import { Ruler, Palette, Building2, Hammer, Sparkles, Handshake } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { PageHero } from '@/components/ui/page-hero';
import { Reveal } from '@/components/ui/reveal';
import { Process } from '@/components/home/process';
import { QuoteSection } from '@/components/sections/quote-section';
import { CtaBand } from '@/components/cta/cta-band';

export const metadata: Metadata = buildMetadata({
  title: 'Custom Bamboo Chick Solutions — Any Size, Any Space',
  description:
    'Bespoke bamboo chick solutions for unusual sizes, large terraces and commercial projects. Custom finishes, motorised options and bulk orders for architects, builders, hotels & cafés across Delhi NCR.',
  path: '/custom-solutions',
  keywords: ['custom bamboo chick', 'commercial bamboo chick', 'bulk bamboo chick', 'bamboo chick for architects'],
});

const offerings = [
  { icon: Ruler, title: 'Any Size', description: 'Oversized windows, odd shapes, sloped openings and extra-wide spans — all made to measure.' },
  { icon: Palette, title: 'Custom Finishes', description: 'Choose reed density, tone and weather coating to match your interior or facade.' },
  { icon: Building2, title: 'Commercial Projects', description: 'Restaurants, cafés, hotels and resorts — durable, high-traffic installations.' },
  { icon: Hammer, title: 'Engineered Framing', description: 'Large terraces and canopies with discreet, wind-rated support structures.' },
  { icon: Sparkles, title: 'Motorised Options', description: 'Remote and motorised operation for large or hard-to-reach screens.' },
  { icon: Handshake, title: 'Trade & Bulk Orders', description: 'Special pricing and project support for architects, designers and builders.' },
];

export default function CustomSolutionsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Custom Solutions', path: '/custom-solutions' }]} />
      <PageHero
        eyebrow="Custom Solutions"
        title="Bespoke bamboo solutions, engineered for your space"
        description="When standard won’t do, we design and build. From oversized terraces to commercial fit-outs and trade orders, our custom division handles the complex jobs."
      />

      <section className="section">
        <div className="container-tight">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.05}>
                <div className="card-surface h-full hover:-translate-y-1 hover:shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-leaf-50 text-leaf">
                    <o.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-ink">{o.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream-50">
        <div className="container-tight grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-cream-200 shadow-card">
              <Image
                src="/images/Bambooresortumbrella.jpg"
                alt="Custom terrace bamboo chick installation"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <span className="eyebrow">For Professionals</span>
            <h2 className="heading-lg mt-4">A reliable partner for architects, designers & builders</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                We regularly collaborate with interior designers, architects and builders across Delhi NCR,
                delivering consistent quality, on-time installation and trade-friendly pricing.
              </p>
              <p>
                Send us drawings, site photos or a simple brief on WhatsApp and we’ll advise on the right product,
                framing and finish — and provide a clear, itemised quote for your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Process />
      <QuoteSection defaultProduct="Custom Solution" />
      <CtaBand />
    </>
  );
}
