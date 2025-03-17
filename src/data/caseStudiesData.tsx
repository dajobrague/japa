import { CaseStudy } from "@/types/caseStudies";

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "University of California, Riverside",
    category: "University",
    slug: "uc-riverside-smart-parking",
    description: "Transforming campus parking with smart sensors to improve the parking experience for students, faculty, and visitors.",
    image: "https://www.parkjapa.com/assets/images/UCRProj.webp",
    results: [
      "Real-time availability for 3,500+ parking spaces",
      "30% reduction in time spent searching for parking",
      "Integrated with campus mobile app",
      "Improved parking utilization across campus"
    ],
    stats: {
      improvement: "30%",
      timeframe: "6 months",
      satisfaction: "92%"
    },
    client: {
      name: "University of California, Riverside",
      logo: "/uc-riverside-logo.svg",
      testimonial: {
        quote: "JAPA's smart parking system has significantly improved the parking experience on our campus. Students and faculty can easily find available spots, reducing frustration and late arrivals to class.",
        author: "Transportation Services Director",
        position: "UC Riverside"
      }
    },
    challenges: [
      "Large campus with multiple parking lots and structures",
      "High parking demand during peak hours",
      "Limited visibility into real-time parking availability",
      "Student and faculty frustration with parking search times"
    ],
    solution: "JAPA implemented a comprehensive smart parking system with wireless sensors across all major campus parking facilities, providing real-time availability data through the campus mobile app and digital signage.",
    implementation: "The implementation covered over 3,500 parking spaces across multiple parking structures and lots. The system includes wireless sensors, gateway infrastructure, and integration with the university's existing mobile app.",
    outcomes: "UC Riverside now provides real-time parking availability to students, faculty, and visitors, significantly reducing the time spent searching for parking spaces and improving overall campus accessibility. The data collected has also helped optimize parking resource allocation and inform future transportation planning.",
    color: "from-blue-500/20 to-blue-600/30",
    detailsUrl: "https://www.parkjapa.com/UCR.html"
  },
  {
    id: 2,
    title: "Cal Poly Pomona",
    category: "University",
    slug: "cal-poly-pomona-smart-parking",
    description: "Implementing smart parking technology across campus parking facilities to improve student and faculty parking experience.",
    image: "https://www.parkjapa.com/assets/images/CPPS1.jpg",
    results: [
      "Real-time monitoring of 2,800+ parking spaces",
      "25% reduction in parking search time",
      "Integration with campus wayfinding system",
      "Data-driven parking management decisions"
    ],
    stats: {
      improvement: "25%",
      timeframe: "5 months",
      satisfaction: "89%"
    },
    client: {
      name: "Cal Poly Pomona",
      logo: "/cal-poly-logo.svg",
      testimonial: {
        quote: "The JAPA system has transformed how we manage parking on campus. Real-time data has been invaluable for both our students and our facilities management team.",
        author: "Parking Services Manager",
        position: "Cal Poly Pomona"
      }
    },
    challenges: [
      "Dispersed parking facilities across a large campus",
      "Limited visibility into parking availability",
      "High traffic congestion during class change periods",
      "Need for better parking management data"
    ],
    solution: "JAPA deployed wireless parking sensors throughout campus parking facilities, along with a user-friendly interface for students and staff to check parking availability in real-time.",
    implementation: "The system was implemented in phases, starting with the busiest lots and expanding to cover all major parking areas on campus. Integration with the campus mobile app provided students with convenient access to parking information.",
    outcomes: "Cal Poly Pomona now offers real-time parking information to its campus community, resulting in reduced search times, less traffic congestion, and better utilization of parking resources. The administration uses the collected data to make informed decisions about future parking infrastructure needs.",
    color: "from-green-500/20 to-green-600/30",
    detailsUrl: "https://www.parkjapa.com/CPP.html"
  },
  {
    id: 3,
    title: "University of California, Santa Barbara",
    category: "University",
    slug: "ucsb-smart-parking",
    description: "Enhancing parking efficiency and user experience with smart parking technology across UCSB's coastal campus.",
    image: "https://www.parkjapa.com/assets/images/UCSBProj.jpg",
    results: [
      "Real-time monitoring of 4,000+ parking spaces",
      "32% reduction in parking-related traffic",
      "Enhanced campus sustainability initiatives",
      "Improved space utilization during events"
    ],
    stats: {
      improvement: "32%",
      timeframe: "7 months",
      satisfaction: "91%"
    },
    client: {
      name: "University of California, Santa Barbara",
      logo: "/ucsb-logo.svg",
      testimonial: {
        quote: "JAPA's system has been instrumental in our efforts to improve campus access while reducing our environmental footprint. The real-time data has changed how our community approaches parking.",
        author: "Sustainability Director",
        position: "UC Santa Barbara"
      }
    },
    challenges: [
      "Limited parking in prime campus locations",
      "Environmental concerns related to circling vehicles",
      "High visitor traffic during campus events",
      "Need to integrate with sustainability initiatives"
    ],
    solution: "JAPA implemented a comprehensive smart parking system that provides real-time availability data, integrated with UCSB's environmental initiatives to reduce emissions from vehicles searching for parking.",
    implementation: "The implementation included wireless sensors in all major campus parking areas, digital signage at key entry points, and integration with the university's sustainability dashboard to track and report on reduced vehicle emissions.",
    outcomes: "UCSB has successfully reduced parking-related traffic by nearly a third, contributing to its sustainability goals while improving the parking experience for students, faculty, and visitors. The system has been particularly valuable during special events and peak periods.",
    color: "from-blue-400/20 to-teal-500/30",
    detailsUrl: "https://www.parkjapa.com/UCSB.html"
  },
  {
    id: 4,
    title: "UC Davis Medical Center",
    category: "Healthcare",
    slug: "uc-davis-medical-center",
    description: "Implementing a patient-focused smart parking solution to improve accessibility and reduce stress for hospital visitors.",
    image: "https://www.parkjapa.com/assets/images/UCDMCProj.jpg",
    results: [
      "35% reduction in parking-related stress for patients",
      "Real-time monitoring of all visitor parking areas",
      "Prioritized spaces for emergency and high-need patients",
      "Improved hospital staff parking management"
    ],
    stats: {
      improvement: "35%",
      timeframe: "4 months",
      satisfaction: "94%"
    },
    client: {
      name: "UC Davis Medical Center",
      logo: "/uc-davis-med-logo.svg",
      testimonial: {
        quote: "Finding parking should be the least of our patients' concerns. JAPA's solution has dramatically improved the arrival experience, reducing stress for patients and visitors when they need it most.",
        author: "Patient Experience Director",
        position: "UC Davis Medical Center"
      }
    },
    challenges: [
      "High-stress environment for patients seeking parking",
      "Limited visibility into available spaces",
      "Need to prioritize parking for emergency situations",
      "Complex facility with multiple parking structures"
    ],
    solution: "JAPA deployed a healthcare-focused smart parking system with specialized features for hospital environments, including prioritized parking zones, emergency vehicle support, and integration with patient appointment systems.",
    implementation: "The implementation covered all visitor and patient parking areas, with special attention to accessible spaces and emergency access points. Digital signage was installed at all entrances and key decision points.",
    outcomes: "UC Davis Medical Center has transformed the patient arrival experience by eliminating parking stress. Patients and visitors now arrive with confidence, knowing exactly where to park, which has contributed to improved patient satisfaction and on-time appointments.",
    color: "from-red-500/20 to-red-600/30",
    detailsUrl: "https://www.parkjapa.com/UCDMC.html"
  },
  {
    id: 5,
    title: "City of Woodland",
    category: "City Center",
    slug: "city-of-woodland",
    description: "Revitalizing downtown Woodland with smart parking technology to support local businesses and improve visitor experience.",
    image: "https://www.parkjapa.com/assets/images/woodlandcity.jpg",
    results: [
      "28% increase in downtown business foot traffic",
      "Real-time monitoring of 800+ on-street spaces",
      "Improved parking turnover for retail areas",
      "Data-driven parking policy adjustments"
    ],
    stats: {
      improvement: "28%",
      timeframe: "5 months",
      satisfaction: "87%"
    },
    client: {
      name: "City of Woodland",
      logo: "/woodland-logo.svg",
      testimonial: {
        quote: "Our downtown businesses have seen a meaningful increase in customer visits since implementing JAPA's smart parking. Visitors are more willing to come downtown knowing they can easily find parking.",
        author: "Economic Development Manager",
        position: "City of Woodland"
      }
    },
    challenges: [
      "Perception of limited downtown parking",
      "Low turnover in prime retail parking spaces",
      "Limited data for parking policy decisions",
      "Need to support downtown business growth"
    ],
    solution: "JAPA implemented a comprehensive smart parking solution covering on-street and off-street parking in downtown Woodland, with a focus on supporting local businesses through improved parking availability and turnover.",
    implementation: "The system includes wireless sensors for all downtown parking spaces, a user-friendly mobile app for visitors, and an analytics dashboard for city officials to make data-driven policy decisions.",
    outcomes: "Downtown Woodland has experienced significant growth in visitor traffic, with local businesses reporting increased sales. The city has also been able to optimize parking policies based on actual usage data, improving overall downtown accessibility.",
    color: "from-green-500/20 to-green-600/30"
  },
  {
    id: 6,
    title: "Dallas Scottish Rite Children's Hospital",
    category: "Healthcare",
    slug: "dallas-scottish-rite-hospital",
    description: "Creating a stress-free parking experience for families visiting the children's hospital through smart parking technology.",
    image: "https://www.parkjapa.com/assets/images/srch.jpg",
    results: [
      "40% reduction in family parking stress",
      "Real-time guidance to available spaces",
      "Special accommodations for long-term patient families",
      "Improved staff parking management"
    ],
    stats: {
      improvement: "40%",
      timeframe: "3 months",
      satisfaction: "95%"
    },
    client: {
      name: "Dallas Scottish Rite Children's Hospital",
      logo: "/scottish-rite-logo.svg",
      testimonial: {
        quote: "Families with sick children have enough to worry about. JAPA's solution has eliminated parking stress from the equation, allowing families to focus on what matters most - their children's health.",
        author: "Hospital Administrator",
        position: "Dallas Scottish Rite Children's Hospital"
      }
    },
    challenges: [
      "High-stress environment for families with sick children",
      "Need for special accommodations for specific patient needs",
      "Limited parking visibility during peak visiting hours",
      "Balance between staff and visitor parking needs"
    ],
    solution: "JAPA implemented a specialized healthcare parking solution with features designed specifically for children's hospital environments, including family-focused interfaces and special accommodation zones.",
    implementation: "The implementation focused on creating a seamless experience for families, with clear guidance from arrival to parking spot. The system includes special provisions for families of long-term patients.",
    outcomes: "The hospital has dramatically improved the arrival experience for families, eliminating one source of stress during difficult times. Staff have also benefited from improved parking management, ensuring they can provide care without parking delays.",
    color: "from-red-500/20 to-orange-500/30"
  },
  {
    id: 7,
    title: "Sacramento Municipal Utility District",
    category: "City Center",
    slug: "smud-smart-parking",
    description: "Implementing smart parking and EV charging integration for SMUD's headquarters to support sustainability goals.",
    image: "https://www.parkjapa.com/assets/images/smud.jpg",
    results: [
      "100% visibility of EV charging availability",
      "35% increase in EV charging station utilization",
      "Optimized employee and visitor parking",
      "Support for SMUD's carbon reduction goals"
    ],
    stats: {
      improvement: "35%",
      timeframe: "4 months",
      satisfaction: "92%"
    },
    client: {
      name: "Sacramento Municipal Utility District",
      logo: "/smud-logo.svg",
      testimonial: {
        quote: "As a utility focused on clean energy, we needed a parking solution that supported our sustainability mission. JAPA delivered a system that not only improved parking efficiency but also optimized our EV charging infrastructure.",
        author: "Sustainability Manager",
        position: "SMUD"
      }
    },
    challenges: [
      "Need to optimize EV charging infrastructure usage",
      "Balance between employee and visitor parking",
      "Support for sustainability initiatives",
      "Limited visibility into parking and charging availability"
    ],
    solution: "JAPA developed an integrated parking and EV charging management system for SMUD's headquarters, providing real-time availability for both standard parking and EV charging stations.",
    implementation: "The system includes specialized sensors for EV charging stations, integrated with SMUD's employee app and visitor management system. Digital signage directs visitors to appropriate parking areas based on their needs.",
    outcomes: "SMUD has significantly improved the utilization of its EV charging infrastructure while providing employees and visitors with a seamless parking experience. The system has become a showcase for SMUD's commitment to sustainable transportation.",
    color: "from-blue-500/20 to-green-600/30"
  },
  {
    id: 8,
    title: "University of California, Davis",
    category: "University",
    slug: "uc-davis-smart-parking",
    description: "Implementing a comprehensive smart parking system across UC Davis's extensive campus to improve accessibility and sustainability.",
    image: "https://www.parkjapa.com/assets/images/mrak-hall.jpg",
    results: [
      "Real-time monitoring of 10,000+ parking spaces",
      "30% reduction in campus parking search time",
      "Integration with UC Davis sustainable transportation initiatives",
      "Data-driven parking management for events and peak periods"
    ],
    stats: {
      improvement: "30%",
      timeframe: "9 months",
      satisfaction: "90%"
    },
    client: {
      name: "University of California, Davis",
      logo: "/uc-davis-logo.svg",
      testimonial: {
        quote: "UC Davis is committed to sustainable transportation, and JAPA's solution has been instrumental in optimizing our parking resources while reducing unnecessary driving on campus.",
        author: "Transportation Services Director",
        position: "UC Davis"
      }
    },
    challenges: [
      "Extensive campus with widely distributed parking facilities",
      "Integration with sustainability goals and alternative transportation",
      "High demand during special events and peak periods",
      "Need for data to inform future transportation planning"
    ],
    solution: "JAPA implemented a campus-wide smart parking system that integrates with UC Davis's sustainability initiatives, providing real-time parking information while promoting alternative transportation options.",
    implementation: "The phased implementation covered all major parking areas across the expansive campus, with integration into the UC Davis mobile app, digital signage, and transportation management systems.",
    outcomes: "UC Davis now offers comprehensive parking availability information to students, faculty, and visitors, significantly reducing search times and supporting the university's sustainability goals by reducing unnecessary driving on campus.",
    color: "from-blue-500/20 to-blue-600/30"
  },
  {
    id: 9,
    title: "City of Vacaville",
    category: "City Center",
    slug: "city-of-vacaville",
    description: "Revitalizing downtown Vacaville with smart parking technology to support local businesses and improve visitor experience.",
    image: "https://www.parkjapa.com/assets/images/vacaville.jpg",
    results: [
      "25% increase in downtown business revenue",
      "Real-time monitoring of downtown parking",
      "Improved parking turnover for retail spaces",
      "Data-driven urban planning decisions"
    ],
    stats: {
      improvement: "25%",
      timeframe: "6 months",
      satisfaction: "88%"
    },
    client: {
      name: "City of Vacaville",
      logo: "/vacaville-logo.svg",
      testimonial: {
        quote: "JAPA's smart parking solution has been a game-changer for our downtown. Visitors now know they can find parking easily, which has directly translated to increased foot traffic for our local businesses.",
        author: "Downtown Economic Development Director",
        position: "City of Vacaville"
      }
    },
    challenges: [
      "Perception of limited downtown parking",
      "Need to support local business growth",
      "Inefficient utilization of existing parking resources",
      "Limited data for urban planning decisions"
    ],
    solution: "JAPA implemented a smart parking system covering all downtown parking areas, with a focus on supporting local businesses through improved parking availability and visitor guidance.",
    implementation: "The system includes wireless sensors for on-street and lot parking, integration with local business promotions, and data analytics for city planning departments.",
    outcomes: "Downtown Vacaville has experienced a significant increase in visitor traffic and business revenue. The city has also used the parking data to inform urban planning decisions, further enhancing downtown accessibility and appeal.",
    color: "from-orange-500/20 to-orange-600/30"
  },
  {
    id: 10,
    title: "University of California, Berkeley",
    category: "University",
    slug: "uc-berkeley-smart-parking",
    description: "Transforming parking management across UC Berkeley's urban campus with comprehensive smart parking technology.",
    image: "https://www.parkjapa.com/assets/images/UCBProj.jpg",
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
        author: "Transportation Services Director",
        position: "UC Berkeley"
      }
    },
    challenges: [
      "Urban campus with limited parking infrastructure",
      "High demand in a dense urban environment",
      "Inefficient utilization of available spaces",
      "Integration with campus sustainability goals"
    ],
    solution: "JAPA implemented a comprehensive smart parking system across all campus parking facilities, including real-time occupancy monitoring, a mobile app for students and faculty, and an analytics dashboard for administrators.",
    implementation: "The implementation was completed in phases over 8 months, starting with the busiest parking structures and expanding to cover all campus parking areas. The system includes smart sensors, digital displays, and integration with the university's existing systems.",
    outcomes: "UC Berkeley has significantly improved parking efficiency and user satisfaction. Students and faculty report spending less time searching for parking, and the university has been able to optimize its limited parking resources in an urban environment.",
    color: "from-blue-500/20 to-blue-600/30"
  },
  {
    id: 11,
    title: "University of California, San Francisco",
    category: "Healthcare",
    slug: "ucsf-smart-parking",
    description: "Implementing an integrated parking solution for UCSF's medical campus to improve patient, staff, and visitor parking experience.",
    image: "https://www.parkjapa.com/assets/images/UCSF.jpg",
    results: [
      "38% reduction in patient parking stress",
      "Real-time monitoring of all campus parking facilities",
      "Optimized staff parking allocation",
      "Improved emergency vehicle access"
    ],
    stats: {
      improvement: "38%",
      timeframe: "7 months",
      satisfaction: "93%"
    },
    client: {
      name: "University of California, San Francisco",
      logo: "/ucsf-logo.svg",
      testimonial: {
        quote: "In a medical environment, reducing stress for patients is critical. JAPA's parking solution has significantly improved the patient experience from the moment they arrive on campus.",
        author: "Medical Center Operations Director",
        position: "UCSF"
      }
    },
    challenges: [
      "Complex medical campus with multiple parking facilities",
      "Need to prioritize patient and emergency access",
      "Balance between staff, visitor, and patient parking",
      "Urban location with limited expansion options"
    ],
    solution: "JAPA implemented a specialized healthcare parking solution that prioritizes patient access while efficiently managing staff parking. The system includes real-time guidance and special provisions for emergency situations.",
    implementation: "The implementation covered all parking facilities across UCSF's urban medical campus, with special attention to patient drop-off areas, emergency access, and staff parking optimization.",
    outcomes: "UCSF has significantly improved the parking experience for patients, visitors, and staff. The system has been particularly valuable in reducing stress for patients arriving for medical care and ensuring efficient staff parking management.",
    color: "from-blue-400/20 to-purple-500/30"
  },
  {
    id: 12,
    title: "Castro District - City of San Francisco",
    category: "City Center",
    slug: "castro-district-sf",
    description: "Implementing smart parking in San Francisco's historic Castro district to improve accessibility and support local businesses.",
    image: "https://www.parkjapa.com/assets/images/castro.jpg",
    results: [
      "32% increase in parking space turnover",
      "22% growth in local business revenue",
      "Reduced circling traffic in residential areas",
      "Data-driven parking policy adjustments"
    ],
    stats: {
      improvement: "32%",
      timeframe: "5 months",
      satisfaction: "85%"
    },
    client: {
      name: "City of San Francisco",
      logo: "/sf-logo.svg",
      testimonial: {
        quote: "The Castro District presents unique parking challenges given its historic nature and popularity. JAPA's solution has helped us balance the needs of visitors, businesses, and residents.",
        author: "Neighborhood Development Manager",
        position: "City of San Francisco"
      }
    },
    challenges: [
      "Historic district with limited parking infrastructure",
      "Balance between visitor, business, and resident needs",
      "High demand in a popular tourist and shopping area",
      "Need to preserve neighborhood character"
    ],
    solution: "JAPA implemented a smart parking system tailored to the Castro District's unique characteristics, focusing on improved turnover for business areas while reducing visitor impact on residential streets.",
    implementation: "The implementation included wireless sensors for on-street parking, integration with San Francisco's existing parking applications, and specialized analytics to inform parking policy decisions specific to the district's needs.",
    outcomes: "The Castro District has experienced improved parking availability for visitors and customers, resulting in increased business revenue. Residents have also benefited from reduced circling traffic in residential areas as visitors are guided directly to available spaces.",
    color: "from-purple-500/20 to-pink-500/30"
  },
  {
    id: 13,
    title: "City of Dana Point",
    category: "City Center",
    slug: "city-of-dana-point",
    description: "Managing coastal parking assets in Dana Point to improve beach access and support local tourism.",
    image: "https://www.parkjapa.com/assets/images/lanterndp.jpg",
    results: [
      "40% improvement in beach parking utilization",
      "Real-time availability information for visitors",
      "Reduced traffic congestion in coastal areas",
      "Data-driven seasonal parking management"
    ],
    stats: {
      improvement: "40%",
      timeframe: "6 months",
      satisfaction: "89%"
    },
    client: {
      name: "City of Dana Point",
      logo: "/dana-point-logo.svg",
      testimonial: {
        quote: "Dana Point's beaches and harbor are our greatest assets. JAPA's smart parking solution has significantly improved visitor access to these areas while helping us manage seasonal demand fluctuations.",
        author: "Tourism and Harbor Director",
        position: "City of Dana Point"
      }
    },
    challenges: [
      "Seasonal fluctuations in parking demand",
      "Limited coastal parking resources",
      "Need to balance resident and visitor access",
      "Traffic congestion during peak periods"
    ],
    solution: "JAPA implemented a comprehensive smart parking system for Dana Point's coastal areas, with a focus on providing real-time availability information to visitors and supporting seasonal demand management.",
    implementation: "The system covers all major beach and harbor parking areas, with dynamic pricing capabilities to manage demand during peak periods. Integration with tourism websites and apps helps visitors plan their trips effectively.",
    outcomes: "Dana Point has significantly improved visitor access to its coastal areas while reducing traffic congestion. The data collected has also informed coastal access planning and helped balance the needs of visitors and residents.",
    color: "from-blue-500/20 to-teal-500/30"
  }
]; 