import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { PieChartIcon, AlertTriangle, Info, Check } from 'lucide-react';
import { CHART_COLORS } from './analyticsUtils';

interface OccupancySummaryProps {
  occupiedSpots: number;
  availableSpots: number;
  occupancyRate: number;
}

const OccupancySummary: React.FC<OccupancySummaryProps> = ({ 
  occupiedSpots, 
  availableSpots, 
  occupancyRate 
}) => {
  // Ensure we have data to display and prevent divide-by-zero issues
  const pieData = [
    { name: 'Occupied', value: occupiedSpots || 0 },
    { name: 'Available', value: availableSpots || 0 }
  ];
  
  return (
    <div>
      <h4 className="text-sm font-semibold text-japa-orange mb-3 flex items-center">
        <PieChartIcon className="h-4 w-4 mr-1.5 text-japa-orange" /> Current Occupancy Summary
      </h4>
      
      <div className="bg-white rounded-lg border border-orange-100 shadow-sm p-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center mb-1">
              <div className="h-3 w-3 rounded-full bg-japa-orange mr-1.5"></div>
              <span className="text-xs text-orange-700">Occupied: {occupiedSpots} spots</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-orange-300 mr-1.5"></div>
              <span className="text-xs text-orange-600">Available: {availableSpots} spots</span>
            </div>
          </div>
          
          <div style={{ width: 120, height: 120 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={40}
                  paddingAngle={5}
                  dataKey="value"
                >
                  <Cell fill={CHART_COLORS.primary} />
                  <Cell fill={CHART_COLORS.quaternary} />
                </Pie>
                <Tooltip formatter={(value) => [`${value} spots`, undefined]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="pt-2 text-xs text-gray-500 border-t border-orange-100 mt-2">
          {occupancyRate > 80 ? (
            <div className="flex items-center text-orange-700">
              <AlertTriangle className="h-3.5 w-3.5 mr-1 text-orange-700" />
              High occupancy detected. Consider dynamic pricing or demand notifications.
            </div>
          ) : occupancyRate > 50 ? (
            <div className="flex items-center text-orange-600">
              <Info className="h-3.5 w-3.5 mr-1 text-orange-600" />
              Moderate occupancy. Parking availability is stable.
            </div>
          ) : (
            <div className="flex items-center text-orange-500">
              <Check className="h-3.5 w-3.5 mr-1 text-orange-500" />
              Low occupancy. Plenty of spaces available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OccupancySummary; 