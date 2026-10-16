import React, { useState, useMemo } from 'react';
import { SITE_CONFIG, MenuItem } from '../../content/site';
import { useLanguage } from '../../hooks/useLanguage';
import { MenuCard } from './MenuCard';
import { DishDetailModal } from './DishDetailModal';
import { Utensils, Search, Leaf, Sparkles } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const { isTamil, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegOnly, setVegOnly] = useState<boolean>(false);
  const [activeModalItem, setActiveModalItem] = useState<MenuItem | null>(null);

  // Filter items based on category, search, and veg-only toggle
  const filteredItems = useMemo(() => {
    return SITE_CONFIG.menuItems.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Veg-only filter
      if (vegOnly && !item.isVegetarian) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim().length > 0) {
        const q = searchQuery.toLowerCase();
        const matchesNameEn = item.nameEn.toLowerCase().includes(q);
        const matchesNameTa = item.nameTa.toLowerCase().includes(q);
        const matchesDesc = item.descriptionEn.toLowerCase().includes(q);
        if (!matchesNameEn && !matchesNameTa && !matchesDesc) return false;
      }
      return true;
    });
  }, [selectedCategory, vegOnly, searchQuery]);

  return (
    <section id="menu" className="relative py-24 sm:py-32 bg-charcoal-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-teal-hmr/30 text-teal-light text-xs font-bold tracking-widest uppercase mb-4">
            <Utensils className="w-3.5 h-3.5 text-saffron-gold" />
            <span>{t.menu.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-offwhite tracking-tight mb-4">
            {t.menu.title}
          </h2>

          <p className="text-base sm:text-lg text-offwhite-muted leading-relaxed">
            {t.menu.subtitle}
          </p>
        </div>

        {/* Filter Controls Row */}
        <div className="space-y-6 mb-12">
          {/* Top row: Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
            {SITE_CONFIG.categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 border ${
                    isSelected
                      ? 'bg-teal-hmr text-white border-teal-light teal-glow shadow-lg'
                      : 'glass-panel text-offwhite/70 border-white/5 hover:border-white/20 hover:text-offwhite'
                  }`}
                >
                  {isTamil ? cat.nameTa : cat.nameEn}
                </button>
              );
            })}
          </div>

          {/* Bottom row: Search Bar & Veg-Only Filter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-offwhite/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t.menu.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-panel text-xs text-offwhite placeholder:text-offwhite/40 border-white/10 focus:outline-none focus:border-teal-light transition"
              />
            </div>

            {/* Veg Only Toggle Switch */}
            <button
              onClick={() => setVegOnly((prev) => !prev)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                vegOnly
                  ? 'bg-leaf-green/20 border-leaf-green text-leaf-light shadow-md'
                  : 'glass-panel border-white/10 text-offwhite/60 hover:text-offwhite'
              }`}
            >
              <div
                className={`w-4 h-4 rounded border flex items-center justify-center ${
                  vegOnly ? 'border-leaf-green bg-leaf-green' : 'border-white/40'
                }`}
              >
                {vegOnly && <Leaf className="w-2.5 h-2.5 text-white" />}
              </div>
              <span>{t.menu.vegOnly}</span>
            </button>
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <p className="text-offwhite/50 text-base">
              {isTamil ? "உணவுகள் எதுவும் கிடைக்கவில்லை" : "No dishes found matching your criteria"}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setVegOnly(false);
              }}
              className="px-5 py-2 rounded-xl text-xs font-bold glass-panel hover:bg-white/10 text-teal-light"
            >
              {isTamil ? "அனைத்து உணவுகளையும் காட்டு" : "Reset Filters"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                onOpenDetail={(it) => setActiveModalItem(it)}
              />
            ))}
          </div>
        )}

        {/* Development Pricing Notice */}
        <p className="text-center text-xs text-offwhite/40 mt-12 italic">
          {t.menu.samplePriceNotice}
        </p>
      </div>

      {/* Dish Detail Modal */}
      <DishDetailModal
        item={activeModalItem}
        onClose={() => setActiveModalItem(null)}
      />
    </section>
  );
};
