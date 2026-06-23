import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';
import { whatsappLink, telLink } from '@/lib/utils';
import { site } from '@/lib/site';

/** Sticky bottom action bar shown only on mobile for maximum conversion. */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-cream-200 bg-white/95 shadow-[0_-4px_24px_-8px_rgba(31,41,55,0.18)] backdrop-blur md:hidden">
      <Link
        href={telLink(site.phone)}
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-brand-700"
        aria-label={`Call ${site.phoneDisplay}`}
      >
        <Phone className="h-5 w-5" aria-hidden />
        Call Now
      </Link>
      <Link
        href={whatsappLink(site.whatsapp, site.waMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-whatsapp py-3.5 text-sm font-semibold text-white"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="h-5 w-5" aria-hidden />
        WhatsApp
      </Link>
    </div>
  );
}
