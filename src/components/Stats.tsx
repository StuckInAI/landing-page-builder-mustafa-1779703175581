import type { Stat } from '@/types';

const stats: Stat[] = [
  { value: '50K+', label: 'Teams worldwide' },
  { value: '4.9★', label: 'Average rating' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '2× faster', label: 'Delivery speed' },
];

export default function Stats() {
  return (
    <section className="bg-[#1a1a2e] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">{s.value}</p>
              <p className="text-sm text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
