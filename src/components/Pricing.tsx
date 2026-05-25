import { CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';
import type { PricingPlan } from '@/types';

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for solo makers and small side projects.',
    features: [
      'Up to 5 team members',
      '3 active projects',
      'Basic analytics',
      '5 GB storage',
      'Community support',
    ],
    highlighted: false,
    cta: 'Get started free',
  },
  {
    name: 'Pro',
    price: '$19',
    period: 'per seat / month',
    description: 'For growing teams that need power and flexibility.',
    features: [
      'Unlimited team members',
      'Unlimited projects',
      'Advanced AI features',
      '100 GB storage',
      'Priority support',
      'Custom integrations',
      'Audit logs',
    ],
    highlighted: true,
    cta: 'Start 14-day free trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'Tailored for large organizations with specific needs.',
    features: [
      'Everything in Pro',
      'Dedicated account manager',
      'SSO & SAML',
      'Custom SLA',
      'On-premise option',
      'Advanced security',
    ],
    highlighted: false,
    cta: 'Talk to sales',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#f8f7ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-[#ede9ff] text-[#6c63ff] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            Simple pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1a1a2e] mb-4">
            Plans for every team
          </h2>
          <p className="text-gray-500 text-lg">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={clsx(
                'rounded-2xl p-8 flex flex-col transition-all',
                plan.highlighted
                  ? 'bg-[#6c63ff] text-white shadow-2xl shadow-[#6c63ff]/30 scale-105'
                  : 'bg-white border border-gray-100 shadow-sm'
              )}
            >
              <div className="mb-6">
                <p className={clsx('text-sm font-semibold mb-1', plan.highlighted ? 'text-white/70' : 'text-[#6c63ff]')}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-2">
                  <span className={clsx('text-4xl font-extrabold', plan.highlighted ? 'text-white' : 'text-[#1a1a2e]')}>
                    {plan.price}
                  </span>
                  <span className={clsx('text-sm mb-1', plan.highlighted ? 'text-white/60' : 'text-gray-400')}>
                    /{plan.period}
                  </span>
                </div>
                <p className={clsx('text-sm', plan.highlighted ? 'text-white/70' : 'text-gray-500')}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle2
                      className={clsx('w-4 h-4 flex-shrink-0', plan.highlighted ? 'text-white' : 'text-[#6c63ff]')}
                    />
                    <span className={plan.highlighted ? 'text-white/90' : 'text-gray-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={clsx(
                  'block text-center font-semibold py-3 px-6 rounded-xl transition-all text-sm',
                  plan.highlighted
                    ? 'bg-white text-[#6c63ff] hover:bg-gray-100'
                    : 'bg-[#6c63ff] text-white hover:bg-[#574fd6]'
                )}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
