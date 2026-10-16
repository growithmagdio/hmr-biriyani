import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { SITE_CONFIG } from '../../content/site';
import { Flame, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export const DumProcessSection: React.FC = () => {
  const { t, isTamil } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const steps = SITE_CONFIG.dumStory;

  return (
    <section id="story" className="relative py-24 sm:py-32 bg-charcoal-900 border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-hmr/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-saffron-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-teal-hmr/30 text-teal-light text-xs font-bold tracking-widest uppercase mb-4">
            <Flame className="w-3.5 h-3.5 text-saffron-gold" />
            <span>{t.dumProcess.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-offwhite tracking-tight mb-4">
            {t.dumProcess.title}
          </h2>

          <p className="text-base sm:text-lg text-offwhite-muted leading-relaxed">
            {t.dumProcess.subtitle}
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          {steps.map((item, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-3 px-5 sm:px-7 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 border ${
                  isActive
                    ? 'bg-teal-hmr text-white border-teal-light teal-glow shadow-lg scale-105'
                    : 'glass-panel text-offwhite/70 border-white/10 hover:border-saffron-gold/40 hover:text-offwhite'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    isActive ? 'bg-white/20 text-white font-extrabold' : 'bg-white/5 text-saffron-gold'
                  }`}
                >
                  {item.step}
                </span>
                <span>{isTamil ? item.titleTa : item.titleEn}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Spotlight Feature */}
        <div className="glass-panel-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 border-white/10 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-saffron-gold">
                <Sparkles className="w-4 h-4" />
                <span>
                  {isTamil ? steps[activeStep].subtitleTa : steps[activeStep].subtitleEn}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-offwhite leading-tight">
                {isTamil ? steps[activeStep].titleTa : steps[activeStep].titleEn}
              </h3>

              <p className="text-offwhite-muted text-base sm:text-lg leading-relaxed">
                {isTamil ? steps[activeStep].descriptionTa : steps[activeStep].descriptionEn}
              </p>

              <div className="pt-4 flex flex-wrap gap-4 text-xs text-offwhite/60">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-teal-light" />
                  <span>{isTamil ? "பாரம்பரிய நேரம்" : "Slow-Cooked Mastery"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-leaf-green" />
                  <span>{isTamil ? "100% தூய மசாலா" : "No Artificial Flavoring"}</span>
                </div>
              </div>
            </div>

            {/* Right: Stage Photography */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 shadow-2xl group">
                <img
                  src={steps[activeStep].image}
                  alt={isTamil ? steps[activeStep].titleTa : steps[activeStep].titleEn}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-medium text-offwhite/90">
                  <span className="glass-panel px-3 py-1 rounded-md">
                    {steps[activeStep].step} · {isTamil ? steps[activeStep].subtitleTa : steps[activeStep].subtitleEn}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer / Note */}
        <p className="text-center text-xs text-offwhite/40 mt-8 italic">
          {t.dumProcess.disclaimer}
        </p>
      </div>
    </section>
  );
};
