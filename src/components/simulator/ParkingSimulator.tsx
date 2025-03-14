import React, { useState, useEffect, useCallback } from "react";
import ParkingMap from "./ParkingMap";
import TimeSlider from "./TimeSlider";
import AnalyticsPanel from "./AnalyticsPanel";
import ScenarioControls from "./ScenarioControls";
import { generateParkingData, ParkingSpot, TimeData } from "./simulatorData";
import { Info } from "lucide-react";

const ParkingSimulator = () => {
  const [currentTime, setCurrentTime] = useState<number>(9); // 9 AM default
  const [scenario, setScenario] = useState<string>("normal");
  const [parkingData, setParkingData] = useState<ParkingSpot[]>([]);
  const [timeData, setTimeData] = useState<TimeData[]>([]);
  const [selectedSpot, setSelectedSpot] = useState<ParkingSpot | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [simulationSpeed, setSimulationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Generate initial parking data
  useEffect(() => {
    const { spots, timeData } = generateParkingData(scenario);
    setParkingData(spots);
    setTimeData(timeData);
  }, [scenario]);

  // Update parking data when time changes
  useEffect(() => {
    if (timeData.length > 0) {
      // Find the data for the current time
      const currentTimeData = timeData.find(data => data.hour === currentTime);
      
      if (currentTimeData) {
        // Update each parking spot's occupied status based on the current time
        const updatedSpots = parkingData.map(spot => ({
          ...spot,
          isOccupied: currentTimeData.occupiedSpots.includes(spot.id)
        }));
        
        setParkingData(updatedSpots);
      }
    }
  }, [currentTime, timeData, parkingData]);

  // Auto-play effect with speed control
  useEffect(() => {
    let interval: number | null = null;
    
    if (isPlaying) {
      // Set interval based on simulation speed
      const intervalTime = simulationSpeed === 'slow' ? 4000 : 
                         simulationSpeed === 'fast' ? 1000 : 2000;
      
      interval = window.setInterval(() => {
        setCurrentTime(prevTime => {
          const nextTime = prevTime >= 23 ? 0 : prevTime + 1;
          return nextTime;
        });
      }, intervalTime);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, simulationSpeed]);

  const handleSpotClick = (spot: ParkingSpot) => {
    setSelectedSpot(spot === selectedSpot ? null : spot);
  };

  const handleScenarioChange = (newScenario: string) => {
    setScenario(newScenario);
    setSelectedSpot(null);
  };
  
  const handleSimulationSpeedChange = useCallback((speed: 'slow' | 'normal' | 'fast') => {
    setSimulationSpeed(speed);
  }, []);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 w-full max-w-full">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Main content - Parking Map */}
        <div className="lg:w-1/2 p-4 md:p-6 transition-all duration-300">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm font-medium text-japa-slate/70 flex items-center">
              <span className="bg-japa-orange/10 px-3 py-1.5 rounded-full border border-japa-orange/10">
                Current Time: {currentTime}:00 {currentTime >= 12 ? 'PM' : 'AM'}
              </span>
              <span className="ml-2 bg-japa-blue/10 px-3 py-1.5 rounded-full border border-japa-blue/10">
                {scenario === "high-traffic" ? "High Traffic" : scenario === "event" ? "Event" : scenario === "sensor-failure" ? "Sensor Failure" : "Normal"}
                {isPlaying && (
                  <span className="ml-1 text-xs">
                    {simulationSpeed === 'slow' ? '(0.5x)' : simulationSpeed === 'fast' ? '(2x)' : '(1x)'}
                  </span>
                )}
              </span>
            </div>
            <div className="text-xs text-japa-blue/70 cursor-help flex items-center">
              <Info className="mr-1 h-4 w-4" /> Click on a parking space to see details
            </div>
          </div>
          
          <div className="bg-japa-gray/5 rounded-xl p-4 border border-gray-100 mb-4 shadow-sm">
            <ParkingMap 
              parkingSpots={parkingData}
              selectedSpot={selectedSpot}
              onSpotClick={handleSpotClick}
            />
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <TimeSlider 
              currentTime={currentTime} 
              onChange={setCurrentTime}
              isPlaying={isPlaying}
              onPlayToggle={() => setIsPlaying(!isPlaying)}
              simulationSpeed={simulationSpeed}
              onSimulationSpeedChange={handleSimulationSpeedChange}
            />
            
            <ScenarioControls 
              currentScenario={scenario}
              onChange={handleScenarioChange}
            />
          </div>
        </div>
        
        {/* Analytics Panel */}
        <div className="lg:w-1/2 border-t lg:border-t-0 lg:border-l border-gray-200 transition-all duration-300">
          <div className="w-full h-full bg-japa-gray/5">
            <AnalyticsPanel 
              parkingSpots={parkingData}
              selectedSpot={selectedSpot}
              setSelectedSpot={setSelectedSpot}
              currentTime={currentTime}
              scenario={scenario}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingSimulator;
