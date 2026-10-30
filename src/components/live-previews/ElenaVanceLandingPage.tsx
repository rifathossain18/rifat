import React, { useState } from 'react';
import {
  Mic,
  UserCheck,
  Radio,
  Play,
  Pause,
  Download,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Smartphone,
  Globe,
  Bell,
  BookOpen,
  Volume2
} from 'lucide-react';

export const ElenaVanceLandingPage: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<'web' | 'flutterApp'>('web');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [guideDownloaded, setGuideDownloaded] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [clientName, setClientName] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
    setTimeout(() => {
      setBookingModalOpen(false);
      setBookingConfirmed(false);
    }, 3000);
  };

  const handleDownloadGuide = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setGuideDownloaded(true);
    setTimeout(() => setGuideDownloaded(false), 4000);
  };

  return (
    <div className="bg-[#090D14] text-slate-100 font-sans text-xs sm:text-sm selection:bg-cyan-500 selection:text-black">
      {/* Platform Switcher Ribbon */}
      <div className="bg-[#101726] border-b border-cyan-900/40 py-2 px-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[11px] text-cyan-300">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Cross-Platform Ecosystem: React Web Landing + Flutter VIP Client Portal</span>
        </div>

        <div className="flex items-center gap-1.5 bg-[#080B10] p-1 rounded-lg border border-cyan-900/50">
          <button
            onClick={() => setActivePlatform('web')}
            className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded transition-colors ${
              activePlatform === 'web'
                ? 'bg-cyan-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Web Authority Landing</span>
          </button>
          <button
            onClick={() => setActivePlatform('flutterApp')}
            className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded transition-colors ${
              activePlatform === 'flutterApp'
                ? 'bg-cyan-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Flutter Mobile Client App</span>
          </button>
        </div>
      </div>

      {activePlatform === 'web' ? (
        /* Web Authority Landing Page */
        <div className="space-y-12">
          {/* Header */}
          <header className="sticky top-0 z-30 bg-[#090D14]/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-4 flex items-center justify-between">
            <div>
              <span className="font-extrabold tracking-tight text-sm sm:text-base text-white">
                ELENA VANCE
              </span>
              <span className="text-[10px] text-cyan-400 block tracking-widest uppercase">
                Executive Advisor &amp; Keynote Speaker
              </span>
            </div>

            <div className="hidden md:flex items-center gap-6 text-xs text-slate-300 font-medium">
              <a href="#about" className="hover:text-cyan-400 transition-colors">Philosophy</a>
              <a href="#speaking" className="hover:text-cyan-400 transition-colors">Keynotes</a>
              <a href="#advisory" className="hover:text-cyan-400 transition-colors">Private Advisory</a>
              <a href="#podcast" className="hover:text-cyan-400 transition-colors">Podcast</a>
            </div>

            <button
              onClick={() => setBookingModalOpen(true)}
              className="px-3.5 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-black font-bold text-xs rounded transition-all shadow-md shadow-cyan-900/30"
            >
              Book for 2026 Keynote
            </button>
          </header>

          {/* Hero */}
          <section className="pt-6 pb-12 px-4 sm:px-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-[11px] font-semibold">
                  <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Advisor to Fortune 100 CEOs &amp; Tech Founders</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
                  Transforming High-Stakes Leaders Into <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    Relentless Innovators.
                  </span>
                </h1>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Trusted by boardrooms across 24 countries to navigate enterprise inflection points, 
                  re-energize leadership teams, and unlock decisive organizational clarity.
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => setBookingModalOpen(true)}
                    className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs sm:text-sm rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-cyan-950/40"
                  >
                    <span>Check Keynote Availability</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActivePlatform('flutterApp')}
                    className="px-4 py-2.5 bg-[#141A29] hover:bg-slate-800 text-cyan-300 border border-cyan-900/50 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>View Flutter Mobile App</span>
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800">
                  <div>
                    <div className="text-xl font-black text-white">120K+</div>
                    <div className="text-[10px] text-slate-400">Leaders Coached</div>
                  </div>
                  <div>
                    <div className="text-xl font-black text-cyan-400">3x</div>
                    <div className="text-[10px] text-slate-400">Bestselling Author</div>
                  </div>
                  <div>
                    <div className="text-xl font-black text-white">24</div>
                    <div className="text-[10px] text-slate-400">Countries Keynoted</div>
                  </div>
                </div>
              </div>

              {/* Video Keynote Reel Simulation */}
              <div className="lg:col-span-5 bg-[#0E1524] border border-cyan-900/40 rounded-2xl p-4 shadow-xl">
                <div className="aspect-[4/3] rounded-xl bg-slate-900 border border-slate-800 relative overflow-hidden flex flex-col justify-between p-4">
                  <div className="flex justify-between items-center text-[10px] text-slate-400 z-10">
                    <span className="px-2 py-0.5 rounded bg-black/60 text-cyan-300 font-mono">GLOBAL SUMMIT KEYNOTE</span>
                    <span className="text-rose-400 font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" /> LIVE STREAM
                    </span>
                  </div>

                  <div className="text-center z-10 py-6">
                    <button
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className="w-14 h-14 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black flex items-center justify-center mx-auto shadow-xl transition-transform hover:scale-105"
                    >
                      {isPlayingAudio ? <Pause className="w-6 h-6 fill-black" /> : <Play className="w-6 h-6 fill-black ml-1" />}
                    </button>
                    <div className="text-xs font-bold text-white mt-3">
                      {isPlayingAudio ? 'Playing "Courage Under Pressure" (04:12)' : 'Play 2026 Keynote Highlight Reel'}
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-400 flex justify-between z-10 pt-2 border-t border-slate-800">
                    <span>Topic: Executive Resilience</span>
                    <span className="text-cyan-400">Viewed by 85,000+</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Guide Download Form */}
          <section className="py-8 px-4 sm:px-8 max-w-4xl mx-auto bg-[#0E1524] border border-cyan-900/30 rounded-2xl">
            <div className="text-center max-w-xl mx-auto space-y-2 mb-4">
              <h3 className="text-lg font-bold text-white">Download The 2026 Executive Decision Framework</h3>
              <p className="text-xs text-slate-300">
                A 28-page proprietary blueprint for high-stakes decisions under extreme uncertainty.
              </p>
            </div>

            {guideDownloaded ? (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs text-center flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Success! Framework PDF sent to your inbox. Check your promotions folder if delayed.</span>
              </div>
            ) : (
              <form onSubmit={handleDownloadGuide} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter executive email..."
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 bg-[#090D14] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Get Free Guide</span>
                </button>
              </form>
            )}
          </section>
        </div>
      ) : (
        /* Flutter Mobile Companion App Interactive Preview */
        <div className="py-8 px-4 max-w-sm mx-auto">
          <div className="bg-[#050811] border-4 border-slate-700 rounded-3xl p-4 shadow-2xl space-y-4">
            {/* Phone Notch */}
            <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto" />

            {/* Flutter App Top Appbar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-[10px] text-cyan-400 font-mono block">FLUTTER VIP PORTAL</span>
                <span className="text-sm font-bold text-white">Elena Vance Advisory</span>
              </div>
              <div className="relative">
                <Bell className="w-4 h-4 text-slate-400" />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400" />
              </div>
            </div>

            {/* Daily Audio Briefing Module */}
            <div className="bg-[#0E1524] border border-cyan-900/50 rounded-2xl p-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Volume2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Today's Executive Brief</div>
                  <div className="text-[10px] text-slate-400">Episode #48 · 6 mins audio</div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-lg p-2.5 flex items-center justify-between">
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="w-8 h-8 rounded-full bg-cyan-500 text-black flex items-center justify-center"
                >
                  {isPlayingAudio ? <Pause className="w-3.5 h-3.5 fill-black" /> : <Play className="w-3.5 h-3.5 fill-black ml-0.5" />}
                </button>
                <div className="flex-1 mx-3">
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full bg-cyan-400 ${isPlayingAudio ? 'w-2/3 transition-all duration-1000' : 'w-1/4'}`} />
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-400">{isPlayingAudio ? '03:45' : '01:20'}</span>
              </div>
            </div>

            {/* Private 1-on-1 Advisory Scheduler */}
            <div className="bg-[#0E1524] border border-slate-800 rounded-2xl p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Next 1-on-1 Advisory Slot</span>
                <span className="text-[10px] text-emerald-400 font-bold">2 Slots Open</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Direct confidential 45-minute advisory session with Elena via encrypted video.
              </p>
              <button
                onClick={() => setBookingModalOpen(true)}
                className="w-full py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold rounded-lg transition-colors"
              >
                Reserve Session
              </button>
            </div>

            {/* Client Vault Documents */}
            <div className="space-y-2">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Private Vault Materials</span>
              {[
                { title: 'Board Alignment Playbook 2026', size: '4.2 MB PDF' },
                { title: 'Crisis Communication Scripts', size: '1.8 MB PDF' }
              ].map((doc) => (
                <div key={doc.title} className="p-2.5 rounded-lg bg-[#0E1524] border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    <div>
                      <div className="text-white font-medium text-[11px]">{doc.title}</div>
                      <div className="text-[9px] text-slate-500">{doc.size}</div>
                    </div>
                  </div>
                  <Download className="w-3.5 h-3.5 text-slate-400 hover:text-cyan-400 cursor-pointer" />
                </div>
              ))}
            </div>

            <div className="pt-2 text-center text-[10px] text-slate-500 font-mono">
              Flutter Engine 3.24 · iOS &amp; Android Ready
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-[#0E1524] border border-cyan-500/40 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-bold text-white">Book Elena Vance</h3>
                <p className="text-xs text-cyan-300">Keynote or Advisory Consultation</p>
              </div>
              <button
                onClick={() => setBookingModalOpen(false)}
                className="text-slate-400 hover:text-white text-xs px-2 py-1 rounded bg-slate-800"
              >
                ✕
              </button>
            </div>

            {bookingConfirmed ? (
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs text-center space-y-2">
                <CheckCircle2 className="w-6 h-6 mx-auto text-emerald-400" />
                <div className="font-bold">Inquiry Received</div>
                <p className="text-[11px] text-slate-300">
                  Elena's executive coordinator will review your request for <strong>{clientName || 'your organization'}</strong> and confirm scheduling options within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-3">
                <div>
                  <label className="text-[11px] text-slate-300 block mb-1">Your Name &amp; Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Vance, VP Strategy"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-[#090D14] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-300 block mb-1">Event or Target Date</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. October 14, 2026 or Q3 Summit"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full bg-[#090D14] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs rounded-lg shadow-lg"
                  >
                    Submit Booking Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#060A10] py-6 px-4 text-center text-xs text-slate-500 space-y-1">
        <p>© 2026 Elena Vance Advisory LLC. All rights reserved.</p>
        <p className="text-[10px] text-slate-600">Represented by Global Speakers Bureau</p>
      </footer>
    </div>
  );
};
