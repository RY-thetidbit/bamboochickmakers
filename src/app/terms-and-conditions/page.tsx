import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { PageHero } from '@/components/ui/page-hero';
import { LegalContent } from '@/components/sections/legal-content';
import { site } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Terms & Conditions',
  description: `Terms & Conditions governing the use of ${site.name}'s website, products and installation services.`,
  path: '/terms-and-conditions',
});

const blocks = [
  {
    heading: '1. Acceptance of Terms',
    body: [
      `By accessing ${site.domain} or engaging ${site.name} for products or services, you agree to these Terms & Conditions.`,
    ],
  },
  {
    heading: '2. Products & Custom Orders',
    body: [
      'All bamboo chicks, blinds and curtains are custom-manufactured to the measurements confirmed at the time of order. As such, orders cannot be cancelled once manufacturing has begun.',
      'Product images on this website are illustrative; natural bamboo varies slightly in tone and grain.',
    ],
  },
  {
    heading: '3. Quotations & Pricing',
    body: [
      'Quotations are valid for the period stated and are subject to final on-site measurement. Prices are exclusive of applicable taxes unless stated otherwise.',
    ],
  },
  {
    heading: '4. Measurement & Installation',
    body: [
      'You are responsible for providing safe access for measurement and installation. Installation timelines are estimates and may vary with site conditions and weather.',
    ],
  },
  {
    heading: '5. Warranty',
    body: [
      'We provide a workmanship warranty of up to two years as specified in your order. The warranty excludes damage from misuse, accidents, extreme weather beyond normal exposure, or unauthorised modifications.',
    ],
  },
  {
    heading: '6. Payments',
    body: [
      'Orders typically require an advance deposit, with the balance payable on completion of installation, unless otherwise agreed in writing.',
    ],
  },
  {
    heading: '7. Limitation of Liability',
    body: [
      `${site.name}’s liability is limited to the value of the products or services supplied. We are not liable for indirect or consequential losses.`,
    ],
  },
  {
    heading: '8. Contact',
    body: [
      `For any questions regarding these terms, contact us at ${site.email} or ${site.phoneDisplay}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Terms & Conditions', path: '/terms-and-conditions' }]} />
      <PageHero eyebrow="Legal" title="Terms & Conditions" showCtas={false} />
      <LegalContent blocks={blocks} updated="23 June 2026" />
    </>
  );
}
