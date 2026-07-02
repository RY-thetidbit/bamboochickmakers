export type Project = {
  slug: string;
  title: string;
  category: 'Residential' | 'Balcony' | 'Terrace' | 'Commercial';
  location: string;
  product: string;
  image: string;
  summary: string;
};

const img = (name: string) => `/images/${name}`;

export const projects: Project[] = [
  {
    slug: 'vasant-vihar-balcony-chick',
    title: 'South Delhi Balcony Chick',
    category: 'Balcony',
    location: 'Vasant Vihar, Delhi',
    product: 'Balcony Bamboo Chick',
    image: img('BamboochickBalcony.jpg'),
    summary: 'Custom roll-up chicks gave a Vasant Vihar balcony cool shade and full privacy from facing homes.',
  },
  {
    slug: 'greater-kailash-zebra-blinds',
    title: 'Apartment Zebra Blinds',
    category: 'Residential',
    location: 'Greater Kailash, Delhi',
    product: 'Zebra Blinds',
    image: img('zebrablinds.jpg'),
    summary: 'Day & night zebra blinds across the living room for elegant, switchable light control.',
  },
  {
    slug: 'defence-colony-pigeon-net',
    title: 'Balcony Pigeon Net',
    category: 'Balcony',
    location: 'Defence Colony, Delhi',
    product: 'Anti-Bird & Pigeon Net',
    image: img('Pigeonnet.jpg'),
    summary: 'Near-invisible pigeon netting kept a South Delhi balcony clean without spoiling the view.',
  },
  {
    slug: 'dwarka-balcony-shade',
    title: 'High-Rise Balcony Shade',
    category: 'Balcony',
    location: 'Dwarka, Delhi',
    product: 'Balcony Bamboo Chick',
    image: img('Bamboochickoutdoor.jpg'),
    summary: 'Wind-rated roll-up chicks turned a glaring high-floor balcony into a cool, private sit-out.',
  },
  {
    slug: 'gurgaon-terrace-cafe',
    title: 'Terrace Café Canopy',
    category: 'Commercial',
    location: 'Golf Course Road, Gurgaon',
    product: 'Terrace Bamboo Chick',
    image: img('Bambooresortumbrella.jpg'),
    summary: 'Large-span shade and resort umbrellas made a rooftop café usable through the summer.',
  },
  {
    slug: 'farmhouse-bamboo-jafri',
    title: 'Farmhouse Jafri Fencing',
    category: 'Commercial',
    location: 'Chhatarpur, Delhi',
    product: 'Bamboo Jafri',
    image: img('Bamboojafri.jpg'),
    summary: 'Bamboo jafri fencing and garden screens gave a Delhi farmhouse a warm, natural boundary.',
  },
  {
    slug: 'vasant-kunj-verandah',
    title: 'Bungalow Verandah Screens',
    category: 'Residential',
    location: 'Vasant Kunj, Delhi',
    product: 'Bamboo Chick',
    image: img('Bamboochicksimple.jpg'),
    summary: 'Full verandah of handwoven chicks for shade, privacy and a warm natural facade.',
  },
  {
    slug: 'resort-bamboo-hut',
    title: 'Resort Bamboo Huts',
    category: 'Commercial',
    location: 'Sohna Road, Gurgaon',
    product: 'Bamboo Hut & Gazebo',
    image: img('Bamboohuts.jpg'),
    summary: 'Handcrafted bamboo huts and ambela created shaded natural retreats across a resort garden.',
  },
  {
    slug: 'fancy-chick-restaurant',
    title: 'Restaurant Fancy Chicks',
    category: 'Commercial',
    location: 'Hauz Khas, Delhi',
    product: 'Fancy Bamboo Chick',
    image: img('fancyChick.jpg'),
    summary: 'Designer fancy chicks brought warmth and natural texture to a Hauz Khas restaurant.',
  },
  {
    slug: 'garage-roll-up-chick',
    title: 'Garage Roll-Up Chicks',
    category: 'Residential',
    location: 'South Delhi',
    product: 'Bamboo Chick',
    image: img('bamboochickgarage.jpg'),
    summary: 'Large pulley-operated bamboo chicks screen an open car porch — roll them up for access, down for shade and dust protection.',
  },
  {
    slug: 'resort-bamboo-mooda',
    title: 'Bamboo Mooda Seating',
    category: 'Commercial',
    location: 'Delhi NCR',
    product: 'Bamboo Hut & Gazebo',
    image: img('bamboomooda.jpg'),
    summary: 'Handwoven bamboo moodas and chairs in bright colour-bound finishes for resort and garden seating.',
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const projectCategories = ['All', 'Residential', 'Balcony', 'Terrace', 'Commercial'] as const;
