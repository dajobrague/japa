import React from "react";
import { Play, Pause, SkipBack, Clock, Zap, ZapOff } from "lucide-react";

export interface TimeSliderProps {
  currentTime: number;
  onChange: (value: number) => void;
  isPlaying: boolean;
  onPlayToggle: () => void;
  simulationSpeed: 'slow' | 'normal' | 'fast';
  onSimulationSpeedChange: (speed: 'slow' | 'normal' | 'fast') => void;
}

const TimeSlider: React.FC<TimeSliderProps> = ({
  currentTime,
  onChange,
  isPlaying,
  onPlayToggle,
  simulationSpeed,
  onSimulationSpeedChange
}) => {
  const formatTime = (hour: number) => {
    const period = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:00 ${period}`;
  };

  const handleRestart = () => {
    onChange(0); // Set to midnight
  };

  return (
    <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold text-japa-slate flex items-center">
          <Clock className="w-4 h-4 mr-1.5" /> Time Simulation
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={() => onSimulationSpeedChange('slow')}
            className={`p-1.5 rounded-md transition-all ${
              simulationSpeed === 'slow'
                ? 'bg-japa-blue/10 text-japa-blue'
                : 'text-gray-400 hover:text-japa-slate hover:bg-gray-100'
            }`}
            title="Slow speed (0.5x)"
          >
            <ZapOff className="w-4 h-4" />
          </button>
          <button
            onClick={() => onSimulationSpeedChange('normal')}
            className={`p-1.5 rounded-md transition-all ${
              simulationSpeed === 'normal'
                ? 'bg-japa-blue/10 text-japa-blue'
                : 'text-gray-400 hover:text-japa-slate hover:bg-gray-100'
            }`}
            title="Normal speed (1x)"
          >
            <Clock className="w-4 h-4" />
          </button>
          <button
            onClick={() => onSimulationSpeedChange('fast')}
            className={`p-1.5 rounded-md transition-all ${
              simulationSpeed === 'fast'
                ? 'bg-japa-blue/10 text-japa-blue'
                : 'text-gray-400 hover:text-japa-slate hover:bg-gray-100'
            }`}
            title="Fast speed (2x)"
          >
            <Zap className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between mb-1 text-xs text-gray-500">
          <span>12 AM</span>
          <span>6 AM</span>
          <span>12 PM</span>
          <span>6 PM</span>
          <span>11 PM</span>
        </div>
        <div className="relative">
          <input
            type="range"
            min="0"
            max="23"
            value={currentTime}
            onChange={(e) => onChange(parseInt(e.target.value))}
            className="w-full h-2 bg-gradient-to-r from-japa-blue/20 via-japa-orange/30 to-japa-blue/20 rounded-lg appearance-none cursor-pointer"
            style={{
              backgroundSize: "100% 100%",
            }}
          />
          {/* Custom time markers */}
          <div className="absolute top-0 left-0 right-0 h-2 pointer-events-none">
            {[...Array(24)].map((_, index) => (
              <div
                key={index}
                className={`absolute top-0 w-0.5 h-2 ${
                  index === currentTime
                    ? "bg-japa-orange"
                    : "bg-transparent"
                }`}
                style={{ left: `${(index / 23) * 100}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className="flex space-x-2">
            <button
              onClick={handleRestart}
              className="p-2 rounded-full bg-gray-100 text-japa-slate hover:bg-gray-200 transition-colors"
              title="Restart simulation"
            >
              <SkipBack className="w-4 h-4" />
            </button>
            <button
              onClick={onPlayToggle}
              className={`p-2 rounded-full transition-colors ${
                isPlaying
                  ? "bg-japa-orange/90 text-white hover:bg-japa-orange"
                  : "bg-japa-blue text-white hover:bg-japa-blue/90"
              }`}
              title={isPlaying ? "Pause simulation" : "Play simulation"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
        <div className="bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100">
          <div className="text-sm font-medium text-japa-slate">
            {formatTime(currentTime)}
          </div>
          <div className="text-xs text-gray-500">Current Time</div>
        </div>
      </div>
      
      {isPlaying && (
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span>Simulation Active</span>
          <span className="bg-japa-blue/10 text-japa-blue px-2 py-0.5 rounded font-medium">
            {simulationSpeed === 'slow' ? '0.5x Speed' : 
             simulationSpeed === 'fast' ? '2x Speed' : '1x Speed'}
          </span>
        </div>
      )}
    </div>
  );
};

export default TimeSlider;
