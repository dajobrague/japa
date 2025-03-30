import React, { createContext, useContext, useState } from 'react';
import HubSpotModal from '@/components/ui/HubSpotModal';

// Define the context type
type DemoFormContextType = {
  openDemoForm: () => void;
  closeDemoForm: () => void;
  isOpen: boolean;
};

// Create the context with a default value
const DemoFormContext = createContext<DemoFormContextType>({
  openDemoForm: () => {},
  closeDemoForm: () => {},
  isOpen: false,
});

// Hook to use the demo form context
export const useDemoForm = () => useContext(DemoFormContext);

// Provider component
export const DemoFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDemoForm = () => setIsOpen(true);
  const closeDemoForm = () => setIsOpen(false);

  return (
    <DemoFormContext.Provider value={{ openDemoForm, closeDemoForm, isOpen }}>
      {children}
      <HubSpotModal isOpen={isOpen} onClose={closeDemoForm} />
    </DemoFormContext.Provider>
  );
};

export default DemoFormProvider; 