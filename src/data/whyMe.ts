export interface ValuePoint {
  id: string;
  title: string;
  description: string;
  iconName: string;
  metric?: string;
}

export const whyWorkWithMe: ValuePoint[] = [
  {
    id: 'tailored-design',
    title: 'Design tailored to your business',
    description:
      'No generic, recycled templates. Every layout is crafted uniquely around your brand story, customer expectations, and distinct value proposition.',
    iconName: 'Sparkles',
    metric: '100% Bespoke'
  },
  {
    id: 'responsive',
    title: 'Responsive across all devices',
    description:
      'Meticulously tested across iPhones, Androids, iPads, and ultra-wide desktop monitors to ensure fluid layout integrity and rapid touch response.',
    iconName: 'Smartphone',
    metric: 'All Screens'
  },
  {
    id: 'clean-layouts',
    title: 'Clean and modern layouts',
    description:
      'Balanced whitespace, strong typographic scale, and deliberate visual hierarchy that command respect and elevate your brand perception.',
    iconName: 'Layout',
    metric: 'High Contrast'
  },
  {
    id: 'user-friendly',
    title: 'User-friendly navigation',
    description:
      'Intuitive page structure that eliminates friction and guides visitors naturally toward your core call to action without cognitive overload.',
    iconName: 'Navigation',
    metric: 'Friction-Free'
  },
  {
    id: 'performance',
    title: 'Performance-conscious development',
    description:
      'Optimized lightweight assets, efficient styling, and clean DOM trees that load fast, lower bounce rates, and support strong SEO metrics.',
    iconName: 'Gauge',
    metric: 'Fast Loading'
  },
  {
    id: 'communication',
    title: 'Clear communication',
    description:
      'Direct, proactive project updates via WhatsApp and Email. No guesswork, no weeks of silence—you always know current progress and next steps.',
    iconName: 'MessageSquareText',
    metric: 'Proactive'
  },
  {
    id: 'support',
    title: 'Support after delivery',
    description:
      'Reliable post-launch assistance subject to our agreed service scope, ensuring your landing page runs smoothly long after the project wraps up.',
    iconName: 'Headphones',
    metric: 'Guaranteed Scope'
  }
];

export const comparisonPoints = [
  {
    feature: 'Visual Identity',
    genericTemplate: 'Generic layout used by thousands of other businesses',
    rifatService: 'Bespoke design custom-tailored to your unique brand voice'
  },
  {
    feature: 'Conversion Strategy',
    genericTemplate: 'Randomly placed elements with no clear funnel logic',
    rifatService: 'Psychology-backed hierarchy directing visitors to take action'
  },
  {
    feature: 'Mobile Usability',
    genericTemplate: 'Awkward stacking, clipped text, and broken buttons',
    rifatService: 'Hand-tuned mobile & tablet breakpoints with easy thumb reach'
  },
  {
    feature: 'Page Speed & Assets',
    genericTemplate: 'Bloated with unused scripts, bulky themes, and slow plugins',
    rifatService: 'Clean, lightweight architecture optimized for fast load times'
  },
  {
    feature: 'Client Communication',
    genericTemplate: 'Impersonal agency bureaucracy or unreliable freelancers',
    rifatService: 'Direct 1-on-1 contact with Rifat with transparent milestone updates'
  }
];
