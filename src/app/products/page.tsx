import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { PageHero } from '@/components/ui/page-hero';
import { Reveal } from '@/components/ui/reveal';
import { Guarantees } from '@/components/sections/guarantees';
import { QuoteSection } from '@/components/sections/quote-section';
import { CtaBand } from '@/components/cta/cta-band';
import { products, type Product } from '@/data/products';
import { site } from '@/lib/site';
import { whatsappLink } from '@/lib/utils';

export const metadata: Metadata = buildMetadata({
  title: 'Our Products — Bamboo Chicks, Blinds, Nets, Jafri & Huts',
  description:
    'Explore our full range — bamboo chicks, fancy chicks, bamboo & zebra blinds, vertical & roller blinds, anti-bird/pigeon nets, bamboo jafri and bamboo huts. Custom-made and installed across Delhi NCR.',
  path: '/products',
  keywords: ['bamboo chick', 'bamboo blinds', 'zebra blinds', 'pigeon net', 'bamboo jafri', 'bamboo hut'],
});

const groups: { key: Product['group']; title: string; description: string }[] = [
  { key: 'Bamboo', title: 'Bamboo Chicks & Curtains', description: 'Handwoven chicks, fancy designer chicks and natural partitions.' },
  { key: 'Blinds', title: 'Window Blinds', description: 'Bamboo, zebra, roller and vertical blinds for precise light control.' },
  { key: 'Outdoor & Nets', title: 'Outdoor, Nets & Structures', description: 'Pigeon nets, bamboo jafri fencing, huts, gazebos and resort shading.' },
];

function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cream-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card">
      <Link href={`/products/${p.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={p.heroImage}
          alt={p.name}
          fill
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand px-2.5 py-1 text-xs font-semibold text-white">
          {p.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-semibold text-ink">
          <Link href={`/products/${p.slug}`} className="hover:text-brand">{p.name}</Link>
        </h3>
        <p className="mt-1 text-sm font-semibold text-leaf">From {p.priceFrom}</p>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
        <div className="mt-4 flex items-center gap-2">
          <Link
            href={`/products/${p.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Details <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={whatsappLink(site.whatsapp, `Hello, I am interested in ${p.name}. Please share pricing and options.`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${p.name} on WhatsApp`}
            className="inline-flex items-center gap-1.5 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white transition hover:bg-whatsapp-dark"
          >
            <MessageCircle className="h-4 w-4" /> Enquire
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ProductsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Products', path: '/products' }]} />
      <PageHero
        eyebrow="Our Products"
        title="Bamboo chicks, blinds, nets, jafri & huts — made to measure"
        description="One supplier for your whole project. Every product is custom-made from quality, weather-treated materials and fitted by our own teams across Delhi NCR."
      />

      <section className="section">
        <div className="container-tight space-y-16">
          {groups.map((g) => {
            const items = products.filter((p) => p.group === g.key);
            return (
              <div key={g.key}>
                <div className="max-w-2xl">
                  <h2 className="heading-lg text-2xl sm:text-3xl">{g.title}</h2>
                  <p className="lead mt-2 text-base">{g.description}</p>
                </div>
                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((p, i) => (
                    <Reveal key={p.slug} delay={i * 0.04}>
                      <ProductCard p={p} />
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Guarantees />
      <QuoteSection />
      <CtaBand />
    </>
  );
}
