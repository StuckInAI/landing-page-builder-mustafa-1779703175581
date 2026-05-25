import { Star } from 'lucide-react';
import type { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Kim',
    role: 'CTO at Horizon Labs',
    avatar: 'SK',
    quote: 'Lumina cut our sprint planning time by 40%. The AI triage feature alone is worth every penny.',
    rating: 5,
  },
  {
    name: 'Marcus Chen',
    role: 'Engineering Manager at Stackly',
    avatar: 'MC',
    quote: 'Finally, a tool that feels like it was built by engineers for engineers. The GitHub integration is flawless.',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Head of Product at Driftly',
    avatar: 'PN',
    quote: 'Our entire product team loves Lumina. Docs, tasks, and roadmaps in one place — game changer.',
    rating: 5,
  },
  {
    name: 'James Okafor',
    role: 'Founder at BuildFast',
    avatar: 'JO',
    quote: 'Switched from three tools to just Lumina. The productivity gains were visible within the first week.',
    rating: 5,
  },
  {
    name: 'Elena Rossi',
    role: 'VP Engineering at Nimbus',
    avatar: 'ER',
    quote: 'The analytics dashboard is incredible. We finally have full visibility into where time is being spent.',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'Lead Developer at Comet',
    avatar: 'DP',
    quote: 'Lumina\'s AI suggestions for task prioritization are scarily accurate. It\'s like having a second PM.',
    rating: 5,
  },
];

const avatarColors = [
  'bg-[#6c63ff]', 'bg-[#ff6584]', 'bg-[#43c6ac]',
  'bg-[#f7b731]', 'bg-blue-500', 'bg-purple-500',
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-[#ede9ff] text-[#6c63ff] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            Loved by teams
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1a1a2e] mb-4">
            Don't just take our word
          </h2>
          <p className="text-gray-500 text-lg">
            Over 50,000 teams use Lumina to ship great products. Here's what a few of them have to say.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-[#f7b731] fill-[#f7b731]" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold ${avatarColors[i % avatarColors.length]}`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a2e]">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
