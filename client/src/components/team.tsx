export default function Team() {
  const teamMembers = [
    {
      name: "Daniel",
      title: "Estrategista de Inovação",
      bio: "Engenheiro e empreendedor, apaixonado por tecnologia e inovação. É quem desenha a visão estratégica da CodeNode para levar a IA de forma prática e acessível às empresas.",
      avatar: "/img/team-daniel.jpg",
      whatsapp: "5534996670069",
      buttonText: "Falar com Daniel no WhatsApp"
    },
    {
      name: "Gabriela", 
      title: "Engenheira de Implementação",
      bio: "Engenheira que coloca a mão no código e transforma ideias em soluções reais. Garante que nossos agentes de IA funcionem na prática, com qualidade e eficiência.",
      avatar: "/img/team-gabriela.jpg",
      whatsapp: "5534999622165",
      buttonText: "Falar com Gabriela no WhatsApp"
    },
    {
      name: "Maria",
      title: "Agente de Atendimento Inteligente",
      bio: "Nossa especialista virtual em atendimento. Sempre disponível para conversar, tirar dúvidas e mostrar, na prática, como a IA pode transformar o atendimento de uma empresa.",
      avatar: "/img/team-maria.jpg",
      whatsapp: "5548991974158",
      buttonText: "Testar a Maria no WhatsApp",
      isAI: true
    }
  ];

  return (
    <section id="equipe" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-6 text-legal-text">
            <span className="text-legal-gold">Humanos + IA:</span> a mistura que move a CodeNode
          </h2>
          <p className="text-xl text-legal-text/80 max-w-4xl mx-auto leading-relaxed">
            Nós acreditamos que o futuro da tecnologia está na colaboração entre mentes humanas criativas e agentes inteligentes. Conheça nossa equipe.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-legal-dark/50 p-8 rounded-xl border border-legal-accent hover:border-legal-gold transition-colors text-center">
              <div className="mb-4">
                <img 
                  src={member.avatar}
                  alt={`Avatar ${member.name}`}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-3 border-legal-gold"
                />
              </div>
              
              <h3 className="text-xl font-merriweather font-bold mb-2 text-legal-text">
                {member.name}
                {member.isAI && <span className="text-legal-gold"> (Agente de IA)</span>}
              </h3>
              
              <p className="text-legal-gold font-semibold mb-4 text-sm">
                {member.title}
              </p>
              
              <p className="text-legal-text/80 mb-6 leading-relaxed">
                {member.bio}
              </p>
              
              <a 
                href={`https://wa.me/${member.whatsapp}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-legal-gold hover:bg-legal-gold-hover text-legal-dark px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {member.buttonText}
              </a>
              
              {member.isAI && (
                <div className="mt-4 p-3 bg-legal-gold/10 rounded-lg border border-legal-gold/30">
                  <p className="text-legal-gold text-sm font-semibold">
                    Dê preferência por falar com a Maria e experimente nossos agentes de IA ao vivo.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}