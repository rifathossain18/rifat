export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqsData: FAQItemData[] = [
  {
    id: 'faq-1',
    question: 'How much does a landing page cost?',
    answer:
      'Pricing typically ranges between $199 and $699 depending on the complexity of your requirements, number of custom sections, interactive elements, and custom features needed. I offer transparent fixed-price packages (Basic, Standard, and Premium) as well as custom estimates for unique project scopes so you always know the exact cost before work begins.'
  },
  {
    id: 'faq-2',
    question: 'How long does it take to build a landing page?',
    answer:
      'Turnaround time depends on the scope of the project and how quickly feedback and content (copy, images, brand assets) are provided. A standard project generally takes between 4 to 10 business days from discovery to final delivery. An estimated timeline is always agreed upon during our initial discussion.'
  },
  {
    id: 'faq-3',
    question: 'Will my website work on mobile devices?',
    answer:
      'Yes, absolutely. Every landing page I design is built with a mobile-first mindset and meticulously tested across mobile phones, tablets, and desktop displays. Touch navigation, readable typography, and optimized imagery ensure your visitors enjoy a flawless experience on any screen.'
  },
  {
    id: 'faq-4',
    question: 'What technologies do you use to build landing pages and apps?',
    answer:
      'For the web, I build custom, ultra-fast landing pages and frontends using React, TypeScript, and Tailwind CSS—avoiding bloated legacy WordPress templates or slow plugins for maximum speed and security. For mobile applications, I develop cross-platform iOS and Android apps using Flutter for smooth 60fps native performance.'
  },
  {
    id: 'faq-5',
    question: 'Do you provide domain and hosting?',
    answer:
      'I specialize in design and development. You will retain full legal ownership of your own domain and hosting accounts. If you don’t have them yet, I can guide you through choosing reliable, high-performance hosting providers (such as Hostinger, SiteGround, or Cloudways) and setting up your domain.'
  },
  {
    id: 'faq-6',
    question: 'Can I request revisions?',
    answer:
      'Yes. Client collaboration is central to my process. Each project includes review milestones during wireframing, visual design, and development where you can provide feedback and request adjustments within our agreed project scope before the final handoff.'
  },
  {
    id: 'faq-7',
    question: 'Do you provide support after delivery?',
    answer:
      'Yes. I provide post-delivery support subject to the agreed service scope (typically 14 to 30 days of complimentary technical assistance to address any minor adjustments, questions, or bug fixes). For ongoing maintenance or continuous optimization, extended support arrangements can be arranged.'
  }
];
