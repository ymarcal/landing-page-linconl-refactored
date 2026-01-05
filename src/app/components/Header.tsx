import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-brand-dark text-white sticky top-0 z-50 shadow-sm border-b border-white/10 backdrop-blur-sm bg-brand-dark/95">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col" style={{ fontFamily: 'var(--font-heading)' }}>
            <div className="font-semibold text-white text-2xl">Linconl Marçal</div>
            <div className="text-xs text-white/80 uppercase tracking-wide">Psicólogo</div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8" style={{ fontFamily: 'var(--font-heading)' }}>
            <button onClick={() => scrollToSection('inicio')} className="text-base text-white/90 hover:text-white transition-colors relative group">
              Início
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('atuacoes')} className="text-base text-white/90 hover:text-white transition-colors relative group">
              Atuações
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('beneficios')} className="text-base text-white/90 hover:text-white transition-colors relative group">
              Benefícios da Terapia
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('terapia-online')} className="text-base text-white/90 hover:text-white transition-colors relative group">
              Terapia Online
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-base text-white/90 hover:text-white transition-colors relative group">
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="mt-4 flex flex-col gap-4 pb-4">
            <button onClick={() => scrollToSection('inicio')} className="text-left text-sm text-white/90 hover:text-white transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('atuacoes')} className="text-left text-sm text-white/90 hover:text-white transition-colors">
              Atuações
            </button>
            <button onClick={() => scrollToSection('beneficios')} className="text-left text-sm text-white/90 hover:text-white transition-colors">
              Benefícios da Terapia
            </button>
            <button onClick={() => scrollToSection('terapia-online')} className="text-left text-sm text-white/90 hover:text-white transition-colors">
              Terapia Online
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-left text-sm text-white/90 hover:text-white transition-colors">
              Contato
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}