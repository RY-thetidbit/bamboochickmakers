import { site } from './site';
import { cities } from '@/data/cities';
import { products } from '@/data/products';

/** Helpers that return JSON-LD objects. Render them with <JsonLd data={...} />. */

const SERVICES = [
  'Bamboo Chick',
  'Bamboo Pardi',
  'Bamboo Blinds',
  'Zebra Blinds',
  'Roller Blinds',
  'Vertical Blinds',
  'Bamboo Curtains',
  'Balcony Bamboo Chick',
  'Terrace Bamboo Chick',
  'Fancy Bamboo Chick',
  'Anti-Bird & Pigeon Net',
  'Bamboo Jafri',
  'Bamboo Hut & Gazebo',
];

const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.name}, ${site.address.full}`,
)}`;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/logo.png`,
    description: site.description,
    email: site.email,
    telephone: site.phone,
    foundingDate: String(site.foundingYear),
    sameAs: [site.social.instagram, site.social.facebook, site.social.youtube].filter(Boolean),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
  };
}

export function localBusinessSchema(opts?: { city?: string; path?: string }) {
  const id = opts?.path ? `${site.url}${opts.path}#localbusiness` : `${site.url}/#localbusiness`;
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': id,
    name: opts?.city ? `${site.name} in ${opts.city}` : site.name,
    alternateName: opts?.city
      ? [`Bamboo Chick Maker ${opts.city}`, `Bamboo Chick in ${opts.city}`]
      : ['Bamboo Chick Maker', 'Bamboo Chick Makers Vasant Vihar', 'Bamboo Chick Makers Delhi'],
    image: [`${site.url}/opengraph-image`],
    logo: `${site.url}/icon.svg`,
    url: opts?.path ? `${site.url}${opts.path}` : site.url,
    telephone: site.phone,
    email: site.email,
    slogan: site.tagline,
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Bank Transfer',
    description: opts?.city
      ? `Bamboo Chick Makers in ${opts.city} — manufacturing, customization and installation of bamboo chicks, blinds, zebra blinds, pigeon nets, jafri and huts.`
      : site.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: mapHref,
    openingHoursSpecification: site.openingHoursSpec.map((s) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: s.days,
      opens: s.opens,
      closes: s.closes,
    })),
    areaServed: cities.map((c) => ({ '@type': 'City', name: c.city })),
    knowsAbout: SERVICES,
    makesOffer: products.map((p) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: p.name, serviceType: p.category },
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Bamboo Chick, Blinds & Net Services',
      itemListElement: products.map((p) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: p.name },
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: 5,
    },
    founder: { '@type': 'Person', name: site.owner.name },
    sameAs: [site.social.instagram, site.social.facebook, site.social.youtube].filter(Boolean),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function productSchema(p: {
  name: string;
  description: string;
  image: string;
  slug: string;
  priceFrom?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    description: p.description,
    image: p.image,
    brand: { '@type': 'Brand', name: site.name },
    category: 'Bamboo Window Coverings',
    url: `${site.url}/products/${p.slug}`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '45',
      offerCount: '5',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: site.name },
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path === '/' ? '' : item.path}`,
    })),
  };
}

export function articleSchema(post: {
  title: string;
  description: string;
  image: string;
  slug: string;
  date: string;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      logo: { '@type': 'ImageObject', url: `${site.url}/logo.png` },
    },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };
}

export function reviewSchema(reviews: { name: string; rating: number; text: string }[]) {
  return reviews.map((r) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
    author: { '@type': 'Person', name: r.name },
    reviewBody: r.text,
    itemReviewed: { '@id': `${site.url}/#localbusiness` },
  }));
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.name,
    url: site.url,
    publisher: { '@id': `${site.url}/#organization` },
  };
}
