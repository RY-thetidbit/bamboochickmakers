import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Hero } from '@/components/home/hero';
import { LocalIntro } from '@/components/home/local-intro';
import { StatsBand } from '@/components/sections/stats-band';
import { WhyChoose } from '@/components/home/why-choose';
import { ProductCategories } from '@/components/home/product-categories';
import { BeforeAfterSection } from '@/components/home/before-after-section';
import { Process } from '@/components/home/process';
import { ProjectShowcase } from '@/components/home/project-showcase';
import { Guarantees } from '@/components/sections/guarantees';
import { Owner } from '@/components/sections/owner';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { ServiceAreasSection } from '@/components/home/service-areas-section';
import { LocationMap } from '@/components/sections/location-map';
import { QuoteSection } from '@/components/sections/quote-section';
import { FaqSection } from '@/components/sections/faq-section';
import { CtaBand } from '@/components/cta/cta-band';
import { JsonLd } from '@/components/seo/json-ld';
import { localBusinessSchema, reviewSchema } from '@/lib/schema';
import { generalFaqs } from '@/data/faqs';
import { testimonials } from '@/data/testimonials';

export const metadata: Metadata = buildMetadata({
  title: 'Bamboo Chick Makers in Vasant Vihar, Delhi — Chicks, Blinds & Nets',
  description:
    'Bamboo Chick Makers in Vasant Vihar, Delhi — custom bamboo chicks, blinds, zebra blinds, pigeon nets, jafri & huts. 10+ years, 500+ installs, 4.9★. Serving Delhi NCR. Free WhatsApp quote.',
  path: '/',
  keywords: [
    'bamboo chick makers',
    'bamboo chick makers in vasant vihar',
    'bamboo chick makers in vasant vihar delhi',
    'bamboo chick makers in delhi',
    'bamboo chick maker delhi',
    'bamboo chick vasant vihar',
    'bamboo chick delhi',
    'bamboo blinds delhi',
    'zebra blinds delhi',
    'pigeon net delhi',
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <LocalIntro />
      <StatsBand />
      <WhyChoose />
      <ProductCategories />
      <BeforeAfterSection />
      {/* Mid-page conversion band */}
      <CtaBand
        variant="cream"
        title="Get a free measurement & quote this week"
        subtitle="Message us your balcony or window size on WhatsApp — we’ll reply with options and pricing the same day."
      />
      <Process />
      <ProjectShowcase />
      <Guarantees />
      <Owner className="bg-cream-50" />
      <TestimonialsSection />
      <ServiceAreasSection />
      <LocationMap />
      <QuoteSection />
      <FaqSection faqs={generalFaqs.slice(0, 8)} />
      {/* Final conversion CTA */}
      <CtaBand />

      <JsonLd data={[localBusinessSchema(), ...reviewSchema(testimonials.map((t) => ({ name: t.name, rating: t.rating, text: t.text })))]} />
    </>
  );
}
