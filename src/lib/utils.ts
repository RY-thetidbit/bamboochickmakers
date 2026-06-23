import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Build a wa.me link with a prefilled, URL-encoded message. */
export function whatsappLink(phone: string, message: string) {
  const clean = phone.replace(/[^0-9]/g, '');
  return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
}

/** Build a tel: link from a display phone number. */
export function telLink(phone: string) {
  return `tel:${phone.replace(/[^0-9+]/g, '')}`;
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}
