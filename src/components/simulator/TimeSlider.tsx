
import React from "react";
import { Play, Pause, Clock } from "lucide-react";

interface TimeSliderProps {
  currentTime: number;
  onChange: (time: number) => void;
  isPlaying: boolean;
  onPlayToggle: () => void;
}

const TimeSlider: React.FC<TimeSliderProps> = ({ 
  currentTime, 
  onChange, 
  isPlaying, 
  onPlayToggle 
}) => {
  const formatTime = (hour: number) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${displayHour}:00 ${period}`;
  };

  return (
    <div className="mb-6 border border-gray-200 rounded-md p-4 bg-white">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-semibold text-japa-slate flex items-center">
          <Clock className="h-4 w-4 mr-2 text-japa-blue" />
          Time Simulation
        </h4>
        <button 
          onClick={onPlayToggle}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-japa-blue/10 hover:bg-japa-blue/20 text-japa-blue transition-colors"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </button>
      </div>
      
      <div className="relative pt-1">
        <input
          type="range"
          min="0"
          max="23"
          step="1"
          value={currentTime}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-japa-orange"
        />
        
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>12 AM</span>
          <span>6 AM</span>
          <span>12 PM</span>
          <span>6 PM</span>
          <span>11 PM</span>
        </div>
      </div>
      
      <div className="text-center mt-2 text-japa-blue font-medium">
        {formatTime(currentTime)}
      </div>
    </div>
  );
};

export default TimeSlider;
