import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { SITE_CONFIG } from '../../content/site';
import { createWhatsAppUrl } from '../../lib/whatsapp';
import { Flame, Phone, Calendar, Sparkles } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const { isTamil, t } = useLanguage();
  const whatsappUrl = createWhatsAppUrl(
    "Hi HMR Biriyani Hut! I would like to place an order for hot dum biryani now."
  );

  return (
    <section className="relative py-24 sm:py-32 bg-charcoal-950 border-t border-white/5 overflow-hidden">
      {/* Background Lighting & Sealed Handi Vignette */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <img
          src="/images/hero-handi.webp"
          alt="HMR Biriyani Hut handi background"
          className="w-full h-full object-cover object-center filter blur-sm brightness-75 scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/90 to-charcoal-950" />
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-16 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-saffron-gold/40 text-saffron-gold text-xs font-bold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isTamil ? "சுடச்சுட பிரியாணி தயார்" : "FRESH DUM READY"}</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-offwhite tracking-tight leading-[1.1]">
          {isTamil ? (
            <>
              சுவையான தம் பிரியாணி சாப்பிட <span className="text-gold-gradient">தயாரா?</span>
            </>
          ) : (
            <>
              Hungry for Authentic <span className="text-gold-gradient">Dum Biryani?</span>
            </>
          )}
        </h2>

        <p className="text-base sm:text-xl text-offwhite-muted max-w-2xl mx-auto leading-relaxed">
          {t.cta.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg text-white bg-teal-hmr hover:bg-teal-light transition-all duration-300 teal-glow shadow-2xl active:scale-95"
          >
            <Flame className="w-5 h-5 text-saffron-gold" />
            <span>{t.cta.orderWhatsApp}</span>
          </a>

          <a
            href={`tel:${SITE_CONFIG.restaurant.contact.phoneDial}`}
            className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg text-offwhite glass-panel hover:glass-panel-card hover:border-saffron-gold/50 transition-all duration-300 shadow-xl active:scale-95"
          >
            <Phone className="w-5 h-5 text-saffron-light" />
            <span>{isTamil ? "உணவகத்தை அழைக்க" : "Call to Order"}</span>
          </a>

          <a
            href="#bulk"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-sm text-offwhite/80 hover:text-white transition"
          >
            <Calendar className="w-4 h-4 text-teal-light" />
            <span>{t.cta.bulkBooking}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
