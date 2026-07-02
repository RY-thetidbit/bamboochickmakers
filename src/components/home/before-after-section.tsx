import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { WhatsAppButton } from '@/components/cta/whatsapp-button';
import { cn } from '@/lib/utils';

type Shot = { src: string; title: string; location: string; span?: boolean };

const shots: Shot[] = [
  { src: '/images/bamboochickwall.jpg', title: 'Outdoor Bamboo Chick Wall', location: 'Vasant Vihar, Delhi', span: true },
  { src: '/images/zebrablinds.jpg', title: 'Zebra Blinds', location: 'Greater Kailash, Delhi' },
  { src: '/images/Bamboojafri.jpg', title: 'Bamboo Jafri Fencing', location: 'Chhatarpur, Delhi' },
  { src: '/images/bamboochickgarage.jpg', title: 'Garage Roll-Up Chick', location: 'South Delhi' },
  { src: '/images/Pigeonnet.jpg', title: 'Pigeon Net', location: 'Dwarka, Delhi' },
];

/** Real-installation showcase (bento grid). */
export function BeforeAfterSection() {
  return (
    <section className="section">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Gallery"
          title="See our installations in action"
          description="Real bamboo chicks, blinds, nets and structures we’ve crafted and fitted for homes and businesses across Delhi NCR."
        />

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[210px] lg:grid-cols-4">
          {shots.map((shot, i) => (
            <Reveal
              key={shot.src}
              delay={i * 0.05}
              className={cn(
                'group relative overflow-hidden rounded-2xl border border-cream-200 shadow-soft',
                shot.span && 'col-span-2 row-span-2',
              )}
            >
              <Image
                src={shot.src}
                alt={`${shot.title} — ${shot.location}`}
                fill
                sizes={shot.span ? '(max-width:1024px) 100vw, 50vw' : '(max-width:1024px) 50vw, 25vw'}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className={cn('font-heading font-semibold text-white', shot.span ? 'text-lg' : 'text-sm')}>
                  {shot.title}
                </p>
                <p className="mt-0.5 flex items-center gap-1 text-xs text-cream-100/90">
                  <MapPin className="h-3 w-3" /> {shot.location}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <WhatsAppButton label="Get My Free Quote on WhatsApp" />
        </div>
      </div>
    </section>
  );
}
