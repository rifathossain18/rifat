import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  FileText,
  Code,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { processSteps, ProcessStep } from '../data/process';
import { SectionHeading } from '../components/SectionHeading';

export const Process: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  const activeStep = processSteps[activeStepIndex];

  return (
    <section id="process" className="py-20 md:py-28 bg-slate-100 dark:bg-[#111827] border-t border-slate-200 dark:border-[#1E293B] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <SectionHeading
            kicker="Work Flow"
            title="Simple Process. Quality Results."
            subtitle="A clear, collaborative four-step process designed to launch your landing page efficiently without bottlenecks."
          />
        </motion.div>

        {/* 4-Step Interactive Timeline Header with whileInView stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {processSteps.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <motion.button
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: 'easeOut'
                }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-5 rounded-xl border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-md ${
                  isSelected
                    ? 'bg-white dark:bg-[#0B1220] border-blue-500 shadow-lg shadow-blue-500/15'
                    : 'bg-white/80 dark:bg-[#0B1220]/60 border-slate-200 dark:border-[#1E293B] hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-[#111827] text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    Phase {step.number}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{step.durationEstimated}</span>
                </div>
                <h4
                  className={`text-base font-bold tracking-tight ${
                    isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {step.title}
                </h4>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                  {step.shortDesc}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* Active Step Deep Dive Card with whileInView slide-up */}
        <motion.div
          key={activeStep.number}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="rounded-2xl bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] p-6 sm:p-8 lg:p-10 shadow-2xl shadow-slate-200/50 dark:shadow-black/40 transition-colors duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Phase {activeStep.number} Focus &amp; Methodology</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {activeStep.title}
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {activeStep.detailedDesc}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Estimated duration: {activeStep.durationEstimated} (varies with feedback speed)</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 dark:bg-[#111827] p-6 rounded-xl border border-slate-200 dark:border-[#1E293B]">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                What You Receive in Phase {activeStep.number}
              </div>
              <div className="space-y-3">
                {activeStep.deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom stepper navigation */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-[#1E293B] flex items-center justify-between">
            <button
              onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
              disabled={activeStepIndex === 0}
              className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              ← Previous Phase
            </button>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Step {activeStepIndex + 1} of {processSteps.length}
            </div>
            <button
              onClick={() => setActiveStepIndex((prev) => Math.min(processSteps.length - 1, prev + 1))}
              disabled={activeStepIndex === processSteps.length - 1}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 disabled:opacity-30 disabled:pointer-events-none transition-colors inline-flex items-center gap-1"
            >
              <span>Next Phase</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
