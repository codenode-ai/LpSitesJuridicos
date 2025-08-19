import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    escritorio: '',
    especialidade: '',
    whatsapp: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission - in a real app, you'd integrate with EmailJS or backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo seu interesse! Entraremos em contato em breve via WhatsApp.",
      });
      
      // Reset form
      setFormData({
        nome: '',
        escritorio: '',
        especialidade: '',
        whatsapp: '',
        mensagem: ''
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Official WhatsApp icon SVG
  const WhatsAppIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
    </svg>
  );

  return (
    <section id="contato" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-6 text-legal-text">
            Entre em <span className="text-legal-gold">Contato</span>
          </h2>
          <p className="text-xl text-legal-text/80 max-w-3xl mx-auto">
            Pronto para criar seu primeiro site? Fale conosco agora mesmo.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-merriweather font-semibold mb-8 text-legal-text">Fale Conosco</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-legal-gold rounded-full flex items-center justify-center">
                  <WhatsAppIcon />
                </div>
                <div>
                  <p className="font-semibold text-legal-text">WhatsApp</p>
                  <a 
                    href="https://wa.me/554891974158" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-legal-gold hover:text-legal-gold-hover transition-colors"
                  >
                    +55 48 9197-4158
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-legal-gold rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-legal-text">E-mail</p>
                  <a 
                    href="mailto:contato@codenode.com.br" 
                    className="text-legal-gold hover:text-legal-gold-hover transition-colors"
                  >
                    contato@codenode.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-legal-dark/50 p-8 rounded-xl border border-legal-accent">
            <h3 className="text-2xl font-merriweather font-semibold mb-6 text-legal-text">Solicite um Orçamento</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium mb-2 text-legal-text">
                  Nome Completo *
                </label>
                <Input
                  id="nome"
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) => handleInputChange('nome', e.target.value)}
                  className="bg-legal-dark border-legal-accent focus:border-legal-gold text-legal-text"
                />
              </div>
              
              <div>
                <label htmlFor="escritorio" className="block text-sm font-medium mb-2 text-legal-text">
                  Nome do Escritório *
                </label>
                <Input
                  id="escritorio"
                  type="text"
                  required
                  value={formData.escritorio}
                  onChange={(e) => handleInputChange('escritorio', e.target.value)}
                  className="bg-legal-dark border-legal-accent focus:border-legal-gold text-legal-text"
                />
              </div>
              
              <div>
                <label htmlFor="especialidade" className="block text-sm font-medium mb-2 text-legal-text">
                  Especialidade Jurídica
                </label>
                <Select value={formData.especialidade} onValueChange={(value) => handleInputChange('especialidade', value)}>
                  <SelectTrigger className="bg-legal-dark border-legal-accent focus:border-legal-gold text-legal-text">
                    <SelectValue placeholder="Selecione uma especialidade" />
                  </SelectTrigger>
                  <SelectContent className="bg-legal-dark border-legal-accent">
                    <SelectItem value="civil">Direito Civil</SelectItem>
                    <SelectItem value="criminal">Direito Criminal</SelectItem>
                    <SelectItem value="trabalhista">Direito Trabalhista</SelectItem>
                    <SelectItem value="tributario">Direito Tributário</SelectItem>
                    <SelectItem value="empresarial">Direito Empresarial</SelectItem>
                    <SelectItem value="familia">Direito de Família</SelectItem>
                    <SelectItem value="imobiliario">Direito Imobiliário</SelectItem>
                    <SelectItem value="consumidor">Direito do Consumidor</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium mb-2 text-legal-text">
                  WhatsApp *
                </label>
                <Input
                  id="whatsapp"
                  type="tel"
                  required
                  placeholder="(48) 99999-9999"
                  value={formData.whatsapp}
                  onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                  className="bg-legal-dark border-legal-accent focus:border-legal-gold text-legal-text"
                />
              </div>
              
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium mb-2 text-legal-text">
                  Mensagem
                </label>
                <Textarea
                  id="mensagem"
                  rows={4}
                  placeholder="Conte-nos sobre suas necessidades e expectativas..."
                  value={formData.mensagem}
                  onChange={(e) => handleInputChange('mensagem', e.target.value)}
                  className="bg-legal-dark border-legal-accent focus:border-legal-gold text-legal-text resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-legal-gold hover:bg-legal-gold-hover text-legal-dark font-semibold"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}