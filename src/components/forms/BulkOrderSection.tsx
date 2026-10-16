import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { formatBulkEnquiryMessage, createWhatsAppUrl } from '../../lib/whatsapp';
import { Users, Calendar, Phone, User, UtensilsCrossed, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const BulkOrderSection: React.FC = () => {
  const { isTamil, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '',
    dishes: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = isTamil ? "பெயர் தேவை" : "Name is required";
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      errs.phone = isTamil ? "சரியான அலைபேசி எண் தேவை" : "Valid phone number required";
    }
    if (!formData.date.trim()) errs.date = isTamil ? "தேதி தேவை" : "Event date required";
    if (!formData.guests.trim()) errs.guests = isTamil ? "விருந்தினர்கள் எண்ணிக்கை தேவை" : "Guest count required";
    if (!formData.dishes.trim()) errs.dishes = isTamil ? "விருப்பமான உணவுகள் தேவை" : "Menu items required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = formatBulkEnquiryMessage({
      name: formData.name,
      phone: formData.phone,
      eventDate: formData.date,
      guestCount: formData.guests,
      dishes: formData.dishes,
      message: formData.message,
    });

    const url = createWhatsAppUrl(message);
    setIsSubmitted(true);

    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setIsSubmitted(false);
    }, 1000);
  };

  return (
    <section id="bulk" className="relative py-24 sm:py-32 bg-charcoal-900 border-t border-white/5 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-hmr/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase of Catering Handis */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-saffron-gold/30 text-saffron-gold text-xs font-bold tracking-widest uppercase">
              <Users className="w-3.5 h-3.5" />
              <span>{t.bulk.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-offwhite tracking-tight leading-tight">
              {t.bulk.title}
            </h2>

            <p className="text-base sm:text-lg text-offwhite-muted leading-relaxed">
              {t.bulk.subtitle}
            </p>

            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/10 shadow-2xl group">
              <img
                src="/images/bulk-order.webp"
                alt="HMR Biriyani Hut bulk handi party orders"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-transparent to-black/30 pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-bold text-offwhite/90">
                <span className="glass-panel px-3 py-1 rounded">
                  {isTamil ? "சூடான சீல் பாண்டங்கள்" : "Sealed Dum Handis Delivered Hot"}
                </span>
                <span className="text-saffron-gold glass-panel px-2.5 py-1 rounded">
                  20 to 500+ Packs
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-card rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-offwhite/80 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-teal-light" />
                      <span>{t.bulk.nameLabel} *</span>
                    </label>
                    <input
                      type="text"
                      placeholder={t.bulk.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl glass-panel text-sm text-offwhite placeholder:text-offwhite/30 border focus:outline-none transition ${
                        errors.name ? 'border-red-500' : 'border-white/10 focus:border-teal-light'
                      }`}
                    />
                    {errors.name && <span className="text-[10px] text-red-400 mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-offwhite/80 mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-teal-light" />
                      <span>{t.bulk.phoneLabel} *</span>
                    </label>
                    <input
                      type="tel"
                      placeholder={t.bulk.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl glass-panel text-sm text-offwhite placeholder:text-offwhite/30 border focus:outline-none transition ${
                        errors.phone ? 'border-red-500' : 'border-white/10 focus:border-teal-light'
                      }`}
                    />
                    {errors.phone && <span className="text-[10px] text-red-400 mt-1 block">{errors.phone}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Event Date */}
                  <div>
                    <label className="block text-xs font-semibold text-offwhite/80 mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-saffron-gold" />
                      <span>{t.bulk.dateLabel} *</span>
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl glass-panel text-sm text-offwhite border focus:outline-none transition ${
                        errors.date ? 'border-red-500' : 'border-white/10 focus:border-teal-light'
                      }`}
                    />
                    {errors.date && <span className="text-[10px] text-red-400 mt-1 block">{errors.date}</span>}
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-xs font-semibold text-offwhite/80 mb-1.5 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-saffron-gold" />
                      <span>{t.bulk.guestsLabel} *</span>
                    </label>
                    <input
                      type="text"
                      placeholder={t.bulk.guestsPlaceholder}
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl glass-panel text-sm text-offwhite placeholder:text-offwhite/30 border focus:outline-none transition ${
                        errors.guests ? 'border-red-500' : 'border-white/10 focus:border-teal-light'
                      }`}
                    />
                    {errors.guests && <span className="text-[10px] text-red-400 mt-1 block">{errors.guests}</span>}
                  </div>
                </div>

                {/* Requested Dishes */}
                <div>
                  <label className="block text-xs font-semibold text-offwhite/80 mb-1.5 flex items-center gap-1.5">
                    <UtensilsCrossed className="w-3.5 h-3.5 text-leaf-light" />
                    <span>{t.bulk.dishesLabel} *</span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder={t.bulk.dishesPlaceholder}
                    value={formData.dishes}
                    onChange={(e) => setFormData({ ...formData, dishes: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl glass-panel text-sm text-offwhite placeholder:text-offwhite/30 border focus:outline-none transition ${
                      errors.dishes ? 'border-red-500' : 'border-white/10 focus:border-teal-light'
                    }`}
                  />
                  {errors.dishes && <span className="text-[10px] text-red-400 mt-1 block">{errors.dishes}</span>}
                </div>

                {/* Special Instructions */}
                <div>
                  <label className="block text-xs font-semibold text-offwhite/80 mb-1.5">
                    {t.bulk.messageLabel}
                  </label>
                  <textarea
                    rows={2}
                    placeholder={t.bulk.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-panel text-sm text-offwhite placeholder:text-offwhite/30 border border-white/10 focus:outline-none focus:border-teal-light transition"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl font-bold text-sm sm:text-base text-white bg-teal-hmr hover:bg-teal-light transition-all teal-glow shadow-xl active:scale-95 disabled:opacity-50"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-saffron-gold" />
                      <span>{t.bulk.successMessage}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-saffron-gold" />
                      <span>{t.bulk.submitButton}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
