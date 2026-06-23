import type { Metadata } from 'next';
import { CityTemplate, cityMetadata } from '@/components/city/city-template';

const SLUG = 'bamboo-chick-vasant-kunj';

export const metadata: Metadata = cityMetadata(SLUG);

export default function Page() {
  return <CityTemplate slug={SLUG} />;
}
