import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/utils';
import { site } from '@/lib/site';

/** Always-visible floating WhatsApp button (desktop + tablet). */
export function FloatingWhatsApp() {
  return (
    <Link
      href={whatsappLink(site.whatsapp, site.waMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-5 z-40 hidden items-center justify-center md:flex"
    >
      <span className="absolute inline-flex h-14 w-14 animate-pulse-ring rounded-full" />
      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-card transition-transform hover:scale-105">
        <MessageCircle className="h-7 w-7" aria-hidden />
      </span>
    </Link>
  );
}
