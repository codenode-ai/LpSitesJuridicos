import { Shield, Eye, MessageCircle, Scale } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Credibilidade",
      description: "Presença digital que reforça sua imagem profissional."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Clareza",
      description: "Seus serviços apresentados de forma clara e objetiva."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Contato imediato",
      description: "Botão de WhatsApp sempre visível para facilitar o primeiro contato."
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Compliance",
      description: "Estrutura alinhada às normas da OAB."
    }
  ];

  return (
    <section id="beneficios" className="py-16 px-4 bg-legal-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-6 text-legal-text">
            Mais do que um site: credibilidade para o seu escritório. <span className="text-legal-gold"></span>
          </h2>
          <p className="text-xl text-legal-text/80 max-w-3xl mx-auto">
            Na advocacia, confiança é essencial. Um site profissional transmite seriedade e organiza as informações do seu escritório de forma clara e acessível, ajudando potenciais clientes a encontrarem o que precisam rapidamente.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-legal-dark/50 p-6 rounded-xl border border-legal-accent hover:border-legal-gold transition-colors h-64 flex flex-col">
              <div className="text-legal-gold text-3xl mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-merriweather font-semibold mb-3 text-legal-text">
                {benefit.title}
              </h3>
              <p className="text-legal-text/80 flex-grow">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}