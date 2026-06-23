import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingWhatsApp } from '@/components/cta/floating-whatsapp';
import { MobileCtaBar } from '@/components/cta/mobile-cta-bar';
import { JsonLd } from '@/components/seo/json-ld';
import { organizationSchema, localBusinessSchema, websiteSchema } from '@/lib/schema';
import { site } from '@/lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: '/' },
  formatDetection: { telephone: true, address: true, email: true },
  verification: {
    // Add Google Search Console verification token here before launch
    // google: 'your-verification-token',
  },
};

export const viewport: Viewport = {
  themeColor: '#8B5E3C',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-background">
        <JsonLd data={[organizationSchema(), websiteSchema(), localBusinessSchema()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <MobileCtaBar />
      </body>
    </html>
  );
}
