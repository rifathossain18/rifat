export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  bestFor: string;
  iconName: string;
  accent: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'business-landing-pages',
    number: '01',
    title: 'High-Converting Landing Pages',
    shortDesc:
      'Custom React & Tailwind CSS landing pages engineered to showcase your business, build authority, and generate high-intent inquiries.',
    fullDesc:
      'Turn cold visitors into paying clients. Every layout is crafted with clean modern code, persuasive typographic hierarchy, and frictionless call-to-actions without slow CMS bloat.',
    deliverables: [
      'Custom React + Tailwind CSS architecture',
      'Persuasive copy hierarchy & conversion funnel',
      'High-intent lead capture forms with validation',
      'Client reviews & interactive proof widgets',
      'Blazing fast sub-second load times'
    ],
    bestFor: 'B2B companies, startups, consulting firms, and service professionals.',
    iconName: 'Building2',
    accent: '#3B82F6'
  },
  {
    id: 'product-landing-pages',
    number: '02',
    title: 'Product & SaaS Landing Pages',
    shortDesc:
      'Product-focused landing pages designed to present features, interactive demos, and drive immediate signups or purchases.',
    fullDesc:
      'Whether you are launching physical hardware, digital products, or software tools, these pages combine interactive feature tabs, 3D hover effects, and frictionless CTA flows.',
    deliverables: [
      'Interactive 3D feature showcase & tabs',
      'Spec comparisons & live ROI calculators',
      'Sticky preorder / add-to-cart action flows',
      'Frictionless onboarding & demo booking modals',
      'SEO meta architecture & social share cards'
    ],
    bestFor: 'DTC product creators, SaaS founders, and digital tool creators.',
    iconName: 'PackageCheck',
    accent: '#60A5FA'
  },
  {
    id: 'flutter-app-development',
    number: '03',
    title: 'Flutter Mobile App Development',
    shortDesc:
      'Cross-platform iOS and Android mobile applications built with Flutter for native 60fps performance and stunning UI.',
    fullDesc:
      'Get a high-performance, responsive mobile app deployed across both Apple App Store and Google Play from a single, maintainable Flutter codebase. Flawless animations, clean state management, and native feel.',
    deliverables: [
      'Custom cross-platform Flutter application (iOS & Android)',
      'Smooth 60fps micro-interactions & fluid animations',
      'REST / GraphQL API integration & offline caching',
      'Responsive tablet & smartphone UI adaptation',
      'App store deployment assistance & clean handover'
    ],
    bestFor: 'Businesses & startups needing a premium mobile app on both iOS & Android.',
    iconName: 'Smartphone',
    accent: '#2563EB'
  },
  {
    id: 'ecommerce-landing-pages',
    number: '04',
    title: 'E-commerce & Web Applications',
    shortDesc:
      'Dedicated product sales pages and custom web application frontends designed to boost Average Order Value and eliminate checkout drop-offs.',
    fullDesc:
      'Escape clunky template limitations. Dedicated high-converting product landers built with modern React components, instant filter tabs, and direct checkout integrations.',
    deliverables: [
      'Single-product or bundle conversion lander',
      'Custom interactive variant & colorway selector',
      'Customer review galleries with photo proof',
      'Trust badges, money-back guarantees, and FAQs',
      'Optimized for high-volume paid traffic (Meta / Google ads)'
    ],
    bestFor: 'E-commerce store owners and brands scaling customer acquisition campaigns.',
    iconName: 'ShoppingCart',
    accent: '#38BDF8'
  },
  {
    id: 'website-redesign',
    number: '05',
    title: 'Website & UI/UX Redesign',
    shortDesc:
      'Modernize slow, outdated websites into clean, ultra-fast modern web experiences that command premium client trust.',
    fullDesc:
      'If your existing website looks like it was built a decade ago or loads slowly, a strategic overhaul transforms it into a contemporary asset that drives measurable business results.',
    deliverables: [
      'Comprehensive UI/UX audit & teardown',
      'Complete code rewrite in modern React & Tailwind CSS',
      'Mobile-first responsive overhaul across all screens',
      'Copy re-structuring for maximum conversion clarity',
      'Smooth transition preserving existing SEO rankings'
    ],
    bestFor: 'Established businesses with dated sites looking to modernize and boost conversion.',
    iconName: 'RefreshCw',
    accent: '#818CF8'
  },
  {
    id: 'responsive-website-development',
    number: '06',
    title: 'Responsive Frontend Development',
    shortDesc:
      'Responsive, component-driven frontend development using modern React, TypeScript, and Tailwind CSS.',
    fullDesc:
      'Every interface is engineered with modular clean code, accessibility benchmarks, and verified touch response across smartphones, tablets, laptops, and ultra-wide desktop monitors.',
    deliverables: [
      'Pixel-perfect mobile, tablet, and desktop breakpoints',
      'Fluid gesture and touch navigation handling',
      'Clean TypeScript code with reusable components',
      'Cross-browser compatibility (Chrome, Safari, Firefox, Edge)',
      '100/100 Core Web Vitals performance benchmarks'
    ],
    bestFor: 'Founders who value clean code, maintainability, and blistering speed.',
    iconName: 'LayoutTemplate',
    accent: '#22D3EE'
  }
];
