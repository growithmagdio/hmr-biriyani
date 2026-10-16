import React, { useState } from 'react';
import { BiryaniCanvas } from './BiryaniCanvas';
import { HeroOverlay } from './HeroOverlay';

export const HeroSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section id="hero" className="relative w-full h-[95vh] min-h-[650px] max-h-[1000px] bg-charcoal-900 overflow-hidden">
      {/* Background Lighting Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-hmr/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-saffron-gold/15 rounded-full blur-[130px] pointer-events-none" />

      {/* 3D R3F Canvas */}
      <BiryaniCanvas isOpen={isOpen} onToggleOpen={handleToggleOpen} />

      {/* Hero Content & Controls Overlay */}
      <HeroOverlay isOpen={isOpen} onToggleOpen={handleToggleOpen} />
    </section>
  );
};
