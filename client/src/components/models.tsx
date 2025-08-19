import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function Models() {
  return (
    <section id="modelos" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-6 text-legal-text">
            Veja nossos <span className="text-legal-gold">modelos</span>
          </h2>
          <p className="text-xl text-legal-text/80 max-w-3xl mx-auto">
            Visualize como seu site ficará pronto com nossos exemplos reais
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Modelo Advogado */}
          <div className="bg-legal-dark/50 p-8 rounded-xl border border-legal-accent hover:border-legal-gold transition-colors">
            <div className="bg-legal-secondary/50 w-full h-48 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-legal-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-legal-dark" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                  </svg>
                </div>
                <p className="text-legal-text/80">Preview do site masculino</p>
              </div>
            </div>
            <h3 className="text-2xl font-merriweather font-bold mb-4 text-legal-text">
              Modelo Advogado
            </h3>
            <p className="text-legal-text/80 mb-6">
              Site profissional com design masculino, cores sóbrias e conteúdo direcionado para advogados
            </p>
            <a 
              href="/modelo-advogado"
              className="bg-legal-gold hover:bg-legal-gold-hover text-legal-dark px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Ver Exemplo
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Modelo Advogada */}
          <div className="bg-legal-dark/50 p-8 rounded-xl border border-legal-accent hover:border-legal-gold transition-colors">
            <div className="bg-legal-secondary/50 w-full h-48 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-legal-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-legal-dark" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                  </svg>
                </div>
                <p className="text-legal-text/80">Preview do site feminino</p>
              </div>
            </div>
            <h3 className="text-2xl font-merriweather font-bold mb-4 text-legal-text">
              Modelo Advogada
            </h3>
            <p className="text-legal-text/80 mb-6">
              Site profissional com design feminino, cores elegantes e conteúdo direcionado para advogadas
            </p>
            <a 
              href="/modelo-advogada"
              className="bg-legal-gold hover:bg-legal-gold-hover text-legal-dark px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Ver Exemplo
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