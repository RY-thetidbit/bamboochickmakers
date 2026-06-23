import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { Logo } from './logo';
import { site, footerNav } from '@/lib/site';
import { cities } from '@/data/cities';
import { whatsappLink, telLink } from '@/lib/utils';

const socials = [
  { label: 'Instagram', href: site.social.instagram, icon: Instagram },
  { label: 'Facebook', href: site.social.facebook, icon: Facebook },
  { label: 'YouTube', href: site.social.youtube, icon: Youtube },
].filter((s) => s.href);

export function Footer() {
  return (
    <footer className="bg-ink text-cream-100/80">
      <div className="container-tight py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-100/70">
              {site.name} manufactures, customizes and installs premium bamboo chicks, blinds and curtains for homes,
              balconies, terraces and commercial spaces across Delhi NCR — Vasant Vihar, South Delhi, Gurgaon and Noida.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-brand"
                >
                  <s.icon className="h-4 w-4 text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            <FooterCol title="Products" links={footerNav.products} />
            <FooterCol title="Company" links={footerNav.company} />
            <FooterCol title="Support" links={footerNav.support} />
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">Get in Touch</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <span>{site.address.full}</span>
              </li>
              <li>
                <Link href={telLink(site.phone)} className="flex items-center gap-3 hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-brand-300" /> {site.phoneDisplay}
                </Link>
              </li>
              <li>
                <Link href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-white">
                  <Mail className="h-4 w-4 shrink-0 text-brand-300" /> {site.email}
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-brand-300" /> {site.hours}
              </li>
            </ul>
            <Link
              href={whatsappLink(site.whatsapp, site.waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-whatsapp-dark"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </Link>
          </div>
        </div>

        {/* Service areas */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Service Areas</h3>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {cities.map((c) => (
              <Link key={c.slug} href={`/${c.slug}`} className="text-cream-100/70 hover:text-white">
                Bamboo Chick {c.city}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-tight flex flex-col items-center justify-between gap-3 py-5 text-xs text-cream-100/60 sm:flex-row">
          <p>© {site.foundingYear}–2026 {site.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-cream-100/70 transition hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
