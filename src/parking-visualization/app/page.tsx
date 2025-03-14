import { ParkingVisualization } from "@/components/parking-visualization"

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-gray-100 to-gray-200">
      <section className="max-w-6xl mx-auto">
        <ParkingVisualization />
      </section>
    </main>
  )
}

