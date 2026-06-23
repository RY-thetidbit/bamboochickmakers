import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { cn, whatsappLink } from '@/lib/utils';
import { site } from '@/lib/site';
import { buttonVariants } from '@/components/ui/button';
import type { VariantProps } from 'class-variance-authority';

type Props = {
  message?: string;
  label?: string;
  className?: string;
  size?: VariantProps<typeof buttonVariants>['size'];
  variant?: VariantProps<typeof buttonVariants>['variant'];
  showIcon?: boolean;
};

/** Primary conversion CTA — opens WhatsApp with a prefilled message. */
export function WhatsAppButton({
  message = site.waMessages.general,
  label = 'Get Free Quote on WhatsApp',
  className,
  size = 'lg',
  variant = 'whatsapp',
  showIcon = true,
}: Props) {
  return (
    <Link
      href={whatsappLink(site.whatsapp, message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {showIcon && <MessageCircle className="h-5 w-5" aria-hidden />}
      {label}
    </Link>
  );
}
