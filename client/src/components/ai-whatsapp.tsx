import { Bot, Clock, Calendar, MessageCircle, Users, CheckCircle } from "lucide-react";

export default function AIWhatsApp() {
  return (
    <section id="ia-whatsapp" className="py-16 px-4 bg-legal-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-6 text-legal-text">
            IA no <span className="text-legal-gold">WhatsApp</span>
          </h2>
          <p className="text-xl text-legal-text/80 max-w-3xl mx-auto">
            Um assistente inteligente que revoluciona o atendimento do seu escritório, trabalhando 24 horas por dia, 7 dias por semana
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Conteúdo principal */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-legal-gold w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Bot className="w-6 h-6 text-legal-dark" />
              </div>
              <h3 className="text-2xl font-merriweather font-bold text-legal-text">
                Sua Secretária Digital
              </h3>
            </div>
            
            <p className="text-lg text-legal-text/90 mb-8 leading-relaxed">
              Nossa IA funciona como uma secretária experiente, capaz de automatizar completamente o primeiro contato com seus clientes. Ela faz a triagem inicial, coleta informações importantes e agenda consultas de forma autônoma, liberando seu tempo para focar no que realmente importa: o direito.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <MessageCircle className="w-6 h-6 text-legal-gold mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-legal-text mb-2">Atendimento Automatizado</h4>
                  <p className="text-legal-text/80 text-sm">Responde clientes instantaneamente, mesmo fora do horário comercial</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Users className="w-6 h-6 text-legal-gold mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-legal-text mb-2">Triagem Inteligente</h4>
                  <p className="text-legal-text/80 text-sm">Identifica o tipo de caso e qualifica leads automaticamente</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Calendar className="w-6 h-6 text-legal-gold mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-legal-text mb-2">Agendamento Autônomo</h4>
                  <p className="text-legal-text/80 text-sm">Agenda consultas conforme sua disponibilidade real</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-legal-gold mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-legal-text mb-2">24/7 Disponível</h4>
                  <p className="text-legal-text/80 text-sm">Nunca perde um cliente por falta de atendimento</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefícios em destaque */}
          <div className="bg-legal-dark/50 p-8 rounded-xl border border-legal-accent">
            <h4 className="text-xl font-merriweather font-bold mb-6 text-legal-text text-center">
              Resultados que você verá:
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-legal-gold mr-3 flex-shrink-0" />
                <span className="text-legal-text/90">Aumento de 60% na captura de leads</span>
              </div>
              
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-legal-gold mr-3 flex-shrink-0" />
                <span className="text-legal-text/90">Redução de 80% no tempo de triagem</span>
              </div>
              
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-legal-gold mr-3 flex-shrink-0" />
                <span className="text-legal-text/90">Atendimento 24 horas sem custo adicional</span>
              </div>
              
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-legal-gold mr-3 flex-shrink-0" />
                <span className="text-legal-text/90">Agenda sempre organizada e otimizada</span>
              </div>
              
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-legal-gold mr-3 flex-shrink-0" />
                <span className="text-legal-text/90">Clientes mais satisfeitos e bem atendidos</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-legal-gold/10 rounded-lg border border-legal-gold/20">
              <p className="text-legal-text/90 text-sm text-center">
                <strong className="text-legal-gold">Período de teste:</strong> 3 dias dedicados para configuração e ajustes da IA conforme seu escritório
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}