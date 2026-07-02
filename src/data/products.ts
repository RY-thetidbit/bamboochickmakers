export type ProductFeature = { title: string; description: string };

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  group: 'Bamboo' | 'Blinds' | 'Outdoor & Nets';
  tagline: string;
  excerpt: string;
  heroImage: string;
  gallery: string[];
  priceFrom: string;
  featured: boolean; // show in header dropdown
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  overview: string[];
  features: ProductFeature[];
  bestFor: string[];
  specs: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
};

/** Locally-hosted product photography (served from /public/images). */
const img = (name: string) => `/images/${name}`;

export const products: Product[] = [
  {
    slug: 'bamboo-chick',
    name: 'Bamboo Chick (Pardi)',
    shortName: 'Bamboo Chick',
    category: 'Core Product',
    group: 'Bamboo',
    featured: true,
    tagline: 'Classic handcrafted bamboo chicks for shade, privacy & cooling',
    excerpt:
      'Traditional bamboo chicks (pardi) handwoven from seasoned bamboo — natural heat reduction, privacy and timeless looks for windows, verandahs and balconies.',
    heroImage: img('Bamboochick.jpg'),
    gallery: [img('Bamboochickoutdoor.jpg'), img('bamboochickwall.jpg'), img('bamboochickgarage.jpg'), img('bamboochicknetweave.jpg'), img('Bamboochicksimple.jpg'), img('Bamboochickoutdoorside.jpg')],
    priceFrom: '₹45 / sq.ft',
    metaTitle: 'Bamboo Chick Manufacturer & Installation | Bamboo Chick Makers',
    metaDescription:
      'Premium handcrafted bamboo chick (pardi) for windows, balconies & verandahs. Custom sizes, weather-resistant finish, professional installation across Delhi NCR — Vasant Vihar, South Delhi, Gurgaon & Noida. Get a free WhatsApp quote.',
    keywords: ['bamboo chick', 'bamboo pardi', 'bamboo chick price', 'bamboo chick maker', 'window bamboo chick'],
    overview: [
      'Our signature bamboo chick is handwoven from carefully seasoned, naturally treated bamboo reeds bound with weather-resistant cord. The result is a breathable screen that cuts harsh sunlight and heat while letting cool air flow through.',
      'Each chick is made to order in any width and drop, with a choice of natural, honey or dark walnut finishes. We supply with roll-up pulley systems, side channels and fixings so installation is clean and durable.',
    ],
    features: [
      { title: 'Up to 70% heat reduction', description: 'Blocks direct sun while keeping airflow — rooms stay noticeably cooler.' },
      { title: 'Daytime privacy', description: 'See out without being easily seen in — ideal for ground-floor and facing windows.' },
      { title: 'Weather-treated bamboo', description: 'Seasoned and coated reeds resist sun, humidity and warping.' },
      { title: 'Roll-up operation', description: 'Smooth pulley/cord system to raise and lower in seconds.' },
    ],
    bestFor: ['Windows', 'Verandahs', 'Balconies', 'Shop fronts', 'Bungalow facades'],
    specs: [
      { label: 'Material', value: 'Seasoned natural bamboo reed' },
      { label: 'Finishes', value: 'Natural / Honey / Dark Walnut' },
      { label: 'Max single width', value: 'Up to 12 ft (custom)' },
      { label: 'Operation', value: 'Roll-up cord & pulley' },
      { label: 'Warranty', value: 'Up to 2 years on workmanship' },
    ],
    faqs: [
      { question: 'What is a bamboo chick?', answer: 'A bamboo chick (also called pardi) is a handwoven screen of thin bamboo reeds used over windows and balconies to reduce heat and sunlight while maintaining airflow and privacy.' },
      { question: 'Can bamboo chicks be made to custom sizes?', answer: 'Yes. Every chick is made to order. We measure your opening on site and manufacture to the exact width and drop required.' },
      { question: 'Do bamboo chicks survive heavy weather?', answer: 'Our reeds are seasoned and treated with a weather-resistant coating. With basic care they comfortably handle harsh summers and monsoon rain for several years.' },
    ],
  },
  {
    slug: 'bamboo-blinds',
    name: 'Bamboo Blinds',
    shortName: 'Bamboo Blinds',
    category: 'Window Solutions',
    group: 'Bamboo',
    featured: true,
    tagline: 'Refined roll-up & Roman bamboo blinds for interiors',
    excerpt:
      'Premium interior bamboo blinds with smooth roll-up and Roman-fold mechanisms — warm natural texture and precise light control for living rooms, bedrooms and offices.',
    heroImage: img('chickblinds.jpg'),
    gallery: [img('chickblinds.jpg'), img('Romanblind.jpg'), img('woodenblinds.jpg')],
    priceFrom: '₹65 / sq.ft',
    metaTitle: 'Bamboo Blinds — Roll-up & Roman Window Blinds | Bamboo Chick Makers',
    metaDescription:
      'Designer bamboo blinds for interiors — roll-up and Roman fold styles with precise light control and natural texture. Custom-made & professionally fitted across Delhi NCR — South Delhi, Gurgaon & Noida.',
    keywords: ['bamboo blinds', 'roman bamboo blinds', 'window bamboo blinds', 'bamboo blinds price', 'wooden blinds'],
    overview: [
      'Bamboo blinds bring the warmth of natural fibre indoors with a more tailored, finished look than a traditional chick. Choose smooth roll-up blinds for a clean minimal line, or Roman-fold blinds for a soft, layered drape.',
      'Available with cordless and chain-operated mechanisms, optional blackout backing and colour-matched tapes — perfect for living rooms, bedrooms, studies and boutique offices.',
    ],
    features: [
      { title: 'Precise light control', description: 'Set the exact level of light and privacy you want, room by room.' },
      { title: 'Tailored finish', description: 'Clean edges, colour-matched tapes and optional valances for a designer look.' },
      { title: 'Blackout option', description: 'Add a fabric backing for bedrooms and media rooms.' },
      { title: 'Child-safe mechanisms', description: 'Cordless and tensioned-chain options available.' },
    ],
    bestFor: ['Living rooms', 'Bedrooms', 'Studies', 'Offices', 'Cafés'],
    specs: [
      { label: 'Styles', value: 'Roll-up / Roman fold / Wooden' },
      { label: 'Operation', value: 'Cordless / Chain / Motorised (on request)' },
      { label: 'Backing', value: 'Optional blackout / privacy liner' },
      { label: 'Mounting', value: 'Inside or outside recess' },
      { label: 'Warranty', value: 'Up to 2 years on mechanism' },
    ],
    faqs: [
      { question: 'What is the difference between a bamboo chick and a bamboo blind?', answer: 'A chick is a traditional outdoor screen for heat and privacy. A bamboo blind is a more tailored interior product with finished edges and a roll-up or Roman mechanism for precise light control.' },
      { question: 'Can I get motorised bamboo blinds?', answer: 'Yes, we offer motorised and remote-operated bamboo blinds on request, ideal for large or hard-to-reach windows.' },
      { question: 'Are bamboo blinds good for bedrooms?', answer: 'Yes — with an added blackout liner they provide excellent darkness and privacy while keeping a warm natural look.' },
    ],
  },
  {
    slug: 'bamboo-curtains',
    name: 'Bamboo Curtains',
    shortName: 'Bamboo Curtains',
    category: 'Decor Solutions',
    group: 'Bamboo',
    featured: true,
    tagline: 'Decorative bamboo curtains & indoor partitions',
    excerpt:
      'Elegant bamboo curtains and indoor partitions for doorways, dividers and décor accents — natural separation of spaces without blocking light or air.',
    heroImage: img('indoorpartition.jpg'),
    gallery: [img('indoorpartition.jpg'), img('bamboofancy.jpg'), img('Bamboochicksimple.jpg')],
    priceFrom: '₹55 / sq.ft',
    metaTitle: 'Bamboo Curtains & Indoor Partitions | Bamboo Chick Makers',
    metaDescription:
      'Decorative bamboo curtains and indoor partitions for doorways, dividers and feature walls. Natural, airy room separation — custom-made and fitted across Delhi NCR. Free WhatsApp quote.',
    keywords: ['bamboo curtains', 'bamboo door curtain', 'bamboo partition', 'indoor partition', 'bamboo room divider'],
    overview: [
      'Bamboo curtains and partitions are a light, decorative way to separate spaces, dress a doorway or add natural texture to a feature wall. They keep rooms airy and bright while gently defining zones.',
      'We offer reed, bead and panel styles in multiple tones, custom-cut to your opening with neat top fixings.',
    ],
    features: [
      { title: 'Airy separation', description: 'Define spaces without blocking light or ventilation.' },
      { title: 'Natural décor accent', description: 'Adds warm, organic texture to interiors and entrances.' },
      { title: 'Lightweight & easy', description: 'Simple top-mount fixing on doors, arches and partitions.' },
      { title: 'Custom tones', description: 'Choose reed thickness and finish to match your interior.' },
    ],
    bestFor: ['Doorways', 'Partitions', 'Feature walls', 'Restaurants', 'Resorts'],
    specs: [
      { label: 'Styles', value: 'Reed / Bead / Panel partition' },
      { label: 'Mounting', value: 'Top-fixed rod or track' },
      { label: 'Finishes', value: 'Natural / Stained tones' },
      { label: 'Use', value: 'Indoor & covered outdoor' },
      { label: 'Warranty', value: 'Up to 1 year on workmanship' },
    ],
    faqs: [
      { question: 'Do bamboo curtains provide privacy?', answer: 'They provide partial, decorative separation rather than full privacy. For full privacy and shade choose a bamboo chick or blind.' },
      { question: 'Can bamboo partitions be used in offices?', answer: 'Yes — bamboo partitions are a popular, natural-looking way to zone cabins, cafés and reception areas.' },
      { question: 'Are bamboo curtains good for restaurants?', answer: 'Yes — they are a popular, low-cost way to create natural-looking zones and private nooks in cafés, restaurants and resorts.' },
    ],
  },
  {
    slug: 'balcony-bamboo-chick',
    name: 'Balcony Bamboo Chick',
    shortName: 'Balcony Solutions',
    category: 'Balcony Solutions',
    group: 'Bamboo',
    featured: true,
    tagline: 'Balcony bamboo chicks for shade, privacy & rain protection',
    excerpt:
      'Purpose-built balcony bamboo chicks that block harsh sun, shield from rain splash and create a private, cool outdoor retreat in apartments and bungalows.',
    heroImage: img('BamboochickBalcony.jpg'),
    gallery: [img('BamboochickBalcony.jpg'), img('Bamboochickoutdoor.jpg'), img('sunprotectionchick.jpg')],
    priceFrom: '₹50 / sq.ft',
    metaTitle: 'Balcony Bamboo Chick — Shade & Privacy | Bamboo Chick Makers',
    metaDescription:
      'Balcony bamboo chicks for apartments & bungalows — cut heat, gain privacy and block rain splash. Custom-fit roll-up screens installed across Delhi NCR — South Delhi, Gurgaon & Noida.',
    keywords: ['balcony bamboo chick', 'balcony chick', 'apartment balcony shade', 'balcony privacy screen', 'AC chick'],
    overview: [
      'Balconies take the full force of sun and rain. Our balcony bamboo chicks turn an unusable, glaring balcony into a cool, private extension of your home.',
      'Made with extra-durable reeds and strong roll-up systems, they handle wind and rain while still rolling up cleanly when you want an open view. We also make AC chicks to shade outdoor units.',
    ],
    features: [
      { title: 'Beat the afternoon sun', description: 'Drop the chick to instantly cool an exposed balcony.' },
      { title: 'Rain-splash protection', description: 'Keeps rain spray off furniture and flooring.' },
      { title: 'Full privacy on demand', description: 'Shield from facing flats and the street below.' },
      { title: 'Heavy-duty fixings', description: 'Wind-rated brackets and cords for high floors.' },
    ],
    bestFor: ['Apartment balconies', 'Bungalow balconies', 'Sit-outs', 'AC units', 'Café terraces'],
    specs: [
      { label: 'Material', value: 'Heavy-duty weather-treated bamboo' },
      { label: 'Operation', value: 'Roll-up cord / pulley' },
      { label: 'Fixing', value: 'Wind-rated wall & ceiling brackets' },
      { label: 'Sizes', value: 'Fully custom to balcony opening' },
      { label: 'Warranty', value: 'Up to 2 years on workmanship' },
    ],
    faqs: [
      { question: 'Will a balcony bamboo chick stop rain?', answer: 'It significantly reduces wind-driven rain and splash reaching your balcony. For full enclosure we can advise on combining chicks with clear PVC blinds.' },
      { question: 'Is it safe on a high-floor balcony?', answer: 'Yes. We use wind-rated brackets and reinforced cords specified for the height and exposure of your balcony.' },
      { question: 'Can I still open the balcony when I want?', answer: 'Absolutely — the roll-up system lets you raise the chick fully for an open view in seconds.' },
    ],
  },
  {
    slug: 'terrace-bamboo-chick',
    name: 'Terrace Bamboo Chick',
    shortName: 'Terrace Solutions',
    category: 'Terrace Solutions',
    group: 'Bamboo',
    featured: true,
    tagline: 'Large-span terrace bamboo chicks & shade screens',
    excerpt:
      'Large-format terrace bamboo chicks and side screens that shade rooftops, create open-air lounges and make terrace cafés and party areas usable year-round.',
    heroImage: img('Bambooresortumbrella.jpg'),
    gallery: [img('Bambooresortumbrella.jpg'), img('Bamboohuts.jpg'), img('Bamboochickoutdoorside.jpg')],
    priceFrom: '₹55 / sq.ft',
    metaTitle: 'Terrace Bamboo Chick & Shade Screens | Bamboo Chick Makers',
    metaDescription:
      'Large-span terrace bamboo chicks and shade screens for rooftops, terrace cafés and party areas. Custom-engineered and installed across Delhi NCR — South Delhi, Gurgaon & Noida.',
    keywords: ['terrace bamboo chick', 'rooftop shade', 'terrace shade screen', 'resort umbrella', 'bamboo terrace cover'],
    overview: [
      'Terraces are prime space — but unusable under direct sun. Our large-span terrace bamboo chicks and side screens create shaded, breezy open-air rooms for families, cafés and hospitality venues.',
      'We engineer the support framing and reed spans to suit the size of your terrace, with options for fixed canopies, roll-up side screens, resort umbrellas and perimeter privacy panels.',
    ],
    features: [
      { title: 'Large shaded spans', description: 'Cover big terrace areas for lounges, dining and events.' },
      { title: 'Open-air comfort', description: 'Shade and airflow without a sealed, hot enclosure.' },
      { title: 'Side privacy screens', description: 'Block neighbouring views and low evening sun.' },
      { title: 'Commercial grade', description: 'Built for the footfall of cafés, hotels and resorts.' },
    ],
    bestFor: ['Rooftop terraces', 'Terrace cafés', 'Hotels & resorts', 'Party areas', 'Bungalow terraces'],
    specs: [
      { label: 'Configuration', value: 'Fixed canopy / Roll-up side screens / Umbrellas' },
      { label: 'Framing', value: 'Engineered to span & exposure' },
      { label: 'Material', value: 'Heavy-duty weather-treated bamboo' },
      { label: 'Scale', value: 'Residential to commercial' },
      { label: 'Warranty', value: 'Up to 2 years on workmanship' },
    ],
    faqs: [
      { question: 'Can you shade a large commercial terrace?', answer: 'Yes. We engineer the framing and reed spans for large terraces and regularly fit out terrace cafés, hotels and resort rooftops.' },
      { question: 'Do terrace chicks need a support frame?', answer: 'For larger spans we install a discreet engineered frame to carry the chicks and resist wind. Smaller terraces can often use wall and parapet fixings.' },
      { question: 'Will it keep the terrace cooler?', answer: 'Significantly. Shading the deck and reflecting direct sun keeps the surface and the air beneath markedly cooler.' },
    ],
  },
  {
    slug: 'fancy-bamboo-chick',
    name: 'Fancy Bamboo Chick',
    shortName: 'Fancy Chick',
    category: 'Designer',
    group: 'Bamboo',
    featured: true,
    tagline: 'Designer fancy chicks with decorative weaves & finishes',
    excerpt:
      'Premium fancy bamboo chicks with decorative weaves, borders and stained finishes — a statement screen for entrances, feature windows and hospitality spaces.',
    heroImage: img('fancyChick.jpg'),
    gallery: [img('fancyChick.jpg'), img('fancybamboochickpurple.jpg'), img('bamboofancy.jpg'), img('newdesign.jpg')],
    priceFrom: '₹85 / sq.ft',
    metaTitle: 'Fancy Bamboo Chick — Designer Decorative Chicks | Bamboo Chick Makers',
    metaDescription:
      'Designer fancy bamboo chicks with decorative weaves, borders and premium finishes for entrances, feature windows and hospitality interiors. Custom-made across Delhi NCR.',
    keywords: ['fancy bamboo chick', 'fancy chick maker', 'designer bamboo chick', 'decorative bamboo chick'],
    overview: [
      'Fancy bamboo chicks elevate the classic chick with decorative weave patterns, contrast borders and rich stained finishes. They are a beautiful, natural statement for premium homes, lobbies, restaurants and resorts.',
      'Each fancy chick is custom-designed to your colour and pattern preference and finished to a high standard.',
    ],
    features: [
      { title: 'Decorative weaves', description: 'Patterned weaves and borders for a designer look.' },
      { title: 'Premium finishes', description: 'Rich stained tones and protective coatings.' },
      { title: 'Statement piece', description: 'Perfect for entrances, lobbies and feature windows.' },
      { title: 'Custom designed', description: 'Patterns and colours tailored to your space.' },
    ],
    bestFor: ['Entrances', 'Feature windows', 'Restaurants', 'Hotels', 'Premium homes'],
    specs: [
      { label: 'Style', value: 'Decorative / patterned weave' },
      { label: 'Finishes', value: 'Stained & coated premium tones' },
      { label: 'Operation', value: 'Roll-up cord / fixed' },
      { label: 'Use', value: 'Indoor & covered outdoor' },
      { label: 'Warranty', value: 'Up to 2 years on workmanship' },
    ],
    faqs: [
      { question: 'What makes a chick "fancy"?', answer: 'Fancy chicks use decorative weave patterns, contrast borders and premium stained finishes rather than a plain reed weave — they are designed as a statement feature.' },
      { question: 'Can I choose the pattern and colour?', answer: 'Yes, fancy chicks are custom-designed. Share your interior theme on WhatsApp and we will suggest patterns and finishes.' },
      { question: 'Are fancy chicks suitable for restaurants?', answer: 'Absolutely — they are very popular for restaurant and resort interiors and entrances.' },
    ],
  },
  {
    slug: 'zebra-blinds',
    name: 'Zebra Blinds',
    shortName: 'Zebra Blinds',
    category: 'Window Blinds',
    group: 'Blinds',
    featured: true,
    tagline: 'Dual-layer zebra blinds for sheer-to-solid light control',
    excerpt:
      'Modern dual-layer zebra blinds that glide between sheer and solid bands — elegant, precise light control for living rooms, offices and bedrooms.',
    heroImage: img('zebrablinds.jpg'),
    gallery: [img('zebrablinds.jpg'), img('zebrablindsdisplay.jpg'), img('rollingblinds.jpg'), img('windowsblinds.jpg')],
    priceFrom: '₹120 / sq.ft',
    metaTitle: 'Zebra Blinds — Dual-Layer Day & Night Blinds | Bamboo Chick Makers',
    metaDescription:
      'Premium zebra blinds (day & night blinds) with dual sheer/solid layers for elegant light control. Custom-made and installed across Delhi NCR — Vasant Vihar, South Delhi & Gurgaon.',
    keywords: ['zebra blinds', 'zebra blinds price', 'day night blinds', 'dual layer blinds', 'zebra blind maker delhi'],
    overview: [
      'Zebra blinds (also called day & night blinds) use two layers of alternating sheer and solid fabric. Align the bands for an open, sheer view or offset them to block light completely — all with a smooth chain or motorised mechanism.',
      'They are a sleek, contemporary choice for living rooms, bedrooms, offices and retail, available in a wide range of colours.',
    ],
    features: [
      { title: 'Sheer-to-solid control', description: 'Glide between a soft sheer view and full privacy in seconds.' },
      { title: 'Modern aesthetic', description: 'Clean, contemporary lines that suit any interior.' },
      { title: 'Wide colour range', description: 'Neutrals to bold tones to match your décor.' },
      { title: 'Smooth operation', description: 'Chain-operated as standard; motorised on request.' },
    ],
    bestFor: ['Living rooms', 'Bedrooms', 'Offices', 'Retail', 'Apartments'],
    specs: [
      { label: 'Type', value: 'Dual-layer roller (day & night)' },
      { label: 'Operation', value: 'Chain / Motorised (on request)' },
      { label: 'Fabric', value: 'Polyester sheer + solid bands' },
      { label: 'Mounting', value: 'Inside or outside recess' },
      { label: 'Warranty', value: 'Up to 2 years on mechanism' },
    ],
    faqs: [
      { question: 'What are zebra blinds?', answer: 'Zebra blinds are dual-layer roller blinds with alternating sheer and solid horizontal bands. Aligning or offsetting the layers lets you move smoothly from a sheer view to full privacy.' },
      { question: 'What is the price of zebra blinds?', answer: 'Zebra blinds typically start from around ₹120 per sq.ft depending on fabric and size. Share your window measurements on WhatsApp for an exact quote.' },
      { question: 'Can zebra blinds be motorised?', answer: 'Yes, we offer motorised and remote-operated zebra blinds for convenience and large windows.' },
    ],
  },
  {
    slug: 'roller-blinds',
    name: 'Roller Blinds',
    shortName: 'Roller Blinds',
    category: 'Window Blinds',
    group: 'Blinds',
    featured: false,
    tagline: 'Clean, minimal roller blinds with blackout options',
    excerpt:
      'Sleek roller blinds in plain, textured and blackout fabrics — simple, durable and minimal light control for homes and offices.',
    heroImage: img('rollingblinds.jpg'),
    gallery: [img('rollingblinds.jpg'), img('zebrablindsdisplay.jpg'), img('windowsblinds.jpg'), img('zebrablinds.jpg')],
    priceFrom: '₹90 / sq.ft',
    metaTitle: 'Roller Blinds — Plain & Blackout Window Blinds | Bamboo Chick Makers',
    metaDescription:
      'Minimal roller blinds in plain, textured and blackout fabrics for homes and offices. Custom-made and professionally installed across Delhi NCR — Vasant Vihar, South Delhi & Gurgaon.',
    keywords: ['roller blinds', 'blackout roller blinds', 'office roller blinds', 'roller blinds price'],
    overview: [
      'Roller blinds are the simplest, cleanest window covering — a single smooth fabric that rolls up neatly out of view. Choose light-filtering, room-darkening or full blackout fabrics.',
      'They are ideal for offices, study rooms, bedrooms and any space that wants a minimal, fuss-free look.',
    ],
    features: [
      { title: 'Minimal & clean', description: 'A single neat fabric line with no clutter.' },
      { title: 'Blackout options', description: 'Room-darkening and blackout fabrics for bedrooms and media rooms.' },
      { title: 'Durable fabrics', description: 'Easy-clean, fade-resistant materials.' },
      { title: 'Budget-friendly', description: 'A cost-effective way to dress many windows.' },
    ],
    bestFor: ['Offices', 'Bedrooms', 'Study rooms', 'Kitchens', 'Rentals'],
    specs: [
      { label: 'Type', value: 'Single-layer roller' },
      { label: 'Fabric', value: 'Light-filter / Room-darkening / Blackout' },
      { label: 'Operation', value: 'Chain / Spring / Motorised' },
      { label: 'Mounting', value: 'Inside or outside recess' },
      { label: 'Warranty', value: 'Up to 2 years on mechanism' },
    ],
    faqs: [
      { question: 'Are roller blinds available in blackout?', answer: 'Yes, we offer full blackout roller-blind fabrics, ideal for bedrooms, media rooms and offices with projectors.' },
      { question: 'What is the price of roller blinds?', answer: 'Roller blinds usually start from around ₹90 per sq.ft depending on fabric and size. WhatsApp us your measurements for an exact quote.' },
      { question: 'Can roller blinds be motorised?', answer: 'Yes, motorised and remote options are available for convenience and larger windows.' },
    ],
  },
  {
    slug: 'vertical-blinds',
    name: 'Vertical Blinds',
    shortName: 'Vertical Blinds',
    category: 'Window Blinds',
    group: 'Blinds',
    featured: false,
    tagline: 'Vertical blinds for large windows & glass facades',
    excerpt:
      'Practical vertical blinds for large windows, sliding doors and office facades — easy light control and a clean, professional finish.',
    heroImage: img('verticalblinds.jpg'),
    gallery: [img('verticalblinds.jpg'), img('aluminiumblinds.jpg'), img('windowsblinds.jpg')],
    priceFrom: '₹95 / sq.ft',
    metaTitle: 'Vertical Blinds for Large Windows & Offices | Bamboo Chick Makers',
    metaDescription:
      'Vertical blinds for large windows, sliding doors and office glass facades. Easy tilt-and-slide light control, custom-made and fitted across Delhi NCR — Vasant Vihar, South Delhi & Gurgaon.',
    keywords: ['vertical blinds', 'office vertical blinds', 'vertical blinds price', 'sliding door blinds'],
    overview: [
      'Vertical blinds use rotating fabric vanes that tilt for light control and slide aside for a clear view or access. They are the go-to solution for wide windows, sliding doors and office glazing.',
      'Available in a range of fabrics and colours with sturdy, easy-to-operate tracks.',
    ],
    features: [
      { title: 'Ideal for big windows', description: 'Cover wide spans and sliding doors with ease.' },
      { title: 'Tilt & slide', description: 'Angle the vanes for light, slide them aside for access.' },
      { title: 'Professional look', description: 'A clean, corporate finish for offices and showrooms.' },
      { title: 'Easy to maintain', description: 'Individual vanes are simple to clean or replace.' },
    ],
    bestFor: ['Large windows', 'Sliding doors', 'Offices', 'Showrooms', 'Conference rooms'],
    specs: [
      { label: 'Type', value: 'Vertical vane' },
      { label: 'Vane width', value: '89 mm / 127 mm' },
      { label: 'Operation', value: 'Wand / Cord & chain' },
      { label: 'Fabric', value: 'Polyester / PVC vanes' },
      { label: 'Warranty', value: 'Up to 2 years on mechanism' },
    ],
    faqs: [
      { question: 'Are vertical blinds good for sliding doors?', answer: 'Yes — vertical blinds are one of the best options for sliding doors and wide windows because the vanes slide fully aside for access.' },
      { question: 'What is the price of vertical blinds?', answer: 'Vertical blinds typically start from around ₹95 per sq.ft depending on size and fabric. Share your dimensions on WhatsApp for an exact quote.' },
      { question: 'Can damaged vanes be replaced?', answer: 'Yes, individual vanes can be replaced easily without changing the whole blind.' },
    ],
  },
  {
    slug: 'anti-bird-net',
    name: 'Anti-Bird & Pigeon Net',
    shortName: 'Anti-Bird Net',
    category: 'Protection Nets',
    group: 'Outdoor & Nets',
    featured: true,
    tagline: 'Invisible pigeon & bird nets for balconies and ducts',
    excerpt:
      'Strong, near-invisible anti-bird and pigeon nets for balconies, windows, ducts and open shafts — keep birds out without blocking light or views.',
    heroImage: img('Pigeonnet.jpg'),
    gallery: [img('Pigeonnet.jpg'), img('greenNet.jpg'), img('greenghas.jpg')],
    priceFrom: '₹8 / sq.ft',
    metaTitle: 'Anti-Bird & Pigeon Net Installation | Bamboo Chick Makers',
    metaDescription:
      'Strong, near-invisible pigeon and anti-bird nets for balconies, windows and ducts. Professional, tidy installation across Delhi NCR — Vasant Vihar, South Delhi, Gurgaon & Noida. Free WhatsApp quote.',
    keywords: ['pigeon net', 'anti bird net', 'balcony pigeon net', 'bird net installation', 'pigeon net price'],
    overview: [
      'Pigeons and birds make balconies dirty and unhygienic. Our high-strength, UV-stabilised nylon nets keep them out while staying almost invisible from a distance — so you keep your view and light.',
      'We install neatly with discreet fixings on balconies, windows, ducts, shafts and open utility areas, with custom sizing for any opening.',
    ],
    features: [
      { title: 'Near-invisible', description: 'Fine, transparent netting that barely affects your view.' },
      { title: 'UV-stabilised & strong', description: 'Weather-resistant nylon built to last outdoors.' },
      { title: 'Tidy fixing', description: 'Discreet hooks and tensioning for a clean finish.' },
      { title: 'Hygienic & humane', description: 'Keeps birds out without harming them.' },
    ],
    bestFor: ['Balconies', 'Windows', 'Ducts & shafts', 'Open utility areas', 'Society buildings'],
    specs: [
      { label: 'Material', value: 'UV-stabilised nylon net' },
      { label: 'Net colours', value: 'Transparent / Black / Green' },
      { label: 'Fixing', value: 'Hooks + tensioned cable' },
      { label: 'Use', value: 'Balconies, windows, ducts' },
      { label: 'Warranty', value: 'Up to 3 years on net' },
    ],
    faqs: [
      { question: 'Will the pigeon net spoil my balcony view?', answer: 'No — our nets use a fine, near-transparent thread that is barely visible from a short distance, so your view and light are preserved.' },
      { question: 'What is the price of pigeon net installation?', answer: 'Pigeon nets typically start from around ₹8–₹12 per sq.ft installed, depending on the net grade and access. WhatsApp us your balcony size for a quote.' },
      { question: 'Is the net safe for birds?', answer: 'Yes, it is a humane barrier that simply prevents birds from entering — it does not trap or harm them.' },
    ],
  },
  {
    slug: 'bamboo-jafri',
    name: 'Bamboo Jafri',
    shortName: 'Bamboo Jafri',
    category: 'Outdoor Structures',
    group: 'Outdoor & Nets',
    featured: true,
    tagline: 'Bamboo jafri fencing, screens & garden partitions',
    excerpt:
      'Natural bamboo jafri panels for fencing, garden screens and boundary partitions — rustic, sturdy and perfect for farmhouses, gardens and resorts.',
    heroImage: img('Bamboojafri.jpg'),
    gallery: [img('Bamboojafri.jpg'), img('bamboofencingblind.jpg'), img('Bambooambela.jpg')],
    priceFrom: '₹60 / sq.ft',
    metaTitle: 'Bamboo Jafri — Fencing, Screens & Partitions | Bamboo Chick Makers',
    metaDescription:
      'Natural bamboo jafri panels for fencing, garden screens and boundary partitions for farmhouses, gardens and resorts. Custom-built and installed across Delhi NCR — Vasant Vihar & South Delhi.',
    keywords: ['bamboo jafri', 'bamboo fencing', 'bamboo garden screen', 'bamboo partition outdoor', 'bamboo boundary'],
    overview: [
      'Bamboo jafri is a sturdy lattice-style bamboo panel used for fencing, garden screening, boundary partitions and decorative outdoor walls. It brings a warm, natural, rustic character to any outdoor space.',
      'We build jafri panels to your required height and length and install them on posts or existing structures.',
    ],
    features: [
      { title: 'Natural fencing', description: 'Rustic bamboo lattice for gardens and boundaries.' },
      { title: 'Sturdy build', description: 'Strong, weather-treated bamboo on solid framing.' },
      { title: 'Privacy screening', description: 'Screen off gardens, utility areas and seating.' },
      { title: 'Custom sizes', description: 'Built to your height and span requirements.' },
    ],
    bestFor: ['Farmhouses', 'Gardens', 'Resorts', 'Boundaries', 'Outdoor cafés'],
    specs: [
      { label: 'Product', value: 'Bamboo lattice / jafri panel' },
      { label: 'Material', value: 'Weather-treated bamboo' },
      { label: 'Use', value: 'Fencing, screening, partitions' },
      { label: 'Mounting', value: 'Posts / existing structure' },
      { label: 'Warranty', value: 'Up to 2 years on workmanship' },
    ],
    faqs: [
      { question: 'What is bamboo jafri used for?', answer: 'Bamboo jafri is a lattice-style bamboo panel used for fencing, garden screening, boundary walls and decorative outdoor partitions.' },
      { question: 'Is bamboo jafri weatherproof?', answer: 'We use seasoned, weather-treated bamboo built for outdoor use. With occasional re-coating it lasts for years.' },
      { question: 'Can you make jafri for a farmhouse boundary?', answer: 'Yes, we build and install jafri fencing and screens to any height and length for farmhouses, gardens and resorts.' },
    ],
  },
  {
    slug: 'bamboo-hut',
    name: 'Bamboo Hut & Gazebo',
    shortName: 'Bamboo Hut',
    category: 'Outdoor Structures',
    group: 'Outdoor & Nets',
    featured: true,
    tagline: 'Bamboo huts, gazebos & ambela for gardens & resorts',
    excerpt:
      'Handcrafted bamboo huts, gazebos and ambela structures for gardens, farmhouses, resorts and cafés — natural shaded retreats built to order.',
    heroImage: img('Bamboohuts.jpg'),
    gallery: [img('Bamboohuts.jpg'), img('Bambooambela.jpg'), img('bamboomooda.jpg'), img('Bambooresortumbrella.jpg')],
    priceFrom: 'On request',
    metaTitle: 'Bamboo Hut, Gazebo & Ambela Builders | Bamboo Chick Makers',
    metaDescription:
      'Handcrafted bamboo huts, gazebos and ambela for gardens, farmhouses, resorts and cafés — natural shaded retreats built to order across Delhi NCR — Vasant Vihar & South Delhi.',
    keywords: ['bamboo hut', 'bamboo gazebo', 'bamboo ambela', 'bamboo hut maker', 'resort bamboo hut'],
    overview: [
      'A bamboo hut, gazebo or ambela creates a beautiful natural shaded retreat for gardens, farmhouses, resorts, cafés and event spaces. Each structure is handcrafted from sturdy bamboo and built to your size and style.',
      'We design and build the complete structure — frame, roof and finishing — and install it on site.',
    ],
    features: [
      { title: 'Natural shaded retreat', description: 'A cool, characterful space for gardens and resorts.' },
      { title: 'Handcrafted to order', description: 'Custom size, shape and roof style.' },
      { title: 'Sturdy structure', description: 'Engineered bamboo framing built to last.' },
      { title: 'Turnkey build', description: 'We design, build and install the complete structure.' },
    ],
    bestFor: ['Gardens', 'Farmhouses', 'Resorts', 'Cafés', 'Event spaces'],
    specs: [
      { label: 'Structures', value: 'Hut / Gazebo / Ambela' },
      { label: 'Material', value: 'Seasoned structural bamboo' },
      { label: 'Roofing', value: 'Bamboo / thatch / as specified' },
      { label: 'Scale', value: 'Custom to site' },
      { label: 'Warranty', value: 'Up to 2 years on workmanship' },
    ],
    faqs: [
      { question: 'Do you build bamboo huts for resorts?', answer: 'Yes — bamboo huts, gazebos and ambela for resorts, farmhouses and cafés are a speciality. We design and build to your requirement.' },
      { question: 'How much does a bamboo hut cost?', answer: 'Pricing depends on the size, design and roofing, so we quote on request. Share your site size and style on WhatsApp for an estimate.' },
      { question: 'Are bamboo huts durable outdoors?', answer: 'Yes, we use seasoned structural bamboo and protective finishes. With basic upkeep they last for years.' },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function productSlugs() {
  return products.map((p) => p.slug);
}

export function featuredProducts() {
  return products.filter((p) => p.featured);
}
