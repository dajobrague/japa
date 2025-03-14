import React, { useState } from "react";
import { AlertTriangle, Calendar, Users, BarChart3, ChevronDown, ChevronUp, Info } from "lucide-react";

interface ScenarioControlsProps {
  currentScenario: string;
  onChange: (scenario: string) => void;
}

const ScenarioControls: React.FC<ScenarioControlsProps> = ({ 
  currentScenario, 
  onChange 
}) => {
  const [expandedScenario, setExpandedScenario] = useState<string | null>(null);
  
  // Scenario options with detailed descriptions
  const scenarios = [
    { 
      id: "normal", 
      name: "Normal Day", 
      icon: <BarChart3 className="h-5 w-5" />,
      description: "Typical weekday traffic patterns",
      details: "A standard weekday with moderate parking demand throughout the day. Peak hours are during the morning and evening rush hours with steady utilization during business hours.",
      impactDescription: "• Balanced parking availability throughout the day\n• Moderate turnover rate with average stay of 45 minutes\n• Typical revenue generation",
      gradientClass: "from-blue-100 to-blue-50",
      graphPattern: "bell-curve-moderate"
    },
    { 
      id: "high-traffic", 
      name: "High Traffic", 
      icon: <Users className="h-5 w-5" />,
      description: "Increased parking demand",
      details: "Heavy utilization across all parking areas with near-capacity conditions during peak hours. This scenario typically occurs during shopping seasons, special downtown events, or high business activity days.",
      impactDescription: "• Limited availability during peak hours\n• Higher violation rates as drivers struggle to find spots\n• Increased revenue potential but possible congestion issues",
      gradientClass: "from-orange-100 to-orange-50",
      graphPattern: "high-plateau"
    },
    { 
      id: "event", 
      name: "Event Mode", 
      icon: <Calendar className="h-5 w-5" />,
      description: "Special event with evening peak",
      details: "Models parking patterns during a major event such as a concert, sporting event, or festival. Characterized by a rapid increase in utilization followed by mass departure.",
      impactDescription: "• Sharp spike in demand for extended evening hours\n• Longer average stay times (2-4 hours)\n• Opportunity for premium event pricing",
      gradientClass: "from-purple-100 to-purple-50",
      graphPattern: "evening-spike"
    },
    { 
      id: "sensor-failure", 
      name: "Sensor Issues", 
      icon: <AlertTriangle className="h-5 w-5" />,
      description: "Some sensors reporting errors",
      details: "Simulates system behavior when a percentage of parking sensors are malfunctioning or reporting inaccurate data. This helps analyze system resilience and maintenance needs.",
      impactDescription: "• Data gaps in specific parking areas\n• Potential for false occupancy readings\n• Impacts system reliability and user experience",
      gradientClass: "from-red-100 to-red-50",
      graphPattern: "data-error"
    }
  ];
  
  // Find the currently selected scenario
  const activeScenario = scenarios.find(scenario => scenario.id === currentScenario) || scenarios[0];
  
  const toggleScenarioDetails = (scenarioId: string) => {
    if (expandedScenario === scenarioId) {
      setExpandedScenario(null);
    } else {
      setExpandedScenario(scenarioId);
    }
  };
  
  // Pattern SVG based on scenario type
  const renderPatternSVG = (pattern: string) => {
    switch(pattern) {
      case "bell-curve-moderate":
        return (
          <svg viewBox="0 0 100 40" className="h-10 w-full">
            <path
              d="M0,40 C20,40 20,10 50,10 C80,10 80,40 100,40"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
            />
          </svg>
        );
      case "high-plateau":
        return (
          <svg viewBox="0 0 100 40" className="h-10 w-full">
            <path
              d="M0,40 C10,40 15,5 30,5 L70,5 C85,5 90,40 100,40"
              fill="none"
              stroke="#f97316"
              strokeWidth="2"
            />
          </svg>
        );
      case "evening-spike":
        return (
          <svg viewBox="0 0 100 40" className="h-10 w-full">
            <path
              d="M0,40 C30,40 30,40 60,30 C65,5 70,5 75,30 C80,40 90,40 100,40"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="2"
            />
          </svg>
        );
      case "data-error":
        return (
          <svg viewBox="0 0 100 40" className="h-10 w-full">
            <path
              d="M0,40 C10,40 15,20 20,20 L25,35 L35,15 L40,30 L50,10 L60,40 L70,5 L75,25 L85,15 L90,30 L95,20 L100,40"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              strokeDasharray="3,1"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="rounded-lg shadow-sm overflow-hidden">
      {/* Active scenario display */}
      <div className={`bg-gradient-to-r ${activeScenario.gradientClass} p-4 border-b border-gray-100`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentScenario === 'normal' ? 'bg-blue-100 text-blue-600' : 
              currentScenario === 'high-traffic' ? 'bg-orange-100 text-orange-600' :
              currentScenario === 'event' ? 'bg-purple-100 text-purple-600' :
              'bg-red-100 text-red-600'
            }`}>
              {activeScenario.icon}
            </div>
            <div>
              <h3 className="font-semibold text-japa-slate">{activeScenario.name}</h3>
              <p className="text-xs text-japa-slate/70">{activeScenario.description}</p>
            </div>
          </div>
          <div className="text-xs flex items-center text-japa-slate/70">
            <Info size={14} className="mr-1" />
            <span>Scenario</span>
          </div>
        </div>
        
        {/* Pattern visualization */}
        <div className="mt-3">
          {renderPatternSVG(activeScenario.graphPattern)}
        </div>
      </div>
      
      <div className="p-4 bg-white">
        {/* Scenario selector */}
        <div className="mb-3">
          <h4 className="text-sm font-medium text-japa-slate mb-2">Select Simulation Scenario</h4>
          <div className="grid grid-cols-2 gap-3">
            {scenarios.map(scenario => (
              <div key={scenario.id} className="relative">
                <button
                  onClick={() => onChange(scenario.id)}
                  className={`
                    w-full flex flex-col items-center text-center p-3 rounded-lg border
                    transition-all
                    ${currentScenario === scenario.id 
                      ? 'border-2 border-japa-blue bg-japa-blue/5' 
                      : 'border-gray-200 bg-white hover:bg-gray-50'
                    }
                  `}
                >
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center mb-1
                    ${currentScenario === scenario.id 
                      ? (
                        scenario.id === 'normal' ? 'bg-blue-100 text-blue-600' : 
                        scenario.id === 'high-traffic' ? 'bg-orange-100 text-orange-600' :
                        scenario.id === 'event' ? 'bg-purple-100 text-purple-600' :
                        'bg-red-100 text-red-600'
                      )
                      : 'bg-gray-100 text-gray-500'
                    }
                  `}>
                    {scenario.icon}
                  </div>
                  <span className={`text-sm font-medium ${currentScenario === scenario.id ? 'text-japa-blue' : 'text-japa-slate'}`}>
                    {scenario.name}
                  </span>
                </button>
                
                {/* Info button to expand scenario details */}
                <button 
                  onClick={() => toggleScenarioDetails(scenario.id)}
                  className="absolute -right-1 -bottom-1 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center"
                  title={expandedScenario === scenario.id ? "Hide details" : "Show details"}
                >
                  {expandedScenario === scenario.id ? (
                    <ChevronUp size={14} />
                  ) : (
                    <ChevronDown size={14} />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Expanded scenario details */}
        {expandedScenario && (
          <div className="mt-4 p-3 bg-gray-50 rounded-lg text-sm">
            <h5 className="font-medium text-japa-slate mb-2">
              {scenarios.find(s => s.id === expandedScenario)?.name} Details
            </h5>
            <p className="text-japa-slate/80 text-xs mb-2">
              {scenarios.find(s => s.id === expandedScenario)?.details}
            </p>
            <div className="text-xs text-japa-slate/80 whitespace-pre-line">
              <p className="font-medium text-japa-slate mb-1">Impact:</p>
              {scenarios.find(s => s.id === expandedScenario)?.impactDescription}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScenarioControls;
