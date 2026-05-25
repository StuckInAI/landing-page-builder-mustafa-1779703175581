export type NavLink = {
  label: string;
  href: string;
};

export type Feature = {
  icon: string;
  title: string;
  description: string;
  color: string;
};

export type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
};

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
};

export type Stat = {
  value: string;
  label: string;
};
