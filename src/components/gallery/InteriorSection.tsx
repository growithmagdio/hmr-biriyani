import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Users, Heart, Coffee, ShieldCheck } from 'lucide-react';

export const InteriorSection: React.FC = () => {
  const { isTamil } = useLanguage();

  return (
    <section id="interior" className="relative py-24 sm:py-32 bg-charcoal-950 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Atmospheric Photography with Parallax Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[16/11] border border-white/10 shadow-2xl group">
              <img
                src="/images/interior-family.webp"
                alt="Inside HMR Biriyani Hut family dining hall"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-black/30 pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <span className="glass-panel px-3.5 py-1.5 rounded-xl text-xs font-bold text-teal-light border-teal-hmr/30">
                  {isTamil ? "ஆர்.எஸ். புரம் குடும்ப அரங்கம்" : "R.S. Puram Family Hall"}
                </span>
                <span className="text-xs text-saffron-gold font-semibold glass-panel px-3 py-1 rounded-lg">
                  {isTamil ? "குளிர்சாதன வசதி" : "Air-Conditioned"}
                </span>
              </div>
            </div>

            {/* Decorative Gold Rim Accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-3xl border border-saffron-gold/30 -z-10 hidden sm:block" />
          </div>

          {/* Right: Family Dining Heritage Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-teal-hmr/30 text-teal-light text-xs font-bold tracking-widest uppercase">
              <Users className="w-3.5 h-3.5 text-saffron-gold" />
              <span>{isTamil ? "உணவக சூழல்" : "INSIDE HMR"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-offwhite tracking-tight leading-tight">
              {isTamil ? (
                <>
                  குடும்பத்துடன் மகிழ <span className="text-gold-gradient">பாரம்பரிய உபசரிப்பு</span>
                </>
              ) : (
                <>
                  A Warm Tradition of <span className="text-gold-gradient">Family Dining</span>
                </>
              )}
            </h2>

            <p className="text-base sm:text-lg text-offwhite-muted leading-relaxed">
              {isTamil
                ? "ஆர்.எஸ். புரத்தில் அமைந்த எங்களின் குளிர்சாதன குடும்ப அரங்கில், பளபளக்கும் பாரம்பரிய எவர்சில்வர் டம்ப்ளர், நறுமண பசுமையான வாழை இலை மற்றும் அன்பான உபசரிப்புடன் சுடச்சுட தம் பிரியாணி பரிமாறப்படுகிறது."
                : "Step into our bustling R.S. Puram dining space where Coimbatore families gather for authentic Sunday lunches and evening feasts. Enjoy comfortable air-conditioned seating, gleaming stainless steel tumblers, and freshly unfurled banana leaves served with warm hospitality."}
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="glass-panel p-4 rounded-xl border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-saffron-gold text-xs font-bold uppercase tracking-wider">
                  <Heart className="w-4 h-4 text-saffron-gold" />
                  <span>{isTamil ? "குடும்ப அரங்கம்" : "Family Comfort"}</span>
                </div>
                <p className="text-xs text-offwhite-muted">
                  {isTamil
                    ? "அனைத்து தலைமுறைகளும் ஒன்றிணைந்து உண்ணும் அமைதியான சூழல்."
                    : "Spacious AC dining booths tailored for family feasts and celebrations."}
                </p>
              </div>

              <div className="glass-panel p-4 rounded-xl border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-teal-light text-xs font-bold uppercase tracking-wider">
                  <Coffee className="w-4 h-4 text-teal-light" />
                  <span>{isTamil ? "அன்பான சேவை" : "Warm Hospitality"}</span>
                </div>
                <p className="text-xs text-offwhite-muted">
                  {isTamil
                    ? "விரைவான பரிமாறல் மற்றும் உண்மையான உபசரிப்பு."
                    : "Attentive table service with unlimited hot salna and fresh raita refills."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
