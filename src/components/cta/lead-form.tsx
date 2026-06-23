'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MessageCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { whatsappLink } from '@/lib/utils';
import { site } from '@/lib/site';
import { cities } from '@/data/cities';
import { products } from '@/data/products';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z
    .string()
    .min(10, 'Enter a valid phone number')
    .regex(/^[0-9+\-\s]{10,15}$/, 'Enter a valid phone number'),
  city: z.string().min(1, 'Select your city'),
  product: z.string().min(1, 'Select a product'),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function LeadForm({ defaultCity, defaultProduct }: { defaultCity?: string; defaultProduct?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { city: defaultCity ?? '', product: defaultProduct ?? '' },
  });

  const onSubmit = (data: FormValues) => {
    const text = `Hello Bamboo Chick Makers!%0A%0AName: ${data.name}%0APhone: ${data.phone}%0ACity: ${data.city}%0AProduct: ${data.product}${
      data.message ? `%0ADetails: ${data.message}` : ''
    }%0A%0APlease share pricing and available options.`;
    const decoded = decodeURIComponent(text);
    window.open(whatsappLink(site.whatsapp, decoded), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const inputCls =
    'w-full rounded-xl border border-cream-200 bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20';
  const labelCls = 'mb-1.5 block text-sm font-medium text-ink';
  const errCls = 'mt-1 text-xs text-red-600';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div>
        <label htmlFor="lf-name" className={labelCls}>
          Full Name
        </label>
        <input id="lf-name" {...register('name')} className={inputCls} placeholder="Your name" />
        {errors.name && <p className={errCls}>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="lf-phone" className={labelCls}>
          Phone / WhatsApp Number
        </label>
        <input id="lf-phone" inputMode="tel" {...register('phone')} className={inputCls} placeholder="70371 40055" />
        {errors.phone && <p className={errCls}>{errors.phone.message}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lf-city" className={labelCls}>
            City
          </label>
          <select id="lf-city" {...register('city')} className={inputCls}>
            <option value="">Select city</option>
            {cities.map((c) => (
              <option key={c.slug} value={c.city}>
                {c.city}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
          {errors.city && <p className={errCls}>{errors.city.message}</p>}
        </div>

        <div>
          <label htmlFor="lf-product" className={labelCls}>
            Product
          </label>
          <select id="lf-product" {...register('product')} className={inputCls}>
            <option value="">Select product</option>
            {products.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.shortName}
              </option>
            ))}
            <option value="Custom Solution">Custom Solution</option>
          </select>
          {errors.product && <p className={errCls}>{errors.product.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="lf-message" className={labelCls}>
          Size / Details <span className="text-muted-foreground">(optional)</span>
        </label>
        <textarea
          id="lf-message"
          {...register('message')}
          rows={3}
          className={inputCls}
          placeholder="e.g. Balcony approx 8ft x 7ft, west-facing"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-whatsapp-dark disabled:opacity-60"
      >
        {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : <MessageCircle className="h-5 w-5" />}
        Send Enquiry on WhatsApp
      </button>

      {submitted && (
        <p className="rounded-xl bg-leaf-50 px-4 py-3 text-center text-sm font-medium text-leaf-700">
          Opening WhatsApp… If it didn’t open, message us directly at {site.phoneDisplay}.
        </p>
      )}
      <p className="text-center text-xs text-muted-foreground">
        We reply within business hours · {site.hours}
      </p>
    </form>
  );
}
