import { Check, X, Info } from "lucide-react";

export default function Plans() {
  const plans = [
    {
      name: "Site Simples",
      description: "Presença digital profissional com botão WhatsApp",
      price: "R$ 500",
      priceType: "implantação",
      monthly: "R$ 30",
      monthlyNote: "primeiro mês grátis",
      features: [
        "Botão WhatsApp integrado",
        "Design profissional jurídico", 
        "Prévia em 48h",
        "Código fonte incluso",
        "Responsivo (mobile)"
      ],
      paymentNote: "Pagamento: R$ 250 entrada + R$ 250 na entrega",
      ctaText: "Contratar Site Simples",
      popular: false
    },
    {
      name: "Site com Agente IA",
      description: "Atendimento automatizado 24/7 no WhatsApp",
      price: "R$ 2.000",
      priceType: "implantação",
      monthly: "R$ 200",
      monthlyNote: "primeiro mês grátis",
      features: [
        "Tudo do plano anterior",
        "Agente IA para WhatsApp",
        "Atendimento 24/7",
        "Triagem & Agendamento",
        "3 dias de testes dedicados"
      ],
      paymentNote: "Pagamento: R$ 1.000 entrada + R$ 1.000 na entrega",
      ctaText: "Contratar Site com IA",
      popular: true
    }
  ];

  const comparisonFeatures = [
    { feature: "Botão WhatsApp", simple: true, ai: true },
    { feature: "Triagem & Agendamento", simple: false, ai: true },
    { feature: "Prévia", simple: "48h", ai: "72h" },
    { feature: "Testes dedicados", simple: false, ai: "3 dias" },
    { feature: "Mensalidade", simple: "R$ 30", ai: "R$ 200" },
    { feature: "1º mês grátis", simple: true, ai: true },
    { feature: "Código fonte incluso", simple: true, ai: true }
  ];

  return (
    <section id="planos" className="py-16 px-4 bg-legal-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-6 text-legal-text">
            Planos e <span className="text-legal-gold">Preços</span>
          </h2>
          <p className="text-xl text-legal-text/80 max-w-3xl mx-auto">
            Escolha o plano ideal para o seu escritório. Primeiro mês grátis em ambos os planos.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-legal-dark/50 p-8 rounded-xl border transition-colors ${
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
              
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-legal-text">
                    <Check className="w-5 h-5 text-legal-gold mr-3" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <div className="text-sm text-legal-text/60 mb-4">
                  {plan.paymentNote}
                </div>
                <a 
                  href="https://wa.me/554891974158" 
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
                    <th className="text-center py-3 px-4 text-legal-text">Site Simples</th>
                    <th className="text-center py-3 px-4 text-legal-text">Site c/ Agente IA</th>
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
        
        <div className="text-center mt-8">
          <p className="text-legal-text/60 flex items-center justify-center">
            <Info className="w-4 h-4 mr-2" />
            Cliente fornece domínio ou CodeNode registra (custo extra)
          </p>
        </div>
      </div>
    </section>
  );
}