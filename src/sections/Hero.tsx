import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowDown,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Laptop,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  Headphones,
  Utensils,
  Layers
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface HeroProps {
  onStartProject: () => void;
  onExploreWork: () => void;
  onOpenProjectDetail: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartProject,
  onExploreWork,
  onOpenProjectDetail
}) => {
  const [activeMockupTab, setActiveMockupTab] = useState<'audio' | 'restaurant' | 'saas'>('audio');

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-slate-50 dark:bg-[#0B1220] transition-colors duration-300"
    >
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/5 dark:bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute -top-10 right-10 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Indicators */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
          {/* Designer Profile & Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] text-xs font-medium text-slate-700 dark:text-slate-300 shadow-sm">
            <div className="relative w-6 h-6 rounded-full overflow-hidden border-2 border-blue-500/60 shadow-sm shrink-0">
              <img
                src="/assets/me.png"
                alt="Rifat"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-semibold text-slate-900 dark:text-white">Rifat</span>
            <span className="text-slate-400 dark:text-slate-600" aria-hidden="true">·</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">{siteConfig.availability.badgeText}</span>
          </div>

          <span className="text-slate-400 dark:text-slate-600 hidden sm:inline" aria-hidden="true">·</span>

          {/* Brand label */}
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            Independent Web &amp; Flutter App Developer
          </span>
        </div>

        {/* Main Headline & Supporting Text */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
            Landing Pages That Turn Visitors Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-blue-200">
              Customers.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal">
            {siteConfig.heroDescription}
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onStartProject}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-lg shadow-blue-600/25 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-[#0B1220]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreWork}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-[#111827] hover:bg-slate-100 dark:hover:bg-[#1E293B] border border-slate-200 dark:border-[#1E293B] hover:border-slate-300 dark:hover:border-slate-700 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 shadow-sm"
            >
              <span>Explore My Work</span>
            </button>
          </div>

          {/* Trust bullets */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-[#1E293B] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>React &amp; Flutter App Specialist</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>Mobile &amp; Web Conversion Layouts</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>Direct 1-on-1 Communication</span>
            </div>
          </div>
        </div>

        {/* Website Mockup & Project Preview Composition */}
        <div className="mt-14 relative">
          {/* Mockup Frame Container */}
          <div className="rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#111827] shadow-2xl overflow-hidden transition-colors duration-300">
            {/* Browser Header Bar */}
            <div className="bg-slate-100 dark:bg-[#0B1220] px-4 py-3 border-b border-slate-200 dark:border-[#1E293B] flex flex-wrap items-center justify-between gap-3">
              {/* Window Controls */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-xs font-mono text-slate-500 dark:text-slate-400 hidden sm:inline">
                  rifat-portfolio.design/preview
                </span>
              </div>

              {/* Mockup Switcher Controls */}
              <div className="flex items-center gap-1 bg-white dark:bg-[#111827] p-1 rounded-lg border border-slate-200 dark:border-[#1E293B]">
                <button
                  onClick={() => setActiveMockupTab('audio')}
                  className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    activeMockupTab === 'audio'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Headphones className="w-3.5 h-3.5" />
                  <span>E-Commerce</span>
                </button>
                <button
                  onClick={() => setActiveMockupTab('restaurant')}
                  className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    activeMockupTab === 'restaurant'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Restaurant</span>
                </button>
                <button
                  onClick={() => setActiveMockupTab('saas')}
                  className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    activeMockupTab === 'saas'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>SaaS</span>
                </button>
              </div>

              {/* View Case Study Link */}
              <button
                onClick={() => {
                  const targetId =
                    activeMockupTab === 'audio'
                      ? 'lumina-sound'
                      : activeMockupTab === 'restaurant'
                      ? 'savory-bistro'
                      : 'pulse-metrics';
                  onOpenProjectDetail(targetId);
                }}
                className="hidden md:inline-flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                <span>Inspect Full Case</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Inner Mockup Content Showcase */}
            <div className="p-4 sm:p-6 lg:p-8 min-h-[380px] bg-gradient-to-b from-slate-50 to-white dark:from-[#111827] dark:to-[#0B1220] transition-colors duration-300">
              {activeMockupTab === 'audio' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>E-Commerce Direct to Consumer</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                      Lumina Sound Pro: Acoustic Fidelity Without Compromise
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      Custom 40mm beryllium drivers paired with hybrid noise cancellation. Engineered for audiophiles with sticky CTA purchase pathways and a +42% mobile conversion lift.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                      <div className="px-3 py-2 rounded-lg bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] shadow-sm">
                        <div className="text-lg font-bold text-slate-900 dark:text-white">55 hrs</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Battery Life</div>
                      </div>
                      <div className="px-3 py-2 rounded-lg bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] shadow-sm">
                        <div className="text-lg font-bold text-slate-900 dark:text-white">0.01%</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Total Harmonic Distortion</div>
                      </div>
                      <div className="px-3 py-2 rounded-lg bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] shadow-sm">
                        <div className="text-lg font-bold text-slate-900 dark:text-white">4.9 / 5</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Verified Reviews</div>
                      </div>
                    </div>
                    <div className="pt-2 flex items-center gap-3">
                      <button
                        onClick={() => onOpenProjectDetail('lumina-sound')}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold rounded-md shadow"
                      >
                        Launch Interactive Preview
                      </button>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        React · TypeScript · Tailwind CSS
                      </span>
                    </div>
                  </div>


                  <div className="lg:col-span-5" style={{ perspective: 1000 }}>
                    {/* Visual Mockup Card with 3D Hover */}
                    <motion.div
                      whileHover={{
                        rotateX: -7,
                        rotateY: 8,
                        scale: 1.03,
                        transition: { type: 'spring', stiffness: 280, damping: 18 }
                      }}
                      style={{
                        transformPerspective: 1000,
                        transformStyle: 'preserve-3d'
                      }}
                      className="relative rounded-xl border border-blue-200 dark:border-blue-500/30 bg-gradient-to-tr from-blue-50 via-white to-slate-100 dark:from-blue-950/40 dark:via-slate-900 dark:to-[#111827] p-6 text-center shadow-xl cursor-pointer"
                    >
                      <div
                        className="w-20 h-20 mx-auto rounded-full bg-blue-600/10 dark:bg-blue-600/20 flex items-center justify-center border border-blue-500/30 mb-4"
                        style={{ transform: 'translateZ(25px)' }}
                      >
                        <Headphones className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="text-lg font-bold text-slate-900 dark:text-white" style={{ transform: 'translateZ(20px)' }}>
                        Titanium Black Edition
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1" style={{ transform: 'translateZ(15px)' }}>
                        Single-Product High-Conversion Funnel
                      </div>
                      <div
                        className="mt-4 pt-4 border-t border-slate-200 dark:border-[#1E293B] flex items-center justify-between text-xs"
                        style={{ transform: 'translateZ(15px)' }}
                      >
                        <span className="text-emerald-600 dark:text-emerald-400 font-medium">✓ In Stock &amp; Ready</span>
                        <span className="text-slate-900 dark:text-white font-bold">$299.00 USD</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}

              {activeMockupTab === 'restaurant' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>Culinary &amp; Hospitality</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                      Savory &amp; Hearth: Artisanal Wood-Fired Dining
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      A farm-to-table bistro landing page featuring a direct table reservation widget, seasonal menu tabs, and local search optimization that cuts third-party booking commissions.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                      <div className="px-3 py-2 rounded-lg bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] shadow-sm">
                        <div className="text-lg font-bold text-amber-600 dark:text-amber-400">+68%</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Direct Bookings</div>
                      </div>
                      <div className="px-3 py-2 rounded-lg bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] shadow-sm">
                        <div className="text-lg font-bold text-slate-900 dark:text-white">0.8s</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Page Speed</div>
                      </div>
                      <div className="px-3 py-2 rounded-lg bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] shadow-sm">
                        <div className="text-lg font-bold text-slate-900 dark:text-white">4.9★</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Google Rating</div>
                      </div>
                    </div>
                    <div className="pt-2 flex items-center gap-3">
                      <button
                        onClick={() => onOpenProjectDetail('savory-bistro')}
                        className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs sm:text-sm font-semibold rounded-md shadow"
                      >
                        Launch Interactive Preview
                      </button>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        React · Tailwind CSS · Custom Booking Engine
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-5" style={{ perspective: 1000 }}>
                    <motion.div
                      whileHover={{
                        rotateX: -7,
                        rotateY: 8,
                        scale: 1.03,
                        transition: { type: 'spring', stiffness: 280, damping: 18 }
                      }}
                      style={{
                        transformPerspective: 1000,
                        transformStyle: 'preserve-3d'
                      }}
                      className="relative rounded-xl border border-amber-200 dark:border-amber-500/30 bg-gradient-to-tr from-amber-50 via-white to-slate-100 dark:from-amber-950/40 dark:via-slate-900 dark:to-[#111827] p-6 text-center shadow-xl cursor-pointer"
                    >
                      <div
                        className="w-20 h-20 mx-auto rounded-full bg-amber-600/10 dark:bg-amber-600/20 flex items-center justify-center border border-amber-500/30 mb-4"
                        style={{ transform: 'translateZ(25px)' }}
                      >
                        <Utensils className="w-10 h-10 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div className="text-lg font-bold text-slate-900 dark:text-white" style={{ transform: 'translateZ(20px)' }}>
                        Dinner Reservation Widget
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1" style={{ transform: 'translateZ(15px)' }}>
                        1-Click Booking &amp; Seasonal Tasting Menu
                      </div>
                      <div
                        className="mt-4 pt-4 border-t border-slate-200 dark:border-[#1E293B] flex items-center justify-between text-xs"
                        style={{ transform: 'translateZ(15px)' }}
                      >
                        <span className="text-amber-600 dark:text-amber-400 font-medium">Tonight: 4 Tables Left</span>
                        <span className="text-slate-900 dark:text-white font-bold">Chef's Table Available</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}

              {activeMockupTab === 'saas' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>B2B Software &amp; Tech</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                      PulseMetrics: Predictive Retention Intelligence
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      SaaS landing page with an interactive ROI calculator, feature comparison matrix, and instant free trial onboarding flow that drove a 3.4x boost in demo requests.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                      <div className="px-3 py-2 rounded-lg bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] shadow-sm">
                        <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">3.4x</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Demo Signups</div>
                      </div>
                      <div className="px-3 py-2 rounded-lg bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] shadow-sm">
                        <div className="text-lg font-bold text-slate-900 dark:text-white">+35%</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Trial Completion</div>
                      </div>
                      <div className="px-3 py-2 rounded-lg bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] shadow-sm">
                        <div className="text-lg font-bold text-slate-900 dark:text-white">SOC-2</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Type II Verified</div>
                      </div>
                    </div>
                    <div className="pt-2 flex items-center gap-3">
                      <button
                        onClick={() => onOpenProjectDetail('pulse-metrics')}
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold rounded-md shadow"
                      >
                        Launch Interactive Preview
                      </button>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Modern Web · Interactive ROI Calculator
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-5" style={{ perspective: 1000 }}>
                    <motion.div
                      whileHover={{
                        rotateX: -7,
                        rotateY: 8,
                        scale: 1.03,
                        transition: { type: 'spring', stiffness: 280, damping: 18 }
                      }}
                      style={{
                        transformPerspective: 1000,
                        transformStyle: 'preserve-3d'
                      }}
                      className="relative rounded-xl border border-emerald-200 dark:border-emerald-500/30 bg-gradient-to-tr from-emerald-50 via-white to-slate-100 dark:from-emerald-950/40 dark:via-slate-900 dark:to-[#111827] p-6 text-center shadow-xl cursor-pointer"
                    >
                      <div
                        className="w-20 h-20 mx-auto rounded-full bg-emerald-600/10 dark:bg-emerald-600/20 flex items-center justify-center border border-emerald-500/30 mb-4"
                        style={{ transform: 'translateZ(25px)' }}
                      >
                        <TrendingUp className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div className="text-lg font-bold text-slate-900 dark:text-white" style={{ transform: 'translateZ(20px)' }}>
                        Live Churn Forecaster
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1" style={{ transform: 'translateZ(15px)' }}>
                        Interactive Telemetry &amp; ROI Simulator
                      </div>
                      <div
                        className="mt-4 pt-4 border-t border-slate-200 dark:border-[#1E293B] flex items-center justify-between text-xs"
                        style={{ transform: 'translateZ(15px)' }}
                      >
                        <span className="text-emerald-600 dark:text-emerald-400 font-medium">Predicted ARR Saved</span>
                        <span className="text-slate-900 dark:text-white font-bold">$84,000 / mo</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={onExploreWork}
              className="group flex flex-col items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors focus-visible:outline-none"
              aria-label="Scroll down to explore featured work"
            >
              <span>Scroll to explore</span>
              <ArrowDown className="w-4 h-4 animate-bounce text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300" />
            </button>
          </div>
        </div>
      </div>
    </section>

  );
};
