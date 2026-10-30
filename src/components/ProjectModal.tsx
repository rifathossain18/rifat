import React, { useState, useEffect } from 'react';
import {
  X,
  Laptop,
  Tablet,
  Smartphone,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Star,
  Layers,
  Clock,
  Calendar,
  Share2,
  Check
} from 'lucide-react';
import { Project } from '../data/projects';
import { LuminaSoundLandingPage } from './live-previews/LuminaSoundLandingPage';
import { SavoryBistroLandingPage } from './live-previews/SavoryBistroLandingPage';
import { PulseMetricsLandingPage } from './live-previews/PulseMetricsLandingPage';
import { AuraHeightsLandingPage } from './live-previews/AuraHeightsLandingPage';
import { ApexAgencyLandingPage } from './live-previews/ApexAgencyLandingPage';
import { ElenaVanceLandingPage } from './live-previews/ElenaVanceLandingPage';

interface ProjectModalProps {
  project: Project | null;
  initialTab?: 'preview' | 'details';
  onClose: () => void;
  onRequestProject: (projectName: string, serviceCategory: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  initialTab = 'preview',
  onClose,
  onRequestProject
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'details'>(initialTab);
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const getDeviceFrameClass = () => {
    if (deviceView === 'mobile') return 'max-w-[390px] mx-auto border-x-4 border-t-8 border-b-8 border-slate-300 dark:border-slate-800 rounded-3xl shadow-2xl';
    if (deviceView === 'tablet') return 'max-w-[768px] mx-auto border-4 border-slate-300 dark:border-slate-800 rounded-2xl shadow-2xl';
    return 'w-full rounded-lg border border-slate-200 dark:border-[#1E293B] shadow-xl';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 dark:bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] transition-colors duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Top Bar */}
        <div className="bg-slate-50 dark:bg-[#111827] px-4 sm:px-6 py-4 border-b border-slate-200 dark:border-[#1E293B] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-blue-500" />
            <div>
              <h3 id="modal-title" className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                {project.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {project.category} · Demo Showcase
              </p>
            </div>
          </div>

          {/* Tab Switcher & Action controls */}
          <div className="flex items-center gap-2">
            <div className="flex bg-slate-200/70 dark:bg-[#0B1220] p-1 rounded-lg border border-slate-300 dark:border-[#1E293B]">
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  activeTab === 'preview'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Live Preview
              </button>
              <button
                onClick={() => setActiveTab('details')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  activeTab === 'details'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Case Study
              </button>
            </div>

            <button
              onClick={handleShare}
              title="Copy link"
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-[#0B1220] hover:bg-slate-200 dark:hover:bg-[#1E293B] border border-slate-200 dark:border-[#1E293B] rounded-lg transition-colors"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 bg-slate-100 dark:bg-[#0B1220] hover:bg-rose-50 dark:hover:bg-rose-500/20 border border-slate-200 dark:border-[#1E293B] rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {activeTab === 'preview' ? (
            <div className="space-y-6">
              {/* Responsive viewport controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-[#1E293B]">
                <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-[#111827] p-1 rounded-lg border border-slate-200 dark:border-[#1E293B]">
                  <span className="text-xs text-slate-500 dark:text-slate-400 px-2 font-medium">Viewport:</span>
                  <button
                    onClick={() => setDeviceView('desktop')}
                    className={`flex items-center gap-1 px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                      deviceView === 'desktop' ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Laptop className="w-3.5 h-3.5" />
                    <span>Desktop (100%)</span>
                  </button>
                  <button
                    onClick={() => setDeviceView('tablet')}
                    className={`flex items-center gap-1 px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                      deviceView === 'tablet' ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Tablet className="w-3.5 h-3.5" />
                    <span>Tablet (768px)</span>
                  </button>
                  <button
                    onClick={() => setDeviceView('mobile')}
                    className={`flex items-center gap-1 px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                      deviceView === 'mobile' ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile (390px)</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                  <span>Fully interactive demo mockup</span>
                </div>
              </div>

              {/* Rendered Live Website Screen */}
              <div className={`transition-all duration-300 ${getDeviceFrameClass()}`}>
                {/* Browser top pill */}
                <div className="bg-slate-100 dark:bg-[#111827] px-4 py-2 border-b border-slate-200 dark:border-[#1E293B] flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  </div>
                  <div className="font-mono text-[11px] truncate px-3 py-0.5 rounded bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] text-slate-600 dark:text-slate-400 max-w-[280px]">
                    https://demo.{project.id}.design
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">SSL Secure</div>
                </div>

                {/* Real Interactive Landing Page Implementation */}
                <div className="overflow-hidden bg-[#090D16]">
                  {project.id === 'lumina-sound' && <LuminaSoundLandingPage />}
                  {project.id === 'savory-bistro' && <SavoryBistroLandingPage />}
                  {project.id === 'pulse-metrics' && <PulseMetricsLandingPage />}
                  {project.id === 'aura-heights' && <AuraHeightsLandingPage />}
                  {project.id === 'apex-agency' && <ApexAgencyLandingPage />}
                  {project.id === 'elena-vance' && <ElenaVanceLandingPage />}
                </div>
              </div>

            </div>
          ) : (
            /* Case Study Breakdown Tab */
            <div className="space-y-8">
              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B]">
                  <div className="text-xs font-semibold text-rose-500 dark:text-rose-400 uppercase tracking-wider mb-2">
                    The Challenge
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Client Problem</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {project.clientChallenge}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B]">
                  <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
                    The Strategy
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Design &amp; Dev Solution</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Verified Metrics */}
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-4">Measured Impact</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] text-center"
                    >
                      <div className="text-2xl font-black text-blue-600 dark:text-blue-400">{m.value}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Deliverables */}
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-4">What Was Built</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.deliverables.map((del) => (
                    <div
                      key={del}
                      className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] text-sm text-slate-700 dark:text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3">Technologies &amp; Architecture</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-xs font-medium rounded-md bg-slate-100 dark:bg-[#111827] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#1E293B]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom CTA Bar */}
        <div className="bg-slate-50 dark:bg-[#111827] px-4 sm:px-6 py-4 border-t border-slate-200 dark:border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600 dark:text-slate-400 text-center sm:text-left">
            Need a high-converting page like this for your product or brand?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onRequestProject(project.name, project.category);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-colors"
            >
              <span>Build a Page Like This</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
