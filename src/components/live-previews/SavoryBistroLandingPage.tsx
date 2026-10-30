import React, { useState } from 'react';
import {
  Utensils,
  Wine,
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  Star,
  MapPin,
  Sparkles,
  PhoneCall,
  Flame,
  Award
} from 'lucide-react';

export const SavoryBistroLandingPage: React.FC = () => {
  const [selectedParty, setSelectedParty] = useState<number>(2);
  const [selectedTime, setSelectedTime] = useState<string>('7:30 PM');
  const [selectedDate, setSelectedDate] = useState<string>('Tonight');
  const [menuTab, setMenuTab] = useState<'hearth' | 'tasting' | 'wine'>('hearth');
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  const times = ['6:00 PM', '7:15 PM', '8:30 PM', '9:15 PM'];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
    setTimeout(() => setBookingConfirmed(false), 5000);
  };

  return (
    <div className="bg-[#0C0B0A] text-amber-50 font-sans text-xs sm:text-sm selection:bg-amber-600 selection:text-white">
      {/* Top Banner */}
      <div className="bg-[#1C1611] border-b border-amber-900/40 text-amber-300 py-1.5 px-4 text-center text-[10px] sm:text-xs font-medium flex items-center justify-center gap-2">
        <Award className="w-3.5 h-3.5 text-amber-400" />
        <span>Michelin Recommended 2026 · Farm-to-Table Wood-Fired Dining</span>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-30 bg-[#0C0B0A]/95 backdrop-blur-md border-b border-amber-950/60 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-amber-600/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-serif font-black text-sm">
            S
          </div>
          <span className="font-serif tracking-widest text-sm sm:text-base text-amber-100 font-bold">
            SAVORY &amp; HEARTH
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-xs text-amber-200/70 font-medium tracking-wide">
          <a href="#booking" className="hover:text-amber-400 transition-colors">Reservations</a>
          <a href="#menu" className="hover:text-amber-400 transition-colors">Seasonal Menu</a>
          <a href="#cellar" className="hover:text-amber-400 transition-colors">Wine Vault</a>
          <a href="#story" className="hover:text-amber-400 transition-colors">Our Story</a>
        </div>

        <a
          href="#booking"
          className="px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-black text-xs font-bold transition-all shadow-md shadow-amber-600/20"
        >
          Book a Table
        </a>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-[11px] font-semibold tracking-wider uppercase">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            <span>Artisanal Historic Brickhouse</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-amber-100 tracking-tight leading-[1.15]">
            Wood-Fired Flavors. <br />
            <span className="italic text-amber-400">Handcrafted Heritage.</span>
          </h1>

          <p className="text-amber-200/80 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-light">
            Heirloom ingredients harvested within 30 miles each morning, slow-cured heritage cuts, and natural cellar wines served beside open white oak embers.
          </p>
        </div>

        {/* Live Table Reservation Widget */}
        <div id="booking" className="mt-8 max-w-2xl mx-auto rounded-2xl bg-[#14120E] border border-amber-900/50 p-6 sm:p-8 shadow-2xl space-y-5">
          <div className="flex items-center justify-between border-b border-amber-950/80 pb-3">
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-amber-100">
                Reserve an Evening Table
              </h3>
              <p className="text-[11px] text-amber-300/70">No booking fees · Instant confirmation</p>
            </div>
            <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full font-semibold">
              ● 4 Tables Left Tonight
            </span>
          </div>

          {bookingConfirmed ? (
            <div className="p-6 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-center space-y-2 animate-in fade-in">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <div className="font-bold text-emerald-200 text-sm">Table Reserved Successfully!</div>
              <p className="text-xs text-emerald-300/90">
                Party of {selectedParty} confirmed for {selectedDate} at {selectedTime}. Confirmation sent to your phone.
              </p>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Party Size */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-amber-300">Party Size</label>
                  <select
                    value={selectedParty}
                    onChange={(e) => setSelectedParty(Number(e.target.value))}
                    className="w-full bg-[#1C1814] text-amber-100 text-xs p-2.5 rounded-lg border border-amber-900/60 focus:border-amber-500 focus:outline-none"
                  >
                    <option value={1}>1 Guest (Chef Counter)</option>
                    <option value={2}>2 Guests (Intimate Table)</option>
                    <option value={4}>4 Guests (Main Dining)</option>
                    <option value={6}>6 Guests (Family Table)</option>
                    <option value={8}>8+ Guests (Private Vault)</option>
                  </select>
                </div>

                {/* Date */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-amber-300">Dining Date</label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-[#1C1814] text-amber-100 text-xs p-2.5 rounded-lg border border-amber-900/60 focus:border-amber-500 focus:outline-none"
                  >
                    <option value="Tonight">Tonight (Friday)</option>
                    <option value="Tomorrow">Tomorrow (Saturday)</option>
                    <option value="Sunday">Sunday Brunch &amp; Dinner</option>
                    <option value="Next Week">Next Tuesday</option>
                  </select>
                </div>

                {/* Time */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-amber-300">Evening Time</label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-[#1C1814] text-amber-100 text-xs p-2.5 rounded-lg border border-amber-900/60 focus:border-amber-500 focus:outline-none"
                  >
                    {times.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-500 active:bg-amber-700 text-black font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-amber-600/30"
              >
                Confirm Reservation for {selectedParty} Guests
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Interactive Seasonal Menu Showcase */}
      <div id="menu" className="py-12 px-4 sm:px-8 bg-[#100E0B] border-t border-amber-950/80">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-amber-100">
              The Autumn Wood-Fired Menu
            </h2>
            <p className="text-amber-300/70 text-xs max-w-md mx-auto">
              Menus change bi-weekly to reflect seasonal farm forage and seafood catches.
            </p>

            <div className="flex justify-center gap-2 pt-2">
              <button
                onClick={() => setMenuTab('hearth')}
                className={`px-4 py-1.5 rounded-lg text-xs font-serif font-bold transition-colors ${
                  menuTab === 'hearth' ? 'bg-amber-600 text-black' : 'bg-[#1C1814] text-amber-300 hover:text-white border border-amber-900/50'
                }`}
              >
                Wood-Fired Hearth
              </button>
              <button
                onClick={() => setMenuTab('tasting')}
                className={`px-4 py-1.5 rounded-lg text-xs font-serif font-bold transition-colors ${
                  menuTab === 'tasting' ? 'bg-amber-600 text-black' : 'bg-[#1C1814] text-amber-300 hover:text-white border border-amber-900/50'
                }`}
              >
                Chef's Tasting ($95)
              </button>
              <button
                onClick={() => setMenuTab('wine')}
                className={`px-4 py-1.5 rounded-lg text-xs font-serif font-bold transition-colors ${
                  menuTab === 'wine' ? 'bg-amber-600 text-black' : 'bg-[#1C1814] text-amber-300 hover:text-white border border-amber-900/50'
                }`}
              >
                Cellar &amp; Cocktails
              </button>
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {menuTab === 'hearth' && (
              <>
                <div className="p-4 rounded-xl bg-[#171410] border border-amber-900/40 space-y-1">
                  <div className="flex items-baseline justify-between font-serif">
                    <span className="font-bold text-amber-100 text-sm">Charred Berkshire Pork Belly</span>
                    <span className="text-amber-400 font-bold">$34</span>
                  </div>
                  <p className="text-xs text-amber-200/60 font-light">
                    Fermented sour plum glaze, charred broccolini, toasted mustard seed.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#171410] border border-amber-900/40 space-y-1">
                  <div className="flex items-baseline justify-between font-serif">
                    <span className="font-bold text-amber-100 text-sm">Dry-Aged Wagyu Ribeye (12oz)</span>
                    <span className="text-amber-400 font-bold">$58</span>
                  </div>
                  <p className="text-xs text-amber-200/60 font-light">
                    45-day tallow age, smoked bone marrow butter, wild chanterelles.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#171410] border border-amber-900/40 space-y-1">
                  <div className="flex items-baseline justify-between font-serif">
                    <span className="font-bold text-amber-100 text-sm">Wood-Roasted Atlantic Cod</span>
                    <span className="text-amber-400 font-bold">$38</span>
                  </div>
                  <p className="text-xs text-amber-200/60 font-light">
                    Brown butter dashi, charred leeks, crispy sunchoke chips.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#171410] border border-amber-900/40 space-y-1">
                  <div className="flex items-baseline justify-between font-serif">
                    <span className="font-bold text-amber-100 text-sm">Handmade Truffle Gnocchi</span>
                    <span className="text-amber-400 font-bold">$32</span>
                  </div>
                  <p className="text-xs text-amber-200/60 font-light">
                    Whipped sheep milk ricotta, autumn black truffle, toasted pine nuts.
                  </p>
                </div>
              </>
            )}

            {menuTab === 'tasting' && (
              <div className="md:col-span-2 p-6 rounded-xl bg-[#171410] border border-amber-900/40 space-y-3">
                <div className="flex items-center justify-between border-b border-amber-950 pb-2">
                  <span className="font-serif font-bold text-base text-amber-100">Chef Julian's 7-Course Nocturne</span>
                  <span className="font-serif text-lg font-black text-amber-400">$95 per guest</span>
                </div>
                <div className="space-y-2 text-xs text-amber-200/80">
                  <div>• Course 1: Osetra Caviar Tartlet with cultured Jersey creme</div>
                  <div>• Course 2: Wood-Fired King Oyster Mushroom with black garlic broth</div>
                  <div>• Course 3: Scallop Crudo with fermented gooseberry &amp; yuzu oil</div>
                  <div>• Course 4: 60-day dry aged beef cheek with heirloom parsnip puree</div>
                  <div>• Course 5: Smoked heritage honeycomb with goat milk gelato</div>
                </div>
              </div>
            )}

            {menuTab === 'wine' && (
              <>
                <div className="p-4 rounded-xl bg-[#171410] border border-amber-900/40 space-y-1">
                  <div className="flex items-baseline justify-between font-serif">
                    <span className="font-bold text-amber-100 text-sm">Domaine Dujac Morey-Saint-Denis (2019)</span>
                    <span className="text-amber-400 font-bold">$185</span>
                  </div>
                  <p className="text-xs text-amber-200/60 font-light">Burgundy, France · Biodynamic Pinot Noir</p>
                </div>

                <div className="p-4 rounded-xl bg-[#171410] border border-amber-900/40 space-y-1">
                  <div className="flex items-baseline justify-between font-serif">
                    <span className="font-bold text-amber-100 text-sm">Smoked Rosemary Rye Old Fashioned</span>
                    <span className="text-amber-400 font-bold">$19</span>
                  </div>
                  <p className="text-xs text-amber-200/60 font-light">Michter's Barrel Strength, scorched orchard herbs</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Verified Neighborhood Reviews */}
      <div className="py-12 px-4 sm:px-8 border-t border-amber-950/80 text-center space-y-4">
        <div className="flex items-center justify-center gap-1 text-amber-400">
          <Star className="w-4 h-4 fill-amber-400" />
          <Star className="w-4 h-4 fill-amber-400" />
          <Star className="w-4 h-4 fill-amber-400" />
          <Star className="w-4 h-4 fill-amber-400" />
          <Star className="w-4 h-4 fill-amber-400" />
        </div>
        <p className="font-serif italic text-sm sm:text-base text-amber-100 max-w-xl mx-auto">
          "The smoked pork belly alone is worth a journey across the city. Booking through their website was instantaneous."
        </p>
        <div className="text-xs text-amber-300 font-medium">Claire Delacroix · Food &amp; Wine Critic</div>
      </div>
    </div>
  );
};
