export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
  initials: string;
  projectType: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    name: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'PeakFit Lifestyle',
    feedback:
      'Rifat completely revamped our product landing page. The visual hierarchy and mobile responsiveness made an immediate difference to our paid ad campaigns. Clear communication and delivered right on schedule.',
    rating: 5,
    initials: 'MV',
    projectType: 'E-commerce Landing Page'
  },
  {
    id: 't-2',
    name: 'Sarah Jenkins',
    role: 'Owner & General Manager',
    company: 'Le Petit Bistro & Hearth',
    feedback:
      'Our table reservations increased significantly right after launch. The site is clean, fast, and captures the warm ambience of our restaurant perfectly. Our guests regularly compliment the easy booking experience.',
    rating: 5,
    initials: 'SJ',
    projectType: 'Restaurant Landing Page'
  },
  {
    id: 't-3',
    name: 'David Chen',
    role: 'Head of Growth',
    company: 'Novus SaaS Platform',
    feedback:
      'Working with Rifat was seamless. He understood our software value proposition quickly and translated our messy technical diagrams into an intuitive, high-converting product demo page. Highly recommended.',
    rating: 5,
    initials: 'DC',
    projectType: 'B2B SaaS Landing Page'
  },
  {
    id: 't-4',
    name: 'Rachel Adams',
    role: 'Principal Broker',
    company: 'Prestige Living Properties',
    feedback:
      'The luxury landing page Rifat crafted for our penthouse development gave our marketing team the exact premium look we needed. High-end typography, smooth interactions, and flawless presentation.',
    rating: 5,
    initials: 'RA',
    projectType: 'Real Estate Showcase'
  }
];
