'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
  animate,
  type MotionValue,
} from 'framer-motion';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

// Real installations revealed behind the opening blind.
const PHOTOS = [
  { src: '/images/bamboochickwall.jpg', title: 'Outdoor Privacy Wall', location: 'Vasant Vihar, Delhi' },
  { src: '/images/bamboochickgarage.jpg', title: 'Garage Roll-Up Chick', location: 'South Delhi' },
  { src: '/images/Bamboochickoutdoor.jpg', title: 'Balcony Bamboo Chick', location: 'Dwarka, Delhi' },
  { src: '/images/fancyChick.jpg', title: 'Fancy Designer Chick', location: 'Hauz Khas, Delhi' },
  { src: '/images/Bamboohuts.jpg', title: 'Resort Bamboo Hut', location: 'Gurgaon' },
];

const N = 12; // number of blind slats
const SPREAD = 4; // how many slats move at once (wave softness)
const REED_GRADIENT =
  'linear-gradient(to bottom, #ecd3a8 0%, #d3ac7d 36%, #b0824f 68%, #8b5e3c 100%)';

const MOTES = [
  { left: '20%', top: '30%', delay: '0s' },
  { left: '46%', top: '58%', delay: '1.8s' },
  { left: '68%', top: '36%', delay: '3s' },
  { left: '82%', top: '62%', delay: '1s' },
];

const smoothstep = (p: number) => p * p * (3 - 2 * p);

/** One blind slat — tilts open on a shared motion value, staggered by its index. */
function Slat({ open, index }: { open: MotionValue<number>; index: number }) {
  const rotateX = useTransform(open, (v) => {
    const p = Math.min(1, Math.max(0, (v * (N + SPREAD) - index) / SPREAD));
    return -84 * smoothstep(p);
  });
  return (
    <motion.div
      style={{ rotateX, transformOrigin: 'top center', backgroundImage: REED_GRADIENT }}
      className="relative -mt-px flex-1 origin-top will-change-transform
        [backface-visibility:hidden] shadow-[0_3px_8px_-3px_rgba(0,0,0,0.5)]"
    >
      <div className="absolute inset-x-0 bottom-0 h-px bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-black/10" />
    </motion.div>
  );
}

/** Cinematic hero — a bamboo blind opens in a wave to reveal real installation photos. */
export function HeroReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-10%' });
  const open = useMotionValue(0);
  const [index, setIndex] = useState(0);

  // Cursor-follow 3D tilt
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 18 });
  const sry = useSpring(ry, { stiffness: 120, damping: 18 });

  const captionOpacity = useTransform(open, [0.5, 1], [0, 1]);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      open.set(1);
      return;
    }
    let cancelled = false;
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
    (async () => {
      await wait(500);
      while (!cancelled) {
        await animate(open, 1, { duration: 1.5, ease: [0.5, 0, 0.2, 1] }); // open wave
        if (cancelled) break;
        await wait(2200); // hold — admire the work
        if (cancelled) break;
        await animate(open, 0, { duration: 1.15, ease: [0.5, 0, 0.5, 1] }); // close wave
        if (cancelled) break;
        setIndex((i) => (i + 1) % PHOTOS.length); // swap while covered
        await wait(450);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [inView, open]);

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const r = el.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 8);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 8);
  }
  function handleLeave() {
    rx.set(0);
    ry.set(0);
  }

  const photo = PHOTOS[index];

  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} style={{ perspective: 1100 }}>
      <motion.div
        style={{ rotateX: srx, rotateY: sry, transformStyle: 'preserve-3d' }}
        className="relative aspect-square overflow-hidden rounded-3xl border border-cream-200 bg-brand-900 shadow-card"
      >
        {/* Revealed photo with slow Ken Burns */}
        <div className="absolute inset-0">
          <div key={index} className="absolute inset-0 animate-kenburns">
            <Image
              src={photo.src}
              alt={`${photo.title} — ${photo.location}`}
              fill
              priority
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/10" />
        </div>

        {/* The bamboo blind (slats) */}
        <div
          className="absolute inset-0 flex flex-col"
          style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
        >
          {Array.from({ length: N }).map((_, i) => (
            <Slat key={i} open={open} index={i} />
          ))}
        </div>

        {/* Vertical binding cords over the blind */}
        <div className="pointer-events-none absolute left-[30%] top-0 h-full w-px bg-black/20" />
        <div className="pointer-events-none absolute right-[30%] top-0 h-full w-px bg-black/20" />

        {/* Top wooden batten */}
        <div className="absolute inset-x-0 top-0 z-10 h-4 bg-gradient-to-b from-brand-600 to-brand-800 shadow-[0_4px_10px_-2px_rgba(0,0,0,0.4)]" />

        {/* Sunlight glint */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -inset-y-8 left-1/2 w-24 -translate-x-1/2 rotate-[16deg] animate-shimmer bg-gradient-to-b from-white/55 via-amber-100/20 to-transparent blur-md" />
        </div>

        {/* Floating motes */}
        <div className="pointer-events-none absolute inset-0">
          {MOTES.map((m) => (
            <span
              key={m.left}
              className="absolute h-1.5 w-1.5 animate-drift rounded-full bg-amber-50/80 blur-[1px]"
              style={{ left: m.left, top: m.top, animationDelay: m.delay }}
            />
          ))}
        </div>

        {/* Live caption */}
        <motion.div style={{ opacity: captionOpacity }} className="absolute bottom-4 left-4 z-10 max-w-[70%]">
          <p className="font-heading text-lg font-semibold text-white drop-shadow-sm">{photo.title}</p>
          <p className="mt-0.5 flex items-center gap-1 text-xs font-medium text-cream-100/90">
            <MapPin className="h-3.5 w-3.5" /> {photo.location}
          </p>
        </motion.div>

        {/* Progress dots */}
        <div className="absolute bottom-5 right-4 z-10 flex items-center gap-1.5">
          {PHOTOS.map((p, i) => (
            <span
              key={p.src}
              className={cn(
                'h-1.5 rounded-full transition-all duration-500',
                i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/50',
              )}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
