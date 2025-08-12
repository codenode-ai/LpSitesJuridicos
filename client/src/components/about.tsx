export default function About() {
  return (
    <section id="sobre" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-8 text-legal-text">
            Sobre a <span className="text-legal-gold">CodeNode</span>
          </h2>
          <div className="bg-legal-dark/50 p-8 rounded-xl border border-legal-accent">
            <p className="text-xl leading-relaxed text-legal-text/90">
              Introduzimos escritórios de advocacia na era da IA, começando pela automatização do atendimento, triagem e agendamento de consultas. Nosso foco é qualificar contatos para que seu escritório invista tempo apenas nos casos certos.
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-legal-gold mb-2">100%</div>
                <p className="text-legal-text/80">Foco em Advocacia</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-legal-gold mb-2">24/7</div>
                <p className="text-legal-text/80">Atendimento IA</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-legal-gold mb-2">48h</div>
                <p className="text-legal-text/80">Entrega Rápida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}