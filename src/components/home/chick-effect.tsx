'use client';

import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionValueEvent,
  useInView,
  animate,
} from 'framer-motion';
import { Sun, Snowflake, RotateCcw, Eye, Wind } from 'lucide-react';
import { WhatsAppButton } from '@/components/cta/whatsapp-button';

// Deterministic positions so SSR and client markup match (no hydration mismatch).
const MOTES = [
  { left: '14%', top: '34%', delay: '0s' },
  { left: '30%', top: '52%', delay: '1.4s' },
  { left: '48%', top: '28%', delay: '2.6s' },
  { left: '63%', top: '58%', delay: '0.8s' },
  { left: '78%', top: '38%', delay: '3.4s' },
  { left: '88%', top: '60%', delay: '2s' },
];

const SHAFTS = [
  { left: '16%', w: '3.5rem', delay: '0s' },
  { left: '40%', w: '2.75rem', delay: '1.6s' },
  { left: '64%', w: '4rem', delay: '0.9s' },
  { left: '82%', w: '2.5rem', delay: '2.4s' },
];

const REED_TEXTURE =
  'repeating-linear-gradient(180deg, #dcbb8b 0px, #c8a274 2px, #a97d50 3px, #8b5e3c 4px, #b98c5c 6px, #dcbb8b 8px)';
const BINDING_CORDS =
  'repeating-linear-gradient(90deg, transparent 0 44px, rgba(60,41,25,0.32) 44px 46px)';

