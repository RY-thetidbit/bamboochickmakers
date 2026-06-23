import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Reveal } from '@/components/ui/reveal';
import { FaqSection } from '@/components/sections/faq-section';
import { QuoteSection } from '@/components/sections/quote-section';
import { Guarantees } from '@/components/sections/guarantees';
import { CtaBand } from '@/components/cta/cta-band';
import { WhatsAppButton } from '@/components/cta/whatsapp-button';
import { CallButton } from '@/components/cta/call-button';
import { JsonLd } from '@/components/seo/json-ld';
import { productSchema } from '@/lib/schema';
import { products, getProduct, productSlugs } from '@/data/products';

export const dynamicParams = false;

export function generateStaticParams() {
  return productSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return buildMetadata({
    title: p.metaTitle,
    description: p.metaDescription,
    path: `/products/${p.slug}`,
    image: p.heroImage,
    keywords: p.keywords,
  });
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const related = products.filter((x) => x.slug !== p.slug).slice(0, 3);
  const waMsg = `Hello, I am interested in ${p.name}. Please share pricing and available options.`;

  return (
    <>
      <Breadcrumbs items={[{ name: 'Products', path: '/products' }, { name: p.shortName, path: `/products/${p.slug}` }]} />

      {/* Hero */}
      <section className="bg-cream-100">
        <div className="container-tight grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <span className="eyebrow">{p.category}</span>
            <h1 className="heading-xl mt-4 text-balance">{p.name}</h1>
            <p className="mt-2 text-base font-semibold text-leaf">Starting from {p.priceFrom}</p>
            <p className="lead mt-4">{p.tagline}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton size="lg" label="Get Free Quote on WhatsApp" message={waMsg} />
              <CallButton size="lg" variant="outline" showNumber />
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {p.bestFor.map((b) => (
                <li key={b} className="rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-medium text-brand-700">
                  Ideal for {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-cream-200 shadow-card">
            <Image src={p.heroImage} alt={p.name} fill priority sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Overview + specs */}
      <section className="section">
        <div className="container-tight grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="heading-lg">Overview</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              {p.overview.map((para, i) => (
                <p key={i} className="leading-relaxed">{para}</p>
              ))}
            </div>

            <h3 className="mt-10 font-heading text-xl font-semibold text-ink">Key features</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {p.features.map((f) => (
                <div key={f.title} className="rounded-2xl border border-cream-200 bg-white p-5 shadow-soft">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-leaf" />
                    <h4 className="font-heading font-semibold text-ink">{f.title}</h4>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                </div>
              ))}
            </div>

            {/* Gallery */}
            <h3 className="mt-10 font-heading text-xl font-semibold text-ink">Gallery</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {p.gallery.map((src, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-xl border border-cream-200">
                  <Image src={src} alt={`${p.name} example ${i + 1}`} fill sizes="33vw" className="object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* Specs sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-cream-200 bg-cream-50 p-6">
              <h3 className="font-heading text-lg font-semibold text-ink">Specifications</h3>
              <dl className="mt-4 divide-y divide-cream-200">
                {p.specs.map((s) => (
                  <div key={s.label} className="flex justify-between gap-4 py-2.5 text-sm">
                    <dt className="text-muted-foreground">{s.label}</dt>
                    <dd className="text-right font-medium text-ink">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6">
                <WhatsAppButton className="w-full" message={waMsg} label="Request a Quote" />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Guarantees />
      <FaqSection faqs={p.faqs} title={`${p.shortName} — FAQs`} />

      {/* Related */}
      <section className="section bg-cream-50">
        <div className="container-tight">
          <h2 className="heading-lg text-center">Explore related products</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/products/${r.slug}`}
                className="group overflow-hidden rounded-2xl border border-cream-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={r.heroImage} alt={r.name} fill sizes="33vw" className="object-cover transition group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between p-4">
                  <span className="font-heading font-semibold text-ink">{r.shortName}</span>
                  <ArrowRight className="h-4 w-4 text-brand-300 transition group-hover:translate-x-1 group-hover:text-brand" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection defaultProduct={p.name} />
      <CtaBand />

      <JsonLd data={productSchema({ name: p.name, description: p.metaDescription, image: p.heroImage, slug: p.slug, priceFrom: p.priceFrom })} />
    </>
  );
}
