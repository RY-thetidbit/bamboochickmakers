import { Reveal } from '@/components/ui/reveal';
import { guarantees } from '@/data/content';

export function Guarantees() {
  return (
    <section className="section">
      <div className="container-tight">
        <div className="grid gap-5 sm:grid-cols-3">
          {guarantees.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-cream-200 bg-cream-50 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-leaf-50 text-leaf">
                  <g.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-ink">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
