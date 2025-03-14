import React, { useState, useEffect } from "react";
import { ParkingSpot } from "./simulatorData";
import { Activity, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from '@/components/ui/button';
import { HourlyDataPoint, HistoricalDataPoint, generateHourlyData, generateHistoricalData, ExtendedParkingSpot as AnalyticsExtendedParkingSpot, getSpotType } from './analytics/analyticsUtils';

// Import individual chart components
import OccupancySummary from './analytics/OccupancySummary';
import HourlyTrendChart from './analytics/HourlyTrendChart';
import WeeklyPerformanceChart from './analytics/WeeklyPerformanceChart';
import TurnoverRateChart from './analytics/TurnoverRateChart';
import StayDurationChart from './analytics/StayDurationChart';
import RevenueChart from './analytics/RevenueChart';
import SpotDetailView from './analytics/SpotDetailView';

export interface AnalyticsPanelProps {
  parkingSpots: ParkingSpot[];
  selectedSpot: ParkingSpot | null;
  currentTime: number;
  scenario: string;
  setSelectedSpot: (spot: ParkingSpot | null) => void;
}

const AnalyticsPanel: React.FC<AnalyticsPanelProps> = ({
  parkingSpots,
  selectedSpot,
  currentTime,
  scenario,
  setSelectedSpot
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hourlyData, setHourlyData] = useState<HourlyDataPoint[]>([]);
  const [historicalData, setHistoricalData] = useState<HistoricalDataPoint[]>([]);
  const [spotTimeHistory, setSpotTimeHistory] = useState<Array<{ time: string; status: string; duration?: number }>>([]);
  const [spotDetailError, setSpotDetailError] = useState<boolean>(false);
  
  // Generate mock data for trends
  useEffect(() => {
    // Generate data for charts
    const generatedHourlyData = generateHourlyData(scenario);
    const generatedHistoricalData = generateHistoricalData(scenario);
    
    console.log('Generated hourly data:', generatedHourlyData);
    console.log('Generated historical data:', generatedHistoricalData);
    
    setHourlyData(generatedHourlyData);
    setHistoricalData(generatedHistoricalData);
  }, [scenario]);

  useEffect(() => {
    // Reset error state when selected spot changes
    setSpotDetailError(false);
    
    // Generate spot time history data for selected spot
    if (selectedSpot) {
      try {
        const historyData = Array.from({ length: 24 }, (_, i) => {
          const isOccupied = Math.random() > 0.4;
          return {
            time: `${i % 12 || 12}${i < 12 ? 'am' : 'pm'}`,
            status: isOccupied ? 'occupied' : 'available',
            duration: isOccupied ? Math.floor(20 + Math.random() * 100) : undefined
          };
        });
        setSpotTimeHistory(historyData);
      } catch (error) {
        console.error("Error generating spot time history:", error);
        setSpotDetailError(true);
        setSpotTimeHistory([]);
      }
    } else {
      // Clear history when no spot is selected
      setSpotTimeHistory([]);
    }
  }, [selectedSpot]);

  // Calculate total and occupied spots
  const totalSpots = parkingSpots.length;
  const occupiedSpots = parkingSpots.filter(spot => spot.isOccupied).length;
  const availableSpots = totalSpots - occupiedSpots;
  const occupancyRate = Math.round((occupiedSpots / totalSpots) * 100);
  
  // Convert regular ParkingSpot to ExtendedParkingSpot for the SpotDetailView
  const extendedSelectedSpot = selectedSpot ? {
    ...selectedSpot,
    type: selectedSpot.isHandicap ? "Handicap" : selectedSpot.isCharging ? "Charging" : "Standard"
  } : null;
  
  const renderSpotDetailView = () => {
    if (spotDetailError) {
      return (
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg border border-red-100 shadow-sm p-4 min-h-[200px] flex items-center justify-center">
            <p className="text-red-400 text-sm">Error loading spot details. Please try selecting a different spot.</p>
          </div>
        </div>
      );
    }
    
    return (
      <div className="md:col-span-2">
        <SpotDetailView 
          selectedSpot={extendedSelectedSpot as AnalyticsExtendedParkingSpot | null} 
          spotTimeHistory={spotTimeHistory} 
        />
      </div>
    );
  };
  
  return (
    <div className="bg-gray-50 border-t border-gray-200 shadow-inner">
      <div className="w-full px-4 py-3">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold flex items-center">
            <Activity className="h-5 w-5 mr-2" />
            Parking Analytics
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-gray-500 hover:text-gray-700"
          >
            {isCollapsed ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronUp className="h-5 w-5" />
            )}
          </Button>
        </div>

        {!isCollapsed && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {renderSpotDetailView()}
            
            <OccupancySummary 
              occupiedSpots={occupiedSpots} 
              availableSpots={availableSpots} 
              occupancyRate={occupancyRate} 
            />
            
            <HourlyTrendChart 
              hourlyData={hourlyData} 
              currentTime={currentTime} 
              scenario={scenario} 
            />
            
            <WeeklyPerformanceChart 
              historicalData={historicalData} 
            />
            
            <TurnoverRateChart 
              hourlyData={hourlyData} 
              currentTime={currentTime} 
            />
            
            <StayDurationChart 
              hourlyData={hourlyData} 
              currentTime={currentTime} 
              scenario={scenario} 
            />
            
            <RevenueChart 
              hourlyData={hourlyData} 
              currentTime={currentTime} 
              scenario={scenario} 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsPanel;
