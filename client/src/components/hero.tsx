import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function Hero() {
  const scrollTo = useSmoothScroll();

  return (
    <section id="inicio" className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto mt-[46px] mb-[46px]">
          <h1 className="text-4xl md:text-6xl font-merriweather font-bold mb-6 leading-snug text-legal-text">
            Advogado, garanta seu destaque na Internet com um {" "}
            <span className="text-legal-gold">Site Profissional</span>
          </h1>
          <p className="text-xl md:text-2xl text-legal-text/80 mb-12 leading-loose">
            Tenha um site moderno,com base em um modelo de design moderno, bem estruturado e com a opção de IA no whatsapp para automatizar o atendimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollTo('planos')}
              className="bg-legal-gold hover:bg-legal-gold-hover text-legal-dark px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Ver Planos
            </button>
            <a 
              href="https://wa.me/5534996670069" 
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