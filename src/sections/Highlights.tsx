import React from 'react';
import { Palette, Smartphone, Target, Zap } from 'lucide-react';

interface HighlightItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Highlights: React.FC = () => {
  const highlights: HighlightItem[] = [
    {
      title: 'Custom Design',
      description:
        'Crafted specifically for your brand identity and audience, avoiding generic off-the-shelf templates.',
      icon: <Palette className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    },
    {
      title: 'Mobile Responsive',
      description:
        'Tested pixel-by-pixel across mobile, tablet, and desktop viewports for effortless reading and navigation.',
      icon: <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    },
    {
      title: 'Conversion Focused',
      description:
        'Engineered with clear call-to-action pathways, persuasive visual hierarchy, and minimal user friction.',
      icon: <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    },
    {
      title: 'Performance Optimized',
      description:
        'Lightweight layouts, clean code structure, and optimized assets designed to load rapidly on all networks.',
      icon: <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    }
  ];

  return (
    <section className="py-12 bg-slate-100 dark:bg-[#111827] border-y border-slate-200 dark:border-[#1E293B] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-[#0B1220]/60 border border-slate-200 dark:border-[#1E293B]/80 hover:border-blue-400 dark:hover:border-blue-500/30 transition-colors shadow-sm"
            >
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
