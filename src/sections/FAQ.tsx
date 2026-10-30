import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { faqsData } from '../data/faqs';
import { SectionHeading } from '../components/SectionHeading';

interface FAQProps {
  onAskQuestion: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onAskQuestion }) => {
  // Only one expanded at a time (first one open by default)
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-100 dark:bg-[#111827] border-t border-slate-200 dark:border-[#1E293B] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about working with Rifat on your landing page and Flutter application development."
        />

        {/* Accessible Accordion List */}
        <div className="space-y-3.5">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white dark:bg-[#0B1220] border-blue-500/50 shadow-lg'
                    : 'bg-white/80 dark:bg-[#0B1220]/60 border-slate-200 dark:border-[#1E293B] hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                    {faq.question}
                  </span>
                  <span
                    className={`p-1.5 rounded-lg bg-slate-100 dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] text-slate-500 dark:text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal animate-in fade-in duration-150 border-t border-slate-200 dark:border-[#1E293B]/60"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="text-left">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">Have a question not listed here?</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
              I am happy to discuss your specific project goals directly.
            </p>
          </div>
          <button
            onClick={onAskQuestion}
            className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold rounded-lg shadow transition-colors shrink-0 flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask Rifat Directly</span>
          </button>
        </div>
      </div>
    </section>
  );
};
