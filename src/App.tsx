import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { LanguageProvider } from './hooks/useLanguage';
import { CartProvider } from './hooks/useCart';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { DumProcessSection } from './components/story/DumProcessSection';
import { SpiceStorySection } from './components/story/SpiceStorySection';
import { BananaLeafSection } from './components/story/BananaLeafSection';
import { MenuSection } from './components/menu/MenuSection';
import { ReviewsSection } from './components/reviews/ReviewsSection';
import { InteriorSection } from './components/gallery/InteriorSection';
import { BulkOrderSection } from './components/forms/BulkOrderSection';
import { VisitSection } from './components/location/VisitSection';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/menu/CartDrawer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';

export const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-charcoal-900 text-offwhite flex flex-col justify-between selection:bg-teal-hmr selection:text-white">
      {/* Branded Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Cinematic 3D Hero */}
        <HeroSection />

        {/* 2. Story Scene A: The Dum Process */}
        <DumProcessSection />

        {/* 3. Story Scene B: The Spice Story */}
        <SpiceStorySection />

        {/* 4. Story Scene C: The Banana Leaf Moment */}
        <BananaLeafSection />

        {/* 5. Interactive Menu & Filtering */}
        <MenuSection />

        {/* 6. Google Reviews & Trust Badges */}
        <ReviewsSection />

        {/* 7. Inside HMR: Family Dining Ambiance */}
        <InteriorSection />

        {/* 8. Party & Bulk Catering Orders */}
        <BulkOrderSection />

        {/* 9. Visit Us & Storefront */}
        <VisitSection />

        {/* 10. Final Story CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Shopping Cart Drawer */}
      <CartDrawer />

      {/* Floating Action Buttons */}
      <FloatingWhatsApp />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </LanguageProvider>
  );
};

export default App;
