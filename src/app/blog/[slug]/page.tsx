import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CalendarDays, Clock, User } from 'lucide-react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { BlogCard } from '@/components/blog/blog-card';
import { WhatsAppButton } from '@/components/cta/whatsapp-button';
import { CallButton } from '@/components/cta/call-button';
import { CtaBand } from '@/components/cta/cta-band';
import { JsonLd } from '@/components/seo/json-ld';
import { articleSchema } from '@/lib/schema';
import { blogPosts, getPost, postSlugs } from '@/data/blog';

export const dynamicParams = false;

export function generateStaticParams() {
  return postSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    image: post.cover,
    keywords: post.keywords,
    type: 'article',
    publishedTime: post.date,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const fallback = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const suggestions = related.length ? related : fallback;

  return (
    <>
      <Breadcrumbs items={[{ name: 'Blog', path: '/blog' }, { name: post.title, path: `/blog/${post.slug}` }]} />

      <article className="section">
        <div className="container-tight max-w-3xl">
          <span className="eyebrow">{post.category}</span>
          <h1 className="heading-xl mt-4 text-balance">{post.title}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
            <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> {formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readingTime} min read</span>
          </div>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-cream-200 shadow-card">
            <Image src={post.cover} alt={post.title} fill priority sizes="(max-width:768px) 100vw, 768px" className="object-cover" />
          </div>

          <div className="mt-10 space-y-6">
            {post.sections.map((s, i) => (
              <div key={i}>
                {s.heading && <h2 className="font-heading text-xl font-semibold text-ink sm:text-2xl">{s.heading}</h2>}
                <div className={`${s.heading ? 'mt-3' : ''} space-y-3 text-[15px] leading-relaxed text-muted-foreground sm:text-base`}>
                  {s.body.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Inline CTA */}
          <div className="mt-12 rounded-2xl border border-brand-200 bg-cream-100 p-6 text-center">
            <h3 className="font-heading text-lg font-semibold text-ink">Ready to get started?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Get a free, same-day quote for custom bamboo chicks on WhatsApp.
            </p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton />
              <CallButton variant="outline" showNumber />
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="section bg-cream-50">
        <div className="container-tight">
          <h2 className="heading-lg text-center">Related articles</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {suggestions.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.metaDescription,
          image: post.cover,
          slug: post.slug,
          date: post.date,
          author: post.author,
        })}
      />
    </>
  );
}
