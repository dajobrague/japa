import { Shield, BarChart, Zap, Globe, Smartphone, Gauge } from 'lucide-react';

export interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  color: string;
  link?: string;
  bgImage?: string;
  modalImage?: string;
  detailedContent?: {
    overview: string;
    benefits: string[];
    technicalDetails: string;
    useCases: {
      title: string;
      description: string;
    }[];
  };
}

export const features: Feature[] = [
  {
    id: "real-time",
    icon: <Gauge className="h-6 w-6 text-white" />,
    title: "Real-Time Parking Data",
    description: "Convert every parking stall into a live data hub with 99%+ accurate sensors that deliver real-time availability information.",
    stat: "99%",
    statLabel: "Accuracy",
    link: "/solutions#real-time",
    color: "bg-japa-blue",
    bgImage: "/assets/images/features/image.png",
    modalImage: "/assets/images/features/image.png",
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
    icon: <BarChart className="h-6 w-6 text-white" />,
    title: "Analytics & Insights",
    description: "Gain valuable insights with historical data, occupancy trends, peak usage times, and customizable reports.",
    stat: "30%",
    statLabel: "Improved Efficiency",
    link: "/solutions#analytics",
    color: "bg-japa-slate",
    bgImage: "/assets/images/features/analytics_image.png",
    modalImage: "/assets/images/features/analytics_image.png",
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
    id: "violations",
    icon: <Shield className="h-6 w-6 text-white" />,
    title: "Violation Tracking",
    description: "Automatically detect parking violations with time-based monitoring, improving enforcement efficiency and turnover rates.",
    stat: "40%",
    statLabel: "Increased Revenue",
    link: "/solutions#violations",
    color: "bg-japa-blue",
    bgImage: "/assets/images/features/violation_image.png",
    modalImage: "/assets/images/features/violation_image.png",
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
    icon: <Zap className="h-6 w-6 text-white" />,
    title: "Seamless Integration",
    description: "Integrate with existing parking management systems, payment platforms, and campus apps for a unified experience.",
    stat: "15+",
    statLabel: "Compatible Systems",
    link: "/solutions#integration",
    color: "bg-japa-slate",
    bgImage: "/assets/images/illustrations/JAPA_ILLUSTRATION.png",
    modalImage: "/assets/images/illustrations/JAPA_ILLUSTRATION.png",
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
    id: "console",
    icon: <Globe className="h-6 w-6 text-white" />,
    title: "Web Management Console",
    description: "Access a powerful, user-friendly dashboard to manage and monitor your entire parking ecosystem from anywhere.",
    stat: "24/7",
    statLabel: "Accessibility",
    link: "/solutions#console",
    color: "bg-japa-blue",
    bgImage: "/assets/images/features/Console 1210.21.png",
    modalImage: "/assets/images/features/Console 1210.21.png",
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
    id: "mobile",
    icon: <Smartphone className="h-6 w-6 text-white" />,
    title: "Commuter Mobile App",
    description: "Empower drivers with a feature-rich mobile app for finding, navigating to, and paying for parking spaces.",
    stat: "30%",
    statLabel: "Time Saved",
    link: "/solutions#mobile",
    color: "bg-japa-slate",
    bgImage: "/assets/images/features/PerSpace-dark-.png",
    modalImage: "/assets/images/features/PerSpace-dark-.png",
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