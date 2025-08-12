export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href="https://wa.me/5548919741588" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-legal-gold hover:bg-legal-gold-hover text-legal-dark w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-2.462-1.091-4.778-3.078-6.563-1.986-1.784-4.317-2.764-6.747-2.766-5.435 0-9.886 4.439-9.889 9.882-.002 2.003.596 3.986 1.727 5.795l.232.378-1.13 4.133 4.236-1.118.368.552z"/>
        </svg>
      </a>
    </div>
  );
}
