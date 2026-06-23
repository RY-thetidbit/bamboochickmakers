import Link from 'next/link';
import { Leaf } from 'lucide-react';
import { site } from '@/lib/site';
import { cn } from '@/lib/utils';

export function Logo({ className, variant = 'default' }: { className?: string; variant?: 'default' | 'light' }) {
  const light = variant === 'light';
  return (
    <Link href="/" className={cn('flex items-center gap-2.5', className)} aria-label={`${site.name} home`}>
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white shadow-soft">
        <Leaf className="h-5 w-5" aria-hidden />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn('font-heading text-base font-bold tracking-tight', light ? 'text-white' : 'text-ink')}>
          Bamboo Chick
        </span>
        <span className={cn('text-xs font-semibold uppercase tracking-[0.2em]', light ? 'text-cream-100/80' : 'text-brand-500')}>
          Makers
        </span>
      </span>
    </Link>
  );
}
