import React, { useId } from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, Info, TrendingUp } from 'lucide-react';
import { HourlyDataPoint, CHART_COLORS, calculateRevenue } from './analyticsUtils';

interface ReferenceLineProps {
  x: any;
  y?: any;
  stroke: string;
  strokeWidth?: number;
}

const ReferenceLine: React.FC<ReferenceLineProps> = ({ 
  x, 
  y, 
  stroke, 
  strokeWidth = 1 
}) => {
  return (
    <line
      x1={x}
      y1={0}
      x2={x}
      y2="100%"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeDasharray="3 3"
    />
  );
};

interface RevenueChartProps {
  hourlyData: HourlyDataPoint[];
  currentTime: number;
  scenario: string;
}

const RevenueChart: React.FC<RevenueChartProps> = ({ 
  hourlyData, 
  currentTime,
  scenario 
}) => {
  // Create a unique ID for gradient
  const id = useId();
  const gradientId = `revenueGradient-${id}`;
  
  // Ensure we have data to prevent rendering issues
  const chartData = hourlyData && hourlyData.length > 0 ? hourlyData : [];
  const totalSpots = 100; // Assuming 100 total parking spots
  
  // Calculate total revenue up to current time
  let totalRevenue = 0;
  for (let i = 0; i <= currentTime; i++) {
    if (chartData[i]) {
      totalRevenue += calculateRevenue(totalSpots, chartData[i].occupancy, scenario);
    }
  }
  
  const hourlyAverage = totalRevenue / (currentTime + 1 || 1); // Avoid divide by zero
  
  return (
    <div>
      <h4 className="text-sm font-semibold text-japa-orange mb-3 flex items-center">
        <DollarSign className="h-4 w-4 mr-1.5 text-japa-orange" /> Revenue Analysis
      </h4>
      
      <div className="bg-white rounded-lg border border-orange-100 shadow-sm p-3">
        <div style={{ height: 180, width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={CHART_COLORS.secondary} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={CHART_COLORS.secondary} stopOpacity={0.2}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
              <XAxis 
                dataKey="time" 
                tick={{ fontSize: 10 }}
                tickFormatter={(value, index) => index % 4 === 0 ? value : ''}
              />
              <YAxis 
                tick={{ fontSize: 10 }}
                tickFormatter={(value) => `$${value}`} 
              />
              <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke={CHART_COLORS.secondary}
                fillOpacity={1}
                fill={`url(#${gradientId})`}
              />
              {currentTime >= 0 && <ReferenceLine x={currentTime} stroke="#000" strokeWidth={2} />}
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="pt-2 text-xs text-orange-600 border-t border-orange-100 mt-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Info className="h-3.5 w-3.5 mr-1" />
              Total Revenue: <span className="font-bold ml-1">${totalRevenue.toFixed(2)}</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="h-3.5 w-3.5 mr-1" />
              Hourly Average: <span className="font-bold ml-1">${hourlyAverage.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart; 