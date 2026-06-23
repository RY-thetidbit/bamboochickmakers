import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { PageHero } from '@/components/ui/page-hero';
import { LegalContent } from '@/components/sections/legal-content';
import { site } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: `Privacy Policy for ${site.name} — how we collect, use and protect the information you share with us.`,
  path: '/privacy-policy',
  noIndex: false,
});

const blocks = [
  {
    heading: '1. Introduction',
    body: [
      `This Privacy Policy explains how ${site.name} (“we”, “us”, “our”) collects, uses and protects the personal information you provide when you use our website ${site.domain} or contact us for our products and services.`,
    ],
  },
  {
    heading: '2. Information We Collect',
    body: [
      'We may collect your name, phone number, email address, city and details about your enquiry when you submit our enquiry form, message us on WhatsApp, call us or email us.',
      'We may also collect basic, non-identifying analytics data such as pages visited and device type to improve our website.',
    ],
  },
  {
    heading: '3. How We Use Your Information',
    body: [
      'We use the information you provide to respond to your enquiry, prepare quotations, schedule measurements and installations, and provide after-sales support.',
      'We do not sell or rent your personal information to third parties.',
    ],
  },
  {
    heading: '4. WhatsApp & Communications',
    body: [
      'When you contact us via WhatsApp, your message and number are processed in line with WhatsApp’s own privacy terms. We use these details only to assist with your enquiry.',
    ],
  },
  {
    heading: '5. Data Security',
    body: [
      'We take reasonable measures to protect your information against unauthorised access, alteration or disclosure. However, no method of transmission over the internet is completely secure.',
    ],
  },
  {
    heading: '6. Your Rights',
    body: [
      `You may request access to, correction of, or deletion of your personal data by contacting us at ${site.email}.`,
    ],
  },
  {
    heading: '7. Contact Us',
    body: [
      `If you have any questions about this Privacy Policy, please contact us at ${site.email} or ${site.phoneDisplay}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Privacy Policy', path: '/privacy-policy' }]} />
      <PageHero eyebrow="Legal" title="Privacy Policy" showCtas={false} />
      <LegalContent blocks={blocks} updated="23 June 2026" />
    </>
  );
}
