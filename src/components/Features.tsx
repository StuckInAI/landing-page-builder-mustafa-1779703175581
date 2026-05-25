import { Zap, BarChart2, Shield, Users, MessageSquare, Layers } from 'lucide-react';
import clsx from 'clsx';

type FeatureItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: string;
  bg: string;
};

const features: FeatureItem[] = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'AI-Powered Automation',
    description: 'Let Lumina handle repetitive tasks, triage bugs, and surface insights so your team focuses on building.',
    accent: 'text-[#6c63ff]',
    bg: 'bg-[#ede9ff]',
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
    title: 'Real-time Analytics',
    description: 'Track velocity, cycle time, and team health with beautiful dashboards that update live.',
    accent: 'text-[#ff6584]',
    bg: 'bg-pink-50',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Seamless Collaboration',
    description: 'Comment, assign, and co-edit docs in real time. Always know what your teammates are working on.',
    accent: 'text-[#43c6ac]',
    bg: 'bg-teal-50',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified, SSO, SAML, advanced audit logs, and per-seat role controls.',
    accent: 'text-[#f7b731]',
    bg: 'bg-yellow-50',
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: 'Integrated Messaging',
    description: 'Thread discussions next to tasks so context never gets lost in email chains or scattered Slack threads.',
    accent: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: '100+ Integrations',
    description: 'Connect GitHub, Figma, Jira, Slack, Notion, and more in one click. Your stack, unified.',
    accent: 'text-purple-500',
    bg: 'bg-purple-50',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-[#ede9ff] text-[#6c63ff] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            Everything you need
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1a1a2e] mb-4">
            Built for modern teams
          </h2>
          <p className="text-gray-500 text-lg">
            Lumina combines the best of project management, docs, and AI — so you can stop switching tabs and start shipping.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={clsx('w-10 h-10 rounded-xl flex items-center justify-center mb-4', f.bg, f.accent)}>
                {f.icon}
              </div>
              <h3 className="font-bold text-[#1a1a2e] text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
