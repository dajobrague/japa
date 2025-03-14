import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// Importamos el shim para asegurar que las dependencias estén disponibles
import './shims'

console.log('Aplicación iniciando - Verificando carga...');

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error('Elemento root no encontrado');
  } else {
    console.log('Elemento root encontrado, renderizando App');
    createRoot(rootElement).render(<App />);
    console.log('App renderizada');
  }
} catch (error) {
  console.error('Error al renderizar la aplicación:', error);
}
