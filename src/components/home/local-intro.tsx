import Link from 'next/link';
import { MapPin, Phone, Star } from 'lucide-react';
import { WhatsAppButton } from '@/components/cta/whatsapp-button';
import { site } from '@/lib/site';
import { telLink } from '@/lib/utils';

/** Keyword-rich local intro band — targets "Bamboo Chick Makers in Vasant Vihar / Delhi". */
export function LocalIntro() {
  return (
    <section className="section bg-white">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">
            <MapPin className="h-3.5 w-3.5" /> Vasant Vihar, New Delhi
          </span>
          <h2 className="heading-lg mt-4 text-balance">
            Bamboo Chick Makers in Vasant Vihar, Delhi
          </h2>
          <div className="mt-5 space-y-4 text-left text-muted-foreground sm:text-center">
            <p className="leading-relaxed">
              Looking for trusted <strong className="text-ink">bamboo chick makers in Vasant Vihar</strong> or anywhere in{' '}
              <strong className="text-ink">Delhi</strong>? Bamboo Chick Makers is a Vasant Vihar–based manufacturer and
              installer of premium bamboo chicks, bamboo blinds, zebra blinds, roller &amp; vertical blinds, anti-bird
              &amp; pigeon nets, bamboo jafri and bamboo huts — made to measure and professionally fitted.
            </p>
            <p className="leading-relaxed">
              With over {site.yearsExperience} years of experience, {site.installationsCount}+ completed installations and
              a {site.rating.value}★ rating, we help homes, offices, cafés and farmhouses across{' '}
              <Link href="/bamboo-chick-delhi" className="font-medium text-brand-700 underline-offset-2 hover:underline">Delhi</Link>,{' '}
              <Link href="/bamboo-chick-vasant-vihar" className="font-medium text-brand-700 underline-offset-2 hover:underline">Vasant Vihar</Link>,{' '}
              <Link href="/bamboo-chick-south-delhi" className="font-medium text-brand-700 underline-offset-2 hover:underline">South Delhi</Link>,{' '}
              <Link href="/bamboo-chick-gurgaon" className="font-medium text-brand-700 underline-offset-2 hover:underline">Gurgaon</Link> and{' '}
              <Link href="/bamboo-chick-noida" className="font-medium text-brand-700 underline-offset-2 hover:underline">Noida</Link>{' '}
              beat the heat, gain privacy and add natural beauty.
            </p>
          </div>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton size="lg" />
            <Link
              href={telLink(site.phone)}
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand/25 px-6 py-3 text-sm font-semibold text-brand-700 transition hover:border-brand hover:bg-brand-50"
            >
              <Phone className="h-4 w-4" /> {site.phoneDisplay}
            </Link>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-leaf text-leaf" />
              ))}
            </span>
            Rated {site.rating.value}/5 by {site.rating.count}+ customers across Delhi NCR
          </div>
        </div>
      </div>
    </section>
  );
}
