import React from 'react';
import { SITE_CONFIG } from '../../content/site';
import { createWhatsAppUrl } from '../../lib/whatsapp';
import { Phone } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl(
    "Hi HMR Biriyani Hut! I would like to place an order."
  );

  return (
    <>
      {/* Floating WhatsApp Button (Bottom Right) */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex items-center group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110 active:scale-95 shadow-[#25D366]/40"
          title="Chat with HMR on WhatsApp"
        >
          {/* Pulsing Ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

          {/* WhatsApp SVG Icon */}
          <svg
            className="w-7 h-7 fill-white relative z-10"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.301-.776.979-.951 1.18-.175.2-.351.226-.652.075-.3-.15-1.267-.467-2.414-1.49-1.077-.96-1.805-2.146-2.016-2.507-.21-.36-.022-.555.128-.705.136-.135.301-.351.451-.527.151-.176.201-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.927-2.233-.244-.587-.492-.507-.677-.517-.175-.01-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.029-1.053 2.509 0 1.48 1.078 2.909 1.228 3.11.151.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.634.721.23 1.377.197 1.896.12.577-.087 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.126-.276-.201-.576-.351zM12.012 2.002c-5.508 0-9.986 4.477-9.986 9.984 0 1.761.46 3.48 1.333 4.996L2 22.002l5.176-1.332c1.467.8 3.118 1.222 4.836 1.222 5.508 0 9.986-4.478 9.986-9.986 0-5.507-4.478-9.984-9.986-9.984zm0 18.286c-1.503 0-2.977-.404-4.264-1.168l-.306-.182-3.167.816.845-3.088-.2-.318c-.84-1.336-1.285-2.888-1.285-4.48 0-4.57 3.718-8.288 8.289-8.288 4.57 0 8.288 3.718 8.288 8.288 0 4.57-3.718 8.288-8.288 8.288z" />
          </svg>
        </a>

        {/* Desktop Tooltip */}
        <span className="hidden sm:inline-block pointer-events-none absolute right-16 glass-panel px-3 py-1.5 rounded-lg text-xs font-semibold text-offwhite whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl border border-white/10">
          Chat & Order on WhatsApp
        </span>
      </aside>

      {/* Mobile Click-To-Call Button (Bottom Left) */}
      <a
        href={`tel:${SITE_CONFIG.restaurant.contact.phoneDial}`}
        className="sm:hidden fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full glass-panel-teal border border-teal-light text-white flex items-center justify-center shadow-xl active:scale-90"
        title="Call HMR Biriyani Hut"
        aria-label="Call HMR Biriyani Hut"
      >
        <Phone className="w-5 h-5 text-teal-light" />
      </a>
    </>
  );
};
