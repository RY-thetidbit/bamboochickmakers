import Link from 'next/link';
import type { Metadata } from 'next';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { PageHero } from '@/components/ui/page-hero';
import { ScanConnect } from '@/components/sections/scan-connect';
import { CtaBand } from '@/components/cta/cta-band';
import { JsonLd } from '@/components/seo/json-ld';
import { localBusinessSchema } from '@/lib/schema';
import { site } from '@/lib/site';
import { telLink, whatsappLink } from '@/lib/utils';

export const metadata: Metadata = buildMetadata({
  title: 'Scan to Connect & Pay — Bamboo Chick Makers',
  description:
    'Scan our WhatsApp, Instagram, PhonePe and UPI QR codes to chat, follow or pay Bamboo Chick Makers instantly. Quick, secure and contactless across Delhi NCR.',
  path: '/connect',
  keywords: [
    'bamboo chick makers whatsapp',
    'bamboo chick makers upi',
    'bamboo chick makers phonepe',
    'bamboo chick makers instagram',
    'scan to pay bamboo chick',
  ],
});

const quickLinks = [
  { icon: MessageCircle, label: 'WhatsApp', value: site.phoneDisplay, href: whatsappLink(site.whatsapp, site.waMessages.general), external: true },
  { icon: Phone, label: 'Call Us', value: site.phoneDisplay, href: telLink(site.phone), external: false },
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}`, external: false },
];

export default function ConnectPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Scan to Connect', path: '/connect' }]} />
      <PageHero
        eyebrow="Scan to Connect"
        title="Chat, follow &amp; pay — in one scan"
        description="Point your phone camera at any code below to message us on WhatsApp, follow our latest work on Instagram, or pay your advance and final bill securely via PhonePe & UPI."
        showCtas={false}
      >
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {quickLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3 rounded-2xl border border-cream-200 bg-white px-4 py-3 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand">
                <l.icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">{l.label}</span>
                <span className="block truncate text-sm font-medium text-ink">{l.value}</span>
              </span>
            </Link>
          ))}
        </div>
      </PageHero>

      <ScanConnect />

      <CtaBand />

      <JsonLd data={localBusinessSchema({ path: '/connect' })} />
    </>
  );
}
