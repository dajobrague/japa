import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Clock, Info } from 'lucide-react';
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

interface StayDurationChartProps {
  hourlyData: HourlyDataPoint[];
  currentTime: number;
  scenario: string;
}

const StayDurationChart: React.FC<StayDurationChartProps> = ({ 
  hourlyData, 
  currentTime,
  scenario 
}) => {
  // Ensure we have data to prevent rendering issues
  const chartData = hourlyData && hourlyData.length > 0 ? hourlyData : [];
  
  return (
    <div>
      <h4 className="text-sm font-semibold text-japa-orange mb-3 flex items-center">
        <Clock className="h-4 w-4 mr-1.5 text-japa-orange" /> Average Stay Duration
      </h4>
      
      <div className="bg-white rounded-lg border border-orange-100 shadow-sm p-3">
        <div style={{ height: 180, width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
              <XAxis 
                dataKey="time" 
                tick={{ fontSize: 10 }}
                tickFormatter={(value, index) => index % 4 === 0 ? value : ''}
                stroke={CHART_COLORS.tertiary}
              />
              <YAxis 
                tick={{ fontSize: 10 }} 
                stroke={CHART_COLORS.tertiary}
              />
              <Tooltip 
                formatter={(value) => [`${value} minutes`, 'Average Stay Duration']} 
                contentStyle={{ 
                  backgroundColor: CHART_COLORS.background,
                  borderColor: CHART_COLORS.primary
                }}
                labelStyle={{ color: CHART_COLORS.tertiary }}
              />
              <Bar 
                dataKey="avgStay" 
                fill={CHART_COLORS.primary}
                barSize={14}
                radius={[4, 4, 0, 0]}
              />
              {currentTime >= 0 && <ReferenceLine x={currentTime} stroke={CHART_COLORS.tertiary} strokeWidth={2} />}
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="pt-2 text-xs text-orange-600 border-t border-orange-100 mt-2">
          <div className="flex items-center">
            <Info className="h-3.5 w-3.5 mr-1 text-japa-orange" />
            {scenario === "event" 
              ? "During events, average stay duration increases significantly." 
              : "Average stay durations peak during business hours."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayDurationChart; 