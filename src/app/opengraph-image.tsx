import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const runtime = 'edge';
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #8B5E3C 0%, #573A25 100%)',
          padding: '72px',
          color: '#F7F2E8',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: '#F7F2E8',
              color: '#8B5E3C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 44,
            }}
          >
            🎋
          </div>
          <div style={{ fontSize: 34, fontWeight: 700 }}>{site.name}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1, maxWidth: 900 }}>
            Premium Bamboo Chick Manufacturing &amp; Installation
          </div>
          <div style={{ fontSize: 30, marginTop: 24, color: '#EBDBCB' }}>
            Homes · Balconies · Terraces · Commercial — Vasant Vihar, South Delhi, Gurgaon &amp; Noida
          </div>
        </div>

        <div style={{ display: 'flex', gap: 28, fontSize: 26, color: '#EBDBCB' }}>
          <div>3800+ Installations</div>
          <div>·</div>
          <div>5+ Years</div>
          <div>·</div>
          <div>{site.domain}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
