import React, { useId } from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity } from 'lucide-react';
import { HourlyDataPoint, getScenarioDescription, CHART_COLORS } from './analyticsUtils';

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

interface HourlyTrendChartProps {
  hourlyData: HourlyDataPoint[];
  currentTime: number;
  scenario: string;
}

const HourlyTrendChart: React.FC<HourlyTrendChartProps> = ({ 
  hourlyData, 
  currentTime, 
  scenario 
}) => {
  // Create a unique ID for gradient
  const id = useId();
  const gradientId = `colorOccupancy-${id}`;
  
  // Ensure we have data to prevent rendering issues
  const chartData = hourlyData && hourlyData.length > 0 ? hourlyData : [];
  
  return (
    <div>
      <h4 className="text-sm font-semibold text-japa-orange mb-3 flex items-center">
        <Activity className="h-4 w-4 mr-1.5 text-japa-orange" /> Today's Hourly Trend
      </h4>
      
      <div className="bg-white rounded-lg border border-orange-100 shadow-sm p-3">
        <div style={{ height: 180, width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={CHART_COLORS.primary} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={CHART_COLORS.secondary} stopOpacity={0.2}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
              <XAxis 
                dataKey="time" 
                tick={{ fontSize: 10 }}
                tickFormatter={(value, index) => index % 4 === 0 ? value : ''}
                stroke={CHART_COLORS.tertiary}
              />
              <YAxis 
                tick={{ fontSize: 10 }} 
                domain={[0, 100]} 
                stroke={CHART_COLORS.tertiary} 
              />
              <Tooltip 
                formatter={(value, name) => [
                  `${value}${name === 'occupancy' ? '%' : ''}`, 
                  name === 'occupancy' ? 'Occupancy Rate' : name
                ]}
                contentStyle={{ 
                  backgroundColor: CHART_COLORS.background,
                  borderColor: CHART_COLORS.primary
                }}
              />
              <Area 
                type="monotone" 
                dataKey="occupancy" 
                stroke={CHART_COLORS.primary} 
                strokeWidth={2}
                fillOpacity={1} 
                fill={`url(#${gradientId})`} 
              />
              {currentTime >= 0 && <ReferenceLine x={currentTime} stroke={CHART_COLORS.tertiary} strokeWidth={2} />}
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="pt-2 text-xs text-orange-600 border-t border-orange-100 mt-2">
          {getScenarioDescription(scenario)}
        </div>
      </div>
    </div>
  );
};

export default HourlyTrendChart; 