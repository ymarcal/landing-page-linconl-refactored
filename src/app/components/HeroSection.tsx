import heroImage from "./figma/d96bdb2c0eabc63d53c8e52be65be0138b2d49de.png";
// import heroImage from "./figma/headshot.jpeg";
import bgImage from "./figma/0e490af96632d3edf00819e1544d84d37cddbd5e.png";
import { useState } from 'react';
import { useInView } from './ui/use-in-view';

export function HeroSection() {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };
  
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-brand-light/20 via-white to-brand-light/10 py-20 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-medium/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <div ref={ref} className={`order-2 md:order-1 ${isInView ? 'animate' : ''}`}>
            <div className={`relative w-full max-w-md mx-auto block ${isInView ? 'animate' : ''}`}>
              <div className="absolute inset-0 bg-brand-dark rounded-3xl translate-x-[-16px] translate-y-4"></div>
              <img
                src={heroImage}
                alt="Linconl Marçal - Psicólogo"
                className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto object-cover aspect-square ring-1 ring-brand-dark/5 transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          <div ref={ref} className={`order-1 md:order-2 block ${isInView ? 'animate' : ''}`}>
              <div className="inline-block px-4 py-2 bg-brand-dark/50 rounded-full mb-6">
                <span className="text-white text-sm font-medium">
                  Atendimento Online
                </span>
              </div>

              <h1 className="mb-3 text-white text-4xl md:text-5xl lg:text-6xl">
                Linconl Marçal
              </h1>
              <p className="text-white mb-8 text-xl">
                Psicoterapia | CRP-04/72628
              </p>

              <p className="mb-8 text-white text-lg leading-relaxed max-w-xl">
                Linconl Marçal é psicólogo clinico e atende com um
                acompanhamento humanizado, individualizado e
                cientificamente amparado. Expertise em avaliação
                psicológica, diagnóstico e tratamento de uma
                variedade de questões emocionais, comportamentais
                e de saúde mental. Altamente habilidoso em criar
                um ambiente seguro e empático para os clientes
                adolescentes, adultos e idosos.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://api.whatsapp.com/send/?phone=5534991687617&text=Ol%C3%A1%2C+gostaria+de+conversar+sobre+a+psicoterapia+que+voc%C3%AA+oferece.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-dark text-white px-8 py-4 rounded-xl hover:bg-brand-medium-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300 inline-block"
                >
                  Agendar Consulta
                </a>
                <button onClick={() => scrollToSection('atuacoes')} className="bg-white text-brand-dark px-8 py-4 rounded-xl hover:bg-brand-light/20 transition-all duration-300">
                  Saiba Mais
                </button>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}