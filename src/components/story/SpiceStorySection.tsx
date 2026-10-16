import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { SITE_CONFIG } from '../../content/site';
import { Sparkles, MapPin, Compass } from 'lucide-react';

export const SpiceStorySection: React.FC = () => {
  const { t, isTamil } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="spices" className="relative py-24 sm:py-32 bg-charcoal-950 overflow-hidden">
      {/* Background with Spices Flatlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          src="/images/spices-flatlay.webp"
          alt="HMR Biriyani Hut whole spices flatlay"
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 via-charcoal-950/90 to-charcoal-900" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-saffron-gold/30 text-saffron-gold text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.spices.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-offwhite tracking-tight mb-4">
            {t.spices.title}
          </h2>

          <p className="text-base sm:text-lg text-offwhite-muted leading-relaxed">
            {t.spices.subtitle}
          </p>
        </div>

        {/* 6 Spice Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SITE_CONFIG.spices.map((spice, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={spice.nameEn}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`glass-panel-card rounded-2xl p-6 sm:p-8 transition-all duration-300 relative group cursor-default border ${
                  isHovered ? 'border-saffron-gold/60 gold-glow -translate-y-1.5' : 'border-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold text-saffron-gold tracking-widest uppercase">
                    0{idx + 1}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-teal-light glass-panel px-2.5 py-1 rounded-full">
                    <MapPin className="w-3 h-3 text-leaf-green" />
                    <span>{spice.origin}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-offwhite mb-2 group-hover:text-gold-gradient transition-colors">
                  {isTamil ? spice.nameTa : spice.nameEn}
                </h3>

                <p className="text-sm text-offwhite-muted leading-relaxed">
                  {isTamil ? spice.notesTa : spice.notesEn}
                </p>

                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-offwhite/50">
                  <span className="flex items-center gap-1">
                    <Compass className="w-3 h-3 text-saffron-gold/70" />
                    <span>{isTamil ? "100% இயற்கை வாசனை" : "Aromatic Essential Oils"}</span>
                  </span>
                  <span className="text-teal-light font-semibold">
                    {isTamil ? "பாரம்பரிய சேர்க்கை" : "Master Blend"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
