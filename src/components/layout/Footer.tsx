import React from 'react';
import { SITE_CONFIG } from '../../content/site';
import { useLanguage } from '../../hooks/useLanguage';
import { MapPin, Phone, Clock, Heart, ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  const { isTamil, t } = useLanguage();

  return (
    <footer className="relative bg-charcoal-950 text-offwhite border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#hero" className="inline-block py-1">
              <img
                src="/logo.png"
                alt="HMR Biriyani Hut Logo"
                className="h-16 sm:h-20 md:h-24 w-auto max-w-[280px] object-contain filter drop-shadow"
              />
            </a>
            <p className="text-xs sm:text-sm text-offwhite-muted max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-2 text-xs text-teal-light font-medium pt-2">
              <span className="w-2 h-2 rounded-full bg-leaf-green" />
              <span>{isTamil ? "ஆர்.எஸ். புரம், கோயம்புத்தூர்" : "R.S. Puram, Coimbatore, Tamil Nadu"}</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-saffron-gold">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-offwhite/70">
              <li>
                <a href="#hero" className="hover:text-teal-light transition">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-teal-light transition">
                  {t.nav.story}
                </a>
              </li>
              <li>
                <a href="#spices" className="hover:text-teal-light transition">
                  {t.nav.spices}
                </a>
              </li>
              <li>
                <a href="#banana-leaf" className="hover:text-teal-light transition">
                  {t.nav.bananaLeaf}
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-teal-light transition">
                  {t.nav.menu}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-teal-light transition">
                  {t.nav.reviews}
                </a>
              </li>
              <li>
                <a href="#bulk" className="hover:text-teal-light transition">
                  {t.nav.bulkOrders}
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-teal-light transition">
                  {t.nav.visit}
                </a>
              </li>
            </ul>
          </div>

          {/* Kitchen Hours & Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-saffron-gold">
              {t.footer.location}
            </h4>
            <div className="space-y-2.5 text-xs text-offwhite/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-light flex-shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.restaurant.address.full}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-saffron-gold flex-shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.restaurant.hours.display}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-leaf-light flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.restaurant.contact.phoneDial}`} className="hover:text-teal-light">
                  {SITE_CONFIG.restaurant.contact.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Development Notice Banner */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-[11px] text-offwhite/50 leading-relaxed flex items-start gap-2">
              <ShieldAlert className="w-3.5 h-3.5 text-saffron-gold flex-shrink-0 mt-0.5" />
              <span>
                {isTamil
                  ? "விலை, தொடர்பு எண்கள் மற்றும் மதிப்புரைகள் சரிபார்க்கப்பட வேண்டிய மாதிரி தகவல்கள்."
                  : "All displayed prices, review quotes and contact numbers are development placeholders subject to owner verification."}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-offwhite/40">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.restaurant.name}. {t.footer.copyright}</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted for Authentic Coimbatore Food Culture</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};
