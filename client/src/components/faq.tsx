import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "Quando recebo a prévia?",
      answer: "Para o Site Essencial, a prévia é entregue em 48h úteis. Para o Site com IA no WhatsApp, em 72h úteis após confirmação do pagamento da entrada."
    },
    {
      question: "Quando o site vai ao ar?",
      answer: "O Site Essencial vai ao ar 48h após aprovação da prévia. O Site com IA no WhatsApp vai ao ar após 3 dias de testes e aprovação final."
    },
    {
      question: "Preciso ter domínio?",
      answer: "Você pode fornecer seu próprio domínio ou a CodeNode pode registrar um novo para você (custo adicional conforme tabela de registro)."
    },
    {
      question: "Quando começa a mensalidade?",
      answer: "A mensalidade começa a ser cobrada 30 dias após o site estar no ar. O primeiro mês é totalmente grátis em ambos os planos."
    },
    {
      question: "Qual a diferença dos planos?",
      answer: "O Site Essencial inclui apenas o botão WhatsApp. O Site com IA no WhatsApp inclui atendimento automatizado 24/7, triagem de leads e agendamento de consultas."
    },
    {
      question: "O que inclui a manutenção do agente?",
      answer: "Inclui ajustes no fluxo de conversa, atualizações do agente, monitoramento 24/7 e suporte técnico."
    },
    {
      question: "O código é meu?",
      answer: "Sim. Se no futuro quiser levar para outra hospedagem, entregamos o código fonte completo. Você tem total propriedade do seu site."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-16 px-4 bg-legal-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-6 text-legal-text">
            Perguntas <span className="text-legal-gold">Frequentes</span>
          </h2>
          <p className="text-xl text-legal-text/80 max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e processos.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Collapsible key={index} open={openItems.includes(index)}>
              <div className="bg-legal-dark/50 rounded-xl border border-legal-accent">
                <CollapsibleTrigger 
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-legal-accent/20 transition-colors text-legal-text"
                >
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform ${openItems.includes(index) ? 'rotate-180' : ''}`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6">
                  <p className="text-legal-text/80">{faq.answer}</p>
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
}