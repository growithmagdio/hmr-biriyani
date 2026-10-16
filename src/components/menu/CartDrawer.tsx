import React from 'react';
import { useCart } from '../../hooks/useCart';
import { useLanguage } from '../../hooks/useLanguage';
import { formatINR } from '../../lib/pricing';
import { formatCartOrderMessage, createWhatsAppUrl } from '../../lib/whatsapp';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, AlertCircle } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const { cart, isOpen, closeCart, updateQuantity, removeItem, clearCart, subtotal, totalItems } = useCart();
  const { isTamil, t } = useLanguage();

  if (!isOpen) return null;

  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;
    const message = formatCartOrderMessage(cart, subtotal);
    const url = createWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-charcoal-900 border-l border-white/10 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-teal-light" />
              <h2 className="font-serif font-bold text-xl text-offwhite">
                {t.cart.title}
              </h2>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-teal-hmr/30 text-teal-light font-bold">
                {totalItems} {t.cart.itemsCount}
              </span>
            </div>

            <button
              onClick={closeCart}
              className="w-9 h-9 rounded-full flex items-center justify-center glass-panel hover:bg-white/10 text-offwhite transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-3">
                <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-offwhite/30 mb-2">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-lg text-offwhite">
                  {t.cart.emptyTitle}
                </h3>
                <p className="text-xs text-offwhite-muted max-w-xs leading-relaxed">
                  {t.cart.emptySubtitle}
                </p>
                <button
                  onClick={closeCart}
                  className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold bg-teal-hmr text-white hover:bg-teal-light transition"
                >
                  {t.hero.viewMenu}
                </button>
              </div>
            ) : (
              cart.map((ci) => (
                <div
                  key={ci.item.id}
                  className="glass-panel-card p-3.5 rounded-xl border border-white/5 flex gap-3.5 items-center justify-between"
                >
                  <img
                    src={ci.item.image}
                    alt={ci.item.nameEn}
                    className="w-16 h-16 rounded-lg object-cover bg-charcoal-800 flex-shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-bold text-sm text-offwhite truncate">
                      {isTamil ? ci.item.nameTa : ci.item.nameEn}
                    </h4>
                    <span className="text-xs font-bold text-saffron-gold">
                      {formatINR(ci.item.price * ci.quantity)}
                    </span>
                    <span className="text-[10px] text-offwhite/40 ml-2">
                      ({formatINR(ci.item.price)} each)
                    </span>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-1.5">
                      <button
                        onClick={() => updateQuantity(ci.item.id, -1)}
                        className="w-5 h-5 rounded flex items-center justify-center bg-white/10 hover:bg-white/20 text-offwhite text-xs"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-offwhite w-4 text-center">
                        {ci.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(ci.item.id, 1)}
                        className="w-5 h-5 rounded flex items-center justify-center bg-white/10 hover:bg-white/20 text-offwhite text-xs"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(ci.item.id)}
                    className="text-offwhite/40 hover:text-red-400 p-2 transition"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & WhatsApp Checkout */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-charcoal-950/80 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-offwhite/80">
                  {t.cart.subtotal}
                </span>
                <span className="text-2xl font-black text-saffron-gold">
                  {formatINR(subtotal)}
                </span>
              </div>

              {/* Confirmation Notice */}
              <div className="flex items-start gap-2 p-3 rounded-lg bg-teal-hmr/10 border border-teal-hmr/20 text-[11px] text-teal-light leading-snug">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{t.cart.confirmationNote}</span>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleCheckoutWhatsApp}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-teal-hmr hover:bg-teal-light transition-all teal-glow shadow-xl active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.cart.orderViaWhatsApp}</span>
                </button>

                <button
                  onClick={clearCart}
                  className="w-full py-2 text-xs font-semibold text-offwhite/50 hover:text-red-400 transition"
                >
                  {t.cart.clearCart}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
