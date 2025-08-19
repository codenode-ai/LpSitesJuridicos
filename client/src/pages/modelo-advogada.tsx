import { ArrowLeft, Phone, Mail, MapPin, Heart, Users, FileText, Home } from "lucide-react";
import { Link } from "wouter";

export default function ModeloAdvogada() {
  return (
    <div className="min-h-screen bg-legal-dark">
      {/* Header */}
      <header className="bg-legal-dark/95 backdrop-blur-sm border-b border-legal-accent">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-legal-gold hover:text-legal-gold-hover transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar</span>
            </Link>
            <div className="text-sm text-legal-text/60">
              Modelo Demonstrativo
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-16 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-merriweather font-bold mb-6 leading-tight text-legal-text">
              Dra. Maria Silva
            </h1>
            <p className="text-xl md:text-2xl text-legal-text/80 mb-8">
              <span className="text-legal-gold">Advocacia Familiar e Civil</span> • OAB/SP 654.321
            </p>
            <p className="text-lg text-legal-text/70 mb-12 max-w-3xl mx-auto">
              Especialista em direito de família e civil, oferecendo atendimento humanizado e soluções jurídicas com foco na proteção dos seus direitos e da sua família.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/554891974158" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-legal-gold hover:bg-legal-gold-hover text-legal-dark px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Consulta WhatsApp
              </a>
              <button className="border-2 border-legal-gold text-legal-gold hover:bg-legal-gold hover:text-legal-dark px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Agendar Reunião
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Escritório */}
      <section className="py-16 px-4 bg-legal-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-8 text-legal-text">
              Sobre o <span className="text-legal-gold">Escritório</span>
            </h2>
            <p className="text-lg text-legal-text/90 leading-relaxed mb-8">
              O escritório da Dra. Maria Silva é especializado em direito de família e civil, oferecendo atendimento personalizado e humanizado. Nossa missão é proteger os direitos da família brasileira com competência, ética e dedicação.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-legal-gold mb-2">12+</div>
                <p className="text-legal-text/80">Anos de Experiência</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-legal-gold mb-2">300+</div>
                <p className="text-legal-text/80">Famílias Atendidas</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-legal-gold mb-2">98%</div>
                <p className="text-legal-text/80">Satisfação dos Clientes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-6 text-legal-text">
              Áreas de <span className="text-legal-gold">Atuação</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: <Heart className="w-8 h-8" />, title: "Divórcio e Separação", description: "Processos consensuais e litigiosos com foco na proteção familiar" },
              { icon: <Users className="w-8 h-8" />, title: "Guarda e Visitação", description: "Defesa dos direitos das crianças e regulamentação de visitas" },
              { icon: <FileText className="w-8 h-8" />, title: "Pensão Alimentícia", description: "Fixação, revisão e execução de alimentos" },
              { icon: <Home className="w-8 h-8" />, title: "Partilha de Bens", description: "Divisão patrimonial justa e equitativa" },
              { icon: <Heart className="w-8 h-8" />, title: "União Estável", description: "Reconhecimento e dissolução de união estável" },
              { icon: <Users className="w-8 h-8" />, title: "Adoção", description: "Orientação completa em processos de adoção" }
            ].map((area, index) => (
              <div key={index} className="bg-legal-dark/50 p-6 rounded-xl border border-legal-accent hover:border-legal-gold transition-colors">
                <div className="text-legal-gold mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-merriweather font-semibold mb-3 text-legal-text">
                  {area.title}
                </h3>
                <p className="text-legal-text/80">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre a Advogada */}
      <section className="py-16 px-4 bg-legal-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-8 text-center text-legal-text">
              Sobre a <span className="text-legal-gold">Advogada</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-legal-text/90 leading-relaxed mb-6">
                  Dra. Maria Silva é graduada em Direito pela Pontifícia Universidade Católica de São Paulo (PUC-SP) e possui especialização em Direito de Família e Sucessões.
                </p>
                <p className="text-lg text-legal-text/90 leading-relaxed">
                  Com mais de 12 anos de experiência, dedica-se exclusivamente ao direito de família, sempre priorizando o diálogo e a busca por soluções que preservem os vínculos familiares.
                </p>
              </div>
              <div className="bg-legal-dark/50 p-8 rounded-xl border border-legal-accent">
                <h3 className="text-xl font-merriweather font-semibold mb-4 text-legal-text">Formação</h3>
                <ul className="space-y-2 text-legal-text/80">
                  <li>• Graduação em Direito - PUC-SP</li>
                  <li>• Pós-graduação em Direito de Família - FGV</li>
                  <li>• Curso em Mediação Familiar</li>
                  <li>• Membro do IBDFAM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-6 text-legal-text">
              Nossos <span className="text-legal-gold">Diferenciais</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Atendimento Humanizado", description: "Escuta ativa e acolhimento em momentos delicados" },
              { title: "Mediação Familiar", description: "Busca sempre pela solução consensual e menos traumática" },
              { title: "Comunicação Clara", description: "Linguagem acessível e transparência total no processo" },
              { title: "Experiência Especializada", description: "Foco exclusivo em direito de família há mais de 12 anos" },
              { title: "Proteção das Crianças", description: "Prioridade absoluta aos interesses dos menores" },
              { title: "Disponibilidade", description: "Atendimento flexível e contato direto via WhatsApp" }
            ].map((diferencial, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-merriweather font-semibold mb-3 text-legal-text">
                  {diferencial.title}
                </h3>
                <p className="text-legal-text/80">
                  {diferencial.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-4 bg-legal-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-6 text-legal-text">
              <span className="text-legal-gold">Depoimentos</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-legal-dark/50 p-6 rounded-xl border border-legal-accent">
              <p className="text-legal-text/90 mb-4 italic">
                "Dra. Maria me ajudou em um momento muito difícil da minha vida. Profissional competente, humana e sempre disponível para esclarecer dúvidas."
              </p>
              <p className="text-legal-gold font-semibold">Ana Paula S.</p>
            </div>
            <div className="bg-legal-dark/50 p-6 rounded-xl border border-legal-accent">
              <p className="text-legal-text/90 mb-4 italic">
                "Excelente profissional! Conseguiu resolver minha questão de guarda de forma rápida e sem grandes conflitos. Super recomendo!"
              </p>
              <p className="text-legal-gold font-semibold">Ricardo M.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-6 text-legal-text">
              Entre em <span className="text-legal-gold">Contato</span>
            </h2>
            <p className="text-xl text-legal-text/80">
              Precisa de orientação jurídica? Fale conosco agora mesmo.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-legal-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-legal-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-legal-text">WhatsApp</h3>
                <p className="text-legal-text/80">(48) 9 9197-4158</p>
              </div>
              <div className="text-center">
                <div className="bg-legal-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-legal-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-legal-text">Email</h3>
                <p className="text-legal-text/80">contato@mariasilva.adv.br</p>
              </div>
              <div className="text-center">
                <div className="bg-legal-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-legal-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-legal-text">Endereço</h3>
                <p className="text-legal-text/80">São Paulo, SP</p>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://wa.me/554891974158" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-legal-gold hover:bg-legal-gold-hover text-legal-dark px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                </svg>
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-legal-dark border-t border-legal-accent py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-legal-text/60">
            © 2024 Dra. Maria Silva - Advocacia Familiar • Este é um modelo demonstrativo criado pela CodeNode.AI
          </p>
        </div>
      </footer>
    </div>
  );
}