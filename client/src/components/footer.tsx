import { SiInstagram } from "react-icons/si";

export default function Footer() {
  // Official WhatsApp icon SVG
  const WhatsAppIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
    </svg>
  );

  return (
    <footer className="bg-legal-secondary/50 py-12 px-4 border-t border-legal-accent">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-merriweather font-bold text-legal-gold">CodeNode</span>
            </div>
            <p className="text-legal-text/70 mb-4">
              Transformando escritórios de advocacia com tecnologia de ponta e design profissional.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/5548919741588" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-legal-text hover:text-legal-gold transition-colors"
              >
                <WhatsAppIcon />
              </a>
              <a 
                href="https://www.instagram.com/codenode.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-legal-text hover:text-legal-gold transition-colors"
              >
                <SiInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-legal-text">Links Úteis</h4>
            <div className="space-y-2">
              <a href="#beneficios" className="block text-legal-text/70 hover:text-legal-gold transition-colors">
                Benefícios
              </a>
              <a href="#como-funciona" className="block text-legal-text/70 hover:text-legal-gold transition-colors">
                Como Funciona
              </a>
              <a href="#planos" className="block text-legal-text/70 hover:text-legal-gold transition-colors">
                Planos e Preços
              </a>
              <a href="#faq" className="block text-legal-text/70 hover:text-legal-gold transition-colors">
                FAQ
              </a>
            </div>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-legal-text">Informações Legais</h4>
            <div className="space-y-2">
              <a href="#" className="block text-legal-text/70 hover:text-legal-gold transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="block text-legal-text/70 hover:text-legal-gold transition-colors">
                Termos de Uso
              </a>
              <p className="text-sm text-legal-text/60 mt-4">
                Os serviços oferecidos pela CodeNode não constituem aconselhamento jurídico.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-legal-accent pt-8 text-center">
          <p className="text-legal-text/60">© 2025 CodeNode. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}