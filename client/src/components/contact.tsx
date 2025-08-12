import { useState } from "react";
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

  return (
    <section id="contato" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-6 text-legal-text">
            Entre em <span className="text-legal-gold">Contato</span>
          </h2>
          <p className="text-xl text-legal-text/80 max-w-3xl mx-auto">
            Pronto para modernizar seu escritório? Fale conosco agora mesmo.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-merriweather font-semibold mb-8 text-legal-text">Fale Conosco</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-legal-gold rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-legal-dark" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-2.462-1.091-4.778-3.078-6.563-1.986-1.784-4.317-2.764-6.747-2.766-5.435 0-9.886 4.439-9.889 9.882-.002 2.003.596 3.986 1.727 5.795l.232.378-1.13 4.133 4.236-1.118.368.552z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-legal-text">WhatsApp</p>
                  <a 
                    href="https://wa.me/5548919741588" 
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
                  <svg className="w-6 h-6 text-legal-dark" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
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
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-legal-gold rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-legal-dark" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-legal-text">Instagram</p>
                  <a 
                    href="https://www.instagram.com/codenode.ai/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-legal-gold hover:text-legal-gold-hover transition-colors"
                  >
                    @codenode.ai
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/5548919741588" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-legal-gold hover:bg-legal-gold-hover text-legal-dark px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                WhatsApp
              </a>
              <a 
                href="https://www.instagram.com/codenode.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-legal-gold text-legal-gold hover:bg-legal-gold hover:text-legal-dark px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Instagram
              </a>
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
