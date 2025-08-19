import { ArrowLeft, Phone, Mail, MapPin, Scale, Users, FileText, Clock } from "lucide-react";
import { Link } from "wouter";

export default function ModeloAdvogado() {
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
              Dr. João Santos
            </h1>
            <p className="text-xl md:text-2xl text-legal-text/80 mb-8">
              <span className="text-legal-gold">Advogado Criminalista</span> • OAB/SP 123.456
            </p>
            <p className="text-lg text-legal-text/70 mb-12 max-w-3xl mx-auto">
              Mais de 15 anos de experiência em direito criminal, defendendo seus direitos com dedicação e competência técnica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5534996670069" 
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
              O escritório do Dr. João Santos é especializado em direito criminal, oferecendo defesa técnica qualificada em todas as fases do processo penal. Nossa atuação é pautada pela ética, transparência e busca incansável pela justiça.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-legal-gold mb-2">15+</div>
                <p className="text-legal-text/80">Anos de Experiência</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-legal-gold mb-2">500+</div>
                <p className="text-legal-text/80">Casos Atendidos</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-legal-gold mb-2">95%</div>
                <p className="text-legal-text/80">Taxa de Sucesso</p>
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
              { icon: <Scale className="w-8 h-8" />, title: "Crimes Contra a Pessoa", description: "Defesa em casos de homicídio, lesão corporal e ameaça" },
              { icon: <FileText className="w-8 h-8" />, title: "Crimes Patrimoniais", description: "Furto, roubo, estelionato e crimes contra o patrimônio" },
              { icon: <Users className="w-8 h-8" />, title: "Crimes de Trânsito", description: "Embriaguez ao volante e homicídio culposo no trânsito" },
              { icon: <Clock className="w-8 h-8" />, title: "Habeas Corpus", description: "Medidas de urgência para garantir a liberdade" },
              { icon: <Scale className="w-8 h-8" />, title: "Recursos", description: "Apelações e recursos em todas as instâncias" },
              { icon: <FileText className="w-8 h-8" />, title: "Júri Popular", description: "Defesa especializada no Tribunal do Júri" }
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

      {/* Sobre o Advogado */}
      <section className="py-16 px-4 bg-legal-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-8 text-center text-legal-text">
              Sobre o <span className="text-legal-gold">Advogado</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-legal-text/90 leading-relaxed mb-6">
                  Dr. João Santos é graduado em Direito pela Universidade de São Paulo (USP) e possui especialização em Direito Criminal pela Escola Paulista da Magistratura.
                </p>
                <p className="text-lg text-legal-text/90 leading-relaxed">
                  Com mais de 15 anos de experiência, atua em casos de alta complexidade, sempre priorizando a defesa técnica qualificada e o atendimento humanizado ao cliente.
                </p>
              </div>
              <div className="bg-legal-dark/50 p-8 rounded-xl border border-legal-accent">
                <h3 className="text-xl font-merriweather font-semibold mb-4 text-legal-text">Formação</h3>
                <ul className="space-y-2 text-legal-text/80">
                  <li>• Graduação em Direito - USP</li>
                  <li>• Pós-graduação em Direito Criminal - EPM</li>
                  <li>• Curso de Oratória Jurídica</li>
                  <li>• Membro da Associação Brasileira de Criminalistas</li>
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
              { title: "Atendimento Personalizado", description: "Cada caso recebe atenção dedicada e estratégia específica" },
              { title: "Transparência Total", description: "Comunicação clara sobre o andamento de todos os processos" },
              { title: "Disponibilidade", description: "Contato direto via WhatsApp para urgências" },
              { title: "Experiência Comprovada", description: "Mais de 15 anos atuando em direito criminal" },
              { title: "Ética Profissional", description: "Conduta sempre pautada pelos valores da advocacia" },
              { title: "Resultados Efetivos", description: "Alta taxa de sucesso em defesas criminais" }
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

      {/* Contato */}
      <section className="py-16 px-4 bg-legal-secondary/30">
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
                <p className="text-legal-text/80">(34) 9 9667-0069</p>
              </div>
              <div className="text-center">
                <div className="bg-legal-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-legal-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-legal-text">Email</h3>
                <p className="text-legal-text/80">contato@joaosantos.adv.br</p>
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
                href="https://wa.me/5534996670069" 
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
            © 2024 Dr. João Santos - Advocacia Criminal • Este é um modelo demonstrativo criado pela CodeNode.AI
          </p>
        </div>
      </footer>
    </div>
  );
}