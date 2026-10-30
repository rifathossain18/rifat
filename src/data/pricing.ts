export interface PricingPlan {
  id: 'basic' | 'standard' | 'premium';
  name: string;
  tagline: string;
  priceUSD: number;
  isPopular?: boolean;
  features: string[];
  bestFor: string;
  ctaText: string;
  deliverablesSummary: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    tagline: 'Ideal for small businesses needing a clean, professional launch.',
    priceUSD: 199,
    isPopular: false,
    features: [
      'Single focused landing page',
      'Clean responsive layout (desktop & mobile)',
      'Essential sections (Hero, Services, About, Contact)',
      'Direct Contact / WhatsApp CTA integration',
      'Basic on-page SEO structure & meta tags',
      'High-resolution image optimization',
      'Clean, modern React & Tailwind CSS code'
    ],
    bestFor: 'Simple service offerings, local businesses, or single-product tests.',
    ctaText: 'Get Started with Basic',
    deliverablesSummary: 'Single page · Essential sections · Responsive'
  },
  {
    id: 'standard',
    name: 'Standard',
    tagline: 'The most popular choice for businesses ready to scale conversions.',
    priceUSD: 399,
    isPopular: true,
    features: [
      'Custom landing page design tailored to your brand',
      'More advanced sections (Testimonials, FAQs, Process, Pricing)',
      'Fully responsive & tested across all devices',
      'Custom contact form UI with validation',
      'Subtle animations and interactive elements',
      'Basic on-page SEO structure & schema setup',
      'Speed-optimized assets & performance tuning',
      'Revisions within agreed project scope'
    ],
    bestFor: 'Growing businesses, product campaigns, and high-converting marketing funnels.',
    ctaText: 'Get Started with Standard',
    deliverablesSummary: 'Custom design · Advanced sections · Interactive'
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'Comprehensive, high-tier landing page with tailored interactions.',
    priceUSD: 699,
    isPopular: false,
    features: [
      'Fully customized high-end landing page or app interface',
      'Advanced visual design & bespoke typography hierarchy',
      'Custom interactions, micro-animations & tab switchers',
      'Multiple sections with custom layout storytelling',
      'Performance-conscious implementation & Core Web Vitals focus',
      'Priority communication throughout development',
      'Clean React, TypeScript, Tailwind or Flutter architecture handover',
      'Post-delivery support subject to agreed scope'
    ],
    bestFor: 'Established brands, SaaS products, and high-ticket service providers.',
    ctaText: 'Get Started with Premium',
    deliverablesSummary: 'Bespoke design · Custom interactions · Priority support'
  }
];
