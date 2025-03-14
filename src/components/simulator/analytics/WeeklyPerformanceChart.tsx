import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart3, PieChartIcon } from 'lucide-react';
import { HistoricalDataPoint, getCurrentDay, CHART_COLORS } from './analyticsUtils';

interface WeeklyPerformanceChartProps {
  historicalData: HistoricalDataPoint[];
}

const WeeklyPerformanceChart: React.FC<WeeklyPerformanceChartProps> = ({ 
  historicalData 
}) => {
  // Ensure we have data to prevent rendering issues
  const chartData = historicalData && historicalData.length > 0 ? historicalData : [];
  const currentDayData = chartData.find(data => data.day === getCurrentDay()) || chartData[0] || { peakTime: '9am', peak: 75 };
  
  return (
    <div>
      <h4 className="text-sm font-semibold text-japa-orange mb-3 flex items-center">
        <PieChartIcon className="h-4 w-4 mr-1.5 text-japa-orange" /> Weekly Performance
      </h4>
      
      <div className="bg-white rounded-lg border border-orange-100 shadow-sm p-3">
        <div style={{ height: 180, width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
              <XAxis dataKey="day" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="occupancy" name="Avg. Occupancy (%)" fill={CHART_COLORS.secondary} />
              <Bar dataKey="peak" name="Peak Occupancy (%)" fill={CHART_COLORS.primary} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="pt-2 text-xs text-orange-600 border-t border-orange-100 mt-2">
          {`Peak occupancy time on ${getCurrentDay()}: ${currentDayData?.peakTime || '9am'} with ${currentDayData?.peak || 75}% occupancy.`}
        </div>
      </div>
    </div>
  );
};

export default WeeklyPerformanceChart; 