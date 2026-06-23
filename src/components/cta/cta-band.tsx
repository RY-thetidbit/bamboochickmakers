import { WhatsAppButton } from './whatsapp-button';
import { CallButton } from './call-button';
import { site } from '@/lib/site';
import { cn } from '@/lib/utils';

type Props = {
  title?: string;
  subtitle?: string;
  message?: string;
  className?: string;
  variant?: 'brand' | 'cream';
};

/** Reusable conversion band placed after major sections. */
export function CtaBand({
  title = 'Ready for a cooler, more private space?',
  subtitle = 'Get a free, no-obligation quote on WhatsApp today. Fast measurement, custom sizes, professional installation.',
  message = site.waMessages.quote,
  className,
  variant = 'brand',
}: Props) {
  const isBrand = variant === 'brand';
  return (
    <section className={cn('section', className)}>
      <div className="container-tight">
        <div
          className={cn(
            'relative overflow-hidden rounded-3xl px-6 py-12 text-center sm:px-12 sm:py-16',
            isBrand ? 'bg-brand text-white' : 'border border-cream-200 bg-cream-100 text-ink',
          )}
        >
          {isBrand && <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" aria-hidden />}
          <div className="relative mx-auto max-w-2xl">
            <h2 className={cn('heading-lg text-balance', isBrand && 'text-white')}>{title}</h2>
            <p className={cn('mt-4 text-base sm:text-lg', isBrand ? 'text-cream-100/90' : 'text-muted-foreground')}>
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton message={message} size="lg" />
              <CallButton
                variant={isBrand ? 'light' : 'outline'}
                size="lg"
                showNumber
              />
            </div>
            <p className={cn('mt-4 text-sm', isBrand ? 'text-cream-100/80' : 'text-muted-foreground')}>
              {site.hours} · Serving Delhi NCR — Vasant Vihar, South Delhi, Gurgaon & Noida
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
