
// Types for our parking simulator
export interface ParkingSpot {
  id: number;
  row: number;
  col: number;
  isOccupied: boolean;
  isHandicap?: boolean;
  isCharging?: boolean;
  sensorHealth: number; // 0-100%
  averageStayTime: number; // in minutes
  occupancyRate: number; // 0-1
  violations?: number;
}

export interface TimeData {
  hour: number;
  occupiedSpots: number[];
  occupancyRate: number;
  violations: number;
}

// Function to generate random parking data
export const generateParkingData = (scenario: string = "normal") => {
  const totalSpots = 40;
  const spots: ParkingSpot[] = [];
  const timeData: TimeData[] = [];
  
  // Constants based on scenario
  let peakOccupancyTime = 12; // noon
  let peakOccupancyRate = 0.8;
  let violationRate = 0.05;
  let sensorFailureRate = 0.01;
  let longStayRate = 0.2;
  
  // Adjust parameters based on scenario
  switch (scenario) {
    case "high-traffic":
      peakOccupancyRate = 0.95;
      violationRate = 0.15;
      break;
    case "event":
      peakOccupancyTime = 19; // 7 PM
      peakOccupancyRate = 0.9;
      longStayRate = 0.4;
      break;
    case "sensor-failure":
      sensorFailureRate = 0.15;
      break;
  }
  
  // Generate parking spots
  for (let i = 0; i < totalSpots; i++) {
    const row = Math.floor(i / 8);
    const col = i % 8;
    
    spots.push({
      id: i + 1,
      row,
      col,
      isOccupied: Math.random() < 0.5,
      isHandicap: i < 4,
      isCharging: i >= 4 && i < 8,
      sensorHealth: Math.random() < sensorFailureRate 
        ? Math.floor(Math.random() * 50) + 10 // Low health for failed sensors
        : Math.floor(Math.random() * 30) + 70, // Normal health range
      averageStayTime: Math.floor(Math.random() * 90) + 30, // 30-120 minutes
      occupancyRate: Math.min(Math.random() + 0.2, 1),
      violations: Math.random() < violationRate ? Math.floor(Math.random() * 5) + 1 : 0
    });
  }
  
  // Generate time data for each hour
  for (let hour = 0; hour < 24; hour++) {
    // Calculate occupancy based on time of day - bell curve around peak time
    const hourDiff = Math.min(Math.abs(hour - peakOccupancyTime), Math.abs(hour - peakOccupancyTime - 24));
    const timeFactor = Math.max(0, 1 - (hourDiff / 12) ** 2);
    const baseOccupancyRate = peakOccupancyRate * timeFactor;
    
    // Adding some randomness
    const occupancyRate = Math.min(baseOccupancyRate + (Math.random() * 0.1), 1);
    
    // Determine occupied spots based on occupancy rate
    const occupiedCount = Math.floor(totalSpots * occupancyRate);
    const shuffledIndices = Array.from({length: totalSpots}, (_, i) => i + 1)
      .sort(() => Math.random() - 0.5)
      .slice(0, occupiedCount);
    
    // Calculate violations - more likely during peak times
    const violations = Math.floor(occupiedCount * violationRate * (timeFactor + 0.5));
    
    timeData.push({
      hour,
      occupiedSpots: shuffledIndices,
      occupancyRate,
      violations
    });
  }
  
  return { spots, timeData };
};

// Helper function to get spot data at a specific time
export const getSpotDataAtTime = (spot: ParkingSpot, hour: number, timeData: TimeData[]) => {
  const hourData = timeData.find(data => data.hour === hour);
  if (!hourData) return spot;
  
  return {
    ...spot,
    isOccupied: hourData.occupiedSpots.includes(spot.id)
  };
};

// Generate hourly occupancy data for charts
export const generateOccupancyChartData = (timeData: TimeData[]) => {
  return timeData.map(data => ({
    hour: data.hour,
    occupancyRate: Math.round(data.occupancyRate * 100)
  }));
};

// Generate daily trends data
export const generateDailyTrendsData = (timeData: TimeData[]) => {
  const morning = timeData.slice(6, 12);
  const afternoon = timeData.slice(12, 18);
  const evening = timeData.slice(18, 24).concat(timeData.slice(0, 6));
  
  const calculateAvg = (data: TimeData[]) => {
    return Math.round(data.reduce((sum, item) => sum + item.occupancyRate, 0) / data.length * 100);
  };
  
  return [
    { name: 'Morning', value: calculateAvg(morning) },
    { name: 'Afternoon', value: calculateAvg(afternoon) },
    { name: 'Evening', value: calculateAvg(evening) }
  ];
};

// Generate analytics for a specific spot
export const generateSpotAnalytics = (spot: ParkingSpot, timeData: TimeData[]) => {
  // Calculate how often this spot is occupied
  const occupancyHours = timeData.filter(data => 
    data.occupiedSpots.includes(spot.id)).length;
  
  const occupancyRate = (occupancyHours / 24) * 100;
  
  // Calculate peak occupancy hours
  let peakHours = [];
  for (let hour = 0; hour < 24; hour++) {
    const hourData = timeData.find(data => data.hour === hour);
    if (hourData && hourData.occupiedSpots.includes(spot.id)) {
      peakHours.push(hour);
    }
  }
  
  return {
    dailyOccupancyRate: Math.round(occupancyRate),
    averageStayMinutes: spot.averageStayTime,
    peakHours,
    sensorHealth: spot.sensorHealth,
    violations: spot.violations || 0
  };
};
