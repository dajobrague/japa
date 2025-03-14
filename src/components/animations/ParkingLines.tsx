
import React from "react";
import { CircleDot } from "lucide-react";

const ParkingLines = () => {
  return (
    <div className="w-full overflow-hidden pointer-events-none">
      {/* Dashed line to represent road - now extended full width */}
      <div className="w-full h-1 flex">
        <div className="w-full h-full flex justify-between">
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} className="h-full w-6 mx-[1px] bg-white/40"></div>
          ))}
        </div>
      </div>
      
      {/* Parking lines */}
      <div className="w-full flex mt-2">
        <div className="w-full h-16 flex">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="relative h-full flex-1 mx-1">
              <div className="absolute top-0 left-0 h-full w-1 bg-white/30"></div>
              <div className="absolute top-0 right-0 h-full w-1 bg-white/30"></div>
              {/* Add circles to all parking spots */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-japa-orange">
                <CircleDot size={18} className="text-japa-orange" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParkingLines;