export function ChickEffect() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inView = useInView(sceneRef, { margin: '-15%' });

  const cover = useMotionValue(0.12);
  const [manual, setManual] = useState(false);
  const [readout, setReadout] = useState({ temp: 44, glare: 0, delta: 0 });

  // Visual layers driven directly by the motion value (no React re-render).
  const chickHeight = useTransform(cover, (v) => `${v * 100}%`);
  const sunOpacity = useTransform(cover, [0, 1], [1, 0.28]);
  const shadeOpacity = useTransform(cover, [0, 1], [0, 0.42]);
  const shaftOpacity = useTransform(cover, [0.25, 1], [0, 0.85]);

  // Numbers + slider position follow the motion value, throttled by rounding.
  useMotionValueEvent(cover, 'change', (v) => {
    if (inputRef.current) inputRef.current.value = String(Math.round(v * 100));
    setReadout((prev) => {
      const temp = Math.round(44 - v * 16); // 44°C in full sun → 28°C under the chick
      const glare = Math.round(v * 92);
      const delta = 44 - temp;
      if (prev.temp === temp && prev.glare === glare && prev.delta === delta) return prev;
      return { temp, glare, delta };
    });
  });

  // Auto-play a gentle demo loop while in view — unless the visitor takes over.
  useEffect(() => {
    if (manual) return;
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      cover.set(0.66);
      return;
    }
    if (!inView) return;
    const controls = animate(cover, [0.12, 1, 0.12], {
      duration: 7.5,
      ease: [0.45, 0, 0.55, 1],
      repeat: Infinity,
    });
    return () => controls.stop();
  }, [inView, manual, cover]);

  return (
    <section className="section relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-ink text-cream-100">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-30" aria-hidden />
      <div className="container-tight relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Copy + control */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-cream-100/80">
            <Sun className="h-3.5 w-3.5 text-amber-300" /> The Bamboo Chick Effect
          </span>
          <h2 className="heading-lg mt-5 text-balance text-white">
            Watch harsh sun melt into <span className="text-amber-300">cool shade</span>
          </h2>
          <p className="lead mt-4 max-w-xl text-cream-100/75">
            Drag the slider to roll the chick down — and see exactly what our handwoven bamboo does to the Delhi sun.
            It filters the glare, drops the heat and gives you privacy, while the breeze still flows through.
          </p>

          {/* Slider control */}
          <div className="mt-8 max-w-md">
            <div className="mb-2 flex items-center justify-between text-xs font-medium text-cream-100/70">
              <span className="inline-flex items-center gap-1.5">
                <Sun className="h-4 w-4 text-amber-300" /> Full sun
              </span>
              <span className="inline-flex items-center gap-1.5">
                Cool shade <Snowflake className="h-4 w-4 text-sky-200" />
              </span>
            </div>
            <input
              ref={inputRef}
              type="range"
              min={0}
              max={100}
              defaultValue={12}
              aria-label="Roll the bamboo chick down"
              onInput={(e) => {
                setManual(true);
                cover.set(Number((e.target as HTMLInputElement).value) / 100);
              }}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-amber-400
                [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-amber-300
                [&::-webkit-slider-thumb]:bg-brand-700 [&::-webkit-slider-thumb]:shadow-glow
                [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-amber-300 [&::-moz-range-thumb]:bg-brand-700"
            />
            <div className="mt-2.5 flex items-center justify-between text-xs text-cream-100/60">
              <span>Grab the handle and lower the chick</span>
              {manual && (
                <button
                  type="button"
                  onClick={() => setManual(false)}
                  className="inline-flex items-center gap-1.5 font-semibold text-amber-300 transition hover:text-amber-200"
                >
                  <RotateCcw className="h-3.5 w-3.5" /> Replay demo
                </button>
              )}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <WhatsAppButton label="Get This Cooling Effect at Home" className="text-sm" />
            <span className="inline-flex items-center gap-1.5 text-sm text-cream-100/70">
              <Wind className="h-4 w-4 text-leaf-100" /> Breathable, not blackout
            </span>
          </div>
        </div>

        {/* Interactive scene */}
        <div
          ref={sceneRef}
          className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-card"
        >
          {/* Sky */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-200 via-orange-100 to-[#f3e7cf]" />

          {/* Sun with rotating rays */}
          <motion.div style={{ opacity: sunOpacity }} className="absolute left-1/2 top-[14%] -translate-x-1/2">
            <div className="relative h-36 w-36">
              <div
                className="absolute inset-[-55%] animate-spin-slow rounded-full opacity-70"
                style={{
                  background:
                    'repeating-conic-gradient(from 0deg, rgba(255,206,120,0.55) 0deg 4deg, transparent 4deg 16deg)',
                  WebkitMaskImage: 'radial-gradient(circle, #000 30%, transparent 68%)',
                  maskImage: 'radial-gradient(circle, #000 30%, transparent 68%)',
                }}
              />
              <div
                className="absolute inset-0 rounded-full blur-md"
                style={{
                  background:
                    'radial-gradient(circle, rgba(255,238,175,0.98), rgba(255,185,96,0.7) 45%, transparent 72%)',
                }}
              />
            </div>
          </motion.div>

          {/* Swaying plants at the base */}
          <div className="absolute inset-x-0 bottom-0 h-24">
            <div className="absolute bottom-0 left-[7%] h-16 w-4 origin-bottom animate-sway rounded-full bg-leaf-700/70 [animation-delay:0.4s]" />
            <div className="absolute bottom-0 left-[12%] h-20 w-4 origin-bottom animate-sway rounded-full bg-leaf-600/70" />
            <div className="absolute bottom-0 right-[9%] h-16 w-4 origin-bottom animate-sway rounded-full bg-leaf-700/70 [animation-delay:1.1s]" />
            <div className="absolute bottom-0 right-[14%] h-24 w-4 origin-bottom animate-sway rounded-full bg-leaf-600/60 [animation-delay:0.7s]" />
          </div>

          {/* Filtered light shafts — appear as the chick lowers */}
          <motion.div style={{ opacity: shaftOpacity }} className="pointer-events-none absolute inset-0">
            {SHAFTS.map((s) => (
              <div
                key={s.left}
                className="absolute -top-8 bottom-0 rotate-[14deg] animate-shimmer bg-gradient-to-b from-amber-200/80 via-amber-100/30 to-transparent blur-md"
                style={{ left: s.left, width: s.w, animationDelay: s.delay }}
              />
            ))}
          </motion.div>

          {/* The bamboo chick rolling down */}
          <motion.div style={{ height: chickHeight }} className="absolute inset-x-0 top-0 overflow-hidden">
            <div className="absolute inset-0 opacity-95" style={{ backgroundImage: REED_TEXTURE }} />
            <div className="absolute inset-0" style={{ backgroundImage: BINDING_CORDS }} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />
            {/* Ropes */}
            <div className="absolute left-[26%] top-0 h-full w-px bg-black/25" />
            <div className="absolute right-[26%] top-0 h-full w-px bg-black/25" />
            {/* Bottom batten */}
            <div className="absolute inset-x-0 bottom-0 h-3 rounded-b-sm bg-gradient-to-b from-brand-700 to-brand-900 shadow-[0_4px_10px_-2px_rgba(0,0,0,0.5)]" />
          </motion.div>

          {/* Cool shade tint over the covered area */}
          <motion.div
            style={{ opacity: shadeOpacity }}
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-900/50 to-sky-900/30 mix-blend-multiply"
          />

          {/* Dust motes catching the light */}
          <div className="pointer-events-none absolute inset-0">
            {MOTES.map((m) => (
              <span
                key={`${m.left}-${m.top}`}
                className="absolute h-1.5 w-1.5 animate-drift rounded-full bg-amber-100/80 blur-[1px]"
                style={{ left: m.left, top: m.top, animationDelay: m.delay }}
              />
            ))}
          </div>

          {/* Live temperature readout */}
          <div className="absolute bottom-4 left-4 rounded-2xl bg-ink/70 px-4 py-3 backdrop-blur">
            <p className="font-heading text-3xl font-bold leading-none text-white tabular-nums">
              {readout.temp}°C
            </p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-cream-100/75">
              Under the chick
            </p>
          </div>

          {/* Live stat chips */}
          <div className="absolute bottom-4 right-4 flex flex-col items-end gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/85 px-3 py-1.5 text-xs font-semibold text-brand-800 shadow-soft backdrop-blur tabular-nums">
              <Eye className="h-3.5 w-3.5" /> {readout.glare}% glare blocked
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-leaf/90 px-3 py-1.5 text-xs font-semibold text-white shadow-soft tabular-nums">
              <Snowflake className="h-3.5 w-3.5" /> {readout.delta}°C cooler
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
