import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { PageHero } from '@/components/ui/page-hero';
import { LightboxGallery, type GalleryItem } from '@/components/gallery/lightbox-gallery';
import { CtaBand } from '@/components/cta/cta-band';

export const metadata: Metadata = buildMetadata({
  title: 'Gallery — Bamboo Chick, Blinds & Net Installation Photos',
  description:
    'Browse our gallery of bamboo chick, blinds, zebra blinds, pigeon net, bamboo jafri and bamboo hut installations across Delhi NCR — Vasant Vihar, South Delhi, Gurgaon & Noida.',
  path: '/gallery',
  keywords: ['bamboo chick gallery', 'bamboo chick photos', 'zebra blinds photos', 'bamboo jafri images'],
});

const img = (name: string) => `/images/${name}`;

const categories = ['All', 'Bamboo Chick', 'Blinds', 'Outdoor', 'Nets', 'Structures'];

const items: GalleryItem[] = [
  { src: img('Bamboochick.jpg'), title: 'Bamboo Chick', category: 'Bamboo Chick' },
  { src: img('Bamboochickoutdoor.jpg'), title: 'Outdoor Bamboo Chick', category: 'Bamboo Chick' },
  { src: img('BamboochickBalcony.jpg'), title: 'Balcony Bamboo Chick', category: 'Bamboo Chick' },
  { src: img('Bamboochicksimple.jpg'), title: 'Simple Bamboo Chick', category: 'Bamboo Chick' },
  { src: img('Bamboochickoutdoorside.jpg'), title: 'Outdoor Side Chick', category: 'Bamboo Chick' },
  { src: img('Bamboochickpvc.jpg'), title: 'PVC Bamboo Chick', category: 'Bamboo Chick' },
  { src: img('fancyChick.jpg'), title: 'Fancy Bamboo Chick', category: 'Bamboo Chick' },
  { src: img('bamboofancy.jpg'), title: 'Fancy Bamboo Design', category: 'Bamboo Chick' },
  { src: img('sunprotectionchick.jpg'), title: 'Sun Protection Chick', category: 'Bamboo Chick' },
  { src: img('windowACChick.jpg'), title: 'Window AC Chick', category: 'Bamboo Chick' },
  { src: img('chickblinds.jpg'), title: 'Bamboo Chick Blinds', category: 'Blinds' },
  { src: img('Romanblind.jpg'), title: 'Roman Blinds', category: 'Blinds' },
  { src: img('woodenblinds.jpg'), title: 'Wooden Blinds', category: 'Blinds' },
  { src: img('zebrablinds.jpg'), title: 'Zebra Blinds', category: 'Blinds' },
  { src: img('rollingblinds.jpg'), title: 'Roller Blinds', category: 'Blinds' },
  { src: img('verticalblinds.jpg'), title: 'Vertical Blinds', category: 'Blinds' },
  { src: img('aluminiumblinds.jpg'), title: 'Aluminium Blinds', category: 'Blinds' },
  { src: img('windowsblinds.jpg'), title: 'Window Blinds', category: 'Blinds' },
  { src: img('indoorpartition.jpg'), title: 'Indoor Partition', category: 'Structures' },
  { src: img('Bamboojafri.jpg'), title: 'Bamboo Jafri', category: 'Outdoor' },
  { src: img('bamboofencingblind.jpg'), title: 'Bamboo Fencing', category: 'Outdoor' },
  { src: img('Bambooambela.jpg'), title: 'Bamboo Ambela', category: 'Structures' },
  { src: img('Bamboohuts.jpg'), title: 'Bamboo Huts', category: 'Structures' },
  { src: img('Bambooforceiling.jpg'), title: 'Bamboo Ceiling', category: 'Structures' },
  { src: img('Bamboowallceiling.jpg'), title: 'Bamboo Wall & Ceiling', category: 'Structures' },
  { src: img('Bambooresortumbrella.jpg'), title: 'Resort Umbrella', category: 'Outdoor' },
  { src: img('Pigeonnet.jpg'), title: 'Pigeon Net', category: 'Nets' },
  { src: img('greenNet.jpg'), title: 'Green Net', category: 'Nets' },
  { src: img('greenghas.jpg'), title: 'Green Grass', category: 'Outdoor' },
  { src: img('bamboooutdoorpvc.jpg'), title: 'Outdoor PVC Bamboo', category: 'Outdoor' },
  { src: img('newdesign.jpg'), title: 'New Design Chick', category: 'Bamboo Chick' },
  { src: img('BamboooldChick.jpg'), title: 'Classic Bamboo Chick', category: 'Bamboo Chick' },
];

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Gallery', path: '/gallery' }]} />
      <PageHero
        eyebrow="Gallery"
        title="A showcase of our installations"
        description="Real bamboo chick projects across the region. Tap any image to view it larger, and filter by space type."
      />

      <section className="section">
        <div className="container-tight">
          <LightboxGallery items={items} categories={categories} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
