import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { whyChoose } from '@/data/content';

export function WhyChoose() {
  return (
    <section className="section">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Why Bamboo Chick"
          title="The natural way to cool, private & beautiful spaces"
          description="Bamboo chicks deliver comfort, privacy and timeless style — at a fraction of the cost of glazing or heavy curtains."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="card-surface h-full hover:-translate-y-1 hover:shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand">
                  <item.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
