'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import type { Stat } from '@/data/content';

function AnimatedValue({ value }: { value: string }) {
  // Parse once per `value` so the parsed result is a stable effect dependency.
  const { target, suffix, animate } = useMemo(() => {
    const m = value.match(/^(\d+)(.*)$/);
    return m
      ? { target: parseInt(m[1], 10), suffix: m[2], animate: true }
      : { target: 0, suffix: value, animate: false };
  }, [value]);

  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!inView || !animate) return;
    let raf = 0;
    const duration = 1400;
    let start: number | null = null;
    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, animate]);

  return (
    <span ref={ref}>
      {animate ? n : ''}
      {suffix}
    </span>
  );
}

export function StatCounter({ stats, variant = 'light' }: { stats: Stat[]; variant?: 'light' | 'dark' }) {
  const dark = variant === 'dark';
  return (
    <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className={`font-heading text-3xl font-bold sm:text-4xl lg:text-5xl ${dark ? 'text-white' : 'text-brand'}`}>
            <AnimatedValue value={s.value} />
          </div>
          <div className={`mt-1.5 text-sm font-medium ${dark ? 'text-cream-100/80' : 'text-muted-foreground'}`}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
