import React, { useState } from 'react';
import {
  ShieldCheck,
  BatteryCharging,
  Headphones,
  Check,
  Star,
  Sparkles,
  Zap,
  Volume2,
  VolumeX,
  Truck,
  RotateCcw,
  Award,
  ChevronDown,
  ShoppingBag
} from 'lucide-react';

export const LuminaSoundLandingPage: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<'obsidian' | 'platinum' | 'navy'>('obsidian');
  const [ancMode, setAncMode] = useState<'on' | 'ambient' | 'off'>('on');
  const [activeTab, setActiveTab] = useState<'acoustics' | 'anc' | 'battery'>('acoustics');
  const [cartCount, setCartCount] = useState<number>(0);
  const [addedToast, setAddedToast] = useState<boolean>(false);

  const colors = [
    { id: 'obsidian', name: 'Obsidian Black', hex: '#18181b', bgGrad: 'from-zinc-900 to-black' },
    { id: 'platinum', name: 'Platinum Silver', hex: '#cbd5e1', bgGrad: 'from-slate-700 to-slate-900' },
    { id: 'navy', name: 'Midnight Navy', hex: '#1e3a8a', bgGrad: 'from-blue-950 to-slate-950' }
  ];

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3000);
  };

  return (
    <div className="bg-[#090D16] text-slate-100 font-sans text-xs sm:text-sm selection:bg-blue-600 selection:text-white">
      {/* Announcement Ribbon */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700 text-white py-1.5 px-3 text-center text-[10px] sm:text-xs font-semibold tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 shrink-0" />
        <span>LAUNCH SPECIAL: Save $50 + Get Free Beryllium Audio Cable &amp; Hard Case. Code: <strong>LUMINA50</strong></span>
      </div>

      {/* Landing Page Navbar */}
      <nav className="sticky top-0 z-30 bg-[#090D16]/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-xs">
            L
          </div>
          <span className="font-extrabold tracking-wider text-sm sm:text-base text-white">
            LUMINA SOUND
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-xs text-slate-300 font-medium">
          <a href="#acoustics" className="hover:text-blue-400 transition-colors">Acoustics</a>
          <a href="#anc" className="hover:text-blue-400 transition-colors">ANC 4.0</a>
          <a href="#battery" className="hover:text-blue-400 transition-colors">Battery</a>
          <a href="#reviews" className="hover:text-blue-400 transition-colors">Reviews</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleAddToCart}
            className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-600/30 transition-all flex items-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Order $249</span>
            {cartCount > 0 && (
              <span className="ml-1 w-4 h-4 rounded-full bg-white text-blue-600 text-[10px] font-black flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Toast Alert */}
      {addedToast && (
        <div className="fixed top-14 right-4 z-50 bg-emerald-600 text-white px-4 py-2 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-semibold animate-in slide-in-from-top-2">
          <Check className="w-4 h-4" />
          <span>Added to bag! Free express shipping applied.</span>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative pt-8 pb-12 sm:pt-14 sm:pb-20 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-[11px] font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>Flagship Master Series 2026</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Pure Acoustic Fidelity. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                Without Compromise.
              </span>
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
              Engineered with custom 40mm Beryllium diaphragms and our proprietary Hybrid ANC 4.0 matrix. Hear microscopic studio transients exactly as the mastering engineer intended.
            </p>

            {/* Colorway Selector */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">Select Finish:</span>
                <span className="text-blue-400 font-bold capitalize">
                  {colors.find((c) => c.id === selectedColor)?.name}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {colors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedColor(c.id as any)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                      selectedColor === c.id
                        ? 'border-blue-500 bg-blue-950/50 text-white'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-white/20"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span>{c.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price & Primary CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-white">$249</span>
                  <span className="text-slate-500 line-through text-sm">$299</span>
                  <span className="text-emerald-400 font-bold text-xs">Save $50</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">In stock · Dispatches in 24 hours</div>
              </div>

              <button
                onClick={handleAddToCart}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-xl shadow-blue-600/30 transition-all flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                <span>Pre-Order Lumina Pro</span>
              </button>
            </div>

            {/* Risk-free badges */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-5 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-blue-400" />
                <span>Free Express Shipping</span>
              </span>
              <span className="flex items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5 text-blue-400" />
                <span>30-Day Risk-Free Trial</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-blue-400" />
                <span>2-Year Warranty</span>
              </span>
            </div>
          </div>

          {/* Headphone 3D Visualizer Simulation */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 text-center shadow-2xl overflow-hidden">
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-blue-600/20 text-blue-400 border border-blue-500/30 text-[10px] font-mono">
                TITANIUM CHASSIS
              </div>

              <div className="my-6 relative flex justify-center items-center">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-blue-600/10 blur-xl absolute" />
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-dashed border-blue-500/30 flex items-center justify-center relative">
                  <Headphones className="w-20 h-20 sm:w-24 sm:h-24 text-blue-400 drop-shadow-[0_10px_20px_rgba(59,130,246,0.5)] transition-colors duration-500" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-base sm:text-lg font-bold text-white">
                  Lumina Pro Wireless
                </div>
                <div className="text-xs text-slate-400">
                  Finish: <span className="text-slate-200 capitalize font-medium">{selectedColor}</span>
                </div>
              </div>

              {/* Quick Specs Pill */}
              <div className="mt-5 grid grid-cols-3 gap-2 pt-4 border-t border-slate-800 text-center">
                <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <div className="font-extrabold text-white text-xs sm:text-sm">40mm</div>
                  <div className="text-[10px] text-slate-400">Beryllium</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <div className="font-extrabold text-white text-xs sm:text-sm">-42dB</div>
                  <div className="text-[10px] text-slate-400">Hybrid ANC</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <div className="font-extrabold text-white text-xs sm:text-sm">55 Hrs</div>
                  <div className="text-[10px] text-slate-400">Battery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Feature Demo Tabs */}
      <div className="py-12 px-4 sm:px-8 bg-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Studio Technology Inside Every Component
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
              Test the sound processing modes and inspect technical engineering.
            </p>

            <div className="inline-flex p-1 bg-slate-900 rounded-xl border border-slate-800 gap-1 mt-4">
              <button
                onClick={() => setActiveTab('acoustics')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeTab === 'acoustics' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Acoustic Architecture
              </button>
              <button
                onClick={() => setActiveTab('anc')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeTab === 'anc' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Interactive ANC 4.0
              </button>
              <button
                onClick={() => setActiveTab('battery')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeTab === 'battery' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Ultra Battery
              </button>
            </div>
          </div>

          {/* Active Tab Screen */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800">
            {activeTab === 'acoustics' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-400">Driver Matrix</div>
                  <h3 className="text-xl font-bold text-white">Ultra-Rigid Beryllium Diaphragm</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Unlike standard polymer mylar drivers that flex and introduce harmonic distortion at high volumes, our vapor-deposited Beryllium foil maintains strict piston motion up to 45kHz.
                  </p>
                  <div className="space-y-1.5 pt-2 text-xs text-slate-200">
                    <div className="flex items-center gap-2">✓ LDAC &amp; aptX Lossless 24-bit/96kHz</div>
                    <div className="flex items-center gap-2">✓ Total Harmonic Distortion &lt; 0.01%</div>
                    <div className="flex items-center gap-2">✓ Custom Neodymium N52 Magnetic Circuit</div>
                  </div>
                </div>
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-3">
                  <div className="text-3xl font-black text-blue-400">5Hz – 45,000Hz</div>
                  <div className="text-xs text-slate-400 font-medium">Certified Hi-Res Audio Response</div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'anc' && (
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-400">Real-Time Mode Toggle</div>
                  <h3 className="text-xl font-bold text-white">Select ANC Processing State</h3>
                </div>

                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => setAncMode('on')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                      ancMode === 'on' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40' : 'bg-slate-950 text-slate-400 border border-slate-800'
                    }`}
                  >
                    <VolumeX className="w-4 h-4" />
                    <span>Active Noise Cancelling (ON)</span>
                  </button>

                  <button
                    onClick={() => setAncMode('ambient')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                      ancMode === 'ambient' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/40' : 'bg-slate-950 text-slate-400 border border-slate-800'
                    }`}
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Ambient Transparency</span>
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-xs font-semibold text-white">
                    {ancMode === 'on'
                      ? '🔇 Active: 6 Beamforming Mics inverted 380,000 times/second. Ambient rumble cut by -42dB.'
                      : '🎙️ Ambient: Natural voice passthrough activated for flight announcements & office conversations.'}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'battery' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-3xl font-black text-white">55h</div>
                  <div className="text-xs font-bold text-blue-400 mt-1">Playtime (ANC On)</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Enough for two round-trip flights</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-3xl font-black text-white">10 Min</div>
                  <div className="text-xs font-bold text-blue-400 mt-1">Rapid USB-C Charge</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Yields 6 hours of continuous playback</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-3xl font-black text-white">100%</div>
                  <div className="text-xs font-bold text-blue-400 mt-1">Full Charge in 48m</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Lithium-Polymer safety cells</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Verified Reviews Section */}
      <div id="reviews" className="py-12 px-4 sm:px-8 border-t border-slate-800">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <div className="flex items-center justify-center gap-1 text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Rated 4.9/5 by 1,240+ Audiophiles</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-xs">Julian Reed</span>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">Verified Buyer</span>
              </div>
              <p className="text-xs text-slate-300 italic">
                "The acoustic balance rivals my open-back studio monitors costing three times as much. The instrument separation is startling."
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-xs">Sophia Chen</span>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">Verified Buyer</span>
              </div>
              <p className="text-xs text-slate-300 italic">
                "Wore these on a 14-hour flight from Tokyo to London. ANC killed engine drone completely, and zero ear pressure fatigue."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Pre-Order Bar */}
      <div className="sticky bottom-0 bg-[#090D16]/95 backdrop-blur-md border-t border-slate-800 p-3 sm:p-4 flex items-center justify-between gap-4">
        <div>
          <span className="text-xs text-slate-400 block">Lumina Sound Pro</span>
          <span className="text-sm sm:text-base font-bold text-white">$249 USD <span className="text-xs text-slate-500 font-normal line-through">$299</span></span>
        </div>
        <button
          onClick={handleAddToCart}
          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/30 transition-all flex items-center gap-1.5"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Add to Bag</span>
        </button>
      </div>
    </div>
  );
};
