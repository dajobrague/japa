import React, { useEffect } from "react";
import { X } from "lucide-react";
import ParkingSimulator from "./ParkingSimulator";

interface SimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SimulatorModal: React.FC<SimulatorModalProps> = ({ isOpen, onClose }) => {
  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Close modal when clicking outside content area
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-[90%] xl:max-w-[85%] 2xl:max-w-[80%] max-h-[95vh] overflow-hidden flex flex-col">
        {/* Modal header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          <h3 className="text-xl font-bold text-japa-slate">Smart Parking Simulator</h3>
          <button 
            onClick={onClose}
            className="text-japa-slate/60 hover:text-japa-slate transition-colors p-2 rounded-full hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Modal content */}
        <div className="flex-grow overflow-auto">
          <ParkingSimulator />
        </div>
      </div>
    </div>
  );
};

export default SimulatorModal; 