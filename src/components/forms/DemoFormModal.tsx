// Archivo de respaldo - usar DemoFormModalBackup.tsx en su lugar
// Este archivo se mantiene como referencia pero no se usa en la compilación

import React from "react";
import DemoFormModalBackup from "./DemoFormModalBackup";

interface DemoFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoFormModal: React.FC<DemoFormModalProps> = (props) => {
  return <DemoFormModalBackup {...props} />;
};

export default DemoFormModal; 