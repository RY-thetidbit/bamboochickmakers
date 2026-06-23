import { SectionHeading } from '@/components/ui/section-heading';
import { FaqAccordion } from '@/components/ui/faq-accordion';
import { WhatsAppButton } from '@/components/cta/whatsapp-button';
import { JsonLd } from '@/components/seo/json-ld';
import { faqSchema } from '@/lib/schema';
import type { Faq } from '@/data/faqs';

type Props = {
  faqs: Faq[];
  title?: string;
  description?: string;
  eyebrow?: string;
  withSchema?: boolean;
  className?: string;
};

export function FaqSection({
  faqs,
  title = 'Frequently Asked Questions',
  description = 'Everything you need to know about our bamboo chicks, pricing and installation. Still have a question? Message us on WhatsApp.',
  eyebrow = 'FAQs',
  withSchema = true,
  className,
}: Props) {
  return (
    <section className={`section ${className ?? ''}`}>
      <div className="container-tight">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-10">
          <FaqAccordion faqs={faqs} />
        </div>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton label="Ask Us on WhatsApp" />
        </div>
      </div>
      {withSchema && <JsonLd data={faqSchema(faqs)} />}
    </section>
  );
}
