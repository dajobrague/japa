/**
 * Este archivo asegura que todas las dependencias críticas 
 * se carguen correctamente durante la compilación
 */

// Importaciones necesarias para asegurar que el módulo se cargue
import 'zod';
import '@hookform/resolvers/zod';
import 'react-hook-form';

// No necesita exportar nada, su propósito es solo asegurar
// que estas dependencias se incluyan en el bundle 