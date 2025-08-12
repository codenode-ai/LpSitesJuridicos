import { useState } from "react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

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
            <div className="w-8 h-8 bg-legal-gold rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-legal-dark" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </div>
            <span className="text-xl font-merriweather font-bold text-legal-gold">CodeNode</span>
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
              href="https://www.instagram.com/codenode.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-legal-text hover:text-legal-gold transition-colors hidden md:block"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://wa.me/5548919741588" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-legal-gold hover:bg-legal-gold-hover text-legal-dark px-4 py-2 rounded-lg font-medium transition-colors"
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
