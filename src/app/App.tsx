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
        <div className="lg:snap-start lg:snap-proximity lg:snap-always">
          <HeroSection />
        </div>
        <div className="lg:snap-start lg:snap-proximity lg:snap-always">
          <AboutSection />
        </div>
        <div className="lg:snap-start lg:snap-proximity lg:snap-always">
          <PillarsSection />
        </div>
        <div className="lg:snap-start lg:snap-proximity lg:snap-always">
          <ServicesSection />
        </div>
        <div className="lg:snap-start lg:snap-proximity lg:snap-always">
          <TestimonialsSection />
        </div>
        <div className="lg:snap-start lg:snap-proximity lg:snap-always">
          <ContactSection />
          <Footer />
        </div>
      </main>
    </div>
  );
}