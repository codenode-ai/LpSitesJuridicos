import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function Models() {
  return (
    <section id="modelos" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-6 text-legal-text">
            Nosso <span className="text-legal-gold">Modelo</span>
          </h2>
          <p className="text-xl text-legal-text/80 max-w-3xl mx-auto">
            Confira nosso template profissional, adaptado para representar você e seu escritório
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {/* Modelo Dr. Valter */}
          <Card className="bg-legal-dark/50 border-legal-accent hover:border-legal-gold transition-colors">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-merriweather text-legal-text">
                Modelo Dr. Valter
              </CardTitle>
              <CardDescription className="text-legal-text/80">
                Design elegante com paleta de cores escura, ideal para transmitir seriedade, profissionalismo e confiança. Perfeito para advogados que buscam uma imagem sólida e respeitada no mercado.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                asChild
                className="bg-legal-gold hover:bg-legal-gold-hover text-legal-dark px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <a 
                  href="https://seusitejuridico.codenode.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver o modelo
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}