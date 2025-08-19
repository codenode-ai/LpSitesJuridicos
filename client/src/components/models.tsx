import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function Models() {
  return (
    <section id="modelos" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-6 text-legal-text">
            Nossos <span className="text-legal-gold">Templates</span>
          </h2>
          <p className="text-xl text-legal-text/80 max-w-3xl mx-auto">
            Seu site será baseado em um dos templates abaixo, adaptado para seu escritório
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Modelo 1 */}
          <div className="bg-legal-dark/50 p-8 rounded-xl border border-legal-accent hover:border-legal-gold transition-colors">
            <div className="bg-legal-secondary/50 w-full h-48 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-legal-dark border-2 border-legal-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-legal-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <p className="text-legal-text/80">Paleta de cores escura</p>
              </div>
            </div>
            <h3 className="text-2xl font-merriweather font-bold mb-4 text-legal-text">
              Template 1
            </h3>
            <p className="text-legal-text/80 mb-6">
              Design com paleta de cores mais escura, ideal para transmitir seriedade e profissionalismo
            </p>
            <a 
              href="https://template-site-simples-01-contato526.replit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-legal-gold hover:bg-legal-gold-hover text-legal-dark px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Ver Modelo
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Modelo 2 */}
          <div className="bg-legal-dark/50 p-8 rounded-xl border border-legal-accent hover:border-legal-gold transition-colors">
            <div className="bg-legal-secondary/50 w-full h-48 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-legal-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-legal-dark" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                </div>
                <p className="text-legal-text/80">Paleta de cores clara</p>
              </div>
            </div>
            <h3 className="text-2xl font-merriweather font-bold mb-4 text-legal-text">
              Template 2
            </h3>
            <p className="text-legal-text/80 mb-6">
              Design com paleta de cores mais clara, transmitindo acolhimento e proximidade com clientes
            </p>
            <a 
              href="https://template-site-adv-02-contato526.replit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-legal-gold hover:bg-legal-gold-hover text-legal-dark px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Ver Modelo
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