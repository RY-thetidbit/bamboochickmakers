export type BlogCategory =
  | 'Bamboo Chick Guide'
  | 'Buying Guide'
  | 'Installation Tips'
  | 'Maintenance Tips'
  | 'Local Guides'
  | 'Home Improvement';

export const blogCategories: BlogCategory[] = [
  'Bamboo Chick Guide',
  'Buying Guide',
  'Installation Tips',
  'Maintenance Tips',
  'Local Guides',
  'Home Improvement',
];

export type BlogSection = { heading?: string; body: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  cover: string;
  author: string;
  date: string; // ISO
  readingTime: number;
  sections: BlogSection[];
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-is-a-bamboo-chick',
    title: 'What Is a Bamboo Chick? A Complete Guide for Indian Homes',
    category: 'Bamboo Chick Guide',
    excerpt:
      'Everything you need to know about bamboo chicks (pardi) — how they work, their benefits, where to use them and how to choose the right one for your home.',
    metaTitle: 'What Is a Bamboo Chick? Complete Guide for Indian Homes | Bamboo Chick Makers',
    metaDescription:
      'A complete guide to bamboo chicks (pardi) for Indian homes — how they reduce heat, add privacy, where to use them and how to choose the right size and finish.',
    keywords: ['what is a bamboo chick', 'bamboo pardi', 'bamboo chick guide', 'bamboo chick benefits'],
    cover: img('photo-1503602642458-232111445657'),
    author: 'Bamboo Chick Makers',
    date: '2026-05-12',
    readingTime: 6,
    sections: [
      {
        body: [
          'A bamboo chick — known in many parts of India as a “pardi” — is a handwoven screen made from thin, seasoned bamboo reeds bound together with strong cord. Fitted over a window, balcony or verandah, it filters harsh sunlight, cuts indoor heat and adds privacy while still letting air flow through.',
          'Bamboo chicks have been used across India for generations precisely because they suit our climate so well: they keep interiors cooler in summer, they are breathable, and they are made from a natural, renewable material.',
        ],
      },
      {
        heading: 'How does a bamboo chick work?',
        body: [
          'The closely spaced reeds block direct sun and glare while leaving tiny gaps for ventilation. This means you get shade and a cooler room without trapping hot, stale air the way a solid blind or glass can.',
          'Most chicks are fitted with a simple roll-up cord and pulley system, so you can lower them when the sun is strong and roll them up for an open view when you want it.',
        ],
      },
      {
        heading: 'Key benefits',
        body: [
          'Heat reduction: a good bamboo chick can cut the heat reaching a room by up to 70%.',
          'Privacy: you can see out without people easily seeing in during the day — ideal for facing flats and ground floors.',
          'Natural looks: the warm bamboo texture suits homes, cafés and commercial facades alike.',
          'Eco-friendly: bamboo is fast-growing and renewable, making chicks a sustainable choice.',
        ],
      },
      {
        heading: 'Where can you use bamboo chicks?',
        body: [
          'Windows, balconies, verandahs, terraces, sit-outs, shop fronts and restaurant or café seating areas are all great candidates. For exposed balconies and terraces, choose heavy-duty, weather-treated chicks with wind-rated fixings.',
        ],
      },
      {
        heading: 'Ready to cool down your space?',
        body: [
          'At Bamboo Chick Makers we manufacture and install custom bamboo chicks across Delhi NCR — Vasant Vihar, South Delhi, Gurgaon and Noida. Send us your measurements on WhatsApp for a free, same-day quote.',
        ],
      },
    ],
  },
  {
    slug: 'bamboo-chick-price-guide',
    title: 'Bamboo Chick Price Guide: What Should You Pay in 2026?',
    category: 'Buying Guide',
    excerpt:
      'A transparent breakdown of bamboo chick pricing in Delhi, Gurgaon and Noida — what affects the cost and how to get the best value.',
    metaTitle: 'Bamboo Chick Price Guide 2026 — What Should You Pay? | Bamboo Chick Makers',
    metaDescription:
      'Transparent bamboo chick price guide for 2026. Understand what affects cost per sq.ft in Delhi, Gurgaon and Noida and how to get the best value on custom chicks.',
    keywords: ['bamboo chick price', 'bamboo chick cost', 'bamboo chick price per sqft', 'bamboo blinds price'],
    cover: img('photo-1554224155-6726b3ff858f'),
    author: 'Bamboo Chick Makers',
    date: '2026-05-20',
    readingTime: 5,
    sections: [
      {
        body: [
          'One of the first questions every customer asks is simple: how much does a bamboo chick cost? The honest answer is that it depends on a few factors — but you can still set a clear expectation before you buy.',
        ],
      },
      {
        heading: 'Typical price range',
        body: [
          'As a guide, custom bamboo chicks generally start from around ₹45 per sq.ft for standard reeds, while premium bamboo blinds with tailored mechanisms can range higher, around ₹65 per sq.ft and up.',
          'Because everything is made to measure, the final price is calculated on the actual area of your window or balcony, plus the mechanism and fixings you choose.',
        ],
      },
      {
        heading: 'What affects the price?',
        body: [
          'Reed quality and density: denser, higher-grade reeds cost more but last longer and block more heat.',
          'Size and span: larger terraces need engineered framing, which adds to the cost.',
          'Mechanism: basic roll-up cords are most economical; motorised options cost more.',
          'Finish: natural, stained or weather-coated finishes vary in price.',
        ],
      },
      {
        heading: 'How to get the best value',
        body: [
          'Buy manufacturer-direct to avoid middleman markups, measure accurately so you do not over-order, and choose weather-treated reeds for exposed areas so you are not replacing them early.',
          'For an exact quote, WhatsApp us your measurements and a photo — we will send transparent, itemised pricing the same day.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-install-bamboo-chick',
    title: 'How Bamboo Chick Installation Works (Step by Step)',
    category: 'Installation Tips',
    excerpt:
      'From measurement to the final fitting — a behind-the-scenes look at how professional bamboo chick installation is done.',
    metaTitle: 'How Bamboo Chick Installation Works — Step by Step | Bamboo Chick Makers',
    metaDescription:
      'A step-by-step look at professional bamboo chick installation — measurement, brackets, roll-up mechanisms and how to get a clean, durable fit.',
    keywords: ['bamboo chick installation', 'how to install bamboo chick', 'bamboo chick fitting'],
    cover: img('photo-1416339306562-f3d12fefd36f'),
    author: 'Bamboo Chick Makers',
    date: '2026-06-02',
    readingTime: 5,
    sections: [
      {
        body: [
          'A bamboo chick only performs as well as its installation. A poorly fixed chick sags, jams or fails in wind — while a properly installed one rolls smoothly for years. Here is how our team approaches it.',
        ],
      },
      {
        heading: 'Step 1 — Precise measurement',
        body: ['We measure the exact opening and decide whether to mount inside the recess or on the face of the wall for the best coverage and looks.'],
      },
      {
        heading: 'Step 2 — Choosing fixings',
        body: ['For balconies and terraces — especially on high floors — we select wind-rated brackets and reinforced cords specified for the height and exposure.'],
      },
      {
        heading: 'Step 3 — Mounting and mechanism',
        body: ['The chick is hung level, the roll-up pulley or cord system is fitted, and side guides or channels are added where needed so it tracks straight.'],
      },
      {
        heading: 'Step 4 — Testing and handover',
        body: ['We test the full roll-up and lower cycle, check the tension, and show you how to operate and maintain it before we leave.'],
      },
      {
        heading: 'Leave it to the professionals',
        body: ['Our in-house teams install across Delhi NCR — Vasant Vihar, South Delhi, Gurgaon and Noida. Message us on WhatsApp to book a site visit.'],
      },
    ],
  },
  {
    slug: 'bamboo-chick-maintenance-tips',
    title: '7 Easy Ways to Make Your Bamboo Chicks Last Longer',
    category: 'Maintenance Tips',
    excerpt:
      'Simple, practical maintenance habits that keep your bamboo chicks looking great and working smoothly for years.',
    metaTitle: 'Bamboo Chick Maintenance — 7 Tips to Make Them Last | Bamboo Chick Makers',
    metaDescription:
      'Seven easy bamboo chick maintenance tips to prevent sagging, mould and fading — keep your chicks looking new and rolling smoothly for years.',
    keywords: ['bamboo chick maintenance', 'bamboo chick care', 'how to clean bamboo chick'],
    cover: img('photo-1493663284031-b7e3aefcae8e'),
    author: 'Bamboo Chick Makers',
    date: '2026-06-10',
    readingTime: 4,
    sections: [
      {
        body: ['Bamboo chicks are low maintenance, but a few simple habits will dramatically extend their life and keep them looking new.'],
      },
      {
        heading: 'The essentials',
        body: [
          'Dust regularly with a dry brush or soft cloth to stop grime building up between the reeds.',
          'Wipe gently with a barely-damp cloth — never soak the reeds or use harsh chemicals.',
          'Roll them up during severe storms to reduce stress on the reeds and cords.',
          'Re-coat exposed chicks every couple of years to refresh the weather protection.',
          'Check the cords and pulleys occasionally and replace worn cord before it snaps.',
          'Let them dry fully after heavy rain before rolling them up tightly to prevent mould.',
          'Book a professional re-coat and service for large or high-floor installations.',
        ],
      },
      {
        heading: 'We can help',
        body: ['We offer re-coating and servicing for chicks we have installed. Message us on WhatsApp to schedule a maintenance visit.'],
      },
    ],
  },
  {
    slug: 'best-bamboo-chick-for-delhi-balconies',
    title: 'Choosing the Best Bamboo Chick for Delhi Balconies',
    category: 'Local Guides',
    excerpt:
      'Delhi’s scorching summers, dust and monsoon demand the right bamboo chick. Here is how to choose for a balcony that lasts.',
    metaTitle: 'Best Bamboo Chick for Delhi Balconies — Local Guide | Bamboo Chick Makers',
    metaDescription:
      'A local guide to choosing the best bamboo chick for Delhi NCR balconies — handling extreme summer heat, dust, high-rise wind and the monsoon.',
    keywords: ['bamboo chick delhi', 'balcony bamboo chick delhi', 'best bamboo chick for balcony', 'bamboo chick vasant vihar'],
    cover: img('photo-1570168007204-dfb528c6958f'),
    author: 'Bamboo Chick Makers',
    date: '2026-06-15',
    readingTime: 5,
    sections: [
      {
        body: ['Delhi balconies face a tough combination: extreme summer heat, dry dust, high-rise wind and a sudden, heavy monsoon. The right bamboo chick handles all four.'],
      },
      {
        heading: 'Prioritise weather-treated reeds',
        body: ['For Delhi, always choose seasoned, weather-treated reeds. Untreated bamboo will dry out, crack and warp quickly under intense summer sun and dust.'],
      },
      {
        heading: 'Insist on wind-rated fixings',
        body: ['On high floors in Dwarka, Gurgaon and Noida, the fixings matter as much as the chick. Reinforced, wind-rated brackets and cords keep the chick secure and smooth in gusty conditions.'],
      },
      {
        heading: 'Pick the right density',
        body: ['Denser reeds give more privacy and heat reduction — ideal for balconies that face other towers or the harsh afternoon sun.'],
      },
      {
        heading: 'Get a local site visit',
        body: ['We know Delhi NCR balconies. Message us on WhatsApp and we will recommend the right spec and fitting for your floor and exposure.'],
      },
    ],
  },
  {
    slug: 'natural-ways-to-cool-your-home',
    title: 'Natural Ways to Cool Your Home Without Cranking the AC',
    category: 'Home Improvement',
    excerpt:
      'Cut your cooling bills with natural shading, ventilation and bamboo solutions that keep interiors comfortable.',
    metaTitle: 'Natural Ways to Cool Your Home Without AC | Bamboo Chick Makers',
    metaDescription:
      'Practical, natural ways to cool your home without overusing the AC — shading, cross-ventilation and bamboo chicks that cut heat and energy bills.',
    keywords: ['cool home naturally', 'reduce home heat', 'bamboo chick cooling', 'energy saving shading'],
    cover: img('photo-1513161455079-7dc1de15ef3e'),
    author: 'Bamboo Chick Makers',
    date: '2026-06-18',
    readingTime: 5,
    sections: [
      {
        body: ['Air conditioning is effective but expensive — and it works much harder when the sun is pouring directly into your rooms. A few natural strategies can keep your home cooler and cut your bills.'],
      },
      {
        heading: 'Shade the sun before it gets in',
        body: ['The single biggest win is blocking direct sun at the window or balcony. Bamboo chicks cut solar heat by up to 70% while still allowing airflow — so rooms stay cooler without feeling stuffy.'],
      },
      {
        heading: 'Encourage cross-ventilation',
        body: ['Bamboo chicks let breeze pass through, unlike solid blinds. Combined with opposite-side ventilation, this keeps air moving naturally.'],
      },
      {
        heading: 'Use natural materials',
        body: ['Bamboo, jute and other natural fibres do not radiate heat the way metal and dark synthetics do, helping keep balconies and sit-outs comfortable.'],
      },
      {
        heading: 'Start with your hottest window',
        body: ['Pick the window or balcony that heats up most and shade it first. Message us on WhatsApp and we will help you plan a cooler, lower-bill home.'],
      },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function postSlugs() {
  return blogPosts.map((p) => p.slug);
}
