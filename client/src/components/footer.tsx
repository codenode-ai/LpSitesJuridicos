export default function Footer() {
  return (
    <footer className="bg-legal-secondary/50 py-12 px-4 border-t border-legal-accent">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-legal-gold rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-legal-dark" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
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
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-2.462-1.091-4.778-3.078-6.563-1.986-1.784-4.317-2.764-6.747-2.766-5.435 0-9.886 4.439-9.889 9.882-.002 2.003.596 3.986 1.727 5.795l.232.378-1.13 4.133 4.236-1.118.368.552z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/codenode.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-legal-text hover:text-legal-gold transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
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
          <p className="text-legal-text/60">
            © 2024 CodeNode. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
