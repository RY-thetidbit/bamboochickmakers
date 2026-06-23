import {
  Thermometer,
  EyeOff,
  Leaf,
  ShieldCheck,
  Sparkles,
  Recycle,
  PhoneCall,
  Ruler,
  FileText,
  Factory,
  Wrench,
  Headphones,
  type LucideIcon,
} from 'lucide-react';

export type Feature = { icon: LucideIcon; title: string; description: string };

/** "Why Choose Bamboo Chick" — Section 3 */
export const whyChoose: Feature[] = [
  {
    icon: Thermometer,
    title: 'Heat Reduction',
    description: 'Blocks up to 70% of direct sun and glare, keeping rooms and balconies noticeably cooler.',
  },
  {
    icon: EyeOff,
    title: 'Privacy',
    description: 'See out without being seen in — daytime privacy for facing flats, balconies and ground floors.',
  },
  {
    icon: Sparkles,
    title: 'Natural Look',
    description: 'Warm, organic bamboo texture that elevates any home, café or commercial facade.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Made from fast-renewing natural bamboo — a sustainable, low-impact material.',
  },
  {
    icon: ShieldCheck,
    title: 'Long Lasting',
    description: 'Seasoned, weather-treated reeds and quality fixings built for years of daily use.',
  },
  {
    icon: Recycle,
    title: 'Low Maintenance',
    description: 'Easy to clean and re-coat — a simple wipe and occasional care keeps them looking new.',
  },
];

export type ProcessStep = { icon: LucideIcon; step: string; title: string; description: string };

/** "Our Process" — Section 6 */
export const processSteps: ProcessStep[] = [
  { icon: PhoneCall, step: '01', title: 'Inquiry', description: 'Send your requirement on WhatsApp or call us. We discuss your needs and rough sizes.' },
  { icon: Ruler, step: '02', title: 'Measurement', description: 'We visit your site, take precise measurements and recommend the right product.' },
  { icon: FileText, step: '03', title: 'Quotation', description: 'You get a clear, itemised quote with finishes, sizes and timelines — no hidden costs.' },
  { icon: Factory, step: '04', title: 'Manufacturing', description: 'Your chicks are handcrafted to order from seasoned, weather-treated bamboo.' },
  { icon: Wrench, step: '05', title: 'Installation', description: 'Our team fits everything cleanly with the right brackets, channels and mechanisms.' },
  { icon: Headphones, step: '06', title: 'Support', description: 'We back the work with warranty and friendly after-sales service and re-coating.' },
];

export type Stat = { value: string; label: string };

/** Project statistics / counters */
export const stats: Stat[] = [
  { value: '500+', label: 'Installations Completed' },
  { value: '10+', label: 'Years of Experience' },
  { value: '4.9★', label: 'Average Customer Rating' },
  { value: '12+', label: 'Cities Served' },
];

export type ProductCard = {
  title: string;
  href: string;
  description: string;
  image: string;
};

const img = (name: string) => `/images/${name}`;

/** Product categories — Section 4 */
export const productCategories: ProductCard[] = [
  { title: 'Bamboo Chick', href: '/products/bamboo-chick', description: 'Classic handwoven chicks for shade & privacy.', image: img('Bamboochick.jpg') },
  { title: 'Bamboo Blinds', href: '/products/bamboo-blinds', description: 'Tailored roll-up & Roman interior blinds.', image: img('chickblinds.jpg') },
  { title: 'Zebra Blinds', href: '/products/zebra-blinds', description: 'Dual-layer day & night blinds.', image: img('zebrablinds.jpg') },
  { title: 'Balcony Solutions', href: '/products/balcony-bamboo-chick', description: 'Cool, private, rain-protected balconies.', image: img('BamboochickBalcony.jpg') },
  { title: 'Terrace & Resort', href: '/products/terrace-bamboo-chick', description: 'Large-span shade, umbrellas & huts.', image: img('Bambooresortumbrella.jpg') },
  { title: 'Fancy Bamboo Chick', href: '/products/fancy-bamboo-chick', description: 'Designer decorative chicks & finishes.', image: img('fancyChick.jpg') },
  { title: 'Anti-Bird & Pigeon Net', href: '/products/anti-bird-net', description: 'Near-invisible balcony & duct nets.', image: img('Pigeonnet.jpg') },
  { title: 'Bamboo Jafri', href: '/products/bamboo-jafri', description: 'Bamboo fencing, screens & partitions.', image: img('Bamboojafri.jpg') },
  { title: 'Bamboo Hut & Gazebo', href: '/products/bamboo-hut', description: 'Huts, gazebos & ambela for resorts.', image: img('Bamboohuts.jpg') },
];

export type TrustBadge = { icon: LucideIcon; title: string; description: string };

export const guarantees: TrustBadge[] = [
  { icon: ShieldCheck, title: 'Quality Guarantee', description: 'Premium seasoned bamboo and tested fixings on every order.' },
  { icon: Wrench, title: 'Professional Installation', description: 'Trained in-house fitting teams — clean, safe and on time.' },
  { icon: Sparkles, title: 'Up to 2-Year Warranty', description: 'Workmanship warranty plus friendly after-sales support.' },
];
