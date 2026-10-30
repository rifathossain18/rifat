export interface SiteConfig {
  name: string;
  brand: string;
  title: string;
  tagline: string;
  heroHeadline: string;
  heroDescription: string;
  bioHeadline: string;
  bioText: string[];
  availability: {
    status: 'available' | 'busy' | 'booked';
    badgeText: string;
    note: string;
  };
  contact: {
    email: string;
    whatsappNumber: string; // international format without spaces
    whatsappDisplay: string;
    location: string;
    timeZone: string;
  };
  socials: {
    name: string;
    url: string;
    icon: string;
  }[];
  navLinks: {
    label: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: 'Rifat',
  brand: 'RIFAT.',
  title: 'Landing Page & Frontend Developer | Flutter App Expert',
  tagline: 'Landing Pages & High-Performance Apps That Turn Visitors Into Customers.',
  heroHeadline: 'Landing Pages That Turn Visitors Into Customers.',
  heroDescription:
    'I design and develop modern, ultra-responsive, and conversion-focused landing pages using React & Tailwind CSS, along with high-performance cross-platform mobile apps using Flutter.',
  bioHeadline: "A Little About Me.",
  bioText: [
    "I'm Rifat, a Full Stack Web Developer and Flutter App Expert focused on crafting modern, high-converting digital products for businesses, startups, and entrepreneurs.",
    "On the web, I specialize in building custom, lightning-fast landing pages using React, TypeScript, and Tailwind CSS—engineered without bloated legacy CMS templates or slow plugins.",
    "On mobile, I am a Flutter specialist building beautiful, native-performance iOS and Android applications from a single clean codebase.",
    "My philosophy is simple: whether on mobile or the web, your digital experience must guide users naturally toward taking action, load instantaneously on every screen, and elevate your brand with unmatched credibility."
  ],
  availability: {
    status: 'available',
    badgeText: 'Available for Projects',
    note: 'Currently accepting new web & mobile app client projects.'
  },
  contact: {
    email: 'r18productionbuisness@gmail.com',
    whatsappNumber: '8801642695161',
    whatsappDisplay: '+880 1642-695161',
    location: 'Available Worldwide (Remote)',
    timeZone: 'GMT+6'
  },
  socials: [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/8801642695161',
      icon: 'MessageSquare'
    },
    {
      name: 'Email',
      url: 'mailto:r18productionbuisness@gmail.com',
      icon: 'Mail'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/rifathossain18',
      icon: 'Github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mdrifathossainsagor/',
      icon: 'Linkedin'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61576369935702',
      icon: 'Facebook'
    }
  ],
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Why Me', href: '#why-me' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' }
  ]
};
