import { ParkingSpot, TimeData } from "../simulatorData";

// Types for chart data and analytics
export interface HourlyDataPoint {
  hour: number;
  time: string;
  occupancy: number;
  available: number;
  avgStay: number;
  turnover: number;
  revenue: number;
  violations: number;
}

export interface HistoricalDataPoint {
  day: string;
  occupancy: number;
  available: number;
  avgStay: number;
  utilization: number;
  peak: number;
  peakTime: string;
}

export interface ExtendedParkingSpot extends ParkingSpot {
  type: string;
}

export interface ReferenceLineProps {
  x: any;
  y?: any;  // Make y optional
  stroke: string;
  strokeWidth?: number;
}

// Helper functions
export const formatTime = (hour: number): string => {
  const period = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;
  return `${displayHour}:00 ${period}`;
};

export const getSpotType = (spot: ParkingSpot): string => {
  if ((spot as ExtendedParkingSpot).type) {
    return (spot as ExtendedParkingSpot).type;
  }
  return spot.isHandicap ? "Handicap" : spot.isCharging ? "Charging" : "Standard";
};

export const getCurrentDay = (): string => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayIndex = new Date().getDay();
  return days[dayIndex];
};

// Data generation functions
export const generateHourlyData = (scenario: string): HourlyDataPoint[] => {
  return Array.from({ length: 24 }, (_, i) => {
    const baseOccupancy = 
      scenario === "normal" ? 
        (i >= 8 && i <= 17 ? 50 + Math.floor(Math.random() * 30) : 20 + Math.floor(Math.random() * 20)) : 
      scenario === "high-traffic" ? 
        (i >= 7 && i <= 19 ? 70 + Math.floor(Math.random() * 25) : 40 + Math.floor(Math.random() * 20)) :
      scenario === "event" ? 
        (i >= 18 && i <= 22 ? 85 + Math.floor(Math.random() * 15) : 30 + Math.floor(Math.random() * 30)) : 
        (i >= 9 && i <= 16 ? 45 + Math.floor(Math.random() * 15) : 20 + Math.floor(Math.random() * 15));
    
    // Calculate average stay duration in minutes
    const baseStay = 
      scenario === "normal" ? 60 + Math.floor(Math.random() * 60) :
      scenario === "high-traffic" ? 90 + Math.floor(Math.random() * 90) :
      scenario === "event" ? 180 + Math.floor(Math.random() * 60) :
      45 + Math.floor(Math.random() * 45);
    
    // Calculate turnover rate (cars per hour per 100 spots)
    const baseTurnover = 
      scenario === "normal" ? 15 + Math.floor(Math.random() * 10) :
      scenario === "high-traffic" ? 20 + Math.floor(Math.random() * 15) :
      scenario === "event" ? 5 + Math.floor(Math.random() * 5) :
      12 + Math.floor(Math.random() * 8);
      
    const occupancy = baseOccupancy - (scenario === "sensor-failure" && i > 12 ? 5 + Math.floor(Math.random() * 10) : 0);
    
    return {
      hour: i,
      time: `${i % 12 || 12}${i < 12 ? 'am' : 'pm'}`,
      occupancy: occupancy,
      available: 100 - occupancy,
      avgStay: baseStay,
      turnover: baseTurnover,
      revenue: baseOccupancy * 2.5 + Math.floor(Math.random() * 50),
      violations: Math.floor(Math.random() * (scenario === "high-traffic" ? 8 : 3))
    };
  });
};

export const generateHistoricalData = (scenario: string): HistoricalDataPoint[] => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return days.map((day, index) => {
    const isWeekend = index >= 5;
    const baseOccupancy = 
      scenario === "normal" ? 
        (isWeekend ? 40 + Math.floor(Math.random() * 20) : 60 + Math.floor(Math.random() * 25)) : 
      scenario === "high-traffic" ? 
        (isWeekend ? 50 + Math.floor(Math.random() * 25) : 75 + Math.floor(Math.random() * 15)) :
      scenario === "event" ? 
        (day === 'Friday' || day === 'Saturday' ? 85 + Math.floor(Math.random() * 15) : 55 + Math.floor(Math.random() * 25)) : 
        (isWeekend ? 35 + Math.floor(Math.random() * 20) : 55 + Math.floor(Math.random() * 20));
        
    return {
      day,
      occupancy: baseOccupancy,
      available: 100 - baseOccupancy,
      avgStay: (scenario === "event" && (day === 'Friday' || day === 'Saturday') ? 180 : 75) + Math.floor(Math.random() * 45),
      utilization: baseOccupancy + Math.floor(Math.random() * 10),
      peak: baseOccupancy + 10 + Math.floor(Math.random() * 15),
      peakTime: isWeekend ? `${1 + Math.floor(Math.random() * 5)}pm` : `${8 + Math.floor(Math.random() * 5)}am`
    };
  });
};

export const calculateRevenue = (totalSpots: number, occupancyRate: number, scenario: string): number => {
  const baseRate = 2.5; // $2.50 per hour
  const currentOccupancy = occupancyRate / 100;
  const hourlyRevenue = totalSpots * currentOccupancy * baseRate;
  
  // Add some variability based on scenario
  const multiplier = 
    scenario === "high-traffic" ? 1.3 :
    scenario === "event" ? 1.5 :
    scenario === "sensor-failure" ? 0.8 :
    1.0;
    
  return Math.round(hourlyRevenue * multiplier);
};

// Colors for charts - using JAPA color scheme with more orange
export const CHART_COLORS = {
  primary: '#F97316',    // Orange (main color)
  secondary: '#FB923C',  // Light Orange 
  tertiary: '#EA580C',   // Dark Orange
  quaternary: '#FDBA74', // Very Light Orange
  gray: '#9CA3AF',
  background: '#FFF7ED',  // Orange-tinted background
  grid: '#FFEDD5'         // Light orange grid
};

export const getScenarioDescription = (scenario: string): string => {
  switch(scenario) {
    case "normal":
      return "Normal traffic pattern with typical morning and evening peaks.";
    case "high-traffic":
      return "High traffic scenario with sustained occupancy during business hours.";
    case "event":
      return "Event scenario with evening traffic peak and prolonged parking durations.";
    case "sensor-failure":
      return "Sensor failure affecting data reliability after midday.";
    default:
      return "Standard parking patterns throughout the day.";
  }
}; 