'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export type GalleryItem = { src: string; title: string; category: string };

export function LightboxGallery({ items, categories }: { items: GalleryItem[]; categories: string[] }) {
  const [active, setActive] = useState('All');
  const [index, setIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === 'All' ? items : items.filter((i) => i.category === active)),
    [active, items],
  );

  const open = index !== null ? filtered[index] : null;
  const go = (dir: number) =>
    setIndex((i) => (i === null ? null : (i + dir + filtered.length) % filtered.length));

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition',
              active === cat ? 'bg-brand text-white shadow-soft' : 'bg-cream-100 text-brand-700 hover:bg-cream-200',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry */}
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
        {filtered.map((item, i) => (
          <button
            key={`${item.src}-${i}`}
            onClick={() => setIndex(i)}
            className="group relative block w-full overflow-hidden rounded-xl border border-cream-200 shadow-soft"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={500}
              height={i % 3 === 0 ? 640 : 460}
              loading="lazy"
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-3 text-left text-xs font-medium text-white opacity-0 transition group-hover:opacity-100">
              {item.title}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
            onClick={() => setIndex(null)}
          >
            <button className="absolute right-4 top-4 text-white/80 hover:text-white" aria-label="Close">
              <X className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); go(-1); }}
              className="absolute left-4 text-white/80 hover:text-white"
              aria-label="Previous"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>
            <motion.div
              key={open.src}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-h-[85vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={open.src}
                alt={open.title}
                width={1200}
                height={800}
                className="mx-auto h-auto max-h-[85vh] w-auto rounded-xl object-contain"
              />
              <p className="mt-3 text-center text-sm font-medium text-white/90">{open.title}</p>
            </motion.div>
            <button
              onClick={(e) => { e.stopPropagation(); go(1); }}
              className="absolute right-4 text-white/80 hover:text-white"
              aria-label="Next"
            >
              <ChevronRight className="h-10 w-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
