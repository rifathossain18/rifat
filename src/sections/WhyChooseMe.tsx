import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Smartphone,
  Layout,
  Navigation,
  Gauge,
  MessageSquareText,
  Headphones,
  Check,
  X,
  ShieldCheck
} from 'lucide-react';
import { whyWorkWithMe, comparisonPoints } from '../data/whyMe';
import { SectionHeading } from '../components/SectionHeading';

export const WhyChooseMe: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Navigation':
        return <Navigation className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'MessageSquareText':
        return <MessageSquareText className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="why-me" className="py-20 md:py-28 bg-slate-50 dark:bg-[#0B1220] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <SectionHeading
            kicker="Value &amp; Philosophy"
            title="Why Work With Me?"
            subtitle="A dedicated web &amp; mobile developer focused on clean code, rapid performance, and transparent communication."
          />
        </motion.div>

        {/* Two-column layout for the 7 core benefits with whileInView stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {whyWorkWithMe.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
                ease: 'easeOut'
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-lg shadow-slate-200/50 dark:shadow-black/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B]">
                  {getIcon(item.iconName)}
                </div>
                {item.metric && (
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {item.metric}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Value Comparison Table: Template vs Bespoke Landing Page with slide-up */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mt-12 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-black/40"
        >
          <div className="p-6 sm:p-8 border-b border-slate-200 dark:border-[#1E293B]">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              The Difference Between a Generic Theme &amp; a Tailored Landing Page
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Why business owners choose bespoke design over off-the-shelf page builders.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B1220]/50 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <th className="py-4 px-6">Criteria</th>
                  <th className="py-4 px-6 text-slate-500 dark:text-slate-400">Generic Template</th>
                  <th className="py-4 px-6 text-blue-600 dark:text-blue-400">Landing Page by Rifat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-[#1E293B] text-sm">
                {comparisonPoints.map((row) => (
                  <tr key={row.feature} className="hover:bg-slate-50 dark:hover:bg-[#0B1220]/30 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-400">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.genericTemplate}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-800 dark:text-slate-200">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="font-medium text-slate-900 dark:text-white">{row.rifatService}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
