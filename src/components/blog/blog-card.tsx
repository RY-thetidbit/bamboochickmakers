import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/data/blog';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-cream-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card ${
        featured ? 'lg:flex-row' : ''
      }`}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={`relative block overflow-hidden ${featured ? 'aspect-[16/10] lg:aspect-auto lg:w-1/2' : 'aspect-[16/10]'}`}
      >
        <Image
          src={post.cover}
          alt={post.title}
          fill
          sizes={featured ? '(max-width:1024px) 100vw, 50vw' : '(max-width:640px) 100vw, 33vw'}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand px-2.5 py-1 text-xs font-semibold text-white">
          {post.category}
        </span>
      </Link>
      <div className={`flex flex-1 flex-col p-5 ${featured ? 'lg:p-7' : ''}`}>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" /> {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" /> {post.readingTime} min read
          </span>
        </div>
        <h3 className={`mt-3 font-heading font-semibold text-ink ${featured ? 'text-xl lg:text-2xl' : 'text-lg'}`}>
          <Link href={`/blog/${post.slug}`} className="hover:text-brand">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
        >
          Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
