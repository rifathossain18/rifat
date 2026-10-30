export interface ProcessStep {
  number: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  deliverables: string[];
  durationEstimated: string;
  iconName: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    shortDesc: 'Understand the business, audience, goals, and requirements.',
    detailedDesc:
      'We begin with a focused discovery briefing to analyze your target audience, competitors, core offerings, conversion goals, and brand aesthetic preferences.',
    deliverables: [
      'Project scope & requirement briefing',
      'Competitor visual & conversion analysis',
      'Target audience profiling',
      'Content asset checklist (copy, media, logos)'
    ],
    durationEstimated: 'Day 1–2',
    iconName: 'Compass'
  },
  {
    number: '02',
    title: 'Plan',
    shortDesc: 'Create the page structure and visual direction.',
    detailedDesc:
      'I outline the wireframe architecture, content hierarchy, conversion funnel, and aesthetic moodboard to ensure the flow guides visitors seamlessly toward your call to action.',
    deliverables: [
      'Conversion-focused page blueprint & section layout',
      'Typography, color palette, and styling direction',
      'Headline and CTA placement strategy',
      'Client feedback and wireframe alignment'
    ],
    durationEstimated: 'Day 3–4',
    iconName: 'FileText'
  },
  {
    number: '03',
    title: 'Design & Develop',
    shortDesc: 'Build the responsive landing page.',
    detailedDesc:
      'Bringing the strategy to life. I craft custom visuals, responsive breakpoints, smooth interactive micro-animations, and clean React, Tailwind CSS, or Flutter code implementations.',
    deliverables: [
      'Pixel-perfect responsive implementation',
      'Interactive elements, forms, and CTA integration',
      'Asset compression & performance optimization',
      'Cross-device testing (desktop, tablet, mobile)'
    ],
    durationEstimated: 'Day 5–8',
    iconName: 'Code'
  },
  {
    number: '04',
    title: 'Review & Deliver',
    shortDesc: 'Review feedback, make agreed revisions, and deliver the final website.',
    detailedDesc:
      'We conduct a thorough review together. I implement agreed revisions, perform final QA checks, connect your forms and domains, and provide an easy handover.',
    deliverables: [
      'Collaborative review & agreed revisions',
      'Final QA check (forms, links, mobile layout, speed)',
      'Domain & live hosting launch',
      'Handover guide & post-delivery support'
    ],
    durationEstimated: 'Day 9–10',
    iconName: 'CheckCircle2'
  }
];
