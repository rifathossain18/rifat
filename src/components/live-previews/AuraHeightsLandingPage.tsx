import React, { useState } from 'react';
import {
  Compass,
  Building,
  Key,
  Shield,
  Eye,
  Calendar,
  CheckCircle2,
  Download,
  ArrowRight,
  Phone,
  Sparkles,
  MapPin,
  ChevronRight,
  Award,
  Layers,
  Maximize2
} from 'lucide-react';

export const AuraHeightsLandingPage: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState<'42A' | '48B' | '52C'>('52C');
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');

  const penthouses = {
    '42A': {
      title: 'Residence 42A · The West Wing',
      beds: '3 Bedrooms',
      baths: '3.5 Bathrooms',
      sqft: '3,850 SQ FT',
      terrace: '620 SQ FT Terrace',
      price: '$6,850,000',
      views: 'Harbor Sunsets & Marina Skyline',
      highlights: ['Direct Keyed Elevator Access', 'Poliform Chef Kitchen', 'Calacatta Marble Baths', 'Wine Wall Storage']
    },
    '48B': {
      title: 'Residence 48B · Duplex Sky Villa',
      beds: '4 Bedrooms',
      baths: '5 Bathrooms',
      sqft: '5,420 SQ FT',
      terrace: '1,200 SQ FT Wrap-Around',
      price: '$12,400,000',
      views: '360° Unobstructed Ocean & Metropolis',
      highlights: ['Double-Height 24ft Salon', 'Private Heated Jacuzzi', 'Bespoke Nordic Slate Fireplace', 'Staff Suite']
    },
    '52C': {
      title: 'Crown Penthouse 52 · The Master Triplex',
      beds: '5 Bedrooms',
      baths: '6.5 Bathrooms',
      sqft: '8,900 SQ FT',
      terrace: '2,400 SQ FT Sky Deck',
      price: '$24,500,000',
      views: 'Panoramic Infinite Horizon',
      highlights: ['Cantilever Glass Infinity Pool', 'Biometric Private Sky Car Lift', 'Rooftop Helipad Privilege', 'Sommelier Cellar']
    }
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setShowInquiryForm(false);
      setInquirySubmitted(false);
    }, 3500);
  };

  const handleBrochureDownload = () => {
    setDownloadProgress(true);
    setTimeout(() => {
      setDownloadProgress(false);
      alert('Brochure download simulated: "Aura_Heights_Architectural_Monograph_2026.pdf" (34 MB High-Res)');
    }, 1200);
  };

  const active = penthouses[selectedUnit];

  return (
    <div className="bg-[#080B11] text-slate-100 font-sans text-xs sm:text-sm selection:bg-purple-600 selection:text-white">
      {/* Top Architectural Notice */}
      <div className="bg-[#101420] border-b border-purple-900/30 text-purple-300/90 py-1.5 px-4 text-center text-[10px] sm:text-xs tracking-widest uppercase flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-purple-400" />
        <span>Private Pre-Release · Only 9 Bespoke Residences Remain for 2026 Occupancy</span>
      </div>

      {/* Luxury Nav */}
      <header className="sticky top-0 z-30 bg-[#080B11]/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 border border-purple-500/50 flex items-center justify-center text-purple-300 font-serif font-black text-sm">
            A
          </div>
          <div>
            <span className="font-serif tracking-widest text-sm sm:text-base text-white uppercase block leading-none">
              AURA HEIGHTS
            </span>
            <span className="text-[9px] tracking-[0.2em] text-slate-400 uppercase">
              Sky Residences
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-xs tracking-wider uppercase text-slate-300">
          <a href="#penthouses" className="hover:text-purple-300 transition-colors">Residences</a>
          <a href="#architecture" className="hover:text-purple-300 transition-colors">Architecture</a>
          <a href="#amenities" className="hover:text-purple-300 transition-colors">Club 48</a>
          <a href="#neighborhood" className="hover:text-purple-300 transition-colors">Location</a>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowInquiryForm(true)}
            className="px-3.5 py-1.5 bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white text-xs font-semibold tracking-wider uppercase rounded transition-all shadow-lg shadow-purple-950/50"
          >
            Private Tour
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-[11px] font-medium tracking-wider uppercase">
            <Compass className="w-3.5 h-3.5 text-purple-400" />
            <span>Prime Downtown Financial &amp; Marina Promenade</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-white tracking-tight leading-[1.15]">
            Architectural Sovereignty <br />
            <span className="italic text-purple-300">Above the City Skyline.</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
            Thirty-two limited-edition sky residences suspended 52 storeys above the metropolis. 
            Crafted with 14-foot floor-to-ceiling acoustic glass, private cantilevered heated pools, 
            and white-glove concierge services.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setShowInquiryForm(true)}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs sm:text-sm tracking-wider uppercase rounded transition-all flex items-center gap-2 shadow-xl shadow-purple-900/30"
            >
              <span>Schedule Confidential Showing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleBrochureDownload}
              disabled={downloadProgress}
              className="px-5 py-3 bg-[#111827] hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs sm:text-sm font-medium tracking-wider uppercase rounded transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-purple-400" />
              <span>{downloadProgress ? 'Generating PDF...' : 'Download Monograph'}</span>
            </button>
          </div>
        </div>

        {/* Hero Architectural Visual Card */}
        <div className="mt-12 rounded-2xl border border-purple-900/40 bg-gradient-to-b from-[#141A29] to-[#0A0D15] p-4 sm:p-6 shadow-2xl overflow-hidden relative">
          <div className="aspect-[16/9] max-h-[380px] w-full rounded-xl bg-slate-900 border border-slate-800 overflow-hidden relative flex flex-col justify-between p-6 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/80 via-slate-950/70 to-slate-900/40" />

            <div className="relative z-10 flex items-start justify-between">
              <div>
                <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-purple-500/30 text-[10px] sm:text-xs text-purple-300 tracking-widest uppercase font-semibold">
                  Penthouse 52 Terrace View
                </span>
                <h3 className="text-xl sm:text-3xl font-serif text-white mt-2">
                  Infinity Cantilever Over Downtown
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block font-mono">Elevation</span>
                <span className="text-lg sm:text-xl font-serif text-purple-300">710 FT</span>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-black/70 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-slate-800">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Ceiling Height</span>
                <span className="text-xs sm:text-sm font-bold text-white">14 FT Clear</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Glazing</span>
                <span className="text-xs sm:text-sm font-bold text-white">Triple Acoustic</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Private Garage</span>
                <span className="text-xs sm:text-sm font-bold text-white">Sky Car Lift</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Handover</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-400">Q4 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Penthouse Selector */}
      <section id="penthouses" className="py-12 sm:py-16 px-4 sm:px-8 border-t border-slate-800/80 bg-[#0A0E17]">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-purple-400 uppercase tracking-widest text-[11px] font-bold block mb-1">
                The Portfolio of Suites
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-white">
                Select Your Residence
              </h2>
            </div>

            {/* Suite Tabs */}
            <div className="flex items-center gap-1.5 bg-[#101522] p-1.5 rounded-xl border border-slate-800">
              {(['42A', '48B', '52C'] as const).map((unit) => (
                <button
                  key={unit}
                  onClick={() => setSelectedUnit(unit)}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all ${
                    selectedUnit === unit
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Unit {unit}
                </button>
              ))}
            </div>
          </div>

          {/* Active Unit Detailed Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0D121F] border border-slate-800 rounded-2xl p-6 sm:p-8">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-0.5 rounded bg-purple-950 border border-purple-500/40 text-[10px] font-bold text-purple-300 uppercase">
                    Available For Showing
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{active.views}</span>
                </div>
                <h3 className="text-xl sm:text-3xl font-serif text-white">
                  {active.title}
                </h3>
                <p className="text-2xl sm:text-3xl font-serif text-purple-300 font-semibold mt-2">
                  {active.price}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-lg bg-[#141B2C] border border-slate-800/80">
                  <span className="text-[10px] text-slate-400 block uppercase">Bedrooms</span>
                  <span className="text-xs sm:text-sm font-bold text-white">{active.beds}</span>
                </div>
                <div className="p-3 rounded-lg bg-[#141B2C] border border-slate-800/80">
                  <span className="text-[10px] text-slate-400 block uppercase">Bathrooms</span>
                  <span className="text-xs sm:text-sm font-bold text-white">{active.baths}</span>
                </div>
                <div className="p-3 rounded-lg bg-[#141B2C] border border-slate-800/80">
                  <span className="text-[10px] text-slate-400 block uppercase">Interior</span>
                  <span className="text-xs sm:text-sm font-bold text-white">{active.sqft}</span>
                </div>
                <div className="p-3 rounded-lg bg-[#141B2C] border border-slate-800/80">
                  <span className="text-[10px] text-slate-400 block uppercase">Exterior</span>
                  <span className="text-xs sm:text-sm font-bold text-white">{active.terrace}</span>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Architectural Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {active.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => setShowInquiryForm(true)}
                  className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold tracking-wider uppercase rounded transition-colors"
                >
                  Book Showing for {selectedUnit}
                </button>
                <button
                  onClick={handleBrochureDownload}
                  className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold rounded"
                >
                  Download Floorplate DWG/PDF
                </button>
              </div>
            </div>

            {/* Interactive Floorplan / Mock Architectural Blueprint */}
            <div className="lg:col-span-5 bg-[#090D17] border border-slate-800/80 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-purple-400" />
                  <span className="font-mono text-[11px]">LEVEL_{selectedUnit.replace(/\D/g, '')}_PLAN.dwg</span>
                </div>
                <span className="text-emerald-400 font-mono text-[10px]">VERIFIED SCALE 1:50</span>
              </div>

              <div className="aspect-square bg-[#05070D] rounded-lg border border-purple-900/30 p-4 relative flex flex-col justify-between">
                {/* Blueprint grid lines */}
                <div className="absolute inset-0 bg-[radial-gradient(#1e1e38_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

                <div className="relative z-10 flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>NORTH ELEVATION</span>
                  <span>HARBOR OVERLOOK</span>
                </div>

                {/* Simulated floor layout geometry */}
                <div className="relative z-10 border border-purple-500/40 rounded p-3 bg-purple-950/20 space-y-2">
                  <div className="flex justify-between items-center text-purple-300 font-serif text-xs font-bold">
                    <span>GRAND SALON &amp; ATRIUM</span>
                    <span className="font-mono text-[10px] text-slate-400">38' x 24'</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-300">
                    <div className="border border-slate-700/60 p-2 rounded bg-black/40">
                      <span className="block text-purple-400 font-semibold">MASTER SUITE</span>
                      <span className="text-slate-400">Keyed Elevator Direct</span>
                    </div>
                    <div className="border border-slate-700/60 p-2 rounded bg-black/40">
                      <span className="block text-purple-400 font-semibold">SKY TERRACE</span>
                      <span className="text-slate-400">Cantilevered Glass</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>ARCHITECT: STUDIO OLM</span>
                  <span className="text-purple-300 font-bold">{active.sqft}</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 italic text-center">
                Click "Book Showing" to inspect physical finishes at our private on-site presentation gallery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Showcase */}
      <section id="amenities" className="py-12 sm:py-16 px-4 sm:px-8 max-w-6xl mx-auto space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-purple-400 uppercase tracking-widest text-[11px] font-bold block mb-1">
            Private Resident Privileges
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-white">
            The Amenities of Club 48
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: 'Biometric Sky Garage',
              desc: 'High-speed automated vehicular elevator docks supercars directly outside your foyer.',
              icon: Building
            },
            {
              title: 'Nordic Slate Spa',
              desc: 'Cold plunge, eucalyptus steam bath, and heated Finnish stone sauna on Level 48.',
              icon: Sparkles
            },
            {
              title: 'Curated Sommelier Cellar',
              desc: 'Temperature & humidity-controlled personal lockers for up to 300 reserve vintages.',
              icon: Key
            },
            {
              title: '24/7 Diplomatic Security',
              desc: 'Discreet biometric access, dedicated concierge staff, and encrypted intercom grid.',
              icon: Shield
            }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-[#0D121F] border border-slate-800 hover:border-purple-500/40 transition-colors space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white font-serif">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Private Tour Inquiry Modal */}
      {showInquiryForm && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-[#0D121F] border border-purple-500/40 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-serif font-bold text-white">Schedule Confidential Tour</h3>
                <p className="text-xs text-purple-300">Aura Heights Sales Gallery · Unit {selectedUnit}</p>
              </div>
              <button
                onClick={() => setShowInquiryForm(false)}
                className="text-slate-400 hover:text-white text-xs px-2 py-1 rounded bg-slate-800"
              >
                ✕
              </button>
            </div>

            {inquirySubmitted ? (
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs text-center space-y-2">
                <CheckCircle2 className="w-6 h-6 mx-auto text-emerald-400" />
                <div className="font-bold">Private Showing Request Confirmed</div>
                <p className="text-[11px] text-slate-300">
                  Our Senior Residences Director will reach out to <strong>{formPhone || formEmail}</strong> within 2 hours to confirm your private viewing window.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-3">
                <div>
                  <label className="text-[11px] text-slate-300 block mb-1">Full Legal Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lord Sterling"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full bg-[#080B11] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-300 block mb-1">Confidential Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="w-full bg-[#080B11] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-300 block mb-1">Direct Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2834"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full bg-[#080B11] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold tracking-wider uppercase rounded-lg shadow-lg"
                  >
                    Request VIP Tour Confirmation
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#06080E] py-8 px-4 sm:px-8 text-center text-xs text-slate-500 space-y-2">
        <p>© 2026 Aura Heights Sky Residences. All architectural renderings subject to final contract verification.</p>
        <p className="text-[10px] text-slate-600">Sales Gallery: 88 Harborfront Boulevard, Penthouse Level 1 · Strictly By Advance Appointment</p>
      </footer>
    </div>
  );
};
