import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PillarsSection } from './components/PillarsSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { useEffect, useRef } from 'react';

export default function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleWheel = (e: WheelEvent) => {
      const currentScrollTop = scrollContainer.scrollTop;
      const isScrollingUp = e.deltaY < 0;
      const tolerance = 5; // Small tolerance for floating point precision

      // Prevent scrolling up when at or very near the top
      if (isScrollingUp && currentScrollTop <= tolerance) {
        e.preventDefault();
        scrollContainer.scrollTop = 0; // Ensure we're exactly at the top
        return;
      }

      // Prevent scrolling down when at the bottom
      const scrollBottom = scrollContainer.scrollHeight - scrollContainer.scrollTop;
      const isAtBottom = scrollBottom <= scrollContainer.clientHeight + tolerance;
      if (!isScrollingUp && isAtBottom) {
        e.preventDefault();
        return;
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const currentScrollTop = scrollContainer.scrollTop;
      const touchY = e.touches[0].clientY;
      const touchDelta = touchStartY - touchY;
      const isScrollingUp = touchDelta < 0;
      const tolerance = 5;

      // Prevent scrolling up when at the top
      if (isScrollingUp && currentScrollTop <= tolerance) {
        e.preventDefault();
        scrollContainer.scrollTop = 0;
        return;
      }
    };

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    scrollContainer.addEventListener('touchstart', handleTouchStart, {
      passive: true,
    });
    scrollContainer.addEventListener('touchmove', handleTouchMove, {
      passive: false,
    });

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
      scrollContainer.removeEventListener('touchstart', handleTouchStart);
      scrollContainer.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main
        ref={scrollContainerRef}
        className="flex-1 overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      >
        <div className="snap-start h-screen">
          <HeroSection />
        </div>
        <div className="snap-start h-screen">
          <AboutSection />
        </div>
        <div className="snap-start h-screen">
          <PillarsSection />
        </div>
        <div className="snap-start h-screen">
          <ServicesSection />
        </div>
        <div className="snap-start h-screen">
          <TestimonialsSection />
        </div>
        <div className="snap-start min-h-screen">
          <ContactSection />
          <Footer />
        </div>
      </main>
    </div>
  );
}