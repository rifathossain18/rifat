import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  Layout,
  PenTool,
  Zap,
  TrendingUp,
  Award,
  ExternalLink,
  MessageSquare,
  DollarSign,
  Clock,
  ChevronRight
} from 'lucide-react';

export const ApexAgencyLandingPage: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<'fintech' | 'spatial' | 'veloce'>('fintech');
  const [selectedService, setSelectedService] = useState<'brand' | 'web' | 'system'>('web');
  const [timeline, setTimeline] = useState<'fast' | 'standard'>('standard');
  const [briefModalOpen, setBriefModalOpen] = useState(false);
  const [briefSubmitted, setBriefSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const cases = {
    fintech: {
      client: 'Kovera Financial',
      category: 'Fintech Rebrand & Web Platform',
      metric: '+284% Signups',
      statLabel: 'Conversion uplift after launch',
      capital: '$68M Series B Raised',
      summary: 'Re-architected an enterprise fintech brand identity and conversion landing system, shifting customer trust and securing tier-1 institutional backing within 90 days.',
      tags: ['Brand Identity', 'Next.js App', 'Design System', '3D Motion'],
      color: '#EC4899'
    },
    spatial: {
      client: 'Aether Spatial Studio',
      category: 'Spatial Computing UI/UX',
      metric: '14 Global Awards',
      statLabel: 'Awwwards, FWA & Red Dot 2026',
      capital: 'Acquired by Meta',
      summary: 'Crafted the spatial interaction guidelines, dark-mode design system, and marketing hub for the next era of augmented spatial computing headsets.',
      tags: ['Spatial UI', 'Three.js / WebGL', 'Micro-Interactions', 'Motion'],
      color: '#A855F7'
    },
    veloce: {
      client: 'Veloce Autonomous Hypercars',
      category: 'Luxury Automotive DTC Hub',
      metric: '$180M Sold',
      statLabel: 'Pre-orders in first 48 hours',
      capital: '100% Allocation Closed',
      summary: 'High-performance interactive 3D configurator and editorial landing narrative that broke all previous automotive preorder benchmarks without a showroom.',
      tags: ['3D WebGL Configurator', 'High-Speed CDN', 'Full-Screen Video', 'CRO'],
      color: '#F43F5E'
    }
  };

  const calculateEstimate = () => {
    let base = selectedService === 'brand' ? 8500 : selectedService === 'web' ? 12000 : 16000;
    if (timeline === 'fast') base += 3500;
    return base;
  };

  const handleBriefSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBriefSubmitted(true);
    setTimeout(() => {
      setBriefModalOpen(false);
      setBriefSubmitted(false);
    }, 3000);
  };

  const currentCase = cases[selectedCase];

  return (
    <div className="bg-[#090B10] text-slate-100 font-sans text-xs sm:text-sm selection:bg-pink-600 selection:text-white">
      {/* Top Banner */}
      <div className="bg-[#120E18] border-b border-pink-900/30 text-pink-300 py-1.5 px-4 text-center text-[10px] sm:text-xs font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-pink-400" />
        <span>Now booking Q2/Q3 2026 design &amp; engineering partnerships · 2 agency slots remaining</span>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-30 bg-[#090B10]/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-pink-600 rounded flex items-center justify-center text-white font-black text-sm tracking-tighter">
            ▲
          </div>
          <span className="font-extrabold tracking-tight text-sm sm:text-base text-white">
            APEX<span className="text-pink-500">.</span>LAB
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-xs text-slate-300 font-medium">
          <a href="#work" className="hover:text-pink-400 transition-colors">Selected Work</a>
          <a href="#estimator" className="hover:text-pink-400 transition-colors">Scope Estimator</a>
          <a href="#capabilities" className="hover:text-pink-400 transition-colors">Capabilities</a>
          <a href="#reviews" className="hover:text-pink-400 transition-colors">Impact</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setBriefModalOpen(true)}
            className="px-3.5 py-1.5 bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold rounded shadow-lg shadow-pink-900/40 transition-all flex items-center gap-1.5"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-10 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-8 max-w-5xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/60 border border-pink-500/30 text-pink-400 text-[11px] font-semibold">
          <Award className="w-3.5 h-3.5" />
          <span>Award-Winning Brand &amp; Digital Engineering Studio</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
          We Build Brands That <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-amber-300">
            Define Category Leaders.
          </span>
        </h1>

        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          A high-conviction creative agency partnering with venture-backed founders and ambitious enterprises. 
          We engineer category-defining brand identities, conversion-focused websites, and scalable digital products.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setBriefModalOpen(true)}
            className="px-6 py-3 bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs sm:text-sm rounded-lg shadow-xl shadow-pink-950/50 transition-all flex items-center gap-2"
          >
            <span>Discuss Your Vision</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#work"
            className="px-5 py-3 bg-[#131722] hover:bg-slate-800 text-slate-200 text-xs sm:text-sm font-semibold rounded-lg border border-slate-700 transition-colors"
          >
            Explore Case Studies
          </a>
        </div>

        {/* Live Agency Ticker */}
        <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto pt-6 border-t border-slate-800">
          <div className="p-3 bg-[#101420] rounded-xl border border-slate-800">
            <div className="text-lg sm:text-2xl font-black text-white">$450M+</div>
            <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Client Funding Raised</div>
          </div>
          <div className="p-3 bg-[#101420] rounded-xl border border-slate-800">
            <div className="text-lg sm:text-2xl font-black text-pink-400">40+</div>
            <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Design &amp; Web Awards</div>
          </div>
          <div className="p-3 bg-[#101420] rounded-xl border border-slate-800">
            <div className="text-lg sm:text-2xl font-black text-white">98%</div>
            <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Client Retention Rate</div>
          </div>
        </div>
      </section>

      {/* Selected Case Studies */}
      <section id="work" className="py-12 sm:py-16 px-4 sm:px-8 bg-[#0D1017] border-t border-slate-800">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-pink-400 uppercase tracking-widest text-[11px] font-bold block mb-1">
                Proven Track Record
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Featured Case Studies
              </h2>
            </div>

            {/* Case Switcher Tabs */}
            <div className="flex items-center gap-1.5 bg-[#141824] p-1.5 rounded-xl border border-slate-800">
              {(['fintech', 'spatial', 'veloce'] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedCase(key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedCase === key
                      ? 'bg-pink-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cases[key].client.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Case Card */}
          <div className="bg-[#101420] border border-slate-800 rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-pink-950 border border-pink-500/30 text-pink-300 text-[10px] font-bold uppercase">
                  {currentCase.category}
                </span>
                <span className="text-xs text-slate-400">Verified Client Work</span>
              </div>

              <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                {currentCase.client}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {currentCase.summary}
              </p>

              {/* Metrics Badge */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-[#090C14] border border-slate-800">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-pink-400">{currentCase.metric}</div>
                  <div className="text-[11px] text-slate-400">{currentCase.statLabel}</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">{currentCase.capital}</div>
                  <div className="text-[11px] text-slate-400">Business Result</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {currentCase.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded bg-slate-800 text-[11px] text-slate-300 font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setBriefModalOpen(true)}
                className="px-4 py-2 bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2"
              >
                <span>Request Case Study Deck</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="lg:col-span-5 bg-[#090C14] rounded-xl border border-slate-800 p-5 space-y-4">
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-pink-950/40 via-slate-900 to-black border border-pink-900/30 p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[10px] text-slate-400">
                  <span className="font-mono">PROJECT_STORYBOARD.framer</span>
                  <span className="text-emerald-400 font-bold">100/100 SPEED</span>
                </div>
                <div className="text-center py-6">
                  <div className="w-12 h-12 rounded-full bg-pink-500/20 text-pink-400 mx-auto flex items-center justify-center font-black text-xl mb-2">
                    ✦
                  </div>
                  <h4 className="text-white font-bold text-sm">{currentCase.client}</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Full redesign &amp; conversion architecture</p>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800">
                  <span>Deliverables: 18 Screens</span>
                  <span className="text-pink-400 font-semibold">Live in Production</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Scope & Investment Estimator */}
      <section id="estimator" className="py-12 sm:py-16 px-4 sm:px-8 max-w-5xl mx-auto space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-pink-400 uppercase tracking-widest text-[11px] font-bold block mb-1">
            Transparent Pricing &amp; Scope
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Project Scope Estimator
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Configure your deliverables to get an instant realistic timeline and budget estimate.
          </p>
        </div>

        <div className="bg-[#101420] border border-slate-800 rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 space-y-6">
            <div>
              <label className="text-xs font-bold text-white uppercase tracking-wider block mb-2">
                1. Select Core Deliverable
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'brand', label: 'Brand Identity', desc: 'Logo, Voice & Guidelines' },
                  { id: 'web', label: 'Web & Landing', desc: 'Design & Engineering' },
                  { id: 'system', label: 'Full Product Suite', desc: 'App, Web & Design System' }
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedService(s.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedService === s.id
                        ? 'border-pink-500 bg-pink-950/30 text-white'
                        : 'border-slate-800 bg-[#090C14] text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="font-bold text-xs">{s.label}</div>
                    <div className="text-[10px] text-slate-400 mt-1 leading-tight">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-white uppercase tracking-wider block mb-2">
                2. Target Delivery Timeline
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setTimeline('standard')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    timeline === 'standard'
                      ? 'border-pink-500 bg-pink-950/30 text-white'
                      : 'border-slate-800 bg-[#090C14] text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="font-bold text-xs">Standard (5-7 Weeks)</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Comprehensive research &amp; iterations</div>
                </button>
                <button
                  onClick={() => setTimeline('fast')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    timeline === 'fast'
                      ? 'border-pink-500 bg-pink-950/30 text-white'
                      : 'border-slate-800 bg-[#090C14] text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="font-bold text-xs">Sprint Mode (2-3 Weeks)</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Dedicated sprint team with priority queue</div>
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 bg-[#090C14] border border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Estimated Project Investment
              </span>
              <div className="text-3xl font-black text-pink-400 mt-1">
                ${calculateEstimate().toLocaleString()}
                <span className="text-xs font-normal text-slate-400 ml-1">USD</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-2">
                Includes dedicated art direction, interactive prototypes, responsive engineering, and 30 days of post-launch warranty.
              </p>
            </div>

            <button
              onClick={() => setBriefModalOpen(true)}
              className="w-full py-3 bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold rounded-lg shadow-lg shadow-pink-950/40 transition-colors flex items-center justify-center gap-2"
            >
              <span>Lock In Estimate &amp; Book Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Brief Request Modal */}
      {briefModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-[#101420] border border-pink-500/40 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-bold text-white">Start Your Project Brief</h3>
                <p className="text-xs text-pink-300">Apex Brand &amp; Digital Engineering</p>
              </div>
              <button
                onClick={() => setBriefModalOpen(false)}
                className="text-slate-400 hover:text-white text-xs px-2 py-1 rounded bg-slate-800"
              >
                ✕
              </button>
            </div>

            {briefSubmitted ? (
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs text-center space-y-2">
                <CheckCircle2 className="w-6 h-6 mx-auto text-emerald-400" />
                <div className="font-bold">Project Brief Received</div>
                <p className="text-[11px] text-slate-300">
                  We will review your requirements for <strong>{company || 'your brand'}</strong> and email you a tailored scope deck within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBriefSubmit} className="space-y-3">
                <div>
                  <label className="text-[11px] text-slate-300 block mb-1">Company / Brand Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. NextWave Labs"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-[#090C14] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-pink-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-300 block mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="founder@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#090C14] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-pink-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold rounded-lg shadow-lg shadow-pink-900/50"
                  >
                    Submit Brief &amp; Receive Proposal
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#080A0E] py-8 px-4 sm:px-8 text-center text-xs text-slate-500 space-y-2">
        <p>© 2026 Apex Design &amp; Brand Lab. All client trademarks belong to their respective owners.</p>
        <p className="text-[10px] text-slate-600">Offices: New York · London · Tokyo · Remote Worldwide</p>
      </footer>
    </div>
  );
};
