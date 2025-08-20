import Header from "../components/header";
import Hero from "../components/hero";
import Benefits from "../components/benefits";
import HowItWorks from "../components/how-it-works";
import AIWhatsApp from "../components/ai-whatsapp";
import Plans from "../components/plans";
import Models from "../components/models";
import About from "../components/about";
import FAQ from "../components/faq";
import Contact from "../components/contact";
import Footer from "../components/footer";
import FloatingWhatsApp from "../components/floating-whatsapp";

export default function Home() {
  return (
    <div className="min-h-screen bg-legal-dark">
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
      <AIWhatsApp />
      <Plans />
      <Models />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
