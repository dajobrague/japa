import React from "react";
import { ParkingSpot, TimeData, generateOccupancyChartData, generateDailyTrendsData, generateSpotAnalytics } from "./simulatorData";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, CartesianGrid, Area, AreaChart } from "recharts";
import { Car, Clock, BarChart3, PieChartIcon, Activity, TrendingUp } from "lucide-react";

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
  
  // Enhanced colors for charts - using JAPA color scheme
  const COLORS = ['#f97316', '#ea580c', '#c2410c'];
  const GRADIENT_COLORS = ['#f97316', '#f8a266', '#fcc8a5'];
  
  return (
    <div className="p-4 md:p-6 h-full overflow-auto">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-japa-slate">Parking Analytics</h3>
        <div className="bg-japa-blue/10 text-japa-blue text-xs px-3 py-1.5 rounded-full font-medium border border-japa-blue/10">
          {scenario === "high-traffic" ? "High Traffic" : scenario === "low-traffic" ? "Low Traffic" : "Normal Traffic"}
        </div>
      </div>
      
      {/* If a spot is selected, show spot-specific analytics */}
      {selectedSpot ? (
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 md:p-5 mb-6">
          <h4 className="text-sm font-semibold text-japa-slate flex items-center mb-4">
            <div className={`w-3 h-3 rounded-full mr-2 ${selectedSpot.isOccupied ? 'bg-japa-orange' : 'bg-green-500'}`}></div>
            Spot {selectedSpot.id} {selectedSpot.isOccupied ? 'Occupied' : 'Available'}
            {selectedSpot.isHandicap && (
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded ml-2">Handicap</span>
            )}
            {selectedSpot.isCharging && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded ml-2">Charging</span>
            )}
          </h4>
          
          {/* Spot metrics */}
          {(() => {
            const analytics = generateSpotAnalytics(selectedSpot, mockTimeData);
            return (
              <div className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <p className="text-xs text-gray-500 mb-1">Daily Occupancy</p>
                    <p className="text-lg font-bold text-japa-slate">{analytics.dailyOccupancyRate}%</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <p className="text-xs text-gray-500 mb-1">Avg. Stay</p>
                    <p className="text-lg font-bold text-japa-slate">{analytics.averageStayMinutes}m</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 col-span-2 sm:col-span-1">
                    <p className="text-xs text-gray-500 mb-1">Sensor Health</p>
                    <p className="text-lg font-bold text-japa-slate">{analytics.sensorHealth}%</p>
                  </div>
                </div>
                
                {/* Spot usage trend for the day */}
                <div className="bg-white rounded-lg border border-gray-100 p-3">
                  <h5 className="text-xs font-medium text-japa-slate mb-2 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1 text-japa-orange" /> Spot Usage Pattern
                  </h5>
                  <div className="h-32">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={occupancyChartData}
                        margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
                      >
                        <defs>
                          <linearGradient id="spotUsageGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#f97316" stopOpacity={0.2}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis 
                          dataKey="hour" 
                          tick={{fontSize: 10}}
                          tickFormatter={(hour) => hour % 3 === 0 ? `${hour}:00` : ''}
                        />
                        <YAxis 
                          domain={[0, 100]}
                          tick={{fontSize: 10}}
                          tickFormatter={(value) => `${value}%`}
                        />
                        <Tooltip 
                          formatter={(value) => [`${value}%`, 'Probability']}
                          labelFormatter={(hour) => `${hour}:00`}
                          contentStyle={{ fontSize: '12px', borderRadius: '4px' }}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="occupancyRate" 
                          stroke="#f97316" 
                          fillOpacity={1}
                          fill="url(#spotUsageGradient)" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      ) : (
        <div>
          {/* Enhanced summary cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm col-span-2">
              <div className="flex items-center gap-3">
                <div className="bg-japa-orange/10 p-2 rounded-lg">
                  <Car className="h-5 w-5 text-japa-orange" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Current Occupancy</p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-bold text-japa-slate">{occupancyRate}%</p>
                    <p className="text-xs text-gray-500 ml-2">({occupiedSpots}/{totalSpots} spots)</p>
                  </div>
                </div>
              </div>
              <div className="mt-3 w-full bg-gray-100 rounded-full h-2.5">
                <div 
                  className="bg-japa-orange h-2.5 rounded-full" 
                  style={{ width: `${occupancyRate}%` }}
                ></div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex flex-col">
                <p className="text-xs text-gray-500 mb-1">Available Spots</p>
                <p className="text-xl font-bold text-green-500">{availableSpots}</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex flex-col">
                <p className="text-xs text-gray-500 mb-1">Violations Today</p>
                <p className="text-xl font-bold text-japa-orange">{violations}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Enhanced Hourly Occupancy Chart */}
      <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 md:p-5 mb-6">
        <div className="flex items-center mb-4">
          <BarChart3 className="h-5 w-5 text-japa-blue mr-2" />
          <h4 className="text-sm font-medium text-japa-slate">Hourly Occupancy</h4>
        </div>
        <div className="h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={occupancyChartData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
              <defs>
                <linearGradient id="colorOccupancy" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="hour" 
                tick={{fontSize: 10}}
                tickFormatter={(hour) => `${hour}:00`}
                interval="preserveStartEnd"
              />
              <YAxis 
                domain={[0, 100]}
                tick={{fontSize: 10}}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Occupancy']}
                labelFormatter={(hour) => `${hour}:00`}
                contentStyle={{ fontSize: '12px', borderRadius: '4px' }}
              />
              <Area
                type="monotone"
                dataKey="occupancyRate"
                stroke="#f97316"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorOccupancy)"
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Daily Trends & Violations - Now in a flex column layout for full-width charts */}
      <div className="flex flex-col gap-6">
        {/* Daily Distribution */}
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 md:p-5">
          <div className="flex items-center mb-4">
            <PieChartIcon className="h-5 w-5 text-japa-blue mr-2" />
            <h4 className="text-sm font-medium text-japa-slate">Daily Distribution</h4>
          </div>
          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dailyTrendsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {dailyTrendsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Occupancy']}
                  contentStyle={{ fontSize: '12px', borderRadius: '4px' }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  align="center" 
                  layout="horizontal"
                  iconType="circle"
                  formatter={(value) => <span style={{ fontSize: '12px', color: '#64748b' }}>{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Violations */}
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 md:p-5">
          <div className="flex items-center mb-4">
            <Activity className="h-5 w-5 text-japa-blue mr-2" />
            <h4 className="text-sm font-medium text-japa-slate">Violations</h4>
          </div>
          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockTimeData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                <XAxis 
                  dataKey="hour" 
                  tick={{fontSize: 10}}
                  tickFormatter={(hour) => hour % 2 === 0 ? `${hour}:00` : ''}
                />
                <YAxis tick={{fontSize: 10}} />
                <Tooltip 
                  formatter={(value) => [value, 'Violations']}
                  labelFormatter={(hour) => `${hour}:00`}
                  contentStyle={{ fontSize: '12px', borderRadius: '4px' }}
                />
                <defs>
                  <linearGradient id="violationsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0.4}/>
                  </linearGradient>
                </defs>
                <Bar 
                  dataKey="violations" 
                  fill="url(#violationsGradient)" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPanel;
