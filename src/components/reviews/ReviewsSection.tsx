import React from 'react';
import { SITE_CONFIG } from '../../content/site';
import { useLanguage } from '../../hooks/useLanguage';
import { Star, MessageSquareQuote, ExternalLink, ShieldCheck } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const { isTamil, t } = useLanguage();

  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-charcoal-900 border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-saffron-gold/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-saffron-gold/30 text-saffron-gold text-xs font-bold tracking-widest uppercase mb-4">
            <Star className="w-3.5 h-3.5 fill-saffron-gold" />
            <span>{t.reviews.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-offwhite tracking-tight mb-4">
            {t.reviews.title}
          </h2>

          <p className="text-base sm:text-lg text-offwhite-muted leading-relaxed mb-6">
            {t.reviews.subtitle}
          </p>

          {/* Aggregate Rating Banner */}
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl glass-panel-card border-saffron-gold/30 gold-glow">
            <div className="flex items-center gap-1.5 text-saffron-gold">
              <span className="text-3xl font-black">{SITE_CONFIG.restaurant.ratings.stars}</span>
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < 4 ? 'fill-saffron-gold text-saffron-gold' : 'fill-saffron-gold/40 text-saffron-gold/40'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] text-offwhite/60 font-medium">Google Rating</span>
              </div>
            </div>

            <div className="h-8 w-px bg-white/10" />

            <div className="text-left">
              <span className="text-xs font-bold text-offwhite block">8,700+ Reviews</span>
              <span className="text-[10px] text-teal-light">Coimbatore Foodies</span>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SITE_CONFIG.reviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-panel-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 hover:border-saffron-gold/40 hover:-translate-y-1 transition-all duration-300 group shadow-lg"
            >
              <div>
                {/* Header: Stars & Visit Type */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-saffron-gold text-saffron-gold" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium glass-panel px-2.5 py-1 rounded-full text-offwhite/70">
                    {rev.visitType}
                  </span>
                </div>

                {/* Quote Icon */}
                <MessageSquareQuote className="w-8 h-8 text-saffron-gold/30 mb-3 group-hover:text-saffron-gold/60 transition-colors" />

                {/* Review Text */}
                <p className="text-sm text-offwhite-muted leading-relaxed italic mb-6">
                  "{isTamil ? rev.commentTa : rev.commentEn}"
                </p>
              </div>

              {/* Author & Verification Notice */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <div>
                  <h3 className="font-serif font-bold text-offwhite">{rev.author}</h3>
                  <span className="text-[10px] text-offwhite/40">{rev.date}</span>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-teal-light font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{isTamil ? "சரிபார்க்கப்பட்டது" : "Verified Diner"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View on Google Link */}
        <div className="text-center mt-12 space-y-3">
          <a
            href={SITE_CONFIG.restaurant.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-panel hover:glass-panel-card border-saffron-gold/40 text-saffron-light text-xs sm:text-sm font-bold transition shadow-lg"
          >
            <span>{t.reviews.viewGoogleReviews}</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <p className="text-[11px] text-offwhite/40 italic">
            {t.reviews.unverifiedNotice}
          </p>
        </div>
      </div>
    </section>
  );
};
