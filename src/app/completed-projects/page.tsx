import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { PageHero } from '@/components/ui/page-hero';
import { StatsBand } from '@/components/sections/stats-band';
import { ProjectsGrid } from '@/components/gallery/projects-grid';
import { CtaBand } from '@/components/cta/cta-band';

export const metadata: Metadata = buildMetadata({
  title: 'Completed Projects — Bamboo Chick Installations',
  description:
    'See completed bamboo chick projects across Delhi NCR — Vasant Vihar, South Delhi, Gurgaon and Noida — residential balconies, terraces, cafés and commercial installations.',
  path: '/completed-projects',
  keywords: ['bamboo chick projects', 'completed bamboo chick installations', 'bamboo chick work delhi'],
});

export default function CompletedProjectsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Completed Projects', path: '/completed-projects' }]} />
      <PageHero
        eyebrow="Our Work"
        title="Completed projects that speak for themselves"
        description="From compact apartment balconies to large terrace cafés — explore a selection of our recent bamboo chick installations across Delhi NCR."
      />

      <StatsBand />

      <section className="section">
        <div className="container-tight">
          <ProjectsGrid />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
