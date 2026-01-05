import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PillarsSection } from './components/PillarsSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Header />
      <main>
        <div className="snap-start snap-always">
          <HeroSection />
        </div>
        <div className="snap-start snap-always">
          <AboutSection />
        </div>
        <div className="snap-start snap-always">
          <PillarsSection />
        </div>
        <div className="snap-start snap-always">
          <ServicesSection />
        </div>
        <div className="snap-start snap-always">
          <TestimonialsSection />
        </div>
        <div className="snap-start snap-always">
          <ContactSection />
          <Footer />
        </div>
      </main>
    </div>
  );
}