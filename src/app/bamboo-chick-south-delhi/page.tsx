import type { Metadata } from 'next';
import { CityTemplate, cityMetadata } from '@/components/city/city-template';

const SLUG = 'bamboo-chick-south-delhi';

export const metadata: Metadata = cityMetadata(SLUG);

export default function Page() {
  return <CityTemplate slug={SLUG} />;
}
