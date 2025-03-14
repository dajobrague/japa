import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { BarChart3, Clock, UserCheck } from 'lucide-react';
import { ExtendedParkingSpot, CHART_COLORS, getSpotType } from './analyticsUtils';

interface SpotDetailViewProps {
  selectedSpot: ExtendedParkingSpot | null;
  spotTimeHistory: Array<{ time: string; status: string; duration?: number; }>;
}

const SpotDetailView: React.FC<SpotDetailViewProps> = ({ selectedSpot, spotTimeHistory }) => {
  if (!selectedSpot) {
    return (
      <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 min-h-[200px] flex items-center justify-center">
        <p className="text-gray-400 text-sm italic">Select a parking spot to view details</p>
      </div>
    );
  }

  // Ensure we have data to prevent rendering issues
  const timeHistory = spotTimeHistory && spotTimeHistory.length > 0 ? spotTimeHistory : [];

  // Calculate usage statistics
  const totalRecords = timeHistory.length;
  const occupiedRecords = timeHistory.filter(record => record.status === 'occupied').length;
  const occupancyRate = totalRecords > 0 ? Math.round((occupiedRecords / totalRecords) * 100) : 0;
  
  // Calculate average stay duration
  const stayDurations = timeHistory
    .filter(record => record.duration !== undefined)
    .map(record => record.duration || 0);
  
  const averageStay = stayDurations.length > 0 
    ? Math.round(stayDurations.reduce((sum, duration) => sum + duration, 0) / stayDurations.length) 
    : 0;
  
  // Create chart data for occupancy over time
  const usageData = timeHistory.map((record, index) => ({
    time: record.time,
    status: record.status === 'occupied' ? 1 : 0,
    duration: record.duration || 0
  }));

  return (
    <div>
      <h4 className="text-sm font-semibold text-japa-orange mb-3 flex items-center">
        <BarChart3 className="h-4 w-4 mr-1.5 text-japa-orange" /> Spot {selectedSpot.id} Details
      </h4>
      
      <div className="bg-white rounded-lg border border-orange-100 shadow-sm p-4">
        <div className="flex flex-wrap justify-between mb-3">
          <div className="p-2 bg-gray-50 rounded-md border border-gray-100 mb-1 mr-1">
            <span className="text-xs text-gray-500 block">Type</span>
            <span className="text-sm font-medium">{getSpotType(selectedSpot)}</span>
          </div>
          <div className="p-2 bg-gray-50 rounded-md border border-gray-100 mb-1 mr-1">
            <span className="text-xs text-gray-500 block">Occupancy</span>
            <span className="text-sm font-medium">{occupancyRate}%</span>
          </div>
          <div className="p-2 bg-gray-50 rounded-md border border-gray-100 mb-1">
            <span className="text-xs text-gray-500 block">Avg Stay</span>
            <span className="text-sm font-medium">{averageStay} min</span>
          </div>
        </div>
        
        <div style={{ height: 150, width: '100%' }}>
          {usageData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                <XAxis 
                  dataKey="time" 
                  tick={{ fontSize: 9 }}
                  tickFormatter={(value, index) => index % 3 === 0 ? value : ''}
                />
                <YAxis 
                  tick={{ fontSize: 10 }} 
                  domain={[0, 1]} 
                  tickCount={2} 
                />
                <YAxis 
                  yAxisId="1" 
                  orientation="right"
                  tick={{ fontSize: 10 }}
                  domain={[0, 'dataMax']}
                  tickCount={3}
                />
                <Tooltip 
                  formatter={(value, name) => {
                    if (name === 'status') return [value === 1 ? 'Occupied' : 'Available', 'Status'];
                    if (name === 'duration') return [`${value} min`, 'Duration'];
                    return [value, name];
                  }}
                />
                <Legend />
                <Line 
                  type="stepAfter" 
                  dataKey="status" 
                  stroke={CHART_COLORS.primary || '#3B82F6'} 
                  dot={false}
                  name="Status"
                  isAnimationActive={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="duration" 
                  stroke={CHART_COLORS.tertiary || '#10B981'} 
                  yAxisId="1"
                  dot={{ r: 2 }}
                  name="Stay Duration"
                  isAnimationActive={false}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-400 text-sm italic">No history data available</p>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-2 text-xs border-t border-orange-100">
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1" />
            <span className="text-gray-500">
              Current Status: <span className={`font-semibold ${selectedSpot.isOccupied ? 'text-red-500' : 'text-green-500'}`}>
                {selectedSpot.isOccupied ? 'Occupied' : 'Available'}
              </span>
            </span>
          </div>
          <div className="flex items-center">
            <UserCheck className="h-3.5 w-3.5 mr-1" />
            <span className="text-gray-500">
              Turns: <span className="font-semibold">{stayDurations.length}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotDetailView; 