import Link from 'next/link';
import { Phone } from 'lucide-react';
import { cn, telLink } from '@/lib/utils';
import { site } from '@/lib/site';
import { buttonVariants } from '@/components/ui/button';
import type { VariantProps } from 'class-variance-authority';

type Props = {
  label?: string;
  className?: string;
  size?: VariantProps<typeof buttonVariants>['size'];
  variant?: VariantProps<typeof buttonVariants>['variant'];
  showNumber?: boolean;
};

/** Secondary conversion CTA — initiates a phone call. */
export function CallButton({
  label = 'Call Now',
  className,
  size = 'lg',
  variant = 'outline',
  showNumber = false,
}: Props) {
  return (
    <Link
      href={telLink(site.phone)}
      aria-label={`Call ${site.phoneDisplay}`}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      <Phone className="h-5 w-5" aria-hidden />
      {showNumber ? site.phoneDisplay : label}
    </Link>
  );
}
