export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Contato pelo WhatsApp",
      description: "Nossa IA de atendimento apresenta os serviços, tira dúvidas e agenda uma conversa com nosso time comercial para acertar detalhes e fechar o pedido"
    },
    {
      number: "2",
      title: "Produção do Site",
      description: "De posse das informações do seu escritório damos inicio ao desenvolvimento do site até chegarmos à prévia para avaliação."
    },
    {
      number: "3",
      title: "Testes e Ajustes",
      description: "Em seguida enviamos um link com o protótipo do site onde evetuais erros poderão ser corrigidos e ajustes solicitados."
    },
    {
      number: "4",
      title: "Entrega do Site",
      description: "O cliente aprova o protótipo e fornece o domínio para a publicação do site."
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