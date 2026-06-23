import Link from 'next/link';
import { Home, Search } from 'lucide-react';
import { WhatsAppButton } from '@/components/cta/whatsapp-button';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-tight flex min-h-[50vh] flex-col items-center justify-center text-center">
        <p className="font-heading text-7xl font-bold text-brand">404</p>
        <h1 className="heading-lg mt-4">Page not found</h1>
        <p className="lead mt-3 max-w-md">
          The page you’re looking for doesn’t exist or has moved. Let’s get you back on track.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            <Home className="h-4 w-4" /> Back to Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand/25 px-6 py-3 text-sm font-semibold text-brand-700 transition hover:border-brand hover:bg-brand-50"
          >
            <Search className="h-4 w-4" /> Browse Products
          </Link>
        </div>
        <div className="mt-6">
          <WhatsAppButton size="md" />
        </div>
      </div>
    </section>
  );
}
