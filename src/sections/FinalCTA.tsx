import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onStartProject: () => void;
  onContactMe: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartProject, onContactMe }) => {
  return (
    <section className="py-20 md:py-24 bg-slate-50 dark:bg-[#0B1220] relative overflow-hidden transition-colors duration-300">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/5 dark:bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-white to-slate-100 dark:from-[#111827] dark:to-[#0B1220] border border-slate-200 dark:border-[#1E293B] p-8 sm:p-12 lg:p-16 text-center shadow-2xl shadow-slate-200/50 dark:shadow-2xl transition-colors duration-300">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] text-xs text-slate-700 dark:text-slate-300 font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Accepting New Client Projects</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build Something That Moves Your Business Forward?
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Let's create a landing page that presents your business professionally and gives your visitors a clear reason to take action.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartProject}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/25 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onContactMe}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-[#0B1220] hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-[#1E293B] rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Contact Me</span>
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-[#1E293B]/60 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
              <span>Fast initial response (&lt; 24h)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
              <span>Transparent fixed quote</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
              <span>No pushy sales calls</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
