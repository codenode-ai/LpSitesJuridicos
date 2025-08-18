import { Star, MessageCircle, Target, Clock } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Design Moderno",
      description: "Estética profissional com design sob medida para escritórios de advocacia."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Atendimento 24/7 no WhatsApp",
      description: "Inteligência Artificial no Whatsapp para automatizar o atendimento e o agendamento de consultas."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Qualificação de contatos",
      description: "Foco nos casos certos, menos tempo perdido com consultas inadequadas."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Entrega Rápida",
      description: "Seu site poderá estar no ar em até 5 dias úteis."
    }
  ];

  return (
    <section id="beneficios" className="py-16 px-4 bg-legal-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-6 text-legal-text">
            Por que Escolher a <span className="text-legal-gold">CodeNode</span>?
          </h2>
          <p className="text-xl text-legal-text/80 max-w-3xl mx-auto">
            Transformamos a presença digital do seu escritório com tecnologia de ponta e design profissional.
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