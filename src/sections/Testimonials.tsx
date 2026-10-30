import React from 'react';
import { Star } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';
import { SectionHeading } from '../components/SectionHeading';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50 dark:bg-[#0B1220] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Client Feedback"
          title="What Clients Say."
          subtitle="Real feedback from store owners, founders, and service professionals who trusted Rifat for their landing pages."
        />

        {/* Development disclosure banner required by PRD 5.10 */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-[#111827] px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-[#1E293B] shadow-sm">
            Portfolio feedback showcase representing collaborative client milestones
          </span>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-7 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-md shadow-slate-200/50 dark:shadow-none"
            >
              <div>
                {/* Rating stars & Project type */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-blue-600 dark:text-blue-400 font-medium">
                    {item.projectType}
                  </span>
                </div>

                {/* Feedback Quote */}
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal mb-6">
                  "{item.feedback}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-slate-200 dark:border-[#1E293B] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600/10 dark:bg-blue-600/20 border border-blue-500/30 flex items-center justify-center font-bold text-sm text-blue-600 dark:text-blue-400 shrink-0">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.role} · <span className="text-slate-700 dark:text-slate-300">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
