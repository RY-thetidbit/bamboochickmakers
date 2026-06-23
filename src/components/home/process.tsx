import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { processSteps } from '@/data/content';

export function Process() {
  return (
    <section className="section bg-ink text-white">
      <div className="container-tight">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple, transparent process"
          description="From your first WhatsApp message to after-sales support, we make getting bamboo chicks effortless."
          className="[&_h2]:text-white [&_.lead]:text-cream-100/80"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.05}>
              <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
                <span className="font-heading text-5xl font-bold text-white/10">{step.step}</span>
                <div className="-mt-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                  <step.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-100/70">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
