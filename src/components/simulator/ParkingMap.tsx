
import React from "react";
import { ParkingSpot } from "./simulatorData";
import { Car, BatteryCharging, AccessibilityIcon, AlertCircle } from "lucide-react";

interface ParkingMapProps {
  parkingSpots: ParkingSpot[];
  selectedSpot: ParkingSpot | null;
  onSpotClick: (spot: ParkingSpot) => void;
}

const ParkingMap: React.FC<ParkingMapProps> = ({ 
  parkingSpots, 
  selectedSpot,
  onSpotClick 
}) => {
  // Organize spots into rows and columns for display
  const parkingRows: ParkingSpot[][] = [];
  
  parkingSpots.forEach(spot => {
    if (!parkingRows[spot.row]) {
      parkingRows[spot.row] = [];
    }
    parkingRows[spot.row][spot.col] = spot;
  });
  
  return (
    <div className="border border-gray-200 rounded-lg p-2 bg-gray-50 mb-4">
      <div className="relative mb-2 px-4 py-2 bg-japa-slate text-white font-medium rounded-t-md text-center">
        JAPA Smart Parking Lot
      </div>
      
      <div className="overflow-x-auto">
        <div className="min-w-[600px] grid gap-1 p-4">
          {parkingRows.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="flex justify-center gap-1 mb-1">
              {row.map(spot => (
                <div 
                  key={`spot-${spot.id}`}
                  onClick={() => onSpotClick(spot)}
                  className={`
                    w-16 h-16 rounded border-2 flex items-center justify-center 
                    relative transition-all cursor-pointer
                    ${selectedSpot?.id === spot.id 
                      ? 'border-japa-blue shadow-md transform scale-110 z-10' 
                      : 'border-gray-300'
                    }
                    ${spot.isOccupied 
                      ? 'bg-japa-gray' 
                      : 'bg-white hover:bg-japa-paleOrange/30'
                    }
                    ${spot.sensorHealth < 50 ? 'border-red-300' : ''}
                  `}
                >
                  {/* Spot content */}
                  {spot.isOccupied ? (
                    <Car 
                      className={`
                        h-10 w-10 
                        ${spot.violations ? 'text-red-500 animate-pulse' : 'text-japa-orange'} 
                        ${spot.sensorHealth < 50 ? 'opacity-50' : ''}
                      `} 
                      fill={spot.violations ? "rgba(239, 68, 68, 0.2)" : "rgba(209, 88, 9, 0.1)"}
                    />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  )}
                  
                  {/* Special spot indicators */}
                  {spot.isHandicap && (
                    <div className="absolute top-0 right-0 bg-blue-500 p-0.5 rounded-bl-md">
                      <AccessibilityIcon className="h-3 w-3 text-white" />
                    </div>
                  )}
                  
                  {spot.isCharging && (
                    <div className="absolute top-0 left-0 bg-green-500 p-0.5 rounded-br-md">
                      <BatteryCharging className="h-3 w-3 text-white" />
                    </div>
                  )}
                  
                  {/* Violation indicator */}
                  {spot.violations ? (
                    <div className="absolute bottom-0 right-0 bg-red-500 text-white text-xs px-1 rounded-tl-md">
                      {spot.violations}
                    </div>
                  ) : null}
                  
                  {/* Sensor health indicator (only for unhealthy sensors) */}
                  {spot.sensorHealth < 50 && (
                    <div className="absolute bottom-0 left-0">
                      <AlertCircle className="h-3 w-3 text-red-500" />
                    </div>
                  )}
                  
                  {/* Spot number */}
                  <div className="absolute -top-3 -left-1 bg-gray-200 text-gray-600 text-xs px-1 rounded">
                    {spot.id}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Map Legend */}
      <div className="flex flex-wrap gap-4 text-xs text-gray-600 mt-2 justify-center border-t border-gray-200 pt-2">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center">
          <Car className="h-4 w-4 text-japa-orange mr-1" />
          <span>Occupied</span>
        </div>
        <div className="flex items-center">
          <Car className="h-4 w-4 text-red-500 mr-1" />
          <span>Violation</span>
        </div>
        <div className="flex items-center">
          <AccessibilityIcon className="h-4 w-4 text-blue-500 mr-1" />
          <span>Handicap</span>
        </div>
        <div className="flex items-center">
          <BatteryCharging className="h-4 w-4 text-green-500 mr-1" />
          <span>Charging</span>
        </div>
        <div className="flex items-center">
          <AlertCircle className="h-4 w-4 text-red-500 mr-1" />
          <span>Sensor Issue</span>
        </div>
      </div>
    </div>
  );
};

export default ParkingMap;
