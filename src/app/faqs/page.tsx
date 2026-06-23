import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { PageHero } from '@/components/ui/page-hero';
import { FaqSection } from '@/components/sections/faq-section';
import { CtaBand } from '@/components/cta/cta-band';
import { generalFaqs } from '@/data/faqs';

export const metadata: Metadata = buildMetadata({
  title: 'Frequently Asked Questions — Bamboo Chick',
  description:
    'Answers to common questions about bamboo chick pricing, custom sizes, installation, durability, warranty and service areas across Delhi NCR.',
  path: '/faqs',
  keywords: ['bamboo chick faq', 'bamboo chick price questions', 'bamboo chick installation faq'],
});

export default function FaqsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'FAQs', path: '/faqs' }]} />
      <PageHero
        eyebrow="FAQs"
        title="Your bamboo chick questions, answered"
        description="From pricing and custom sizes to durability and installation — here’s everything you need to know before you order."
      />
      <FaqSection
        faqs={generalFaqs}
        title="Common questions"
        description="Still unsure about something? Message us on WhatsApp and we’ll help you pick the right solution."
      />
      <CtaBand />
    </>
  );
}
