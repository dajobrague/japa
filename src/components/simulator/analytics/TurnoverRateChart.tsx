import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Info, RefreshCw } from 'lucide-react';
import { HourlyDataPoint, CHART_COLORS } from './analyticsUtils';

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

interface TurnoverRateChartProps {
  hourlyData: HourlyDataPoint[];
  currentTime: number;
}

const TurnoverRateChart: React.FC<TurnoverRateChartProps> = ({ 
  hourlyData, 
  currentTime 
}) => {
  // Ensure we have data to prevent rendering issues
  const chartData = hourlyData && hourlyData.length > 0 ? hourlyData : [];
  
  return (
    <div>
      <h4 className="text-sm font-semibold text-japa-orange mb-3 flex items-center">
        <RefreshCw className="h-4 w-4 mr-1.5 text-japa-orange" /> Turnover Rate
      </h4>
      
      <div className="bg-white rounded-lg border border-orange-100 shadow-sm p-3">
        <div style={{ height: 180, width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
              <XAxis 
                dataKey="time" 
                tick={{ fontSize: 10 }}
                tickFormatter={(value, index) => index % 4 === 0 ? value : ''}
              />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip formatter={(value) => [`${value} cars/hr`, 'Turnover Rate']} />
              <Line 
                type="monotone" 
                dataKey="turnover" 
                stroke={CHART_COLORS.quaternary} 
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
              {currentTime >= 0 && <ReferenceLine x={currentTime} stroke="#000" strokeWidth={2} />}
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="pt-2 text-xs text-orange-600 border-t border-orange-100 mt-2">
          <div className="flex items-center">
            <Info className="h-3.5 w-3.5 mr-1" />
            Turnover rate indicates number of vehicles per hour using 100 spaces.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurnoverRateChart; 