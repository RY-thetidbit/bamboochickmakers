import Image from 'next/image';
import { BadgeCheck, Quote, Star } from 'lucide-react';
import { WhatsAppButton } from '@/components/cta/whatsapp-button';
import { CallButton } from '@/components/cta/call-button';
import { Reveal } from '@/components/ui/reveal';
import { site } from '@/lib/site';
import { cn } from '@/lib/utils';

const initials = site.owner.name
  .split(' ')
  .map((w) => w[0])
  .join('')
  .slice(0, 2)
  .toUpperCase();

export function Owner({ className }: { className?: string }) {
  return (
    <section className={cn('section', className)}>
      <div className="container-tight">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Visual */}
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-cream-200 bg-brand shadow-card">
                {site.owner.photo ? (
                  <Image
                    src={site.owner.photo}
                    alt={`${site.owner.name} — ${site.owner.role}, Bamboo Chick Makers`}
                    fill
                    sizes="(max-width:1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-brand-500 to-brand-800 text-white">
                    <div className="pointer-events-none absolute inset-0 bg-grain opacity-30" aria-hidden />
                    <span className="font-heading text-7xl font-bold tracking-tight">{initials}</span>
                    <span className="mt-3 text-sm font-medium uppercase tracking-[0.25em] text-cream-100/80">
                      Founder
                    </span>
                  </div>
                )}
              </div>
              {/* Floating credential card */}
              <div className="absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-cream-200 bg-white px-5 py-4 shadow-card">
                <p className="font-heading text-base font-semibold text-ink">{site.owner.name}</p>
                <p className="text-sm text-muted-foreground">{site.owner.role}</p>
                <div className="mt-2 flex items-center gap-1 text-leaf">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-leaf text-leaf" />
                  ))}
                  <span className="ml-1 text-xs font-medium text-muted-foreground">
                    {site.yearsExperience}+ years of craft
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="lg:col-span-7">
            <span className="eyebrow">Meet the Owner</span>
            <h2 className="heading-lg mt-4 text-balance">
              Led by {site.owner.name}, hands-on from quote to install
            </h2>

            <div className="mt-5 space-y-4 text-muted-foreground">
              {site.owner.bio.map((para, i) => (
                <p key={i} className="leading-relaxed">{para}</p>
              ))}
            </div>

            <figure className="mt-6 rounded-2xl border-l-4 border-brand bg-cream-50 p-5">
              <Quote className="h-6 w-6 text-brand-300" aria-hidden />
              <blockquote className="mt-2 font-heading text-lg font-medium italic text-ink">
                “{site.owner.quote}”
              </blockquote>
              <figcaption className="mt-2 text-sm font-semibold text-brand-700">
                — {site.owner.name}, {site.owner.role}
              </figcaption>
            </figure>

            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                `${site.yearsExperience}+ years experience`,
                `${site.installationsCount}+ installations`,
                'Personally supervised',
              ].map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm font-medium text-ink">
                  <BadgeCheck className="h-5 w-5 shrink-0 text-leaf" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton size="lg" label={`Chat with ${site.owner.name.split(' ')[0]}`} />
              <CallButton size="lg" variant="outline" showNumber />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
