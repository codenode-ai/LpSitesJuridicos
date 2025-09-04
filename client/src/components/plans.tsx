import { Check, X, Info } from "lucide-react";

export default function Plans() {
  const plans = [
    {
      name: "Site Essencial",
      description: "Para advogados que querem o básico bem feito",
      price: "R$ 500",
      priceType: "pagamento único, hospedagem inclusa",
      monthly: "R$ 0",
      monthlyNote: "sem mensalidade",
      features: [
        "Site baseado em template adaptado para seu escritório",
        "Botão WhatsApp integrado",
        "Design responsivo",
        "Código-fonte incluso",
        "Entrega em 48h",
        "Hospedagem inclusa"
      ],
      paymentNote: "Pagamento na entrega do site no ar",
      ctaText: "Contratar Site Essencial",
      whatsappMessage: "Quero um Site Essencial",
      popular: false
    },
    {
      name: "Site com IA no WhatsApp",
      description: "Atendimento automatizado 24/7",
      price: "R$ 2.000",
      priceType: "implantação",
      monthly: "R$ 150",
      monthlyNote: "primeiro mês grátis",
      features: [
        "Tudo que o plano Essencial oferece",
        "Agente de IA integrado ao WhatsApp",
        "Triagem e agendamento de consultas",
        "Atendimento 24/7",
        "3 dias dedicados para testar o agente de IA"
      ],
      paymentNote: "Pagamento na entrega do site no ar",
      ctaText: "Contratar Site com IA",
      whatsappMessage: "Quero um Site com IA",
      popular: true
    }
  ];

  const comparisonFeatures = [
    { feature: "Botão WhatsApp", simple: true, ai: true },
    { feature: "Triagem & Agendamento", simple: false, ai: true },
    { feature: "Entrega", simple: "48h", ai: "72h" },
    { feature: "Testes dedicados", simple: false, ai: "3 dias" },
    { feature: "Mensalidade", simple: "R$ 0", ai: "R$ 150" },
    { feature: "1º mês grátis", simple: false, ai: true },
    { feature: "Código fonte incluso", simple: true, ai: true },
    { feature: "Hospedagem inclusa", simple: true, ai: true }
  ];

  return (
    <section id="planos" className="py-16 px-4 bg-legal-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-6 text-legal-text">
            Escolha o plano ideal para você <span className="text-legal-gold"></span>
          </h2>
          <p className="text-xl text-legal-text/80 max-w-3xl mx-auto">
            Sites baseados em templates adaptados para seu escritório. O plano Essencial inclui hospedagem e não tem mensalidade. O plano com IA no WhatsApp tem mensalidade após o primeiro mês gratuito.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`flex flex-col bg-legal-dark/50 p-8 rounded-xl border transition-colors ${
                plan.popular 
                  ? 'border-2 border-legal-gold relative' 
                  : 'border border-legal-accent hover:border-legal-gold'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-legal-gold text-legal-dark px-6 py-2 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-merriweather font-bold mb-2 text-legal-text">
                  {plan.name}
                </h3>
                <p className="text-legal-text/80 mb-6">{plan.description}</p>
                <div className="text-4xl font-bold text-legal-gold mb-2">{plan.price}</div>
                <p className="text-legal-text/60">{plan.priceType}</p>
                <div className="text-2xl font-semibold text-legal-gold mt-4">
                  {plan.monthly}<span className="text-base text-legal-text/60">/mês</span>
                </div>
                <p className="text-sm text-legal-text/60">{plan.monthlyNote}</p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-legal-text">
                    <Check className="w-5 h-5 text-legal-gold mr-3" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-auto">
                <div className="text-sm text-legal-text/60 mb-4">
                  {plan.paymentNote}
                </div>
                <a 
                  href={`https://wa.me/5534996670069?text=${encodeURIComponent(plan.whatsappMessage)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-legal-gold hover:bg-legal-gold-hover text-legal-dark px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  {plan.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Comparison Table */}
        <div className="bg-legal-dark/50 rounded-xl border border-legal-accent overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-merriweather font-semibold text-center mb-6 text-legal-text">
              Comparação de Recursos
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-legal-accent">
                    <th className="text-left py-3 px-4 text-legal-text">Recurso</th>
                    <th className="text-center py-3 px-4 text-legal-text">Site Essencial</th>
                    <th className="text-center py-3 px-4 text-legal-text">Site c/ IA WhatsApp</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((item, index) => (
                    <tr key={index} className="border-b border-legal-accent/30">
                      <td className="py-3 px-4 text-legal-text">{item.feature}</td>
                      <td className="text-center py-3 px-4">
                        {typeof item.simple === 'boolean' ? (
                          item.simple ? (
                            <Check className="w-5 h-5 text-legal-gold mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-legal-text/40 mx-auto" />
                          )
                        ) : (
                          <span className="text-legal-text">{item.simple}</span>
                        )}
                      </td>
                      <td className="text-center py-3 px-4">
                        {typeof item.ai === 'boolean' ? (
                          item.ai ? (
                            <Check className="w-5 h-5 text-legal-gold mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-legal-text/40 mx-auto" />
                          )
                        ) : (
                          <span className="text-legal-text">{item.ai}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}