import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import DemoFormProvider from "./contexts/DemoFormContext";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import UseCases from "./pages/UseCases";
import CaseStudies from "./pages/CaseStudies";
import Partners from "./pages/Partners";
import About from "./pages/About";
import FAQs from "./pages/FAQs";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => {
  // Obtener la URL base del entorno para manejar las rutas correctamente
  const isProduction = import.meta.env.PROD;
  const basename = isProduction ? '/' : '/';
  
  console.log('Entorno:', isProduction ? 'producción' : 'desarrollo');
  console.log('Basename configurado:', basename);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <DemoFormProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={basename}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/use-cases" element={<UseCases />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/about" element={<About />} />
              <Route path="/faqs" element={<FAQs />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </DemoFormProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
