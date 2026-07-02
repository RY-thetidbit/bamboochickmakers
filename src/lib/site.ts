/**
 * Single source of truth for business + brand information.
 * Update these values to roll the site out for a real deployment.
 */

export const site = {
  name: 'Bamboo Chick Makers',
  legalName: 'Bamboo Chick Makers',
  shortName: 'Bamboo Chick Makers',
  domain: 'bamboochickmakers.com',
  url: 'https://bamboochickmakers.com',
  tagline: 'Premium Bamboo Chick Manufacturing & Installation',
  description:
    'Bamboo Chick Makers manufactures, customizes and installs premium bamboo chicks, blinds, zebra & roller blinds, anti-bird nets, bamboo jafri and bamboo huts for homes, balconies, terraces and commercial spaces across Delhi NCR — Vasant Vihar, South Delhi, New Delhi, Dwarka, Gurgaon and Noida.',

  // Contact
  phoneDisplay: '+91 70371 40055',
  phone: '+917037140055',
  whatsapp: '917037140055',
  email: 'sanjaybamboochickmaker055@gmail.com',

  address: {
    street: 'Block A, Vasant Vihar',
    locality: 'New Delhi',
    region: 'Delhi',
    postalCode: '110057',
    country: 'IN',
    full: 'Block A, Vasant Vihar, New Delhi, Delhi 110057, India',
  },

  // Approximate centre of the base location (Vasant Vihar, New Delhi) for LocalBusiness schema / map
  geo: { lat: 28.5601, lng: 77.1588 },

  hours: 'Open 24 hours · 7 days a week',
  openingHoursSpec: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' },
  ],

  foundingYear: 2021,
  yearsExperience: 5,
  installationsCount: 3800,
  rating: { value: 4.9, count: 4000 },

  // Founder / owner — featured in the "Meet the Owner" section
  owner: {
    name: 'Sanjay Sikarwar',
    role: 'Founder & Owner',
    // Drop a real portrait at public/images/owner.jpg and set this to '/images/owner.jpg'.
    // Left blank, the section shows an elegant monogram instead of a broken image.
    photo: '',
    bio: [
      'Bamboo Chick Makers was founded by Sanjay Sikarwar, a craftsman who has spent over five years perfecting bamboo chicks, blinds and natural shading for Delhi homes and businesses.',
      'From our base in Vasant Vihar, Sanjay personally oversees every measurement, manufacturing batch and installation — so each customer gets honest advice, fair pricing and a finish that lasts.',
    ],
    quote: 'I treat every home like my own. If it isn’t right, it doesn’t leave my workshop.',
  },

  // Social profiles — leave a value empty ('') to hide that icon/link site-wide.
  social: {
    instagram: 'https://www.instagram.com/sanjaybamboochickmaker/',
    facebook: '',
    youtube: '',
  },

  // Scan-to-connect & scan-to-pay QR codes (served from /public/images).
  // Leave a value empty ('') to hide that card.
  qr: {
    whatsapp: '/images/qr-whatsapp.jpg',
    instagram: '/images/qr-instagram.jpg',
    phonepe: '/images/qr-phonepe.jpg',
    upi: '/images/qr-upi.jpg',
  },

  // Digital payments accepted (UPI / PhonePe). Shown on the contact page.
  upiId: '',
  payments: {
    accepts: ['UPI', 'PhonePe', 'Google Pay', 'Paytm', 'Bank Transfer'],
  },

  // Prefilled WhatsApp messages used across the site
  waMessages: {
    general:
      'Hello Bamboo Chick Makers, I am interested in Bamboo Chick installation. Please share pricing and available options.',
    quote:
      'Hello Bamboo Chick Makers, I would like a free quote for Bamboo Chick. Please share details and pricing.',
  },
} as const;

export type NavLink = { label: string; href: string };
export type NavGroup = { label: string; href: string; children?: NavLink[] };

export const mainNav: NavGroup[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Bamboo Chick', href: '/products/bamboo-chick' },
      { label: 'Bamboo Blinds', href: '/products/bamboo-blinds' },
      { label: 'Zebra Blinds', href: '/products/zebra-blinds' },
      { label: 'Fancy Bamboo Chick', href: '/products/fancy-bamboo-chick' },
      { label: 'Balcony Bamboo Chick', href: '/products/balcony-bamboo-chick' },
      { label: 'Terrace Bamboo Chick', href: '/products/terrace-bamboo-chick' },
      { label: 'Anti-Bird & Pigeon Net', href: '/products/anti-bird-net' },
      { label: 'Bamboo Jafri', href: '/products/bamboo-jafri' },
      { label: 'Bamboo Hut & Gazebo', href: '/products/bamboo-hut' },
    ],
  },
  { label: 'Custom Solutions', href: '/custom-solutions' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Projects', href: '/completed-projects' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact-us' },
];

export const footerNav = {
  products: [
    { label: 'Bamboo Chick', href: '/products/bamboo-chick' },
    { label: 'Bamboo Blinds', href: '/products/bamboo-blinds' },
    { label: 'Zebra Blinds', href: '/products/zebra-blinds' },
    { label: 'Vertical Blinds', href: '/products/vertical-blinds' },
    { label: 'Fancy Bamboo Chick', href: '/products/fancy-bamboo-chick' },
    { label: 'Anti-Bird & Pigeon Net', href: '/products/anti-bird-net' },
    { label: 'Bamboo Jafri', href: '/products/bamboo-jafri' },
    { label: 'Bamboo Hut & Gazebo', href: '/products/bamboo-hut' },
  ],
  company: [
    { label: 'About Us', href: '/about-us' },
    { label: 'Completed Projects', href: '/completed-projects' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact-us' },
  ],
  support: [
    { label: 'FAQs', href: '/faqs' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  ],
};
