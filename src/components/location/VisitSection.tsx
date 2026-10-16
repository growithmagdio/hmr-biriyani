import React from 'react';
import { SITE_CONFIG } from '../../content/site';
import { useLanguage } from '../../hooks/useLanguage';
import { MapPin, Clock, Phone, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';

export const VisitSection: React.FC = () => {
  const { isTamil, t } = useLanguage();

  return (
    <section id="visit" className="relative py-24 sm:py-32 bg-teal-darker text-offwhite overflow-hidden border-t border-teal-hmr/30">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-teal-hmr/25 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-saffron-gold/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-teal text-teal-light text-xs font-bold tracking-widest uppercase mb-4">
            <MapPin className="w-3.5 h-3.5 text-saffron-gold" />
            <span>{t.visit.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight mb-4">
            {t.visit.title}
          </h2>

          <p className="text-base sm:text-lg text-offwhite/80 leading-relaxed">
            {t.visit.subtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="glass-panel-card p-6 sm:p-7 rounded-2xl border-teal-hmr/40 space-y-3">
              <div className="flex items-center gap-2.5 text-saffron-gold text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>{t.visit.addressHeading}</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-white">
                {SITE_CONFIG.restaurant.name}
              </h3>
              <p className="text-sm text-offwhite/80 leading-relaxed">
                {SITE_CONFIG.restaurant.address.full}
              </p>
              <p className="text-xs text-teal-light font-medium pt-1">
                📍 {t.visit.landmark}
              </p>
            </div>

            {/* Hours Card */}
            <div className="glass-panel-card p-6 sm:p-7 rounded-2xl border-teal-hmr/40 space-y-3">
              <div className="flex items-center gap-2.5 text-saffron-gold text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>{t.visit.hoursHeading}</span>
              </div>
              <p className="text-lg font-serif font-bold text-white">
                {SITE_CONFIG.restaurant.hours.display}
              </p>
              <div className="flex items-center gap-2 text-xs text-leaf-light font-medium">
                <span className="w-2 h-2 rounded-full bg-leaf-green animate-pulse" />
                <span>{isTamil ? "தற்போது சமையல் தயாராகிறது" : "Open Daily for Dine-In & Takeaway"}</span>
              </div>
            </div>

            {/* Contact & Directions CTA */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={SITE_CONFIG.restaurant.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-sm text-charcoal-900 bg-saffron-gold hover:bg-saffron-light transition-all gold-glow shadow-xl active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>{t.visit.getDirections}</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.restaurant.contact.phoneDial}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-sm text-white glass-panel-teal hover:bg-teal-hmr transition-all border border-teal-light/50 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>{t.visit.callNow}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-teal-hmr/50 aspect-[16/11] bg-charcoal-900 group">
              <iframe
                title="HMR Biriyani Hut R.S. Puram Coimbatore Map Location"
                src={SITE_CONFIG.restaurant.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-105"
              />

              {/* Overlay Badge */}
              <div className="absolute top-4 left-4 glass-panel px-3.5 py-1.5 rounded-xl flex items-center gap-2 text-xs font-semibold text-white pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-teal-light" />
                <span>R.S. Puram, Coimbatore</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
