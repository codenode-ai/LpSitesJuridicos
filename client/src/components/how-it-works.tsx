export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Briefing inicial",
      description: "Uma conversa inicial para entender sua atuação e necessidades."
    },
    {
      number: "2",
      title: "Protótipo Visual",
      description: "Apresentamos a estrutura e o layout inicial para sua avaliação."
    },
    {
      number: "3",
      title: "Desenvolvimento",
      description: "Construção da versão final com design e funcionalidades aprovados por você."
    },
    {
      number: "4",
      title: "Entrega do Site",
      description: "Publicação do site no domínio fornecido pelo cliente."
    }
  ];

  return (
    <section id="como-funciona" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-6 text-legal-text">
            Como <span className="text-legal-gold">Funciona</span>
          </h2>
          <p className="text-xl text-legal-text/80 max-w-3xl mx-auto">
            Processo simples e transparente, do primeiro contato até seu site estar no ar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-legal-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-legal-dark font-bold text-xl">{step.number}</span>
              </div>
              <div className="bg-legal-dark/50 p-6 rounded-xl border border-legal-accent h-48 flex flex-col">
                <h3 className="text-xl font-merriweather font-semibold mb-3 text-legal-text">
                  {step.title}
                </h3>
                <p className="text-legal-text/80 flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}