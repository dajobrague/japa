"use client"

// import Image from "next/image"
import { Image } from "../../components/parking-visualization/NextJSCompat";
import { cn } from "@/lib/utils"

type ParkingSpot = {
  id: string
  x: number
  y: number
  isOccupied: boolean
}

interface ParkingVisualizationProps {
  className?: string
}

export function ParkingVisualization({ className }: ParkingVisualizationProps) {
  const parkingSpots: ParkingSpot[] = [
    // Top row (622-607) with adjustments
    { id: "622", x: 12, y: 28, isOccupied: true },
    { id: "621", x: 16, y: 28, isOccupied: false },
    { id: "620", x: 22, y: 28, isOccupied: false },
    { id: "619", x: 27, y: 28, isOccupied: false },
    { id: "618", x: 33, y: 28, isOccupied: true },
    { id: "617", x: 39, y: 28, isOccupied: true },
    { id: "616", x: 44, y: 28, isOccupied: true },
    { id: "new1", x: 48, y: 28, isOccupied: false },
    { id: "615", x: 51, y: 28, isOccupied: false },
    { id: "614", x: 58, y: 28, isOccupied: true },
    { id: "613", x: 63, y: 28, isOccupied: true },
    { id: "new2", x: 68, y: 28, isOccupied: true },
    { id: "612", x: 72, y: 28, isOccupied: false },
    { id: "611", x: 78, y: 28, isOccupied: true },
    { id: "610", x: 84, y: 28, isOccupied: false },
    { id: "609", x: 90, y: 28, isOccupied: true },
    { id: "608", x: 94, y: 28, isOccupied: false },
    { id: "new3", x: 98, y: 28, isOccupied: true },

    // Middle row with adjustments
    { id: "642", x: 18, y: 58, isOccupied: false },
    { id: "641", x: 24, y: 58, isOccupied: false },
    { id: "640", x: 30, y: 58, isOccupied: true },
    { id: "639", x: 36, y: 58, isOccupied: true },
    { id: "638", x: 40, y: 58, isOccupied: false },
    { id: "637", x: 45, y: 58, isOccupied: false },
    { id: "636", x: 50, y: 58, isOccupied: true },
    { id: "635", x: 56, y: 58, isOccupied: false },
    { id: "new4", x: 62, y: 58, isOccupied: true },
    { id: "634", x: 68, y: 58, isOccupied: false },
    { id: "633", x: 74, y: 58, isOccupied: false },
    { id: "632", x: 78, y: 58, isOccupied: false },
    { id: "631", x: 84, y: 58, isOccupied: false },
    { id: "630", x: 90, y: 58, isOccupied: true },
    { id: "629", x: 96, y: 58, isOccupied: false },

    // Bottom row with adjustments
    { id: "662", x: 18, y: 74, isOccupied: true },
    { id: "661", x: 24, y: 74, isOccupied: true },
    { id: "660", x: 30, y: 74, isOccupied: false },
    { id: "659", x: 36, y: 74, isOccupied: true },
    { id: "658", x: 40, y: 74, isOccupied: false },
    { id: "657", x: 45, y: 74, isOccupied: false },
    { id: "656", x: 50, y: 74, isOccupied: false },
    { id: "655", x: 56, y: 74, isOccupied: false },
    { id: "new5", x: 62, y: 74, isOccupied: true },
    { id: "654", x: 68, y: 74, isOccupied: false },
    { id: "653", x: 74, y: 74, isOccupied: false },
    { id: "652", x: 80, y: 74, isOccupied: true },
    { id: "651", x: 86, y: 74, isOccupied: false },
    { id: "650", x: 92, y: 74, isOccupied: true },
    { id: "649", x: 96, y: 74, isOccupied: false },
  ]

  // Calculate occupancy percentage
  const occupiedSpots = parkingSpots.filter((spot) => spot.isOccupied).length
  const totalSpots = parkingSpots.length
  const occupancyPercentage = Math.round((occupiedSpots / totalSpots) * 100)

  return (
    <div
      className={cn(
        "relative w-full mx-auto",
        className,
      )}
    >
      {/* Removed the subtle pattern overlay */}

      {/* Removed Live Demo Badge */}

      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
        {/* Subtle vignette overlay */}
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)] pointer-events-none z-10 rounded-2xl"></div>

        <Image
          src="/parking-lot-aerial-view.jpg"
          alt="Parking lot aerial view"
          fill
          className="object-cover rounded-2xl brightness-[1.02] contrast-[1.02]"
          priority
        />

        {/* CSS for spot animations */}
        <style>
        {`
          @keyframes pulse-red {
            0%, 100% {
              transform: scale(1) translate(-50%, -50%);
              box-shadow: 0 0 0 rgba(239, 68, 68, 0.7);
            }
            50% {
              transform: scale(1.15) translate(-43%, -43%);
              box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
            }
          }
          
          @keyframes pulse-green {
            0%, 100% {
              transform: scale(1) translate(-50%, -50%);
              box-shadow: 0 0 0 rgba(34, 197, 94, 0.7);
            }
            50% {
              transform: scale(1.15) translate(-43%, -43%);
              box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
            }
          }
          
          .pulse-red {
            animation: pulse-red 2.5s infinite cubic-bezier(0.4, 0, 0.6, 1);
          }
          
          .pulse-green {
            animation: pulse-green 2.5s infinite cubic-bezier(0.4, 0, 0.6, 1);
          }
        `}
        </style>

        {/* Responsive wrapper for parking spot indicators */}
        <div className="absolute inset-0">
          {/* Overlay dots for parking spots with percentage positioning (responsive) */}
          {parkingSpots.map((spot) => (
            <div
              key={spot.id}
              className={cn(
                "absolute w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full",
                spot.isOccupied
                  ? "bg-red-500 pulse-red shadow-[0_0_8px_rgba(239,68,68,0.6)]"
                  : "bg-green-500 pulse-green shadow-[0_0_8px_rgba(34,197,94,0.6)]",
              )}
              style={{
                left: `${spot.x}%`,
                top: `${spot.y}%`,
                transformOrigin: "0 0",
              }}
            />
          ))}
        </div>

        {/* Current Occupancy - Bottom Left, updated to match legend style */}
        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 shadow-lg z-20 border border-white/30">
          <div className="flex items-center gap-1 sm:gap-1.5">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-orange-500 shadow-[0_0_5px_rgba(249,115,22,0.6)]"></div>
            <span className="text-xs sm:text-sm md:text-base font-medium text-gray-900">
              <span className="font-bold">{occupancyPercentage}%</span> Current Occupancy
            </span>
          </div>
        </div>

        {/* Legend - Bottom Right, mobile responsive with stacked layout on small screens */}
        <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 shadow-lg z-20 border border-white/30">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.6)]"></div>
              <span className="text-xs sm:text-sm md:text-base font-medium text-gray-900">Occupied</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.6)]"></div>
              <span className="text-xs sm:text-sm md:text-base font-medium text-gray-900">Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

