'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { projects, projectCategories } from '@/data/projects';

export function ProjectsGrid() {
  const [active, setActive] = useState<string>('All');
  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition',
              active === cat ? 'bg-brand text-white shadow-soft' : 'bg-cream-100 text-brand-700 hover:bg-cream-200',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <article
            key={p.slug}
            className="group h-full overflow-hidden rounded-2xl border border-cream-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={p.image}
                alt={`${p.title} — ${p.location}`}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute left-3 top-3 rounded-full bg-brand px-2.5 py-1 text-xs font-semibold text-white">
                {p.category}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg font-semibold text-ink">{p.title}</h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-brand-400" /> {p.location} · {p.product}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
