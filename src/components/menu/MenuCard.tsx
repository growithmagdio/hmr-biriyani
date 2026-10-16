import React, { useState } from 'react';
import { MenuItem } from '../../content/site';
import { useLanguage } from '../../hooks/useLanguage';
import { useCart } from '../../hooks/useCart';
import { formatINR } from '../../lib/pricing';
import { Flame, Plus, Check, Star } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
  onOpenDetail: (item: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, onOpenDetail }) => {
  const { isTamil, t } = useLanguage();
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setTilt({ x, y });
  };

  const handlePointerLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(item);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <div
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      onClick={() => onOpenDetail(item)}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: 'transform 0.15s ease-out, border-color 0.3s, box-shadow 0.3s',
      }}
      className="glass-panel-card rounded-2xl overflow-hidden cursor-pointer group flex flex-col justify-between border border-white/10 hover:border-saffron-gold/50 hover:shadow-xl hover:shadow-black/50"
    >
      <div>
        {/* Dish Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal-800">
          <img
            src={item.image}
            alt={item.nameEn}
            className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-95"
            loading="lazy"
            width="400"
            height="300"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-transparent to-black/30 pointer-events-none" />

          {/* Badges on Top */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            {/* Veg / Non-Veg Standard Dot */}
            <div
              className={`w-5 h-5 rounded-md flex items-center justify-center bg-charcoal-900/90 border ${
                item.isVegetarian ? 'border-green-500' : 'border-red-500'
              }`}
              title={item.isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  item.isVegetarian ? 'bg-green-500' : 'bg-red-500'
                }`}
              />
            </div>

            {/* Bestseller / Chef's Special Badge */}
            {item.isBestseller && (
              <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-saffron-gold text-charcoal-900 shadow">
                <Star className="w-2.5 h-2.5 fill-charcoal-900" />
                <span>{t.menu.bestseller}</span>
              </span>
            )}
          </div>

          {/* Spice Meter */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1">
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

          {/* Portion Tag */}
          <div className="absolute bottom-3 right-3 text-[11px] font-medium text-offwhite/80 glass-panel px-2 py-0.5 rounded">
            {isTamil ? item.portionTa : item.portionEn}
          </div>
        </div>

        {/* Dish Content */}
        <div className="p-5">
          <h3 className="font-serif font-bold text-lg text-offwhite group-hover:text-gold-gradient transition-colors mb-1.5 line-clamp-1">
            {isTamil ? item.nameTa : item.nameEn}
          </h3>

          <p className="text-xs text-offwhite-muted line-clamp-2 leading-relaxed mb-4">
            {isTamil ? item.descriptionTa : item.descriptionEn}
          </p>
        </div>
      </div>

      {/* Footer Price & Add Button */}
      <div className="p-5 pt-0 border-t border-white/5 flex items-center justify-between">
        <div>
          <div className="text-lg font-black text-saffron-gold tracking-tight">
            {formatINR(item.price)}
          </div>
          <span className="text-[10px] text-offwhite/40 block">
            {isTamil ? "மாதிரி விலை" : "Est. price"}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 active:scale-90 ${
            justAdded
              ? 'bg-leaf-green text-white shadow-lg shadow-leaf-green/30'
              : 'bg-teal-hmr hover:bg-teal-light text-white shadow-md shadow-teal-hmr/20'
          }`}
        >
          {justAdded ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>{t.menu.added}</span>
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5" />
              <span>{t.menu.addToCart}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
