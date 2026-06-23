import { WhatsAppButton } from '@/components/cta/whatsapp-button';
import { CallButton } from '@/components/cta/call-button';
import { cn } from '@/lib/utils';

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  showCtas?: boolean;
  className?: string;
  children?: React.ReactNode;
};

/** Standard inner-page hero/banner. */
export function PageHero({ eyebrow, title, description, showCtas = true, className, children }: Props) {
  return (
    <section className={cn('relative overflow-hidden bg-cream-100', className)}>
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-50" aria-hidden />
      <div className="container-tight relative py-14 lg:py-20">
        <div className="max-w-3xl">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className={cn('heading-xl text-balance', eyebrow && 'mt-4')}>{title}</h1>
          {description && <p className="lead mt-5 max-w-2xl">{description}</p>}
          {showCtas && (
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton size="lg" />
              <CallButton size="lg" variant="outline" showNumber />
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
