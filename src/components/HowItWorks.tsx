import { UserPlus, Boxes, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <UserPlus className="w-6 h-6 text-[#6c63ff]" />,
    title: 'Create your workspace',
    description: 'Sign up in seconds. Invite teammates, set roles, and configure your workflow — all without a setup wizard.',
  },
  {
    number: '02',
    icon: <Boxes className="w-6 h-6 text-[#ff6584]" />,
    title: 'Connect your tools',
    description: 'Link GitHub, Figma, Slack, or any of our 100+ integrations. Lumina syncs everything automatically.',
  },
  {
    number: '03',
    icon: <Rocket className="w-6 h-6 text-[#43c6ac]" />,
    title: 'Ship with confidence',
    description: 'Prioritize smarter with AI, track progress in real time, and celebrate every milestone together.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#f8f7ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-[#ede9ff] text-[#6c63ff] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            Simple onboarding
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1a1a2e] mb-4">
            Up and running in minutes
          </h2>
          <p className="text-gray-500 text-lg">
            No lengthy migrations. No complex configurations. Just three steps to unlock your team's full potential.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-[#6c63ff] via-[#ff6584] to-[#43c6ac] opacity-30" />

          <div className="grid lg:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-lg border border-gray-100 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 text-xs font-black text-white bg-[#6c63ff] w-5 h-5 rounded-full flex items-center justify-center" style={{ fontSize: '9px' }}>
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
