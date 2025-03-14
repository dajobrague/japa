
import React from "react";
import { AlertTriangle, Calendar, Users, BarChart3 } from "lucide-react";

interface ScenarioControlsProps {
  currentScenario: string;
  onChange: (scenario: string) => void;
}

const ScenarioControls: React.FC<ScenarioControlsProps> = ({ 
  currentScenario, 
  onChange 
}) => {
  // Scenario options
  const scenarios = [
    { 
      id: "normal", 
      name: "Normal Day", 
      icon: <BarChart3 className="h-4 w-4" />,
      description: "Typical weekday traffic patterns"
    },
    { 
      id: "high-traffic", 
      name: "High Traffic", 
      icon: <Users className="h-4 w-4" />,
      description: "Increased parking demand"
    },
    { 
      id: "event", 
      name: "Event Mode", 
      icon: <Calendar className="h-4 w-4" />,
      description: "Special event with evening peak"
    },
    { 
      id: "sensor-failure", 
      name: "Sensor Issues", 
      icon: <AlertTriangle className="h-4 w-4" />,
      description: "Some sensors reporting errors"
    }
  ];

  return (
    <div className="border border-gray-200 rounded-md p-4 bg-white">
      <h4 className="text-sm font-semibold text-japa-slate mb-3">Simulation Scenarios</h4>
      
      <div className="grid grid-cols-2 gap-2">
        {scenarios.map(scenario => (
          <button
            key={scenario.id}
            onClick={() => onChange(scenario.id)}
            className={`
              flex flex-col items-center justify-center p-3 rounded-md border text-sm
              transition-all
              ${currentScenario === scenario.id 
                ? 'bg-japa-blue text-white border-japa-blue' 
                : 'bg-white text-japa-slate hover:bg-japa-paleOrange/30 border-gray-200'
              }
            `}
          >
            <div className={`mb-1 ${currentScenario === scenario.id ? 'text-white' : 'text-japa-orange'}`}>
              {scenario.icon}
            </div>
            <span className="font-medium">{scenario.name}</span>
            <span className={`text-xs mt-1 ${currentScenario === scenario.id ? 'text-white/80' : 'text-gray-500'}`}>
              {scenario.description}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScenarioControls;
