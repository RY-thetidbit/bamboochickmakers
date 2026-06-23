'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { Faq } from '@/data/faqs';

export function FaqAccordion({ faqs, className }: { faqs: Faq[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={cn('mx-auto max-w-3xl divide-y divide-cream-200 overflow-hidden rounded-2xl border border-cream-200 bg-white', className)}>
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
              aria-expanded={isOpen}
            >
              <span className="font-heading text-base font-semibold text-ink sm:text-lg">{faq.question}</span>
              <ChevronDown
                className={cn('h-5 w-5 shrink-0 text-brand transition-transform duration-300', isOpen && 'rotate-180')}
                aria-hidden
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:text-base">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
