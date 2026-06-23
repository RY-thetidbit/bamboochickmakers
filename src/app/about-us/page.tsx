import Image from 'next/image';
import type { Metadata } from 'next';
import { Target, Heart, Award, Users } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { PageHero } from '@/components/ui/page-hero';
import { StatsBand } from '@/components/sections/stats-band';
import { Guarantees } from '@/components/sections/guarantees';
import { Owner } from '@/components/sections/owner';
import { LocationMap } from '@/components/sections/location-map';
import { Process } from '@/components/home/process';
import { CtaBand } from '@/components/cta/cta-band';
import { Reveal } from '@/components/ui/reveal';
import { site } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'About Us — 10+ Years of Bamboo Chick Craftsmanship',
  description:
    'Learn about Bamboo Chick Makers — a family-run Vasant Vihar manufacturer with 10+ years and 500+ installations, crafting and fitting premium bamboo chicks across Delhi NCR.',
  path: '/about-us',
  keywords: ['about bamboo chick makers', 'bamboo chick manufacturer delhi', 'bamboo chick company vasant vihar'],
});

const values = [
  { icon: Award, title: 'Craftsmanship', description: 'Hand-woven by skilled artisans using carefully seasoned bamboo for lasting quality.' },
  { icon: Heart, title: 'Honest Pricing', description: 'Manufacturer-direct rates and transparent quotes — no hidden costs, ever.' },
  { icon: Target, title: 'Custom-First', description: 'Everything is made to measure for your exact space, finish and mechanism.' },
  { icon: Users, title: 'Customer Care', description: 'Friendly advice, on-time fitting and reliable after-sales support and re-coating.' },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'About Us', path: '/about-us' }]} />
      <PageHero
        eyebrow="About Us"
        title="Crafting cooler, calmer spaces for over a decade"
        description={`Since ${site.foundingYear}, Bamboo Chick Makers has manufactured and installed premium bamboo chicks for homes, balconies, terraces and commercial spaces across Delhi NCR.`}
      />

      <StatsBand />

      <section className="section">
        <div className="container-tight grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-cream-200 shadow-card">
              <Image
                src="/images/Bamboochickoutdoor.jpg"
                alt="Bamboo Chick Makers craftsmanship"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="heading-lg mt-4">A family craft, built into a trusted brand</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                What began as a small bamboo-weaving workshop has grown into one of the region’s most trusted names for
                bamboo chicks, blinds and curtains. Over {site.yearsExperience}+ years we’ve completed{' '}
                {site.installationsCount}+ installations across Delhi NCR — Vasant Vihar, South Delhi, Gurgaon, Noida and beyond.
              </p>
              <p>
                We control the entire process — sourcing and seasoning the bamboo, hand-weaving each chick, and fitting it
                with our own trained teams. That’s how we keep quality high, prices fair and timelines short.
              </p>
              <p>
                Whether it’s a single balcony or an entire terrace café, our promise is the same: a cooler, more private,
                more beautiful space — made to last.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cream-50">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our Values</span>
            <h2 className="heading-lg mt-4">What we stand for</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="card-surface h-full text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Owner className="bg-cream-50" />
      <Process />
      <Guarantees />
      <LocationMap />
      <CtaBand />
    </>
  );
}
