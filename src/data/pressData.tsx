import { PressItem, PressKit, PressContact } from "@/types/press";

export const pressReleases: PressItem[] = [
  {
    id: 1,
    title: "JAPA Inc. Closes $5M Series A Funding to Accelerate Smart Parking Innovation",
    category: "News Release",
    date: "2024-03-01",
    slug: "japa-series-a-funding",
    summary: "JAPA Inc., a leader in smart parking solutions, announced today it has secured $5 million in Series A funding led by Mobility Ventures with participation from Urban Tech Capital and existing investors.",
    content: `
      <p>AUBURN, CA - March 1, 2024 - JAPA Inc., a leader in smart parking solutions, announced today it has secured $5 million in Series A funding led by Mobility Ventures with participation from Urban Tech Capital and existing investors.</p>
      
      <p>The investment will accelerate the development and deployment of JAPA's cutting-edge smart parking platform, which helps universities, municipalities, and private organizations optimize parking resources through real-time data analytics and user-friendly mobile applications.</p>
      
      <p>"This funding marks a significant milestone in JAPA's journey to transform parking management through technology," said Mathew Magno, CEO and Co-founder of JAPA. "With our current deployments already showing remarkable results in reducing congestion and improving user experience, this investment will allow us to bring these benefits to more communities and organizations nationwide."</p>
      
      <p>JAPA's IoT-based parking solutions have been successfully implemented across multiple universities and urban areas, consistently demonstrating improvements in parking utilization rates and substantial reductions in the time drivers spend searching for parking spaces.</p>
      
      <p>"Mobility Ventures is thrilled to lead this investment in JAPA," said Sarah Chen, Partner at Mobility Ventures. "Their innovative approach to solving parking challenges aligns perfectly with our focus on supporting transformative urban mobility solutions. We believe JAPA's technology has the potential to fundamentally change how parking is managed in smart cities of the future."</p>
      
      <p>The funding will support JAPA's plans to expand its team, enhance its product offerings, and accelerate market expansion across North America.</p>
    `,
    image: "/assets/images/press/japa-funding-announcement.jpg",
    source: {
      name: "JAPA Inc.",
      logo: "/assets/images/japa-logo.svg",
    },
    featured: true,
    tags: ["Funding", "Company News", "Smart Parking"],
    links: {
      pdf: "/assets/documents/press/japa-series-a-press-release.pdf",
    }
  },
  {
    id: 2,
    title: "JAPA Partners with University of California Davis to Implement Campus-Wide Smart Parking",
    category: "News Release",
    date: "2024-02-15",
    slug: "uc-davis-partnership",
    summary: "JAPA announced a new partnership with UC Davis to implement its smart parking platform across the entire campus, providing real-time parking availability to students, faculty, and visitors.",
    content: `
      <p>DAVIS, CA - February 15, 2024 - JAPA Inc. today announced a new partnership with the University of California, Davis to implement its smart parking platform across the entire campus, providing real-time parking availability information to students, faculty, and visitors.</p>
      
      <p>The comprehensive deployment will cover more than 15,000 parking spaces across the UC Davis campus and medical center, making it one of the largest university smart parking implementations in the United States.</p>
      
      <p>"After a thorough evaluation of available solutions, we selected JAPA because of their proven success with other universities and their technology's seamless integration with our existing campus apps," said Ramon Zavala, Director of Transportation Services at UC Davis. "This partnership will transform how our community navigates campus parking, reducing frustration and supporting our sustainability goals by minimizing unnecessary driving."</p>
      
      <p>The implementation will include JAPA's full suite of parking management tools, including IoT sensors, AI-powered analytics, and integration with the UC Davis mobile app. The system is expected to reduce the time spent searching for parking by up to 30%, leading to decreased traffic congestion and carbon emissions on campus.</p>
      
      <p>"We're excited to partner with UC Davis, an institution known for its commitment to innovation and sustainability," said Charles McVicker, CTO and Co-founder of JAPA. "This implementation will showcase how smart parking technology can benefit large campus environments while providing valuable data for future campus planning and resource allocation."</p>
      
      <p>The first phase of the implementation is scheduled to begin next month, with full campus coverage expected by the fall semester.</p>
    `,
    image: "/assets/images/press/uc-davis-partnership.jpg",
    source: {
      name: "JAPA Inc.",
      logo: "/assets/images/japa-logo.svg",
    },
    featured: true,
    tags: ["Partnership", "University", "Implementation"],
    links: {
      pdf: "/assets/documents/press/uc-davis-partnership-announcement.pdf",
    }
  },
  {
    id: 3,
    title: "Smart Parking Tech Startup JAPA Named to Fast Company's Most Innovative Companies List",
    category: "Award",
    date: "2024-01-10",
    slug: "fast-company-innovation-award",
    summary: "JAPA has been recognized in Fast Company's annual list of the World's Most Innovative Companies for 2024, highlighting its contributions to urban mobility solutions.",
    content: `
      <p>NEW YORK - January 10, 2024 - JAPA Inc., the California-based smart parking technology provider, has been named to Fast Company's prestigious annual list of the World's Most Innovative Companies for 2024, recognized for its groundbreaking contributions to urban mobility.</p>
      
      <p>The list honors businesses that are making the most significant impact on their industries and culture through innovation. JAPA ranked #7 in the Urban Development & Real Estate category, acknowledging the company's innovative approach to solving parking challenges in universities, healthcare campuses, and urban centers.</p>
      
      <p>"We're honored to be recognized by Fast Company alongside so many incredible innovators," said Mathew Magno, CEO of JAPA. "This recognition validates our team's hard work and our mission to transform parking from a daily frustration into a seamless experience through smart technology."</p>
      
      <p>JAPA's technology has been implemented in over 25 locations across the United States, consistently demonstrating significant improvements in parking efficiency, user satisfaction, and resource utilization. The company's innovative use of IoT sensors, machine learning algorithms, and user-friendly interfaces has set a new standard for parking management solutions.</p>
      
      <p>Fast Company's editors and writers sought out the companies making the biggest strides in their respective fields, from artificial intelligence to urban development. The World's Most Innovative Companies is Fast Company's signature franchise and one of its most highly anticipated editorial efforts of the year.</p>
    `,
    image: "/assets/images/press/japa-fast-company-award.jpg",
    source: {
      name: "Fast Company",
      logo: "/assets/images/press/fast-company-logo.svg",
      url: "https://www.fastcompany.com"
    },
    featured: true,
    tags: ["Award", "Recognition", "Innovation"],
    links: {
      externalArticle: "https://www.fastcompany.com/most-innovative-companies/2024",
    }
  },
  {
    id: 4,
    title: "The Future of Parking: How JAPA's Technology is Reducing Urban Congestion",
    category: "Media Coverage",
    date: "2023-11-22",
    slug: "techcrunch-feature",
    summary: "TechCrunch explores how JAPA's smart parking solutions are helping cities reduce traffic congestion and emissions through real-time parking data and predictive analytics.",
    content: `
      <p>In a comprehensive feature published today, TechCrunch examines how JAPA's innovative smart parking technology is addressing one of urban living's most persistent challenges: finding parking.</p>
      
      <p>The article highlights how JAPA's solution goes beyond simple space counting, leveraging AI and machine learning to predict parking availability and guide drivers efficiently to open spaces. According to studies cited in the article, searching for parking accounts for up to 30% of urban traffic congestion in some cities.</p>
      
      <p>"What makes JAPA's approach unique is their holistic view of the parking ecosystem," writes TechCrunch reporter Maria Sanchez. "Their platform doesn't just count cars; it analyzes patterns, predicts future availability, and communicates seamlessly with drivers through intuitive mobile interfaces."</p>
      
      <p>The feature includes interviews with JAPA executives and customers, including a case study of Sacramento State University, where implementation of JAPA's technology reduced average parking search times from 12 minutes to less than 4 minutes during peak hours.</p>
      
      <p>The article also discusses JAPA's role in the broader smart city ecosystem, noting how parking data can inform urban planning decisions and support sustainability initiatives by reducing unnecessary driving and the associated emissions.</p>
    `,
    image: "/assets/images/press/techcrunch-feature.jpg",
    source: {
      name: "TechCrunch",
      logo: "/assets/images/press/techcrunch-logo.svg",
      url: "https://www.techcrunch.com"
    },
    featured: false,
    tags: ["Media Coverage", "Technology", "Smart Cities"],
    links: {
      externalArticle: "https://techcrunch.com/2023/11/22/japa-smart-parking",
    }
  },
  {
    id: 5,
    title: "JAPA Introduces New AI-Powered Predictive Parking Analytics Platform",
    category: "News Release",
    date: "2023-10-05",
    slug: "predictive-analytics-launch",
    summary: "JAPA today announced the launch of its new AI-powered Predictive Parking Analytics platform, designed to help parking operators anticipate demand and optimize resource allocation.",
    content: `
      <p>AUBURN, CA - October 5, 2023 - JAPA Inc. today announced the launch of its new AI-powered Predictive Parking Analytics platform, designed to help parking operators anticipate demand patterns and optimize resource allocation with unprecedented accuracy.</p>
      
      <p>The new platform builds on JAPA's existing smart parking solution by incorporating advanced machine learning algorithms that analyze historical usage data, event schedules, weather patterns, and other variables to forecast parking demand up to seven days in advance.</p>
      
      <p>"Predictive analytics represents the next evolution in smart parking," said Charles McVicker, CTO of JAPA. "By enabling parking operators to see into the future, we're helping them move from reactive to proactive management, optimizing staffing, improving user experience, and maximizing revenue opportunities."</p>
      
      <p>Key features of the new platform include:</p>
      <ul>
        <li>Hourly, daily, and weekly demand forecasts with up to 95% accuracy</li>
        <li>Event impact modeling to predict how campus or community events will affect parking demand</li>
        <li>Automated staffing recommendations based on predicted usage patterns</li>
        <li>Dynamic pricing suggestions to optimize revenue and space utilization</li>
        <li>Advanced visualization tools for intuitive understanding of complex data patterns</li>
      </ul>
      
      <p>Early adopters of the platform, including University of California Riverside and City of Sacramento, have reported significant operational improvements, including staff optimization savings of up to 15% and increased parking revenue through more effective pricing strategies.</p>
      
      <p>The Predictive Parking Analytics platform is available immediately as an add-on to JAPA's core smart parking system or as a standalone service for parking operators with existing sensor infrastructure.</p>
    `,
    image: "/assets/images/press/predictive-analytics-launch.jpg",
    source: {
      name: "JAPA Inc.",
      logo: "/assets/images/japa-logo.svg",
    },
    featured: false,
    tags: ["Product Launch", "AI", "Analytics"],
    links: {
      pdf: "/assets/documents/press/predictive-analytics-release.pdf",
      video: "https://www.youtube.com/watch?v=example",
    }
  }
];

