import { StatCounter } from './stat-counter';
import { stats } from '@/data/content';

export function StatsBand() {
  return (
    <section className="border-y border-cream-200 bg-white py-12">
      <div className="container-tight">
        <StatCounter stats={stats} />
      </div>
    </section>
  );
}
