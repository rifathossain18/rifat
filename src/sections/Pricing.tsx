import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, HelpCircle, Calculator, Sliders } from 'lucide-react';
import { pricingPlans, PricingPlan } from '../data/pricing';
import { SectionHeading } from '../components/SectionHeading';

interface PricingProps {
  onSelectPlan: (planName: string, estimatedBudget: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  // Custom scope calculator state
  const [showEstimator, setShowEstimator] = useState(false);
  const [extraPages, setExtraPages] = useState<number>(0);
  const [needsEcommerce, setNeedsEcommerce] = useState<boolean>(false);
  const [needsCopywriting, setNeedsCopywriting] = useState<boolean>(false);
  const [needsPriorityDelivery, setNeedsPriorityDelivery] = useState<boolean>(false);

  // Calculate dynamic custom scope estimate
  const baseCalc = 399; // Standard base
  const extraPagesCost = extraPages * 90;
  const ecommerceCost = needsEcommerce ? 150 : 0;
  const copywritingCost = needsCopywriting ? 120 : 0;
  const priorityCost = needsPriorityDelivery ? 100 : 0;
  const totalEstimatedCost = baseCalc + extraPagesCost + ecommerceCost + copywritingCost + priorityCost;

  const handleCustomInquiry = () => {
    onSelectPlan('Custom Estimate', `$${totalEstimatedCost}`);
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-50 dark:bg-[#0B1220] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Investment"
          title="Simple &amp; Transparent Pricing."
          subtitle="Clear, upfront pricing with no hidden charges. All packages include responsive design, clean code, and post-delivery support."
        />

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-14">
          {pricingPlans.map((plan) => {
            const isPopular = plan.isPopular;
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 ${
                  isPopular
                    ? 'bg-white dark:bg-[#111827] border-2 border-blue-500 shadow-2xl shadow-blue-500/10 lg:-translate-y-2'
                    : 'bg-white/80 dark:bg-[#111827]/70 border border-slate-200 dark:border-[#1E293B] hover:border-slate-300 dark:hover:border-slate-700 shadow-md shadow-slate-200/50 dark:shadow-none'
                }`}
              >
                {/* Popular distinction tag */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{plan.name}</h3>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Fixed Price</span>
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal min-h-[38px]">
                    {plan.tagline}
                  </p>

                  {/* Price Block */}
                  <div className="mt-6 mb-6 pb-6 border-b border-slate-200 dark:border-[#1E293B]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                        ${plan.priceUSD}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">USD / project</span>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      {plan.deliverablesSummary}
                    </div>
                  </div>

                  {/* Best for */}
                  <div className="mb-6 p-3 rounded-lg bg-slate-50 dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] text-xs text-slate-700 dark:text-slate-300">
                    <span className="font-semibold text-slate-900 dark:text-white">Ideal for: </span>
                    {plan.bestFor}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      What's Included
                    </div>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                        <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <button
                  onClick={() => onSelectPlan(plan.name, `$${plan.priceUSD}`)}
                  className={`w-full py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                    isPopular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-slate-100 dark:bg-[#0B1220] hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-[#1E293B]'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Custom Scope / Project Scope Estimator Toggle */}
        <div className="rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] p-6 sm:p-8 shadow-xl shadow-slate-200/50 dark:shadow-none transition-colors duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
                <Calculator className="w-4 h-4" />
                <span>Interactive Cost Estimator</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Have specific requirements or need custom add-ons?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Calculate an instant estimate based on extra sections, copywriting assistance, and timeline needs.
              </p>
            </div>

            <button
              onClick={() => setShowEstimator(!showEstimator)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-[#0B1220] hover:bg-slate-100 dark:hover:bg-[#1E293B] border border-slate-200 dark:border-[#1E293B] text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors shrink-0"
            >
              <Sliders className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{showEstimator ? 'Hide Calculator' : 'Open Calculator'}</span>
            </button>
          </div>

          {showEstimator && (
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-[#1E293B] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-200">
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-2">
                    Additional Sub-Pages or Custom Sections: +{extraPages} (${extraPages * 90})
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    step="1"
                    value={extraPages}
                    onChange={(e) => setExtraPages(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    <span>0 extra</span>
                    <span>1 page</span>
                    <span>2 pages</span>
                    <span>3 pages</span>
                    <span>4 pages</span>
                    <span>5 pages</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] text-xs text-slate-700 dark:text-slate-200 cursor-pointer hover:border-slate-300 dark:hover:border-slate-700">
                    <input
                      type="checkbox"
                      checked={needsEcommerce}
                      onChange={(e) => setNeedsEcommerce(e.target.checked)}
                      className="rounded border-slate-300 dark:border-slate-700 text-blue-600 focus:ring-blue-500"
                    />
                    <span>E-comm Checkout (+ $150)</span>
                  </label>

                  <label className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] text-xs text-slate-700 dark:text-slate-200 cursor-pointer hover:border-slate-300 dark:hover:border-slate-700">
                    <input
                      type="checkbox"
                      checked={needsCopywriting}
                      onChange={(e) => setNeedsCopywriting(e.target.checked)}
                      className="rounded border-slate-300 dark:border-slate-700 text-blue-600 focus:ring-blue-500"
                    />
                    <span>Copywriting Help (+ $120)</span>
                  </label>

                  <label className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] text-xs text-slate-700 dark:text-slate-200 cursor-pointer hover:border-slate-300 dark:hover:border-slate-700">
                    <input
                      type="checkbox"
                      checked={needsPriorityDelivery}
                      onChange={(e) => setNeedsPriorityDelivery(e.target.checked)}
                      className="rounded border-slate-300 dark:border-slate-700 text-blue-600 focus:ring-blue-500"
                    />
                    <span>Priority Delivery (+ $100)</span>
                  </label>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-xl bg-slate-50 dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] text-center">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Estimated Investment</div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-1">
                  ${totalEstimatedCost} <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">USD</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  Includes Standard landing page architecture + your selected add-ons.
                </p>
                <button
                  onClick={handleCustomInquiry}
                  className="mt-4 w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg shadow transition-colors"
                >
                  Start Project With This Scope
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