export const pressKits: PressKit[] = [
  {
    id: 1,
    title: "JAPA Brand Kit",
    description: "Official JAPA logos, product images, and brand guidelines for media use.",
    assets: {
      logos: [
        {
          name: "JAPA Primary Logo",
          preview: "/assets/images/press/kit/japa-logo-preview.jpg",
          download: "/assets/downloads/press/japa-logo-package.zip"
        },
        {
          name: "JAPA Icon",
          preview: "/assets/images/press/kit/japa-icon-preview.jpg",
          download: "/assets/downloads/press/japa-icon-package.zip"
        }
      ],
      images: [
        {
          name: "Product Screenshot - Mobile App",
          preview: "/assets/images/press/kit/app-screenshot-preview.jpg",
          download: "/assets/downloads/press/japa-app-screenshots.zip"
        },
        {
          name: "Product Screenshot - Dashboard",
          preview: "/assets/images/press/kit/dashboard-preview.jpg",
          download: "/assets/downloads/press/japa-dashboard-screenshots.zip"
        },
        {
          name: "Team Photos",
          preview: "/assets/images/press/kit/team-preview.jpg",
          download: "/assets/downloads/press/japa-team-photos.zip"
        }
      ],
      documents: [
        {
          name: "JAPA Fact Sheet",
          description: "Key information about JAPA, including founding story, leadership, and product overview.",
          download: "/assets/downloads/press/japa-fact-sheet.pdf"
        },
        {
          name: "Brand Guidelines",
          description: "Comprehensive guide to JAPA's visual identity, including logo usage, color palette, and typography.",
          download: "/assets/downloads/press/japa-brand-guidelines.pdf"
        }
      ]
    }
  },
  {
    id: 2,
    title: "SmartPark Platform Media Kit",
    description: "Information and resources specific to JAPA's flagship SmartPark platform.",
    assets: {
      images: [
        {
          name: "SmartPark Sensor Installation",
          preview: "/assets/images/press/kit/sensor-installation-preview.jpg",
          download: "/assets/downloads/press/sensor-installation-photos.zip"
        },
        {
          name: "SmartPark Dashboard Interface",
          preview: "/assets/images/press/kit/smartpark-dashboard-preview.jpg",
          download: "/assets/downloads/press/smartpark-dashboard-screenshots.zip"
        }
      ],
      documents: [
        {
          name: "SmartPark Technical Specifications",
          description: "Detailed information about sensor technology, data accuracy, and system architecture.",
          download: "/assets/downloads/press/smartpark-tech-specs.pdf"
        },
        {
          name: "Case Study Collection",
          description: "Compilation of success stories from SmartPark implementations across different environments.",
          download: "/assets/downloads/press/smartpark-case-studies.pdf"
        }
      ]
    }
  }
];

export const pressContacts: PressContact[] = [
  {
    name: "Jennifer Rodriguez",
    position: "Media Relations Director",
    email: "press@parkjapa.com",
    phone: "+1 (555) 123-4567",
    image: "/assets/images/press/jennifer-rodriguez.jpg"
  },
  {
    name: "Michael Okonjo",
    position: "Corporate Communications Manager",
    email: "communications@parkjapa.com",
    phone: "+1 (555) 987-6543",
    image: "/assets/images/press/michael-okonjo.jpg"
  }
]; 