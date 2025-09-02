import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function Models() {
  return (
    <section id="modelos" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-6 text-legal-text">
            Nosso <span className="text-legal-gold">Template</span>
          </h2>
          <p className="text-xl text-legal-text/80 max-w-3xl mx-auto">
            Seu site será baseado no template abaixo, adaptado para seu escritório
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <div className="bg-legal-dark/50 p-8 rounded-xl border border-legal-accent hover:border-legal-gold transition-colors text-center">
            <h3 className="text-2xl font-merriweather font-bold mb-4 text-legal-text">
              Modelo Profissional
            </h3>
            <p className="text-legal-text/80 mb-6">
              Design elegante com paleta de cores escura, ideal para transmitir seriedade, profissionalismo e confiança aos seus clientes
            </p>
            <a 
              href="https://seusitejuridico.codenode.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-legal-gold hover:bg-legal-gold-hover text-legal-dark px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Ver o modelo
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}