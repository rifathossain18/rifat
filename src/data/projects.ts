export interface Project {
  id: string;
  name: string;
  category: string;
  categorySlug: 'all' | 'ecommerce' | 'saas' | 'services' | 'hospitality';
  shortDescription: string;
  longDescription: string;
  clientChallenge: string;
  solution: string;
  technologies: string[];
  deliverables: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  previewGradient: string;
  isFeatured?: boolean;
  demoPreview: {
    heroTitle: string;
    heroSubtitle: string;
    ctaText: string;
    secondaryCta: string;
    features: { title: string; desc: string; icon: string }[];
    badge: string;
    stats: { num: string; label: string }[];
    navItems: string[];
    sampleReviews: { author: string; text: string; role: string }[];
  };
}

export const projectsData: Project[] = [
  {
    id: 'lumina-sound',
    name: 'Lumina Sound Pro',
    category: 'E-commerce Product Landing Page',
    categorySlug: 'ecommerce',
    shortDescription:
      'High-impact single-product sales page engineered to maximize direct-to-consumer preorders with interactive 360° audio feature breakdown.',
    longDescription:
      'Lumina Sound required a high-converting DTC landing page for their flagship wireless audiophile headphones. The design focused on sensory storytelling, titanium chassis highlights, noise-cancellation specs, and an uninterrupted frictionless checkout journey.',
    clientChallenge:
      'Previous store had a 0.9% conversion rate due to cluttered navigation and weak visual proof of sound quality.',
    solution:
      'Designed a focused, single-product narrative with sticky buy buttons, interactive feature tabs, dynamic sound test comparison, and instant customer reviews.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'CRO Architecture'],
    deliverables: [
      'Single-Product Conversion Architecture',
      'Interactive Colorway & Spec Selector',
      'Sticky Mobile Add-to-Cart Bar',
      'Trust Badges & Money-Back Guarantee Modules'
    ],
    metrics: [
      { label: 'Mobile Conversion', value: '+42%' },
      { label: 'Average Session Time', value: '3m 24s' },
      { label: 'Bounce Rate Drop', value: '-28%' }
    ],
    accentColor: '#3B82F6',
    previewGradient: 'from-blue-900/60 via-slate-900 to-[#0B1220]',
    isFeatured: true,
    demoPreview: {
      badge: 'Flagship Studio Release',
      heroTitle: 'Pure Acoustic Fidelity. Without Compromise.',
      heroSubtitle:
        'Custom 40mm beryllium drivers paired with adaptive active noise cancellation for pristine sound wherever life takes you.',
      ctaText: 'Order Lumina Pro – $299',
      secondaryCta: 'Explore Tech Specs',
      navItems: ['Overview', 'Acoustics', 'ANC Tech', 'Reviews', 'Order'],
      features: [
        {
          title: 'Hybrid ANC 4.0',
          desc: 'Blocks 98.4% of low-frequency ambient rumble with 6 beamforming microphones.',
          icon: 'ShieldCheck'
        },
        {
          title: '55-Hour Playtime',
          desc: 'Rapid USB-C charge gives 6 hours of playback in just 10 minutes.',
          icon: 'BatteryCharging'
        },
        {
          title: 'Spatial Audio Matrix',
          desc: 'Dynamic head tracking transforms stereo mixes into an immersive 3D soundstage.',
          icon: 'Headphones'
        }
      ],
      stats: [
        { num: '55h', label: 'Battery Life' },
        { num: '0.01%', label: 'Harmonic Distortion' },
        { num: '4.9/5', label: 'Audiophile Rating' }
      ],
      sampleReviews: [
        {
          author: 'Julian Reed',
          role: 'Audio Engineer',
          text: 'The acoustic balance rivals studio monitors costing three times as much.'
        },
        {
          author: 'Sophia Chen',
          role: 'Frequent Traveler',
          text: 'ANC makes trans-Pacific flights peaceful. Comfortable enough to sleep in.'
        }
      ]
    }
  },
  {
    id: 'savory-bistro',
    name: 'Savory & Hearth Bistro',
    category: 'Restaurant Landing Page',
    categorySlug: 'hospitality',
    shortDescription:
      'Warm, appetizing dining experience with an instant table reservation widget, seasonal chef menu showcase, and mobile-first local SEO.',
    longDescription:
      'An artisanal farm-to-table bistro in need of a landing page that captures the romantic rustic ambience, highlights seasonal tasting menus, and streamlines Friday night reservation inquiries without third-party commission leaks.',
    clientChallenge:
      'Third-party delivery and booking apps were charging 18% commissions on every table and takeout order.',
    solution:
      'Crafted an evocative editorial culinary layout featuring a direct OpenTable/WhatsApp booking modal, dynamic chef specials, and verified neighborhood reviews.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Schema.org Restaurant Data', 'Mobile-First'],
    deliverables: [
      'Interactive Seasonal Menu Tabs',
      'One-Click Table Reservation Flow',
      'Google Maps & Parking Directions Integration',
      'Chef Philosophy & Private Dining Inquiries'
    ],
    metrics: [
      { label: 'Direct Reservations', value: '+68%' },
      { label: 'Page Load Speed', value: '0.8s' },
      { label: 'Third-Party Fee Savings', value: '$1.4k/mo' }
    ],
    accentColor: '#F59E0B',
    previewGradient: 'from-amber-950/50 via-slate-900 to-[#0B1220]',
    isFeatured: true,
    demoPreview: {
      badge: 'Michelin Recommended 2026',
      heroTitle: 'Wood-Fired Flavors. Handcrafted Heritage.',
      heroSubtitle:
        'Locally sourced ingredients, slow-cured cuts, and natural cellar wines served in an intimate historic brickhouse setting.',
      ctaText: 'Reserve a Table',
      secondaryCta: 'View Evening Menu',
      navItems: ['Concept', 'Menu', 'Private Dining', 'Hours & Location'],
      features: [
        {
          title: 'Farm Direct Sourcing',
          desc: '100% organic produce harvested within 30 miles each morning.',
          icon: 'Sparkles'
        },
        {
          title: 'Sommelier Wine Vault',
          desc: 'Over 240 biodynamic wines curated to complement each seasonal course.',
          icon: 'Wine'
        },
        {
          title: 'Private Garden Patio',
          desc: 'Intimate terrace seating surrounded by heirloom olive trees and gentle firepits.',
          icon: 'Compass'
        }
      ],
      stats: [
        { num: '4.9★', label: 'Google Verified Reviews' },
        { num: '100%', label: 'Organic Sourced' },
        { num: '12 Seats', label: 'Chef Counter Seating' }
      ],
      sampleReviews: [
        {
          author: 'Claire Delacroix',
          role: 'Food & Wine Critic',
          text: 'The smoked heritage pork belly alone is worth a journey across the city.'
        },
        {
          author: 'Arthur Pendelton',
          role: 'Local Resident',
          text: 'Booking through their website was instant. The staff had our favorite table ready.'
        }
      ]
    }
  },
  {
    id: 'pulse-metrics',
    name: 'PulseMetrics SaaS',
    category: 'SaaS Product Landing Page',
    categorySlug: 'saas',
    shortDescription:
      'Conversion-optimized B2B SaaS landing page focused on product demo signups, interactive pricing calculator, and clean feature comparisons.',
    longDescription:
      'PulseMetrics is an AI-driven revenue intelligence tool for subscription brands. The landing page needed to establish enterprise security trust, convey complex churn analysis in under 5 seconds, and drive sales demo bookings.',
    clientChallenge:
      'Complex technical feature set was confusing prospective buyers, resulting in low self-serve trial activations.',
    solution:
      'Structured an intuitive benefits-led hierarchy with live interactive metrics simulations, clear ROI calculators, and friction-free social sign-up CTAs.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Interactive ROI Simulator', 'SaaS UX'],
    deliverables: [
      'Interactive Revenue ROI Calculator',
      'Feature Comparison Matrix',
      'Enterprise Trust & Security Badges',
      'Schedule Demo Modal Flow'
    ],
    metrics: [
      { label: 'Demo Bookings', value: '3.4x' },
      { label: 'Signup Completion', value: '+35%' },
      { label: 'CPL Reduction', value: '-22%' }
    ],
    accentColor: '#10B981',
    previewGradient: 'from-emerald-950/50 via-slate-900 to-[#0B1220]',
    isFeatured: true,
    demoPreview: {
      badge: 'SOC2 Type II Certified',
      heroTitle: 'Predict Customer Churn Before It Costs You Millions.',
      heroSubtitle:
        'Unified customer telemetry and predictive health scoring that alerts your customer success team weeks before an account cancels.',
      ctaText: 'Start Free 14-Day Trial',
      secondaryCta: 'Book Executive Demo',
      navItems: ['Product', 'Solutions', 'Integrations', 'Pricing', 'Security'],
      features: [
        {
          title: 'Predictive Health Score',
          desc: 'Machine learning analyzes usage velocity, NPS drift, and ticket sentiments.',
          icon: 'Activity'
        },
        {
          title: 'Zero-Code Integrations',
          desc: 'One-click sync with Stripe, Salesforce, HubSpot, and Segment in under 3 minutes.',
          icon: 'Cpu'
        },
        {
          title: 'Automated Playbooks',
          desc: 'Trigger targeted Slack notifications and retention email flows automatically.',
          icon: 'Zap'
        }
      ],
      stats: [
        { num: '$84M', label: 'Saved ARR in 2026' },
        { num: '99.99%', label: 'Platform Uptime' },
        { num: '< 5 min', label: 'Setup Time' }
      ],
      sampleReviews: [
        {
          author: 'David Thorne',
          role: 'VP Customer Success, CloudScale',
          text: 'Saved us 4 enterprise churn events in our first month alone. Unbelievable ROI.'
        },
        {
          author: 'Elena Rostova',
          role: 'CRO, MetricBase',
          text: 'Our executive team uses PulseMetrics dashboards in every single Monday sync.'
        }
      ]
    }
  },
  {
    id: 'aura-heights',
    name: 'Aura Heights Residences',
    category: 'Real Estate Landing Page',
    categorySlug: 'hospitality',
    shortDescription:
      'High-ticket luxury penthouse landing page designed for private showings, interactive floor plans, and VIP broker registrations.',
    longDescription:
      'A development of 32 ultra-luxury sky penthouses in downtown metropolis. The landing page required an editorial architectural presence with full-width cinematic visuals, interactive floorplate explorer, and concierge booking flow.',
    clientChallenge:
      'Needed an exclusive, bespoke landing page that felt on par with high-end architectural monographs rather than cookie-cutter MLS listings.',
    solution:
      'Built an editorial dark-aesthetic experience with high-resolution imagery, subtle typography, private preview scheduling, and downloadable investor brochures.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'High-Res Asset Optimizations', 'Custom Form UX'],
    deliverables: [
      'Interactive 3D Unit & Floorplan Navigator',
      'VIP Private Showing Booking Flow',
      'Neighborhood Culture & Amenities Map',
      'Direct WhatsApp Concierge Channel'
    ],
    metrics: [
      { label: 'VIP Tour Inquiries', value: '140+' },
      { label: 'Brochure Downloads', value: '620+' },
      { label: 'Penthouse Pre-Sold', value: '75%' }
    ],
    accentColor: '#8B5CF6',
    previewGradient: 'from-purple-950/50 via-slate-900 to-[#0B1220]',
    isFeatured: false,
    demoPreview: {
      badge: 'Exclusive Pre-Launch Access',
      heroTitle: 'Architectural Sovereignty Above the Skyline.',
      heroSubtitle:
        '32 limited-edition sky residences featuring 14-foot floor-to-ceiling glass, private heated cantilever pools, and dedicated butler concierge.',
      ctaText: 'Schedule Private Showing',
      secondaryCta: 'Download Investment Deck',
      navItems: ['Architecture', 'Penthouses', 'Wellness Club', 'Location', 'Inquire'],
      features: [
        {
          title: '360° Unobstructed Panoramas',
          desc: 'Floor-to-ceiling soundproof triple-glazed glass framing harbor sunsets.',
          icon: 'Eye'
        },
        {
          title: 'Private Sky Garage',
          desc: 'Biometric automobile elevator delivers vehicles directly to penthouse foyers.',
          icon: 'Shield'
        },
        {
          title: 'Thermal Spa & Lap Pool',
          desc: 'Exclusive level 48 wellness club designed in minimalist Nordic slate.',
          icon: 'Sun'
        }
      ],
      stats: [
        { num: '32', label: 'Bespoke Residences' },
        { num: '14 ft', label: 'Ceiling Clearance' },
        { num: '24/7', label: 'Dedicated Valet & Concierge' }
      ],
      sampleReviews: [
        {
          author: 'Harrison Sterling',
          role: 'Managing Principal, Sterling Capital',
          text: 'The architectural finishes and bespoke services set a new benchmark for urban living.'
        }
      ]
    }
  },
  {
    id: 'apex-agency',
    name: 'Apex Design & Brand Lab',
    category: 'Digital Agency Landing Page',
    categorySlug: 'services',
    shortDescription:
      'High-contrast creative agency landing page built to win high-tier retainers with dynamic case study previews and client impact metrics.',
    longDescription:
      'Apex is a strategic branding and digital design studio serving Fortune 500 tech companies and disruptor brands. The landing page demonstrates their craft through fluid layout choreography, bold typography, and direct project inquiry questionnaires.',
    clientChallenge:
      'Agency was competing for six-figure retainer accounts with a generic WordPress theme that failed to convey their strategic caliber.',
    solution:
      'Created a distinctive editorial showcase with interactive project highlights, clear capabilities accordion, and an interactive budget & scope selector.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Micro-Interactions'],
    deliverables: [
      'Interactive Case Study Showcase',
      'Step-by-Step Project Scope Estimator',
      'Interactive Capabilities Grid',
      'Direct WhatsApp & Calendly Booking'
    ],
    metrics: [
      { label: 'Retainer Inquiries', value: '+54%' },
      { label: 'Average Contract Size', value: '2.2x' },
      { label: 'Client Discovery Time', value: '-40%' }
    ],
    accentColor: '#EC4899',
    previewGradient: 'from-pink-950/50 via-slate-900 to-[#0B1220]',
    isFeatured: false,
    demoPreview: {
      badge: 'Brand Strategy & Digital Craft',
      heroTitle: 'We Build Brands That Define Modern Categories.',
      heroSubtitle:
        'A multidisciplinary design studio partnering with ambitious founders to engineer memorable identities, digital products, and high-growth websites.',
      ctaText: 'Start Your Brand Project',
      secondaryCta: 'View Selected Works',
      navItems: ['Work', 'Capabilities', 'Philosophy', 'Contact'],
      features: [
        {
          title: 'Identity Architecture',
          desc: 'Logomarks, design systems, typographic guidelines, and voice manuals.',
          icon: 'PenTool'
        },
        {
          title: 'Conversion UI/UX',
          desc: 'User testing, wireframing, high-fidelity prototypes, and landing pages.',
          icon: 'Layout'
        },
        {
          title: 'Creative Direction',
          desc: '3D brand assets, custom iconography, motion graphics, and ad creative.',
          icon: 'Layers'
        }
      ],
      stats: [
        { num: '40+', label: 'Design Awards' },
        { num: '$450M+', label: 'Client Funding Raised' },
        { num: '98%', label: 'Client Retention Rate' }
      ],
      sampleReviews: [
        {
          author: 'Valerie King',
          role: 'CMO, Horizon Fintech',
          text: 'Apex elevated our brand perception overnight. Our series B investors were stunned by the polish.'
        }
      ]
    }
  },
  {
    id: 'elena-vance',
    name: 'Elena Vance Coaching & App',
    category: 'Personal Brand & Mobile Portal',
    categorySlug: 'services',
    shortDescription:
      'Authority-building personal brand site and Flutter mobile coaching portal for an executive advisor, featuring podcast capture and private advisory funnels.',
    longDescription:
      'Elena Vance is a keynote speaker and executive coach to Fortune 100 executives. Her platform needed an authoritative web presence plus a companion mobile client portal built with Flutter for private client scheduling and podcast playback.',
    clientChallenge:
      'Inquiries were scattered across LinkedIn DMs and unformatted emails, and VIP coaching clients needed a dedicated mobile portal.',
    solution:
      'Engineered an authoritative, minimalist web landing page with keynote video previews and a companion cross-platform Flutter client app.',
    technologies: ['Flutter (iOS/Android)', 'React', 'Tailwind CSS', 'Cross-Platform Architecture'],
    deliverables: [
      'Speaking & Advisory Booking Engine',
      'Featured Press & Podcast Player Hub',
      'Downloadable Speaker Kit & Headshots',
      'High-Converting Free Leadership Guide Capture'
    ],
    metrics: [
      { label: 'Speaking Inquiries', value: '+85%' },
      { label: 'Newsletter Growth', value: '4.8k/mo' },
      { label: 'Booking Closing Rate', value: '72%' }
    ],
    accentColor: '#38BDF8',
    previewGradient: 'from-cyan-950/50 via-slate-900 to-[#0B1220]',
    isFeatured: false,
    demoPreview: {
      badge: 'Bestselling Author & Advisor',
      heroTitle: 'Transforming High-Stakes Leaders Into Relentless Innovators.',
      heroSubtitle:
        'Confidential advisory and keynote keynotes trusted by Fortune 500 CEOs to navigate organizational complexity, decisive clarity, and team resilience.',
      ctaText: 'Book Elena for Keynote',
      secondaryCta: 'Explore Private Advisory',
      navItems: ['About', 'Speaking', 'Advisory', 'Podcast', 'Contact'],
      features: [
        {
          title: 'Keynote Speaking',
          desc: 'Dynamic, research-backed presentations that ignite company-wide alignment.',
          icon: 'Mic'
        },
        {
          title: '1-on-1 Executive Advisory',
          desc: 'High-touch strategic partnership for CEOs leading enterprise pivots.',
          icon: 'UserCheck'
        },
        {
          title: 'The Unstoppable Leader Podcast',
          desc: 'Weekly in-depth conversations with global innovators and decision-makers.',
          icon: 'Radio'
        }
      ],
      stats: [
        { num: '120k+', label: 'Leaders Coached' },
        { num: '3x', label: 'Bestselling Titles' },
        { num: '24', label: 'Countries Keynoted' }
      ],
      sampleReviews: [
        {
          author: 'Michael B. Hastings',
          role: 'CEO, Apex Global Logistics',
          text: 'Elena has an uncanny ability to dissect corporate stagnation and inspire immediate, courageous action.'
        }
      ]
    }
  }
];
