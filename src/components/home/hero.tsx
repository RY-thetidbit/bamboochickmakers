import Image from 'next/image';
import { CheckCircle2, Star } from 'lucide-react';
import { WhatsAppButton } from '@/components/cta/whatsapp-button';
import { CallButton } from '@/components/cta/call-button';
import { site } from '@/lib/site';

const trustPoints = ['3800+ Installations', '5+ Years Experience', 'Custom Sizes', 'Fast Installation'];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-100">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-60" aria-hidden />
      <div className="container-tight relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-12 lg:py-20">
        {/* Copy */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-sm">
            <span className="flex items-center gap-0.5 text-leaf">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-leaf text-leaf" />
              ))}
            </span>
            Rated {site.rating.value}/5 by {site.rating.count}+ customers
          </div>

          <h1 className="heading-xl mt-5 text-balance">
            Premium <span className="text-brand">Bamboo Chick</span> Manufacturing &amp; Installation
          </h1>

          <p className="lead mt-5 max-w-xl">
            Custom bamboo chicks, blinds, zebra blinds, pigeon nets, jafri &amp; huts for homes, balconies, terraces
            &amp; commercial spaces. Beat the heat, gain privacy and add natural beauty — made-to-measure and
            professionally installed across Delhi NCR — Vasant Vihar, South Delhi, Gurgaon &amp; Noida.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton
              size="lg"
              label="Get Free Quote on WhatsApp"
              className="w-full px-5 text-sm sm:w-auto"
            />
            <CallButton size="lg" variant="outline" showNumber className="w-full px-5 text-sm sm:w-auto" />
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-x-6">
            {trustPoints.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm font-medium text-ink">
                <CheckCircle2 className="h-5 w-5 text-leaf" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-cream-200 shadow-card">
            <Image
              src="/images/Bamboochick.jpg"
              alt="Premium bamboo chick installed on a balcony for shade and privacy"
              fill
              priority
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          {/* Floating stat card */}
          <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-cream-200 bg-white/95 p-4 shadow-card backdrop-blur sm:block">
            <p className="font-heading text-2xl font-bold text-brand">70%</p>
            <p className="text-xs font-medium text-muted-foreground">Less heat &amp; glare</p>
          </div>
          <div className="absolute -right-3 top-6 hidden rounded-2xl border border-cream-200 bg-white/95 p-4 shadow-card backdrop-blur sm:block">
            <p className="font-heading text-2xl font-bold text-leaf">{site.installationsCount}+</p>
            <p className="text-xs font-medium text-muted-foreground">Happy installations</p>
          </div>
        </div>
      </div>
    </section>
  );
}
