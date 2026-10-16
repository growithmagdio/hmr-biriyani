import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Leaf, Info, Sparkles, CheckCircle2 } from 'lucide-react';

export const BananaLeafSection: React.FC = () => {
  const { t, isTamil } = useLanguage();
  const [activeItem, setActiveItem] = useState<number>(0);

  const feastItems = [
    {
      id: 'biryani',
      titleEn: "Slow-Cooked Dum Biryani",
      titleTa: "சூடான தம் பிரியாணி",
      descEn: "Steaming seeraga samba rice cooked in sealed handi, rich with ghee and tender meat juices.",
      descTa: "செம்புப் பாத்திரத்தில் வெந்த நறுமண சீரக சம்பா பிரியாணி சாதம்.",
      tag: "Centerpiece",
      color: "border-saffron-gold text-saffron-gold",
      coords: "top-[48%] left-[45%]"
    },
    {
      id: 'egg',
      titleEn: "Masala Pan-Roasted Boiled Egg",
      titleTa: "மசாலா அவித்த முட்டை",
      descEn: "Hard-boiled egg pan-roasted in red biryani masala, scoring an irresistible savory outer crust.",
      descTa: "பிரியாணி மசாலா தடவி தவாவில் வறுத்தெடுத்த சுவையான அவித்த முட்டை.",
      tag: "Classic Accompaniment",
      color: "border-amber-400 text-amber-300",
      coords: "top-[68%] left-[72%]"
    },
    {
      id: 'chicken65',
      titleEn: "Crisp Red Chicken 65",
      titleTa: "மொறுமொறு சிக்கன் 65",
      descEn: "Fiery boneless chicken bites tossed with fresh curry leaves, green chillies, and garlic.",
      descTa: "கறிவேப்பிலை, பச்சை மிளகாய் மணத்துடன் கூடிய பொரித்த சிக்கன் 65.",
      tag: "Signature Starter",
      color: "border-red-500 text-red-400",
      coords: "top-[25%] left-[25%]"
    },
    {
      id: 'raita',
      titleEn: "Chilled Onion Raita",
      titleTa: "வெங்காய தயிர் பச்சடி",
      descEn: "Thick creamy curd whisked with crunchy shallots, green chillies, rock salt, and coriander.",
      descTa: "சின்ன வெங்காயம், பச்சை மிளகாய் மற்றும் கொத்தமல்லி கலந்த குளிர்ந்த தயிர் பச்சடி.",
      tag: "Cooling Balance",
      color: "border-teal-light text-teal-light",
      coords: "top-[32%] left-[78%]"
    },
    {
      id: 'dalcha',
      titleEn: "Brinjal Dalcha Gravy",
      titleTa: "கத்திரிக்காய் தால்ச்சா",
      descEn: "Traditional tangy tamarind-lentil curry simmered with tender eggplants and fragrant spices.",
      descTa: "பருப்பு, புளி மற்றும் கத்திரிக்காய் சேர்த்து காய்ச்சப்பட்ட பாரம்பரிய செட்டிநாட்டு குழம்பு.",
      tag: "Essential Gravy",
      color: "border-leaf-green text-leaf-light",
      coords: "top-[18%] left-[55%]"
    }
  ];

  return (
    <section id="banana-leaf" className="relative py-24 sm:py-32 bg-charcoal-900 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-leaf-green/40 text-leaf-light text-xs font-bold tracking-widest uppercase mb-4">
            <Leaf className="w-3.5 h-3.5 text-leaf-green" />
            <span>{t.bananaLeaf.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-offwhite tracking-tight mb-4">
            {t.bananaLeaf.title}
          </h2>

          <p className="text-base sm:text-lg text-offwhite-muted leading-relaxed">
            {t.bananaLeaf.subtitle}
          </p>
        </div>

        {/* Banana Leaf Presentation Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Interactive Banana Leaf Feast Plate */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-leaf-green/30 group">
              {/* Plated Banana Leaf Image */}
              <img
                src="/images/menu-chicken-biryani.webp"
                alt="HMR Biriyani served on fresh banana leaf"
                className="w-full aspect-[4/3] sm:aspect-square md:aspect-[4/3] object-cover object-center filter brightness-95 transform group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
                width="800"
                height="600"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent pointer-events-none" />

              {/* Interactive Hotspot Indicators */}
              {feastItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(idx)}
                  className={`absolute ${item.coords} -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl z-20 ${
                    activeItem === idx
                      ? 'bg-saffron-gold text-charcoal-900 scale-125 ring-4 ring-saffron-gold/40 animate-bounce'
                      : 'glass-panel text-white hover:scale-110 border-white/40'
                  }`}
                  title={item.titleEn}
                >
                  <span className="text-xs font-black">{idx + 1}</span>
                </button>
              ))}

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-semibold text-offwhite/90">
                <span className="glass-panel px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-leaf-light border-leaf-green/30">
                  <Leaf className="w-3.5 h-3.5" />
                  <span>{isTamil ? "வாழை இலை பரிமாறல்" : "Authentic Banana Leaf Tradition"}</span>
                </span>
                <span className="glass-panel px-3 py-1.5 rounded-lg text-offwhite/70 hidden sm:inline-block">
                  {isTamil ? "எண்ணை அழுத்தி பார்க்கவும்" : "Click numbered hotspots to explore"}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Accompaniment Explorer Cards */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            {feastItems.map((item, idx) => {
              const isActive = activeItem === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(idx)}
                  className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? 'glass-panel-card border-saffron-gold/60 gold-glow bg-white/5 translate-x-2'
                      : 'glass-panel border-white/5 hover:border-white/20 opacity-75 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          isActive
                            ? 'bg-saffron-gold text-charcoal-900'
                            : 'bg-white/10 text-offwhite/70'
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <h3 className="font-serif font-bold text-base sm:text-lg text-offwhite">
                        {isTamil ? item.titleTa : item.titleEn}
                      </h3>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded glass-panel text-saffron-light">
                      {item.tag}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-offwhite-muted pl-8 leading-relaxed">
                    {isTamil ? item.descTa : item.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
