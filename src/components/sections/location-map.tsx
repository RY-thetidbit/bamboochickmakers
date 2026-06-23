import Link from 'next/link';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { site } from '@/lib/site';
import { telLink, cn } from '@/lib/utils';

const mapQuery = encodeURIComponent(`${site.name}, ${site.address.full}`);
const embedSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.address.full)}`;

export function LocationMap({ className }: { className?: string }) {
  return (
    <section className={cn('section', className)}>
      <div className="container-tight">
        <SectionHeading
          eyebrow="Find Us"
          title="Visit our Vasant Vihar base"
          description="Based in Vasant Vihar, New Delhi — we offer free site visits and measurement across Delhi NCR. Drop in, call, or get directions below."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Info card */}
          <div className="rounded-2xl border border-cream-200 bg-white p-6 shadow-soft">
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-semibold text-ink">Address</span>
                  <span className="text-muted-foreground">{site.address.full}</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand">
                  <Clock className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-semibold text-ink">Hours</span>
                  <span className="text-muted-foreground">{site.hours}</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand">
                  <Phone className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-semibold text-ink">Phone</span>
                  <Link href={telLink(site.phone)} className="text-muted-foreground hover:text-brand-700">
                    {site.phoneDisplay}
                  </Link>
                </span>
              </li>
            </ul>
            <Link
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
            >
              <Navigation className="h-4 w-4" /> Get Directions
            </Link>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-cream-200 shadow-soft lg:col-span-2">
            <iframe
              title={`${site.name} location — ${site.address.locality}`}
              src={embedSrc}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-full min-h-[320px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
