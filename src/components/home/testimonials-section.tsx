import { Star, Quote } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { testimonials } from '@/data/testimonials';
import { site } from '@/lib/site';

export function TestimonialsSection() {
  return (
    <section className="section">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="Loved by 500+ homes & businesses"
          description={`Rated ${site.rating.value}/5 across ${site.rating.count}+ reviews. Here’s what our customers say.`}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <figure className="flex h-full flex-col rounded-2xl border border-cream-200 bg-white p-6 shadow-soft">
                <Quote className="h-8 w-8 text-brand-200" aria-hidden />
                <div className="mt-2 flex gap-0.5">
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-leaf text-leaf" />
                  ))}
                </div>
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink">“{t.text}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-cream-200 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 font-heading text-sm font-semibold text-brand">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.role} · {t.location}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
