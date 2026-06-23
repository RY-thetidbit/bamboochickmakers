import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { productCategories } from '@/data/content';

export function ProductCategories() {
  return (
    <section className="section bg-cream-50">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Our Products"
          title="Bamboo solutions for every space"
          description="From classic chicks to tailored blinds and large-span terrace screens — all custom-made and professionally fitted."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((cat, i) => (
            <Reveal key={cat.href} delay={i * 0.05}>
              <Link
                href={cat.href}
                className="group relative block h-72 overflow-hidden rounded-2xl border border-cream-200 shadow-soft"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-xl font-semibold text-white">{cat.title}</h3>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition group-hover:bg-whatsapp">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-cream-100/90">{cat.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
