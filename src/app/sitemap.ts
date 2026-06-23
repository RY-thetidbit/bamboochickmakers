import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { products } from '@/data/products';
import { cities } from '@/data/cities';
import { blogPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/', priority: 1, freq: 'weekly' },
    { path: '/about-us', priority: 0.7, freq: 'monthly' },
    { path: '/products', priority: 0.9, freq: 'weekly' },
    { path: '/custom-solutions', priority: 0.8, freq: 'monthly' },
    { path: '/gallery', priority: 0.7, freq: 'weekly' },
    { path: '/completed-projects', priority: 0.8, freq: 'weekly' },
    { path: '/testimonials', priority: 0.6, freq: 'monthly' },
    { path: '/faqs', priority: 0.6, freq: 'monthly' },
    { path: '/contact-us', priority: 0.8, freq: 'monthly' },
    { path: '/service-areas', priority: 0.8, freq: 'monthly' },
    { path: '/blog', priority: 0.7, freq: 'weekly' },
    { path: '/privacy-policy', priority: 0.3, freq: 'yearly' },
    { path: '/terms-and-conditions', priority: 0.3, freq: 'yearly' },
  ];

  const urls: MetadataRoute.Sitemap = staticPaths.map((s) => ({
    url: `${site.url}${s.path === '/' ? '' : s.path}`,
    lastModified: now,
    changeFrequency: s.freq,
    priority: s.priority,
  }));

  products.forEach((p) =>
    urls.push({ url: `${site.url}/products/${p.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 }),
  );

  cities.forEach((c) =>
    urls.push({ url: `${site.url}/${c.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 }),
  );

  blogPosts.forEach((b) =>
    urls.push({ url: `${site.url}/blog/${b.slug}`, lastModified: new Date(b.date), changeFrequency: 'monthly', priority: 0.6 }),
  );

  return urls;
}
