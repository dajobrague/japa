import { CaseStudy } from "@/types/caseStudies";

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "UC Berkeley: Campus-Wide Smart Parking Implementation",
    category: "University",
    slug: "uc-berkeley-smart-parking",
    description: "How UC Berkeley transformed their parking management across campus, improving utilization by 35% and reducing search times.",
    image: "/lovable-uploads/camilo-botia-k4vFDPJoDZk-unsplash.jpg",
    results: [
      "35% improvement in parking utilization",
      "27% reduction in parking search time",
      "Significant decrease in parking-related complaints",
      "Improved student and faculty satisfaction"
    ],
    stats: {
      improvement: "35%",
      timeframe: "8 months",
      satisfaction: "92%"
    },
    client: {
      name: "University of California, Berkeley",
      logo: "/uc-berkeley-logo.svg",
      testimonial: {
        quote: "The JAPA smart parking solution has transformed our campus parking experience. Students and faculty spend less time searching for spots, and we've been able to optimize our parking resources effectively.",
        author: "Dr. Catherine Reynolds",
        position: "Campus Operations Director"
      }
    },
    challenges: [
      "Large campus with multiple parking facilities",
      "High peak demand during class hours",
      "Inefficient utilization of available spaces",
      "Frequent complaints about parking difficulty"
    ],
    solution: "JAPA implemented a comprehensive smart parking system across all campus parking facilities, including real-time occupancy monitoring, a mobile app for students and faculty, and an analytics dashboard for administrators.",
    implementation: "The implementation was completed in phases over 8 months, starting with the busiest parking structures and expanding to cover all 15 campus parking areas. The system includes 450 smart sensors, 25 digital displays, and integration with the university's existing systems.",
    outcomes: "Since implementation, UC Berkeley has seen a dramatic improvement in parking efficiency. Students and faculty report spending less time searching for parking, and the university has been able to better manage peak demand periods. The data collected has also informed future campus planning decisions.",
    color: "from-blue-500/20 to-blue-600/30"
  },
  {
    id: 2,
    title: "Downtown Austin: Smart City Parking Initiative",
    category: "City Center",
    slug: "austin-smart-city-parking",
    description: "Austin's implementation of JAPA's technology to optimize downtown parking, reduce congestion, and support local businesses.",
    image: "/lovable-uploads/k-mitch-hodge-iTlM3NiAl0M-unsplash.jpg",
    results: [
      "42% reduction in parking-related traffic",
      "18% increase in parking turnover",
      "Improved visitor experience reports",
      "Increased revenue for local businesses"
    ],
    stats: {
      improvement: "42%",
      timeframe: "12 months",
      satisfaction: "89%"
    },
    client: {
      name: "City of Austin",
      logo: "/austin-logo.svg",
      testimonial: {
        quote: "The smart parking initiative has transformed downtown Austin. Visitors can find parking easily, which has reduced traffic congestion and supported our local businesses. It's been a game-changer for our urban mobility.",
        author: "Jennifer Michaels",
        position: "Director of Urban Planning"
      }
    },
    challenges: [
      "Severe downtown congestion due to parking searches",
      "Limited parking availability in high-demand areas",
      "Negative impact on local businesses due to parking difficulties",
      "Inefficient enforcement and revenue collection"
    ],
    solution: "JAPA deployed a city-wide smart parking system covering on-street and off-street parking in Austin's downtown area. The solution includes dynamic pricing based on demand, real-time availability information through a public app, and a management dashboard for city officials.",
    implementation: "The implementation covered 3,200 parking spaces across downtown Austin, with installation of sensors, digital signage, and integration with the city's existing payment systems. The project was rolled out in 4 zones over 12 months.",
    outcomes: "The smart parking initiative has dramatically reduced congestion in downtown Austin. Businesses report increased foot traffic, and the city has seen improved parking revenue. Visitors find parking more easily, with 89% reporting satisfaction with the new system.",
    color: "from-green-500/20 to-green-600/30"
  },
  {
    id: 3,
    title: "Orlando Stadium: Event Parking Management",
    category: "Stadium",
    slug: "orlando-stadium-parking",
    description: "How Orlando's major sports venue streamlined parking operations for 65,000+ attendees with real-time guidance and monitoring.",
    image: "/lovable-uploads/willian-justen-de-vasconcellos-cdWjBaLnpPU-unsplash.jpg",
    results: [
      "53% faster venue entry and exit times",
      "Near-elimination of parking-related delays",
      "Enhanced attendee satisfaction scores",
      "More efficient staff allocation"
    ],
    stats: {
      improvement: "53%",
      timeframe: "6 months",
      satisfaction: "94%"
    },
    client: {
      name: "Orlando Sports Complex",
      logo: "/orlando-stadium-logo.svg",
      testimonial: {
        quote: "The difference before and after implementing JAPA's solution is night and day. What used to be a chaotic experience for our fans is now smooth and efficient. Entry and exit times have been cut in half, and we've received overwhelmingly positive feedback.",
        author: "Marcus Johnson",
        position: "Operations Manager"
      }
    },
    challenges: [
      "Massive congestion during event ingress and egress",
      "Inefficient use of 12,000+ parking spaces",
      "Poor attendee experience affecting overall event satisfaction",
      "Difficulty coordinating parking staff during peak times"
    ],
    solution: "JAPA implemented a comprehensive event parking management system including real-time capacity monitoring, dynamic routing to available spaces, a staff coordination platform, and integration with the venue's event ticketing system.",
    implementation: "The system was implemented across all stadium parking areas, with 85 digital guidance signs, a custom mobile app for attendees, and specialized tools for parking staff. The project was completed just before the start of the sports season.",
    outcomes: "The stadium has seen dramatic improvements in traffic flow, with entry and exit times cut by more than half. Attendee satisfaction with parking has increased to 94%, and the venue has been able to optimize staffing needs based on real-time data.",
    color: "from-orange-500/20 to-orange-600/30"
  },
  {
    id: 4,
    title: "Northwestern Memorial Hospital: Patient-First Parking",
    category: "Healthcare",
    slug: "northwestern-hospital-parking",
    description: "Northwestern's transformation of their medical campus parking to prioritize patient access and streamline staff parking.",
    image: "/lovable-uploads/graham-ruttan-b3LF7JHQmms-unsplash.jpg",
    results: [
      "41% reduction in patient parking complaints",
      "Optimized staff parking allocation",
      "Improved emergency zone access times",
      "Enhanced visitor experience"
    ],
    stats: {
      improvement: "41%",
      timeframe: "10 months",
      satisfaction: "91%"
    },
    client: {
      name: "Northwestern Memorial Hospital",
      logo: "/northwestern-logo.svg",
      testimonial: {
        quote: "For a healthcare facility, parking is a critical but often overlooked aspect of patient care. JAPA's solution has significantly improved the experience for our patients and visitors, which directly impacts their overall care experience.",
        author: "Dr. Elizabeth Chen",
        position: "Chief Operating Officer"
      }
    },
    challenges: [
      "Limited parking availability for patients and visitors",
      "Critical need for emergency vehicle access",
      "Complex staff scheduling creating parking inefficiencies",
      "High stress for patients navigating parking during medical visits"
    ],
    solution: "JAPA created a specialized healthcare parking solution that prioritizes different user types. The system includes reserved patient spaces with real-time availability, staff parking optimization based on shift schedules, and guaranteed emergency access zones.",
    implementation: "The implementation covered 6 parking structures with 4,800 total spaces. The system includes specialized configurations for emergency vehicles, patient priority areas, and staff-only sections, all managed through an integrated platform.",
    outcomes: "Northwestern has seen a dramatic improvement in the parking experience for all users. Patient complaints have decreased significantly, staff report easier parking at shift changes, and emergency vehicle access is consistently maintained. The overall parking experience rating has increased to 91%.",
    color: "from-red-500/20 to-red-600/30"
  },
  {
    id: 5,
    title: "Denver International Airport: Optimizing Traveler Parking",
    category: "Airport",
    slug: "denver-airport-parking",
    description: "How Denver International Airport enhanced traveler experience and optimized revenue through smart parking management.",
    image: "/lovable-uploads/doug-bagg-FB406CKGL0Q-unsplash.jpg",
    results: [
      "38% reduction in parking search time",
      "22% increase in parking revenue",
      "Improved shuttle service efficiency",
      "Enhanced traveler satisfaction"
    ],
    stats: {
      improvement: "38%",
      timeframe: "14 months",
      satisfaction: "87%"
    },
    client: {
      name: "Denver International Airport",
      logo: "/denver-airport-logo.svg",
      testimonial: {
        quote: "JAPA's smart parking system has transformed our parking operations, making the experience seamless for travelers while optimizing our revenue streams. It's been a win-win for both our customers and our business.",
        author: "Robert Mitchell",
        position: "Director of Ground Transportation"
      }
    },
    challenges: [
      "High volume of travelers needing parking across multiple lots",
      "Difficulty managing peak holiday and business travel periods",
      "Inefficient shuttle service routing based on parking usage",
      "Lost revenue opportunities due to underutilized areas"
    ],
    solution: "JAPA implemented a comprehensive airport parking solution covering short-term, long-term, and economy lots. The system includes real-time availability information for travelers, dynamic pricing capabilities, and a shuttle optimization system based on demand patterns.",
    implementation: "The implementation covered 28,000 parking spaces across 8 distinct parking areas. The project included integration with the airport's existing payment systems, custom mobile app development, and a specialized management dashboard for airport operations.",
    outcomes: "Denver International has seen significant improvements in parking operations, with travelers finding parking more quickly and shuttle services operating more efficiently. The airport has also been able to implement dynamic pricing strategies that have increased overall parking revenue.",
    color: "from-purple-500/20 to-purple-600/30"
  }
]; 