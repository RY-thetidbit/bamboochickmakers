export type Testimonial = {
  name: string;
  location: string;
  role: string;
  rating: number;
  text: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Rohan Mehta',
    location: 'Vasant Vihar, Delhi',
    role: 'Homeowner',
    rating: 5,
    text: 'Our west-facing balcony was unbearable in the afternoon. Bamboo Chick Makers measured, manufactured and fitted custom chicks within four days. The room is noticeably cooler and the finish looks premium.',
    initials: 'RM',
  },
  {
    name: 'Anjali Sharma',
    location: 'Greater Kailash, Delhi',
    role: 'Interior Designer',
    rating: 5,
    text: 'I specify their bamboo blinds and zebra blinds for many of my residential projects. The quality of the materials, the tidy installation and the on-time delivery make them my go-to partner across South Delhi.',
    initials: 'AS',
  },
  {
    name: 'Imran Khan',
    location: 'Hauz Khas, Delhi',
    role: 'Café Owner',
    rating: 5,
    text: 'They shaded our entire terrace seating with large bamboo chicks and fancy chicks. Customers love the natural look and we can now use the space even in peak summer. Excellent value and service.',
    initials: 'IK',
  },
  {
    name: 'Priya Nair',
    location: 'Dwarka, Delhi',
    role: 'Apartment Owner',
    rating: 5,
    text: 'Professional from quote to fitting. The team installed a near-invisible pigeon net and balcony chick — punctual, clean and they explained the maintenance clearly. Our balcony now has full privacy from the facing tower.',
    initials: 'PN',
  },
  {
    name: 'Sandeep Khurana',
    location: 'Defence Colony, Delhi',
    role: 'Bungalow Owner',
    rating: 5,
    text: 'Got bamboo chicks for the entire verandah of our bungalow. Sturdy, beautifully woven and they handled the Delhi summer and monsoon without any issue. Highly recommended.',
    initials: 'SK',
  },
  {
    name: 'Farah Ansari',
    location: 'Sector 56, Gurgaon',
    role: 'Homeowner',
    rating: 5,
    text: 'Fair pricing and genuinely helpful advice on WhatsApp before I even ordered. The zebra blinds and roll-up chick are smooth to operate and the kids can use them easily. Very happy.',
    initials: 'FA',
  },
];
