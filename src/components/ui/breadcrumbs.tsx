import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbSchema } from '@/lib/schema';

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: 'Home', path: '/' }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="border-b border-cream-200 bg-cream-50">
      <div className="container-tight">
        <ol className="flex flex-wrap items-center gap-1.5 py-3 text-sm text-muted-foreground">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-brand-300" aria-hidden />}
                {last ? (
                  <span className="font-medium text-brand-700" aria-current="page">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.path} className="hover:text-brand-700">
                    {c.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
      <JsonLd data={breadcrumbSchema(all)} />
    </nav>
  );
}
