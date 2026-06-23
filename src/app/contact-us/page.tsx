import Link from 'next/link';
import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { PageHero } from '@/components/ui/page-hero';
import { LeadForm } from '@/components/cta/lead-form';
import { JsonLd } from '@/components/seo/json-ld';
import { localBusinessSchema } from '@/lib/schema';
import { site } from '@/lib/site';
import { telLink, whatsappLink } from '@/lib/utils';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us — Get a Free Bamboo Chick Quote',
  description:
    'Contact Bamboo Chick Makers in Vasant Vihar, New Delhi for a free quote. WhatsApp, call or send an enquiry for custom bamboo chick manufacturing & installation across Delhi NCR.',
  path: '/contact-us',
  keywords: ['contact bamboo chick makers', 'bamboo chick quote', 'bamboo chick phone number'],
});

const contactCards = [
  { icon: Phone, label: 'Call Us', value: site.phoneDisplay, href: telLink(site.phone) },
  { icon: MessageCircle, label: 'WhatsApp', value: site.phoneDisplay, href: whatsappLink(site.whatsapp, site.waMessages.general) },
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
];

export default function ContactPage() {
  const mapsQuery = encodeURIComponent(`${site.name}, ${site.address.full}`);
  return (
    <>
      <Breadcrumbs items={[{ name: 'Contact Us', path: '/contact-us' }]} />
      <PageHero
        eyebrow="Contact Us"
        title="Let’s plan your bamboo chick project"
        description="The fastest way to a quote is WhatsApp — send your sizes and a photo and we’ll reply the same day. Prefer a call or form? We’re here for that too."
        showCtas={false}
      />

      <section className="section">
        <div className="container-tight grid gap-10 lg:grid-cols-2">
          {/* Info */}
          <div>
            <div className="grid gap-4 sm:grid-cols-3">
              {contactCards.map((c) => (
                <Link
                  key={c.label}
                  href={c.href}
                  target={c.label === 'WhatsApp' ? '_blank' : undefined}
                  rel={c.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                  className="rounded-2xl border border-cream-200 bg-white p-5 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-card"
                >
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{c.label}</p>
                  <p className="mt-1 break-words text-sm font-medium text-ink">{c.value}</p>
                </Link>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-cream-200 bg-cream-50 p-6">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span className="text-ink">{site.address.full}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-brand" />
                  <span className="text-ink">{site.hours}</span>
                </li>
              </ul>
            </div>

            {/* Map placeholder */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-cream-200 shadow-soft">
              <iframe
                title={`${site.name} location map`}
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                width="100%"
                height="300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-cream-200 bg-white p-6 shadow-card sm:p-8">
            <h2 className="font-heading text-xl font-semibold text-ink">Send us an enquiry</h2>
            <p className="mt-1 text-sm text-muted-foreground">Fill this in and we’ll continue on WhatsApp.</p>
            <div className="mt-6">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <JsonLd data={localBusinessSchema({ path: '/contact-us' })} />
    </>
  );
}
