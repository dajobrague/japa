import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, HashRouter } from "react-router-dom";
import DemoFormProvider from "./contexts/DemoFormContext";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import UseCases from "./pages/UseCases";
import Projects from "./pages/Projects";
import Partners from "./pages/Partners";
import About from "./pages/About";
import FAQs from "./pages/FAQs";
import Press from "./pages/Press";
import PressAdmin from "./pages/PressAdmin";
import NotFound from "./pages/NotFound";
import { Test } from "./pages/Test";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState, type ReactNode } from "react";

// Crear un cliente de consulta con opciones de retry
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      retryDelay: 1000,
      staleTime: 5 * 60 * 1000, // 5 minutos
    },
  },
});

interface ErrorFallbackProps {
  error: Error;
}

// ErrorBoundary para capturar errores de renderizado
const ErrorFallback = ({ error }: ErrorFallbackProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Algo salió mal</h2>
        <p className="text-gray-700 mb-4">
          Ha ocurrido un error al renderizar la aplicación:
        </p>
        <div className="bg-gray-100 p-4 rounded text-sm font-mono overflow-auto max-h-40">
          {error.message}
        </div>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Recargar página
        </button>
      </div>
    </div>
  );
};

interface ErrorBoundaryProps {
  children: ReactNode;
}

// Componente que envuelve la aplicación con manejo de errores
const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const handleError = (error: Error) => {
      console.error("Error capturado en ErrorBoundary:", error);
      setHasError(true);
      setError(error);
    };

    const handlePromiseRejection = (event: PromiseRejectionEvent) => {
      handleError(event.reason instanceof Error ? event.reason : new Error(String(event.reason)));
    };

    window.addEventListener("error", (event) => handleError(event.error || new Error(event.message)));
    window.addEventListener("unhandledrejection", handlePromiseRejection);

    return () => {
      window.removeEventListener("error", (event) => handleError(event.error || new Error(event.message)));
      window.removeEventListener("unhandledrejection", handlePromiseRejection);
    };
  }, []);

  if (hasError && error) {
    return <ErrorFallback error={error} />;
  }

  return <>{children}</>;
};

const App = () => {
  // Obtener la URL base del entorno para manejar las rutas correctamente
  const isProduction = import.meta.env.PROD;
  const basename = isProduction ? './' : '/';
  
  console.log('Entorno:', isProduction ? 'producción' : 'desarrollo');
  console.log('BASE_URL:', import.meta.env.BASE_URL);
  console.log('Basename configurado:', basename);
  
  // Always use BrowserRouter for clean URLs
  const Router = BrowserRouter;
  
  useEffect(() => {
    console.log("App montada. El DOM debería estar renderizando.");
    
    // Verificar que los componentes de UI estén disponibles
    if (!Toaster) console.error("Toaster no está disponible");
    if (!Routes) console.error("Routes no está disponible");
    
    return () => {
      console.log("App desmontada.");
    };
  }, []);
  
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <DemoFormProvider>
            <Toaster />
            <Sonner />
            <Router>
              <div className="app-container">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path="/use-cases" element={<UseCases />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/partners" element={<Partners />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/faqs" element={<FAQs />} />
                  <Route path="/press" element={<Press />} />
                  <Route path="/press-admin" element={<PressAdmin />} />
                  <Route path="/test" element={<Test />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </Router>
          </DemoFormProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
