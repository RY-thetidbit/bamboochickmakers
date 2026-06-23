import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, CheckCircle2, Phone, Star, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { StatsBand } from '@/components/sections/stats-band';
import { Process } from '@/components/home/process';
import { ProductCategories } from '@/components/home/product-categories';
import { FaqSection } from '@/components/sections/faq-section';
import { QuoteSection } from '@/components/sections/quote-section';
import { CtaBand } from '@/components/cta/cta-band';
import { WhatsAppButton } from '@/components/cta/whatsapp-button';
import { CallButton } from '@/components/cta/call-button';
import { JsonLd } from '@/components/seo/json-ld';
import { localBusinessSchema } from '@/lib/schema';
import { cities, getCity } from '@/data/cities';
import { site } from '@/lib/site';
import { telLink } from '@/lib/utils';

/** Builds metadata for a given city slug — used by each city route's generateMetadata. */
export function cityMetadata(slug: string): Metadata {
  const c = getCity(slug);
  if (!c) return {};
  return buildMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: `/${c.slug}`,
    image: c.hero,
    keywords: c.keywords,
  });
}

/** Full local-SEO city landing page, rendered by each city route. */
export function CityTemplate({ slug }: { slug: string }) {
  const c = getCity(slug);
  if (!c) notFound();

  const otherCities = cities.filter((x) => x.slug !== c.slug).slice(0, 6);
  const waMsg = `Hello, I am interested in Bamboo Chick in ${c.city}. Please share pricing and available options.`;
  const mapsQuery = encodeURIComponent(`${c.city}, India`);

  return (
    <>
      <Breadcrumbs items={[{ name: 'Service Areas', path: '/service-areas' }, { name: c.city, path: `/${c.slug}` }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-cream-100">
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-50" aria-hidden />
        <div className="container-tight relative grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <span className="eyebrow"><MapPin className="h-3.5 w-3.5" /> Serving {c.city}</span>
            <h1 className="heading-xl mt-4 text-balance">
              Bamboo Chick Makers in <span className="text-brand">{c.city}</span>
            </h1>
            <p className="mt-2 font-heading text-lg font-semibold text-brand-600">
              Manufacturing, Customization &amp; Installation
            </p>
            <p className="lead mt-5">{c.intro[0]}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton size="lg" label={`Free ${c.city} Quote on WhatsApp`} message={waMsg} />
              <CallButton size="lg" variant="outline" showNumber />
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-leaf text-leaf" />
                ))}
              </span>
              Rated {site.rating.value}/5 by {site.rating.count}+ customers across Delhi NCR
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-cream-200 shadow-card">
            <Image src={c.hero} alt={`Bamboo chick installation in ${c.city}`} fill priority sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <StatsBand />

      {/* Intro continued */}
      <section className="section">
        <div className="container-tight grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="heading-lg">Your local bamboo chick experts in {c.city}</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              {c.intro.slice(1).map((p, i) => (
                <p key={i} className="leading-relaxed">{p}</p>
              ))}
              <p className="leading-relaxed">
                We supply and install bamboo chicks, blinds, curtains and balcony &amp; terrace solutions throughout {c.city}.
                Whatever your space, we’ll measure, manufacture and fit a solution made to last.
              </p>
            </div>

            {/* Local areas */}
            <h3 className="mt-8 font-heading text-lg font-semibold text-ink">Areas we cover in {c.city}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.localAreas.map((area) => (
                <span key={area} className="inline-flex items-center gap-1.5 rounded-full border border-cream-200 bg-white px-3 py-1.5 text-sm text-brand-700 shadow-sm">
                  <MapPin className="h-3.5 w-3.5 text-brand-400" /> {area}
                </span>
              ))}
            </div>
          </div>

          {/* Local trust card */}
          <aside>
            <div className="sticky top-24 rounded-2xl border border-cream-200 bg-cream-50 p-6">
              <h3 className="font-heading text-lg font-semibold text-ink">Why {c.city} chooses us</h3>
              <ul className="mt-4 space-y-4">
                {c.whyLocal.map((w) => (
                  <li key={w.title} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-leaf" />
                    <span>
                      <span className="block text-sm font-semibold text-ink">{w.title}</span>
                      <span className="block text-sm text-muted-foreground">{w.description}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-white p-4 text-center shadow-soft">
                <ShieldCheck className="mx-auto h-6 w-6 text-brand" />
                <p className="mt-2 text-sm font-medium text-ink">Up to 2-year warranty &amp; local after-sales support</p>
              </div>
              <Link
                href={telLink(site.phone)}
                className="mt-4 flex items-center justify-center gap-2 rounded-full border-2 border-brand/25 py-2.5 text-sm font-semibold text-brand-700 transition hover:border-brand hover:bg-brand-50"
              >
                <Phone className="h-4 w-4" /> {site.phoneDisplay}
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <ProductCategories />
      <Process />

      {/* Map */}
      <section className="section bg-cream-50">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Find Us</span>
            <h2 className="heading-lg mt-4">Serving all of {c.city}</h2>
            <p className="lead mt-4">We provide free site visits and measurement across {c.city} and nearby areas.</p>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-cream-200 shadow-soft">
            <iframe
              title={`Bamboo Chick service area map for ${c.city}`}
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>
      </section>

      <QuoteSection defaultCity={c.city} />
      <FaqSection faqs={c.faqs} title={`Bamboo Chick in ${c.city} — FAQs`} />

      {/* Other cities */}
      <section className="section bg-cream-50">
        <div className="container-tight">
          <h2 className="heading-lg text-center">We also serve nearby cities</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherCities.map((o) => (
              <Link
                key={o.slug}
                href={`/${o.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-cream-200 bg-white px-5 py-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="font-medium text-ink">Bamboo Chick in {o.city}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* City-specific final CTA */}
      <CtaBand
        title={c.cta}
        subtitle={`Fast measurement, custom sizes and professional installation across ${c.city}. Get your free quote today.`}
        message={waMsg}
      />

      <JsonLd data={localBusinessSchema({ city: c.city, path: `/${c.slug}` })} />
    </>
  );
}
