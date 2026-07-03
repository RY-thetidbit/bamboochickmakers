'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown, MessageCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Logo } from './logo';
import { mainNav, site } from '@/lib/site';
import { cn, whatsappLink, telLink } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'border-b border-cream-200 bg-white/95 shadow-soft backdrop-blur' : 'bg-white/90 backdrop-blur',
      )}
    >
      {/* Top utility bar */}
      <div className="hidden bg-brand text-white lg:block">
        <div className="container-tight flex h-9 items-center justify-between text-xs">
          <span>Premium Bamboo Chick Manufacturing &amp; Installation · Vasant Vihar · South Delhi · Gurgaon · Noida</span>
          <div className="flex items-center gap-4">
            <Link href={telLink(site.phone)} className="flex items-center gap-1.5 hover:text-cream-100">
              <Phone className="h-3.5 w-3.5" /> {site.phoneDisplay}
            </Link>
            <span className="text-cream-100/60">|</span>
            <span>{site.hours}</span>
          </div>
        </div>
      </div>

      <nav className="container-tight flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-0.5 xl:flex">
          {mainNav.map((item) => {
            const active = pathname === item.href;
            if (item.children) {
              return (
                <li key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition',
                      active ? 'text-brand' : 'text-ink hover:bg-brand-50 hover:text-brand-700',
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-0 top-full w-60 translate-y-2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <ul className="overflow-hidden rounded-2xl border border-cream-200 bg-white p-2 shadow-card">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-xl px-3 py-2.5 text-sm text-ink transition hover:bg-cream-100 hover:text-brand-700"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            }
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'rounded-full px-3 py-2 text-sm font-medium transition',
                    active ? 'text-brand' : 'text-ink hover:bg-brand-50 hover:text-brand-700',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href={telLink(site.phone)}
            className="inline-flex h-10 items-center gap-2 rounded-full border-2 border-brand/25 px-4 text-sm font-semibold text-brand-700 transition hover:border-brand hover:bg-brand-50"
          >
            <Phone className="h-4 w-4" /> Call
          </Link>
          <Link
            href={whatsappLink(site.whatsapp, site.waMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-whatsapp px-4 text-sm font-semibold text-white shadow-soft transition hover:bg-whatsapp-dark"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-cream-200 bg-white lg:hidden"
          >
            <ul className="container-tight space-y-1 py-4">
              {mainNav.map((item) => (
                <li key={item.href}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setProductsOpen((v) => !v)}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-ink"
                      >
                        {item.label}
                        <ChevronDown className={cn('h-4 w-4 transition', productsOpen && 'rotate-180')} />
                      </button>
                      {productsOpen && (
                        <ul className="ml-3 space-y-1 border-l border-cream-200 pl-3">
                          <li>
                            <Link href={item.href} className="block rounded-lg px-3 py-2 text-sm text-brand-700">
                              All Products
                            </Link>
                          </li>
                          {item.children.map((c) => (
                            <li key={c.href}>
                              <Link href={c.href} className="block rounded-lg px-3 py-2 text-sm text-muted-foreground">
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link href={item.href} className="block rounded-xl px-3 py-3 text-base font-medium text-ink">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
