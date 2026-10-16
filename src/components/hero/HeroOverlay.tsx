import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { SITE_CONFIG } from '../../content/site';
import { createWhatsAppUrl } from '../../lib/whatsapp';
import { Sparkles, Utensils, Star, Flame, Eye, Lock } from 'lucide-react';

interface HeroOverlayProps {
  isOpen: boolean;
  onToggleOpen: () => void;
}

export const HeroOverlay: React.FC<HeroOverlayProps> = ({ isOpen, onToggleOpen }) => {
  const { t, isTamil } = useLanguage();
  const whatsappUrl = createWhatsAppUrl(
    "Hi HMR Biriyani Hut! I would like to place an order for Coimbatore's favourite dum biryani."
  );

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 sm:p-8 md:p-12 lg:p-16 z-10 max-w-7xl mx-auto">
      {/* Top Spacing / Trust Badge & 3D Pot Toggle */}
      <div className="pt-20 sm:pt-24 flex items-center justify-between gap-3">
        {/* Trust Badge */}
        <div className="pointer-events-auto inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full glass-panel border-saffron-gold/40 shadow-lg shadow-black/40 text-xs sm:text-sm font-medium text-saffron-light">
          <div className="flex items-center gap-1 text-saffron-gold">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-saffron-gold text-saffron-gold" />
            <span className="font-bold">4.1</span>
          </div>
          <span className="text-offwhite/40">·</span>
          <span className="text-offwhite/90">
            {isTamil ? "8,700+ மதிப்புரைகள்" : "8,700+ Reviews"}
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-leaf-green animate-pulse" />
        </div>

        {/* 3D Handi Interaction Toggle */}
        <button
          onClick={onToggleOpen}
          className="pointer-events-auto group inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full glass-panel hover:glass-panel-teal transition-all duration-300 text-xs sm:text-sm font-semibold border-teal-hmr/50 hover:border-teal-light text-offwhite shadow-lg active:scale-95"
          title="Click to open or close the 3D dum pot"
        >
          {isOpen ? (
            <>
              <Lock className="w-4 h-4 text-teal-light group-hover:rotate-12 transition-transform" />
              <span>{t.hero.handiToggleClose}</span>
            </>
          ) : (
            <>
              <Eye className="w-4 h-4 text-saffron-gold group-hover:scale-110 transition-transform" />
              <span>{t.hero.handiToggleOpen}</span>
            </>
          )}
          <span className="px-1.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-white/10 text-offwhite/80">
            3D
          </span>
        </button>
      </div>

      {/* Main Hero Typography & CTAs (Positioned on Left Column) */}
      <div className="max-w-xl lg:max-w-2xl py-4 sm:py-6">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-teal-light mb-2.5 sm:mb-3">
          <Sparkles className="w-4 h-4 text-saffron-gold" />
          <span>{SITE_CONFIG.restaurant.name.toUpperCase()} · {SITE_CONFIG.restaurant.address.area.toUpperCase()}</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-[1.1] text-offwhite drop-shadow-lg mb-3 sm:mb-4">
          {isTamil ? (
            <>
              கோவையின் விருப்பமான <span className="text-gold-gradient">தம் பிரியாணி</span>
            </>
          ) : (
            <>
              Coimbatore's Favourite <span className="text-gold-gradient">Dum Biryani</span>
            </>
          )}
        </h1>

        {/* Supporting Text */}
        <p className="text-sm sm:text-base md:text-lg text-offwhite/90 font-normal leading-relaxed mb-5 sm:mb-7 max-w-lg">
          {isTamil
            ? "சீல் வைக்கப்பட்ட செம்புப் பாத்திரங்களில் பக்குவமாக சமைக்கப்பட்ட பிரியாணி. பசுமையான வாழை இலையில் மணமணக்கும் விருந்து."
            : "Slow-cooked. Sealed. Served on banana leaf."}
        </p>

        {/* CTAs (Completely visible within initial viewport) */}
        <div className="pointer-events-auto flex flex-wrap items-center gap-3 sm:gap-4">
          {/* Primary CTA - Order on WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm md:text-base text-white bg-teal-hmr hover:bg-teal-light transition-all duration-300 teal-glow shadow-xl active:scale-95"
          >
            <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-saffron-gold" />
            <span>{t.hero.orderWhatsApp}</span>
          </a>

          {/* Secondary CTA - View Menu */}
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm md:text-base text-offwhite glass-panel hover:glass-panel-card hover:border-saffron-gold/50 transition-all duration-300 shadow-lg active:scale-95"
          >
            <Utensils className="w-4 h-4 sm:w-5 sm:h-5 text-saffron-light" />
            <span>{t.hero.viewMenu}</span>
          </a>
        </div>
      </div>

      {/* Bottom Status & Drag Hint */}
      <div className="flex flex-wrap items-center justify-between text-xs text-offwhite/60 pt-3 border-t border-white/5">
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${
              isOpen ? 'bg-saffron-gold animate-ping' : 'bg-teal-light'
            }`}
          />
          <span className="font-semibold text-offwhite/80 text-[11px] sm:text-xs">
            {isOpen ? t.hero.handiStatusOpen : t.hero.handiStatusClosed}
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-offwhite/50 text-xs">
          <span>{t.hero.dragToRotate}</span>
        </div>
      </div>
    </div>
  );
};
