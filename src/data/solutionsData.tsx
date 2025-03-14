import { FeatureContent, FAQItem } from "../types/solutions";
import { Gauge, BarChart3, Shield, RefreshCw, Layers, Smartphone } from "lucide-react";

export const featuresData: FeatureContent[] = [
  {
    id: "real-time-data",
    title: "Real-Time Parking Data",
    description: "Convert every parking stall and lane into a live data hub with our high-precision sensors, providing accurate occupancy information in real time.",
    icon: <Gauge className="text-japa-blue w-8 h-8" />,
    tags: ["Precision Sensors", "Live Updates", "99% Accuracy"],
    bgImage: "/lovable-uploads/aerial-parking-lot.jpg",
    detailedContent: {
      overview: "Our real-time parking data solution transforms traditional parking spaces into smart, connected data hubs that continuously monitor occupancy status with incredible precision.",
      benefits: [
        "Reduce time spent searching for parking by up to 30%",
        "Minimize traffic congestion in parking areas",
        "Enable data-driven parking management decisions",
        "Improve customer satisfaction with reliable parking information"
      ],
      technicalDetails: "Each parking stall is equipped with our proprietary wireless sensor technology that detects vehicle presence with 99% accuracy. Sensors communicate via a secure mesh network to our cloud platform, where data is processed and distributed in near real-time (≤2 second latency).",
      useCases: [
        {
          title: "University Campus",
          description: "Helping students and faculty quickly locate available parking during peak hours, reducing tardiness and frustration."
        },
        {
          title: "Shopping Centers",
          description: "Guiding shoppers to available spaces near their preferred entrances, improving retail experience and increasing visitor time in stores."
        }
      ]
    }
  },
  {
    id: "analytics",
    title: "Analytics & Historical Data",
    description: "Gain actionable insights with daily peak occupancy reports, average stay times, heatmaps, and detailed historical data analysis.",
    icon: <BarChart3 className="text-japa-blue w-8 h-8" />,
    tags: ["Trend Analysis", "Custom Reports", "Data Export"],
    bgImage: "/lovable-uploads/camilo-botia-k4vFDPJoDZk-unsplash.jpg",
    detailedContent: {
      overview: "Our analytics platform transforms raw parking data into meaningful insights that help operators optimize space utilization, improve revenue, and plan for future needs.",
      benefits: [
        "Identify peak usage patterns to optimize staffing and resources",
        "Discover underutilized parking areas to maximize property value",
        "Generate detailed reports for stakeholders and planning committees",
        "Make data-driven decisions about pricing and time restrictions"
      ],
      technicalDetails: "The analytics dashboard processes millions of data points using advanced machine learning algorithms to identify patterns and anomalies. Users can generate custom reports with just a few clicks, or schedule automated reports to be delivered to key stakeholders.",
      useCases: [
        {
          title: "Municipal Government",
          description: "Analyzing parking patterns to adjust pricing strategies for different zones and times of day, resulting in more efficient utilization."
        },
        {
          title: "Airport Parking",
          description: "Tracking seasonal and daily usage trends to optimize shuttle services and predict capacity needs during peak travel periods."
        }
      ]
    }
  },
  {
    id: "violation-tracking",
    title: "Violation Tracking",
    description: "Detect and track parking violations efficiently with automated time-zone monitoring, improving enforcement and increasing turnover.",
    icon: <Shield className="text-japa-blue w-8 h-8" />,
    tags: ["Automated Detection", "Alert System", "Enforcement API"],
    bgImage: "/lovable-uploads/k-mitch-hodge-iTlM3NiAl0M-unsplash.jpg",
    detailedContent: {
      overview: "Our violation tracking system automatically monitors parking duration in time-limited spaces, generating alerts for enforcement personnel when violations occur.",
      benefits: [
        "Increase parking turnover in high-demand areas",
        "Improve enforcement efficiency with targeted alerts",
        "Reduce labor costs associated with manual monitoring",
        "Create fair and consistent enforcement processes"
      ],
      technicalDetails: "Using the same sensors that detect occupancy, our system precisely tracks vehicle duration in each space. When a vehicle exceeds the allowed time, the system automatically generates an alert that can be sent to enforcement personnel via mobile app, text, or integrated directly with existing enforcement systems.",
      useCases: [
        {
          title: "Downtown Business District",
          description: "Ensuring fair access to limited parking spaces in front of retail businesses, increasing customer turnover and revenue."
        },
        {
          title: "Hospital Visitor Parking",
          description: "Monitoring short-term spaces to ensure availability for patients while maintaining longer-term options for visitors and staff."
        }
      ]
    }
  },
  {
    id: "integration",
    title: "Integration & Hardware",
    description: "Seamlessly integrate with existing parking systems using our waterproof, minimal-maintenance sensors with 99%+ accuracy.",
    icon: <RefreshCw className="text-japa-blue w-8 h-8" />,
    tags: ["Open API", "Waterproof Design", "5+ Year Battery"],
    bgImage: "/lovable-uploads/willian-justen-de-vasconcellos-cdWjBaLnpPU-unsplash.jpg",
    detailedContent: {
      overview: "Our hardware and integration solutions are designed for seamless deployment in any environment, with minimal disruption to existing infrastructure and operations.",
      benefits: [
        "Works with existing parking management systems",
        "Minimal maintenance with long-life battery technology",
        "Withstands extreme weather conditions and heavy traffic",
        "Simple installation with no wiring or pavement cutting required"
      ],
      technicalDetails: "JAPA sensors feature IP68-rated waterproof enclosures, 5+ year battery life, and are installed in minutes using industrial-grade adhesive. The open API architecture allows for integration with payment systems, enforcement software, mobile apps, and other smart city technologies.",
      useCases: [
        {
          title: "Ski Resort",
          description: "Deploying sensors in harsh winter environments with snow and ice, maintaining accurate detection throughout seasonal extremes."
        },
        {
          title: "Metropolitan Transit Authority",
          description: "Integrating with existing payment and permit systems at park-and-ride facilities to create a unified management platform."
        }
      ]
    }
  },
  {
    id: "management-console",
    title: "Management Console",
    description: "Access our user-friendly web-based dashboard for comprehensive reporting tools and real-time parking management.",
    icon: <Layers className="text-japa-blue w-8 h-8" />,
    tags: ["Intuitive UI", "Role-Based Access", "Real-time Alerts"],
    bgImage: "/lovable-uploads/graham-ruttan-b3LF7JHQmms-unsplash.jpg",
    detailedContent: {
      overview: "Our management console serves as the central command center for parking operations, providing administrators with complete control and visibility over their parking assets.",
      benefits: [
        "Intuitive interface requires minimal training",
        "Customizable dashboards for different user roles",
        "Real-time monitoring of system health and performance",
        "Centralized management of multiple parking locations"
      ],
      technicalDetails: "The web-based console is built on a responsive framework that works on any device. Role-based access control ensures users only see the information relevant to their responsibilities. The system automatically monitors sensor health, connectivity, and data quality, alerting administrators to any issues that require attention.",
      useCases: [
        {
          title: "Corporate Campus",
          description: "Providing facility managers with a complete view of parking utilization across multiple buildings and lots for employee and visitor management."
        },
        {
          title: "Event Venue",
          description: "Enabling staff to monitor parking capacity in real-time during large events, directing traffic flow and preventing congestion."
        }
      ]
    }
  },
  {
    id: "mobile-app",
    title: "Mobile App",
    description: "Help commuters locate parking in real time with our companion mobile app, reducing the stress of finding a spot.",
    icon: <Smartphone className="text-japa-blue w-8 h-8" />,
    tags: ["iOS & Android", "Navigation", "Push Notifications"],
    bgImage: "/lovable-uploads/doug-bagg-FB406CKGL0Q-unsplash.jpg",
    detailedContent: {
      overview: "Our mobile app puts real-time parking information directly in the hands of drivers, helping them quickly find available spaces and navigate to their destination.",
      benefits: [
        "Reduces time and frustration finding parking",
        "Provides turn-by-turn directions to available spaces",
        "Remembers parking location for easy return navigation",
        "Supports payment integration where available"
      ],
      technicalDetails: "Available for both iOS and Android, the app uses GPS and Bluetooth technology to provide precise navigation to available parking spaces. Users can filter by price, time limits, or special features (e.g., EV charging, handicap accessible). The app can be white-labeled for municipalities and organizations.",
      useCases: [
        {
          title: "Urban Navigation",
          description: "Helping city visitors find affordable parking near their destinations without circling blocks multiple times."
        },
        {
          title: "Commuter Planning",
          description: "Allowing daily commuters to check parking availability before leaving home, adjusting departure times or routes accordingly."
        }
      ]
    }
  }
];

export const faqData: FAQItem[] = [
  {
    question: "How long does installation take?",
    answer: "Our installation process is quick and non-disruptive. Typically, a full parking lot can be equipped with sensors in 1-2 days, with minimal impact on parking operations during installation."
  },
  {
    question: "Will the system work in all weather conditions?",
    answer: "Yes, our sensors are designed to operate in all weather conditions. They are waterproof, can withstand extreme temperatures (-40°F to 185°F), and have been tested in snow, rain, and high-humidity environments."
  },
  {
    question: "How accurate are the sensors?",
    answer: "Our sensors have a 99%+ accuracy rate in detecting vehicle presence. The system uses multiple validation methods to ensure reliable data even in challenging conditions."
  },
  {
    question: "Can your system integrate with our existing parking equipment?",
    answer: "Yes, our open API architecture allows for seamless integration with existing parking systems, including payment kiosks, gate systems, license plate recognition, and other parking management software."
  },
  {
    question: "What kind of ROI can we expect?",
    answer: "Clients typically see ROI within 12-18 months through increased efficiency, better enforcement, optimized parking utilization, and enhanced user experience. We'll work with you to identify specific ROI metrics for your organization."
  }
]; 