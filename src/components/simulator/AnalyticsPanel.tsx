import React from "react";
import { ParkingSpot, TimeData, generateOccupancyChartData, generateDailyTrendsData, generateSpotAnalytics } from "./simulatorData";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Car, Clock, BarChart3, PieChartIcon, Activity } from "lucide-react";

interface AnalyticsPanelProps {
  parkingData: ParkingSpot[];
  selectedSpot: ParkingSpot | null;
  currentTime: number;
  scenario: string;
}

const AnalyticsPanel: React.FC<AnalyticsPanelProps> = ({ 
  parkingData, 
  selectedSpot,
  currentTime,
  scenario
}) => {
  // Calculate total occupancy and availability
  const totalSpots = parkingData.length;
  const occupiedSpots = parkingData.filter(spot => spot.isOccupied).length;
  const availableSpots = totalSpots - occupiedSpots;
  const occupancyRate = Math.round((occupiedSpots / totalSpots) * 100);
  
  // Calculate violations
  const violations = parkingData.reduce((total, spot) => total + (spot.violations || 0), 0);
  
  // Mock time data for hourly charts
  const mockTimeData: TimeData[] = Array.from({length: 24}, (_, i) => {
    const hourDiff = Math.min(Math.abs(i - 12), Math.abs(i - 12 - 24));
    const timeFactor = Math.max(0, 1 - (hourDiff / 12) ** 2);
    const baseRate = scenario === "high-traffic" ? 0.9 : 0.7;
    const rate = Math.min(baseRate * timeFactor + (Math.random() * 0.1), 1);
    
    return {
      hour: i,
      occupiedSpots: [],
      occupancyRate: rate,
      violations: Math.floor(rate * totalSpots * 0.05)
    };
  });
  
  // Generate chart data
  const occupancyChartData = generateOccupancyChartData(mockTimeData);
  const dailyTrendsData = generateDailyTrendsData(mockTimeData);
  
  // Colors for charts
  const COLORS = ['#d15809', '#f57c3e', '#fde1d3'];
  
  return (
    <div className="p-4 md:p-6 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-japa-slate">Parking Analytics</h3>
        <div className="bg-japa-blue/10 text-japa-blue text-xs px-3 py-1 rounded-full font-medium">
          {scenario === "high-traffic" ? "High Traffic" : scenario === "low-traffic" ? "Low Traffic" : "Normal Traffic"}
        </div>
      </div>
      
      {/* If a spot is selected, show spot-specific analytics */}
      {selectedSpot ? (
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-5">
          <h4 className="text-sm font-semibold text-japa-slate flex items-center mb-3">
            <div className={`w-3 h-3 rounded-full mr-2 ${selectedSpot.isOccupied ? 'bg-japa-orange' : 'bg-green-500'}`}></div>
            Spot {selectedSpot.id} {selectedSpot.isOccupied ? 'Occupied' : 'Available'}
            {selectedSpot.isHandicap && (
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded ml-2">Handicap</span>
            )}
          </h4>
          
          {/* Spot metrics */}
          {(() => {
            const analytics = generateSpotAnalytics(selectedSpot, mockTimeData);
            return (
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-xs text-gray-500">Daily Occupancy</p>
                  <p className="text-lg font-bold text-japa-slate">{analytics.dailyOccupancyRate}%</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-xs text-gray-500">Avg. Stay</p>
                  <p className="text-lg font-bold text-japa-slate">{analytics.averageStayMinutes}m</p>
                </div>
              </div>
            );
          })()}
        </div>
      ) : (
        <div>
          {/* Summary cards */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="bg-white p-3 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2">
                <Car className="h-4 w-4 text-japa-blue" />
                <div>
                  <p className="text-sm font-medium text-japa-slate">{occupancyRate}% Occupied</p>
                  <p className="text-xs text-gray-500">{availableSpots} spots available</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-3 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-japa-blue" />
                <div>
                  <p className="text-sm font-medium text-japa-slate">45 min avg. stay</p>
                  <p className="text-xs text-gray-500">{violations} violations today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Hourly Occupancy Chart */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-5">
        <div className="flex items-center mb-3">
          <BarChart3 className="h-4 w-4 text-japa-blue mr-2" />
          <h4 className="text-xs font-medium text-japa-slate">Hourly Occupancy</h4>
        </div>
        <div className="h-[140px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={occupancyChartData}>
              <XAxis 
                dataKey="hour" 
                tick={{fontSize: 10}}
                tickFormatter={(hour) => `${hour}`}
              />
              <YAxis 
                domain={[0, 100]}
                tick={{fontSize: 10}}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Occupancy']}
                labelFormatter={(hour) => `${hour}:00`}
              />
              <Line 
                type="monotone" 
                dataKey="occupancyRate" 
                stroke="#d15809" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Daily Trends & Violations */}
      <div className="grid grid-cols-2 gap-4">
        {/* Daily Distribution */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center mb-3">
            <PieChartIcon className="h-4 w-4 text-japa-blue mr-1" />
            <h4 className="text-xs font-medium text-japa-slate">Daily Distribution</h4>
          </div>
          <div className="h-[140px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dailyTrendsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={45}
                  paddingAngle={5}
                  dataKey="value"
                  label={({name}) => name}
                  labelLine={false}
                >
                  {dailyTrendsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Occupancy']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Violations */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center mb-3">
            <Activity className="h-4 w-4 text-japa-blue mr-1" />
            <h4 className="text-xs font-medium text-japa-slate">Violations</h4>
          </div>
          <div className="h-[140px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockTimeData}>
                <XAxis 
                  dataKey="hour" 
                  tick={{fontSize: 9}}
                  tickFormatter={(hour) => hour % 3 === 0 ? `${hour}` : ''}
                />
                <YAxis tick={{fontSize: 9}} />
                <Tooltip 
                  formatter={(value) => [value, 'Violations']}
                  labelFormatter={(hour) => `${hour}:00`}
                />
                <Bar dataKey="violations" fill="#f97316" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPanel;
