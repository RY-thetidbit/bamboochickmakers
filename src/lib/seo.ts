import type { Metadata } from 'next';
import { site } from './site';

type SeoInput = {
  title: string;
  description: string;
  path: string; // leading slash, e.g. "/about-us"
  image?: string;
  keywords?: string[];
  type?: 'website' | 'article';
  noIndex?: boolean;
  publishedTime?: string;
};

/** Generates consistent, SEO-complete Metadata for any page.
 *  When `image` is omitted, Next.js' file-based opengraph-image (app/opengraph-image.tsx)
 *  is automatically inherited, so we don't hardcode a fallback path. */
export function buildMetadata({
  title,
  description,
  path,
  image,
  keywords = [],
  type = 'website',
  noIndex = false,
  publishedTime,
}: SeoInput): Metadata {
  const url = `${site.url}${path === '/' ? '' : path}`;
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;

  return {
    // `absolute` opts out of the root layout's "%s | Bamboo Chick Makers" template,
    // so the brand isn't appended twice.
    title: { absolute: fullTitle },
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: 'en_IN',
      type,
      ...(image ? { images: [{ url: image, width: 1200, height: 630, alt: title }] } : {}),
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
