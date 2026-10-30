import React, { useState } from 'react';
import {
  Activity,
  Cpu,
  Zap,
  TrendingUp,
  ShieldCheck,
  Check,
  ArrowRight,
  Calculator,
  Sliders,
  AlertTriangle,
  Play
} from 'lucide-react';

export const PulseMetricsLandingPage: React.FC = () => {
  const [mrr, setMrr] = useState<number>(120000);
  const [churnRate, setChurnRate] = useState<number>(4.2);
  const [activeTab, setActiveTab] = useState<'radar' | 'playbooks' | 'pricing'>('radar');
  const [demoRequested, setDemoRequested] = useState<boolean>(false);

  // Real-time dynamic calculation
  const monthlyLost = (mrr * (churnRate / 100));
  const annualLost = monthlyLost * 12;
  const savedAnnual = Math.round(annualLost * 0.38); // PulseMetrics 38% reduction

  const sampleAccounts = [
    { name: 'CloudScale Inc.', mrr: '$14,500/mo', health: 94, status: 'Healthy', trend: '+4%' },
    { name: 'HyperGrid Systems', mrr: '$22,000/mo', health: 48, status: 'At Risk', trend: '-18%' },
    { name: 'Vortex Data Labs', mrr: '$8,900/mo', health: 26, status: 'Critical Churn', trend: '-42%' },
    { name: 'OmniFlow Logistics', mrr: '$31,400/mo', health: 89, status: 'Expanding', trend: '+12%' }
  ];

  return (
    <div className="bg-[#080E1A] text-slate-100 font-sans text-xs sm:text-sm selection:bg-emerald-600 selection:text-white">
      {/* Top Banner */}
      <div className="bg-[#0D1829] border-b border-emerald-950 text-emerald-400 py-1.5 px-4 text-center text-[10px] sm:text-xs font-semibold flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Gartner 2026 Leader in B2B Churn Prevention &amp; Revenue Telemetry</span>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-30 bg-[#080E1A]/95 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-black text-xs">
            P
          </div>
          <span className="font-extrabold tracking-tight text-sm sm:text-base text-white">
            PulseMetrics
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-xs text-slate-300 font-medium">
          <button onClick={() => setActiveTab('radar')} className="hover:text-emerald-400">Churn Radar</button>
          <button onClick={() => setActiveTab('playbooks')} className="hover:text-emerald-400">Automation</button>
          <button onClick={() => setActiveTab('pricing')} className="hover:text-emerald-400">Pricing</button>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setDemoRequested(true)}
            className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-600/30 transition-all"
          >
            Start Free 14-Day Trial
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-8 pb-12 sm:pt-14 sm:pb-20 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>SOC2 Type II &amp; ISO 27001 Certified Enterprise Architecture</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Predict &amp; Halt Customer Churn <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              Before It Costs You ARR.
            </span>
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Unified product telemetry and behavioral health scoring that alerts your Customer Success team 45 days before an enterprise customer cancels.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setDemoRequested(true)}
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-600/30 transition-all flex items-center gap-2"
            >
              <span>Launch Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-xs sm:text-sm border border-slate-800 flex items-center gap-2">
              <Play className="w-3.5 h-3.5 text-emerald-400" />
              <span>Watch 2-Min Teardown</span>
            </button>
          </div>

          {demoRequested && (
            <div className="mt-4 p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs max-w-md mx-auto animate-in fade-in">
              ✓ 14-Day Sandbox activated! Zero code required. Connect your Stripe or Segment in 3 clicks.
            </div>
          )}
        </div>

        {/* Live Interactive ROI Calculator */}
        <div className="mt-12 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0A1220] border border-slate-800 p-6 sm:p-8 shadow-2xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
            <Calculator className="w-4 h-4" />
            <span>Interactive ARR Retention Calculator</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="text-slate-300">Your Monthly Recurring Revenue (MRR):</span>
                  <span className="text-white font-bold text-sm">${mrr.toLocaleString()} / mo</span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="500000"
                  step="5000"
                  value={mrr}
                  onChange={(e) => setMrr(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="text-slate-300">Current Monthly Gross Churn Rate:</span>
                  <span className="text-rose-400 font-bold text-sm">{churnRate}% / mo</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="0.1"
                  value={churnRate}
                  onChange={(e) => setChurnRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
              </div>
            </div>

            {/* Result Display Box */}
            <div className="lg:col-span-5 p-5 rounded-xl bg-[#060B14] border border-emerald-500/30 text-center space-y-2">
              <div className="text-[11px] text-slate-400 font-medium">Estimated ARR Saved with PulseMetrics:</div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight">
                ${savedAnnual.toLocaleString()} <span className="text-xs text-slate-400 font-normal">/ year</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Based on an average 38% customer recovery rate across 450+ SaaS accounts.
              </p>
              <button
                onClick={() => setDemoRequested(true)}
                className="mt-2 w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg shadow"
              >
                Protect This Revenue Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Account Telemetry Radar */}
      <div className="py-12 px-4 sm:px-8 bg-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">Live Customer Telemetry Radar</h3>
              <p className="text-xs text-slate-400">Real-time predictive health analysis simulated live.</p>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-500/30">
              ● Live Sync
            </span>
          </div>

          <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-900/60">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 font-semibold uppercase text-[10px]">
                <tr>
                  <th className="py-3 px-4">Account</th>
                  <th className="py-3 px-4">MRR</th>
                  <th className="py-3 px-4">Health Score</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-200">
                {sampleAccounts.map((acc) => (
                  <tr key={acc.name} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-4 font-bold text-white">{acc.name}</td>
                    <td className="py-3 px-4 text-slate-300 font-mono">{acc.mrr}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <span className="font-bold">{acc.health}/100</span>
                        <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${acc.health > 70 ? 'bg-emerald-400' : acc.health > 40 ? 'bg-amber-400' : 'bg-rose-500'}`}
                            style={{ width: `${acc.health}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          acc.health > 70
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'
                            : acc.health > 40
                            ? 'bg-amber-950 text-amber-400 border border-amber-500/30'
                            : 'bg-rose-950 text-rose-400 border border-rose-500/30'
                        }`}
                      >
                        {acc.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold">
                        View Telemetry →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
