import { useState } from "react";
import { Code } from "lucide-react";
import { useSmoothScroll } from "../hooks/use-smooth-scroll";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollTo = useSmoothScroll();

  const handleNavClick = (sectionId: string) => {
    scrollTo(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-legal-dark/95 backdrop-blur-sm border-b border-legal-accent z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-merriweather font-bold text-legal-gold">
              CodeNode<span className="text-white">.AI</span>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => handleNavClick('inicio')} className="text-legal-text hover:text-legal-gold transition-colors">
              Início
            </button>
            <button onClick={() => handleNavClick('beneficios')} className="text-legal-text hover:text-legal-gold transition-colors">
              Benefícios
            </button>
            <button onClick={() => handleNavClick('como-funciona')} className="text-legal-text hover:text-legal-gold transition-colors">
              Como Funciona
            </button>
            <button onClick={() => handleNavClick('planos')} className="text-legal-text hover:text-legal-gold transition-colors">
              Planos
            </button>
            <button onClick={() => handleNavClick('modelos')} className="text-legal-text hover:text-legal-gold transition-colors">
              Modelos
            </button>
            <button onClick={() => handleNavClick('sobre')} className="text-legal-text hover:text-legal-gold transition-colors">
              Sobre
            </button>
            <button onClick={() => handleNavClick('faq')} className="text-legal-text hover:text-legal-gold transition-colors">
              FAQ
            </button>
            <button onClick={() => handleNavClick('contato')} className="text-legal-text hover:text-legal-gold transition-colors">
              Contato
            </button>
          </div>
          
          {/* Social and CTA */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://wa.me/554891974158" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:block bg-legal-gold hover:bg-legal-gold-hover text-legal-dark px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Falar no WhatsApp
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-legal-text"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-legal-accent">
            <div className="flex flex-col space-y-4 mt-4">
              <button onClick={() => handleNavClick('inicio')} className="text-left text-legal-text hover:text-legal-gold transition-colors">
                Início
              </button>
              <button onClick={() => handleNavClick('beneficios')} className="text-left text-legal-text hover:text-legal-gold transition-colors">
                Benefícios
              </button>
              <button onClick={() => handleNavClick('como-funciona')} className="text-left text-legal-text hover:text-legal-gold transition-colors">
                Como Funciona
              </button>
              <button onClick={() => handleNavClick('planos')} className="text-left text-legal-text hover:text-legal-gold transition-colors">
                Planos
              </button>
              <button onClick={() => handleNavClick('modelos')} className="text-left text-legal-text hover:text-legal-gold transition-colors">
                Modelos
              </button>
              <button onClick={() => handleNavClick('sobre')} className="text-left text-legal-text hover:text-legal-gold transition-colors">
                Sobre
              </button>
              <button onClick={() => handleNavClick('faq')} className="text-left text-legal-text hover:text-legal-gold transition-colors">
                FAQ
              </button>
              <button onClick={() => handleNavClick('contato')} className="text-left text-legal-text hover:text-legal-gold transition-colors">
                Contato
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}