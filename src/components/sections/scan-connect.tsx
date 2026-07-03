import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Instagram, ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site';
import { whatsappLink } from '@/lib/utils';

type QRCard = {
  key: string;
  title: string;
  subtitle: string;
  image: string;
  href?: string;
  cta?: string;
  icon?: typeof MessageCircle;
};

const connectCards: QRCard[] = [
  {
    key: 'whatsapp',
    title: 'Chat on WhatsApp',
    subtitle: 'Scan to message Sanjay directly for quotes & sizes.',
    image: site.qr.whatsapp,
    href: whatsappLink(site.whatsapp, site.waMessages.general),
    cta: 'Open WhatsApp',
    icon: MessageCircle,
  },
  {
    key: 'instagram',
    title: 'Follow on Instagram',
    subtitle: '@sanjaybamboochickmaker — see our latest work.',
    image: site.qr.instagram,
    href: site.social.instagram,
    cta: 'View Profile',
    icon: Instagram,
  },
].filter((c) => c.image);

const payCards: QRCard[] = [
  {
    key: 'upi',
    title: 'Pay via UPI',
    subtitle: 'Scan with any UPI app — GPay, Paytm, BHIM & more.',
    image: site.qr.upi,
  },
].filter((c) => c.image);

function QRTile({ card }: { card: QRCard }) {
  const inner = (
    <>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-cream-50">
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="(max-width:640px) 90vw, 300px"
          className="object-contain"
        />
      </div>
      <div className="mt-4 flex items-start gap-3">
        {card.icon && (
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand">
            <card.icon className="h-4 w-4" />
          </span>
        )}
        <div>
          <p className="font-heading text-base font-semibold text-ink">{card.title}</p>
          <p className="mt-0.5 text-sm text-muted-foreground">{card.subtitle}</p>
        </div>
      </div>
      {card.href && card.cta && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          {card.cta} <ArrowUpRight className="h-4 w-4" />
        </span>
      )}
    </>
  );

  const className =
    'block rounded-2xl border border-cream-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-card';

  return card.href ? (
    <Link href={card.href} target="_blank" rel="noopener noreferrer" className={className}>
      {inner}
    </Link>
  ) : (
    <div className={className}>{inner}</div>
  );
}

export function ScanConnect() {
  return (
    <section className="section bg-cream-50/50">
      <div className="container-tight">
        {/* Connect */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">Scan to Connect</p>
          <h2 className="mt-2 font-heading text-2xl font-semibold text-ink sm:text-3xl">
            Reach us in one scan
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Point your phone camera at a code to chat, follow, or pay — no typing needed.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-3xl gap-5 sm:grid-cols-2">
          {connectCards.map((c) => (
            <QRTile key={c.key} card={c} />
          ))}
        </div>

        {/* Payments */}
        {payCards.length > 0 && (
          <div className="mt-14">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">Easy &amp; Secure Payments</p>
              <h2 className="mt-2 font-heading text-2xl font-semibold text-ink sm:text-3xl">Scan &amp; pay</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Pay your advance or final bill instantly. We accept {site.payments.accepts.join(', ')}.
              </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-3xl gap-5 sm:grid-cols-2">
              {payCards.map((c) => (
                <QRTile key={c.key} card={c} />
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-muted-foreground">
              Payments are collected by Sanjay Sikarwar (Bamboo Chick Makers). Please confirm the amount on WhatsApp
              before paying.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
