import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function Hero() {
  const scrollTo = useSmoothScroll();

  return (
    <section id="inicio" className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto mt-[23px] mb-[23px]">
          <h1 className="text-4xl md:text-6xl font-merriweather font-bold mb-6 leading-tight text-legal-text">
            Seu Escritório na Era da{" "}
            <span className="text-legal-gold">Inteligência Artificial</span>
          </h1>
          <p className="text-xl md:text-2xl text-legal-text/80 mb-12 leading-relaxed">
            Sites modernos para advogados, com ou sem atendimento automatizado no WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollTo('planos')}
              className="bg-legal-gold hover:bg-legal-gold-hover text-legal-dark px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Ver Planos
            </button>
            <a 
              href="https://wa.me/5548919741588" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-legal-gold text-legal-gold hover:bg-legal-gold hover:text-legal-dark px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}