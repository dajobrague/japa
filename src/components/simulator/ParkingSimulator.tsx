import React, { useState, useEffect } from "react";
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
  }, [currentTime, timeData]);

  // Auto-play effect
  useEffect(() => {
    let interval: number | null = null;
    
    if (isPlaying) {
      interval = window.setInterval(() => {
        setCurrentTime(prevTime => {
          const nextTime = prevTime >= 23 ? 0 : prevTime + 1;
          return nextTime;
        });
      }, 2000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  const handleSpotClick = (spot: ParkingSpot) => {
    setSelectedSpot(spot === selectedSpot ? null : spot);
  };

  const handleScenarioChange = (newScenario: string) => {
    setScenario(newScenario);
    setSelectedSpot(null);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden">      
      <div className="flex flex-col lg:flex-row">
        {/* Left side - Parking Map */}
        <div className="w-full lg:w-2/3 p-4 md:p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm font-medium text-japa-slate/70 flex items-center">
              <span className="bg-japa-orange/10 px-3 py-1 rounded-full">
                Current Time: {currentTime}:00 {currentTime >= 12 ? 'PM' : 'AM'}
              </span>
            </div>
            <div className="text-xs text-japa-blue/70 cursor-help flex items-center">
              <Info className="mr-1 h-4 w-4" /> Click on a parking space to see details
            </div>
          </div>
          
          <div className="bg-japa-gray/5 rounded-xl p-4 border border-gray-100 mb-4">
            <ParkingMap 
              parkingSpots={parkingData}
              selectedSpot={selectedSpot}
              onSpotClick={handleSpotClick}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg border border-gray-100 p-4">
              <TimeSlider 
                currentTime={currentTime} 
                onChange={setCurrentTime}
                isPlaying={isPlaying}
                onPlayToggle={() => setIsPlaying(!isPlaying)}
              />
            </div>
            
            <div className="bg-white rounded-lg border border-gray-100 p-4">
              <ScenarioControls 
                currentScenario={scenario}
                onChange={handleScenarioChange}
              />
            </div>
          </div>
        </div>
        
        {/* Right side - Analytics */}
        <div className="w-full lg:w-1/3 border-t lg:border-t-0 lg:border-l border-gray-100 bg-japa-gray/5">
          <AnalyticsPanel 
            parkingData={parkingData}
            selectedSpot={selectedSpot}
            currentTime={currentTime}
            scenario={scenario}
          />
        </div>
      </div>
    </div>
  );
};

export default ParkingSimulator;
