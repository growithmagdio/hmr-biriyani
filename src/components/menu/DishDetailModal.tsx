import React from 'react';
import { MenuItem } from '../../content/site';
import { useLanguage } from '../../hooks/useLanguage';
import { useCart } from '../../hooks/useCart';
import { formatINR } from '../../lib/pricing';
import { X, Flame, Plus, Minus, Star, ShieldCheck } from 'lucide-react';

interface DishDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ item, onClose }) => {
  const { isTamil, t } = useLanguage();
  const { addItem, cart, updateQuantity } = useCart();

  if (!item) return null;

  const cartItem = cart.find((ci) => ci.item.id === item.id);
  const quantity = cartItem?.quantity || 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-xl glass-panel-card rounded-3xl overflow-hidden border border-white/15 shadow-2xl animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full flex items-center justify-center glass-panel hover:bg-white/20 text-offwhite transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative aspect-[16/10] w-full bg-charcoal-800">
          <img
            src={item.image}
            alt={item.nameEn}
            className="w-full h-full object-cover object-center filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-black/40" />

          {/* Tag Badges */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className={`w-6 h-6 rounded flex items-center justify-center bg-charcoal-900/90 border ${
                  item.isVegetarian ? 'border-green-500' : 'border-red-500'
                }`}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    item.isVegetarian ? 'bg-green-500' : 'bg-red-500'
                  }`}
                />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-offwhite glass-panel px-3 py-1 rounded-full">
                {item.category.toUpperCase()}
              </span>
            </div>

            {item.isBestseller && (
              <span className="inline-flex items-center gap-1.5 text-xs font-black px-3 py-1 rounded-full bg-saffron-gold text-charcoal-900 shadow">
                <Star className="w-3.5 h-3.5 fill-charcoal-900" />
                <span>{t.menu.bestseller}</span>
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-offwhite">
                {isTamil ? item.nameTa : item.nameEn}
              </h2>
              <p className="text-xs text-saffron-gold mt-1 font-medium">
                {isTamil ? item.portionTa : item.portionEn}
              </p>
            </div>

            <div className="text-right">
              <span className="text-2xl font-black text-saffron-gold">
                {formatINR(item.price)}
              </span>
              <span className="text-[10px] text-offwhite/40 block">
                {isTamil ? "*மாதிரி விலை" : "*Reference price"}
              </span>
            </div>
          </div>

          <p className="text-sm text-offwhite-muted leading-relaxed">
            {isTamil ? item.descriptionTa : item.descriptionEn}
          </p>

          <div className="flex items-center gap-6 py-3 border-y border-white/5 text-xs text-offwhite/70">
            <div className="flex items-center gap-1.5">
              <span className="text-offwhite/50">{t.menu.spicy}:</span>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Flame
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < item.spiceLevel
                        ? 'text-red-500 fill-red-500'
                        : 'text-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-leaf-light">
              <ShieldCheck className="w-4 h-4" />
              <span>{isTamil ? "பாரம்பரிய தயாரிப்பு" : "Authentic Kitchen Recipe"}</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-2">
            {quantity > 0 ? (
              <div className="flex items-center gap-3 glass-panel px-4 py-2 rounded-xl border-white/20">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="w-7 h-7 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 text-offwhite"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-base font-bold text-offwhite w-6 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-7 h-7 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 text-offwhite"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => addItem(item)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-teal-hmr hover:bg-teal-light transition-all teal-glow active:scale-95 shadow-xl"
              >
                <Plus className="w-4 h-4" />
                <span>{t.menu.addToCart}</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold glass-panel hover:bg-white/10 text-offwhite/70"
            >
              {isTamil ? "மூடுக" : "Close"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
