import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { PageHero } from '@/components/ui/page-hero';
import { BlogCard } from '@/components/blog/blog-card';
import { Reveal } from '@/components/ui/reveal';
import { CtaBand } from '@/components/cta/cta-band';
import { blogPosts, blogCategories } from '@/data/blog';

export const metadata: Metadata = buildMetadata({
  title: 'Blog — Bamboo Chick Guides, Tips & Local Advice',
  description:
    'Expert guides on bamboo chicks — buying advice, pricing, installation and maintenance tips, plus local guides for Delhi NCR homes.',
  path: '/blog',
  keywords: ['bamboo chick blog', 'bamboo chick guide', 'bamboo chick tips', 'bamboo chick buying guide'],
});

export default function BlogPage() {
  const [featured, ...rest] = [...blogPosts].sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <>
      <Breadcrumbs items={[{ name: 'Blog', path: '/blog' }]} />
      <PageHero
        eyebrow="Blog"
        title="Guides, tips & local advice on bamboo chicks"
        description="Everything from choosing and pricing bamboo chicks to installation and maintenance — written by our experts."
        showCtas={false}
      />

      <section className="section">
        <div className="container-tight">
          {/* Categories */}
          <div className="mb-10 flex flex-wrap gap-2">
            <span className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white">All</span>
            {blogCategories.map((c) => (
              <span key={c} className="rounded-full bg-cream-100 px-4 py-2 text-sm font-medium text-brand-700">
                {c}
              </span>
            ))}
          </div>

          {/* Featured */}
          <Reveal>
            <BlogCard post={featured} featured />
          </Reveal>

          {/* Grid */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
