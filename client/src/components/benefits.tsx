export default function Benefits() {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: "Design Moderno Jurídico",
      description: "Estética profissional e tipografia sob medida para escritórios de advocacia."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-2.462-1.091-4.778-3.078-6.563-1.986-1.784-4.317-2.764-6.747-2.766-5.435 0-9.886 4.439-9.889 9.882-.002 2.003.596 3.986 1.727 5.795l.232.378-1.13 4.133 4.236-1.118.368.552z"/>
        </svg>
      ),
      title: "Atendimento 24/7 no WhatsApp",
      description: "Triagem e agendamento automático no plano com agente inteligente."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h8v-2h-8V9h8V7h-8V5h8V3h-8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2h-8z"/>
        </svg>
      ),
      title: "Qualificação de Leads",
      description: "Foco nos casos certos, menos tempo perdido com consultas inadequadas."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z" />
        </svg>
      ),
      title: "Entrega Rápida",
      description: "Prazos claros e cumpridos. Seu site no ar em até 96 horas."
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
