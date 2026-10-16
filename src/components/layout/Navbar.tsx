import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../../content/site';
import { useLanguage } from '../../hooks/useLanguage';
import { useCart } from '../../hooks/useCart';
import { ShoppingBag, Globe, Menu as MenuIcon, X, Flame, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, isTamil, t } = useLanguage();
  const { totalItems, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: t.nav.home },
    { href: '#story', label: t.nav.story },
    { href: '#spices', label: t.nav.spices },
    { href: '#banana-leaf', label: t.nav.bananaLeaf },
    { href: '#menu', label: t.nav.menu },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#interior', label: isTamil ? "அரங்கம்" : "Inside HMR" },
    { href: '#bulk', label: t.nav.bulkOrders },
    { href: '#visit', label: t.nav.visit },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-panel bg-charcoal-900/90 py-3 shadow-xl border-b border-white/10'
            : 'bg-gradient-to-b from-charcoal-900/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Official HMR Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group py-1">
            <img
              src="/logo.png"
              alt="HMR Biriyani Hut Logo"
              className="h-12 sm:h-14 md:h-16 w-auto max-w-[220px] object-contain filter drop-shadow transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold text-offwhite/80 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons: Language Switch + Cart Button + Mobile Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Language Toggle */}
            <div className="flex items-center glass-panel rounded-full p-1 border border-white/10 text-xs font-bold">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  language === 'en'
                    ? 'bg-teal-hmr text-white shadow'
                    : 'text-offwhite/60 hover:text-offwhite'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ta')}
                className={`px-2.5 py-1 rounded-full font-tamil transition-all ${
                  language === 'ta'
                    ? 'bg-teal-hmr text-white shadow'
                    : 'text-offwhite/60 hover:text-offwhite'
                }`}
                title="தமிழுக்கு மாற்றுக"
              >
                தமிழ்
              </button>
            </div>

            {/* Cart Trigger */}
            <button
              onClick={openCart}
              className="relative p-2.5 rounded-xl glass-panel hover:glass-panel-card border-white/15 text-offwhite hover:text-saffron-gold transition active:scale-95 shadow"
              title="View order bag"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-saffron-gold text-charcoal-900 text-[11px] font-black flex items-center justify-center shadow-lg animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Quick Call Button (Desktop) */}
            <a
              href={`tel:${SITE_CONFIG.restaurant.contact.phoneDial}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold glass-panel hover:bg-white/10 text-offwhite border-white/15 transition"
            >
              <Phone className="w-3.5 h-3.5 text-teal-light" />
              <span>Call</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl glass-panel text-offwhite hover:text-teal-light transition"
              aria-label="Open navigation menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-charcoal-900 border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <img
                  src="/logo.png"
                  alt="HMR Biriyani Hut Logo"
                  className="h-10 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full glass-panel text-offwhite hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-semibold text-offwhite hover:bg-teal-hmr/20 hover:text-teal-light transition"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white bg-teal-hmr"
              >
                <Flame className="w-4 h-4 text-saffron-gold" />
                <span>{t.hero.viewMenu}</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.restaurant.contact.phoneDial}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-offwhite glass-panel"
              >
                <Phone className="w-4 h-4 text-teal-light" />
                <span>{t.visit.callNow}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
