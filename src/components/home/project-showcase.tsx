import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

export function ProjectShowcase() {
  const featured = projects.slice(0, 6);
  return (
    <section className="section bg-cream-50">
      <div className="container-tight">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Our Work"
            title="Recent project showcase"
            description="A glimpse of bamboo chick installations we’ve completed across Delhi NCR — Vasant Vihar, South Delhi, Gurgaon and Noida."
          />
          <Link href="/completed-projects" className="shrink-0">
            <Button variant="outline" size="md">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <article className="group h-full overflow-hidden rounded-2xl border border-cream-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={`${p.title} — ${p.location}`}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-brand px-2.5 py-1 text-xs font-semibold text-white">
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-ink">{p.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-brand-400" /> {p.location}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
