import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import ModeloAdvogado from "@/pages/modelo-advogado";
import ModeloAdvogada from "@/pages/modelo-advogada";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/modelo-advogado" component={ModeloAdvogado} />
      <Route path="/modelo-advogada" component={ModeloAdvogada} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
