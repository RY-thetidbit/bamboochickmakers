import type { CSSProperties } from 'react';

// Deterministic set (no random → no hydration mismatch). Each leaf rises + sways
// on its own timing so the drift never looks synced.
const LEAVES = [
  { left: '5%', size: 30, rise: 17, delay: -3, sway: 4.5, opacity: 0.42, color: '#2E7D32' },
  { left: '18%', size: 22, rise: 21, delay: -11, sway: 5.5, opacity: 0.34, color: '#43A047' },
  { left: '31%', size: 36, rise: 15, delay: -19, sway: 4, opacity: 0.4, color: '#256628' },
  { left: '44%', size: 20, rise: 22, delay: -6, sway: 6, opacity: 0.3, color: '#D9992E' },
  { left: '57%', size: 32, rise: 16, delay: -14, sway: 4.8, opacity: 0.44, color: '#388E3C' },
  { left: '69%', size: 24, rise: 20, delay: -1, sway: 5.2, opacity: 0.34, color: '#7CB342' },
  { left: '80%', size: 34, rise: 14, delay: -9, sway: 4.3, opacity: 0.4, color: '#2E7D32' },
  { left: '90%', size: 22, rise: 19, delay: -17, sway: 5.6, opacity: 0.32, color: '#D9992E' },
  { left: '97%', size: 28, rise: 18, delay: -23, sway: 4.6, opacity: 0.38, color: '#43A047' },
];

function LeafIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 1.5c-6 4.2-8.5 10-6 16.5C7.8 15 10 12.2 13.5 10.4 10.6 13 8.8 16 8.4 20.4c-.06.7.9 1 1.3.5C13.8 16.4 17 10.8 12 1.5Z"
        fill={color}
      />
    </svg>
  );
}

/** Site-wide ambient layer: bamboo leaves drifting gently up the screen. */
export function FloatingLeaves() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      {LEAVES.map((l, i) => (
        <span
          key={i}
          className="absolute bottom-0"
          style={
            {
              left: l.left,
              '--leaf-o': l.opacity,
              animation: `leaf-rise ${l.rise}s linear ${l.delay}s infinite`,
            } as CSSProperties
          }
        >
          <span
            className="block [filter:drop-shadow(0_2px_3px_rgba(31,41,55,0.18))]"
            style={{ animation: `leaf-sway ${l.sway}s ease-in-out infinite alternate` }}
          >
            <LeafIcon size={l.size} color={l.color} />
          </span>
        </span>
      ))}
    </div>
  );
}
