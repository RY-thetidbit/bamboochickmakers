import { cn } from '@/lib/utils';

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  as?: 'h1' | 'h2';
};

export function SectionHeading({ eyebrow, title, description, align = 'center', className, as = 'h2' }: Props) {
  const Heading = as;
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Heading className={cn('heading-lg text-balance', eyebrow && 'mt-4')}>{title}</Heading>
      {description && <p className="lead mt-4">{description}</p>}
    </div>
  );
}
