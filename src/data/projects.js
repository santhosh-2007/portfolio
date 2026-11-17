export const projectsData = [
  {
    id: "smart-attendance",
    title: "Smart Attendance Monitoring & Analytics System",
    category: "Full Stack / AI & Automation",
    shortDesc:
      "An automated student attendance platform designed to improve attendance tracking through QR scanning, fingerprint authentication, face recognition and AI monitoring.",
    fullDesc:
      "A comprehensive academic attendance ecosystem replacing error-prone manual roll calls. Features multi-modal verification including time-limited dynamic QR code generation, biometric simulation/integration, and an automated analytics engine providing real-time insights into student presence patterns and anomaly alerts.",
    technologies: [
      "React",
      "Node.js",
      "PHP",
      "MySQL",
      "Dynamic QR",
      "Android",
      "AI Monitoring"
    ],
    features: [
      "Student authentication & profile management",
      "Teacher dashboard with live classroom session control",
      "QR-based attendance with cryptographic refresh interval",
      "Dynamic QR generation preventing unauthorized proxy scans",
      "Historical attendance records with exportable reports",
      "Comprehensive attendance analytics & percentage tracking",
      "AI monitoring module for proxy detection & attendance trends"
    ],
    myContribution:
      "Architected the full-stack system architecture, built the interactive teacher & student React portals, implemented the secure backend API with PHP & Node.js, and integrated MySQL database schemas with attendance analytics visualizations.",
    githubUrl: "https://github.com/santhosh-s/smart-attendance-system", // Placeholder: update when repository is published
    liveDemoUrl: null, // Placeholder: add demo URL when deployed
    gradient: "from-purple-600 via-indigo-600 to-cyan-500",
    accentColor: "#8b5cf6",
    metrics: [
      { label: "Verification Modes", value: "Multi-Modal" },
      { label: "Target Audience", value: "Colleges & Institutes" },
      { label: "Status", value: "Completed Project" }
    ]
  },
  {
    id: "dreamhomes",
    title: "DreamHomes – Real Estate Property Catalog",
    category: "Frontend & Cloud DevOps",
    shortDesc:
      "A modern real estate property catalog that allows users to explore properties through filters, galleries and property information.",
    fullDesc:
      "A responsive property discovery application designed with intuitive search mechanics, high-resolution visual galleries, and streamlined property detail views. Engineered with production-grade DevOps practices including Docker containerization, Jenkins CI pipelines, and infrastructure preparation.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "CSS3",
      "Docker",
      "Jenkins",
      "Git",
      "Terraform",
      "Nginx"
    ],
    features: [
      "Dynamic property listings with price and location filtering",
      "Advanced property search filters (bedrooms, property type, price range)",
      "Interactive property image galleries and visual previews",
      "Detailed property specifications and amenities showcase",
      "Fully responsive interface optimized for mobile and desktop",
      "Dockerized container setup with Jenkins pipeline integration"
    ],
    myContribution:
      "Designed and coded the entire React + Vite frontend interface, built reusable UI components, implemented real-time client-side filter logic, and established Docker container configurations with automated build scripts.",
    githubUrl: "https://github.com/santhosh-s/dreamhomes-catalog",
    liveDemoUrl: null,
    gradient: "from-blue-600 via-cyan-500 to-teal-400",
    accentColor: "#00f0ff",
    metrics: [
      { label: "Build Tool", value: "Vite + React" },
      { label: "Containerized", value: "Docker & Nginx" },
      { label: "CI/CD", value: "Jenkins & Git" }
    ]
  },
  {
    id: "subscription-mgmt",
    title: "Subscription Management System – Brightloop Software",
    category: "SaaS & Enterprise Web App",
    shortDesc:
      "A subscription management platform designed to manage subscription information, billing frequencies and business analytics.",
    fullDesc:
      "An enterprise-style software subscription management portal built for tracking customer licenses, billing cadences (monthly, quarterly, annual), churn metrics, and revenue analytics. Equips finance and operations teams with clean visualization dashboards and CSV reporting.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "MySQL / PostgreSQL",
      "REST APIs"
    ],
    features: [
      "Secure administrative and user authentication flows",
      "Granular role-based access control (RBAC)",
      "Interactive subscription dashboards with renewal timelines",
      "Financial and customer retention KPI analytics",
      "Exportable CSV reporting for accounting and auditing",
      "Flexible billing frequency management (Monthly, Annual, Custom)"
    ],
    myContribution:
      "Developed the frontend admin dashboard, designed responsive data tables with pagination and sorting, integrated RESTful API endpoints for subscription lifecycles, and built the CSV report generation module.",
    githubUrl: "https://github.com/santhosh-s/brightloop-subscription-mgmt",
    liveDemoUrl: null,
    gradient: "from-fuchsia-600 via-purple-600 to-indigo-600",
    accentColor: "#a855f7",
    metrics: [
      { label: "Role Access", value: "RBAC Enabled" },
      { label: "Data Export", value: "CSV Engine" },
      { label: "Dashboard", value: "KPI Analytics" }
    ]
  },
  {
    id: "menu-optimization",
    title: "Menu Optimization & Customer Preference Analysis",
    category: "Data Analytics & Business Intelligence",
    shortDesc:
      "A business analytics project focused on analyzing customer preferences and menu performance to support data-driven business decisions.",
    fullDesc:
      "An analytical data-driven project evaluating restaurant and hospitality transactional records. Uncovers high-margin combinations, customer ordering behavior patterns, peak demand cycles, and actionable suggestions to maximize profitability and minimize food wastage.",
    technologies: [
      "Python",
      "Pandas",
      "Data Analysis",
      "MySQL",
      "Visualization",
      "Business Analytics"
    ],
    features: [
      "Comprehensive restaurant sales and transaction data preprocessing",
      "Customer preference segmentation and item popularity scoring",
      "Menu engineering matrix (Stars, Plowhorses, Puzzles, Dogs)",
      "Visual analytical reports depicting revenue trends and item affinity",
      "Data-driven strategic recommendations for menu pricing and specials"
    ],
    myContribution:
      "Structured the dataset processing pipeline in Python, formulated data models to analyze item margin versus volume, visualized customer trend patterns, and compiled analytical summary reports.",
    githubUrl: "https://github.com/santhosh-s/menu-optimization-analysis",
    liveDemoUrl: null,
    gradient: "from-emerald-500 via-teal-600 to-cyan-600",
    accentColor: "#10b981",
    metrics: [
      { label: "Domain", value: "Business Analytics" },
      { label: "Focus", value: "Customer Insights" },
      { label: "Data Pipeline", value: "Python & SQL" }
    ]
  },
  {
    id: "abc-gold-place",
    title: "ABC Gold Place – Jewellery E-Commerce",
    category: "E-Commerce & Product Management",
    shortDesc:
      "A jewellery e-commerce website concept with product management and a modern shopping interface.",
    fullDesc:
      "A specialized luxury retail e-commerce platform concept showcasing fine jewellery collections. Features dynamic category filtering by metal purity and weight, responsive showcase galleries, and an administrative inventory panel for updating product catalogs.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "MySQL",
      "UI/UX Design"
    ],
    features: [
      "Luxury aesthetic product catalog with rich visual cards",
      "Granular category filtering (Gold, Diamond, Silver, Collections)",
      "Administrative dashboard for product inventory & price updates",
      "Image upload support and multi-angle product showcase",
      "Detailed product specifications (karat, weight, certification details)",
      "Responsive customer shopping experience across all device form factors"
    ],
    myContribution:
      "Crafted the sleek e-commerce frontend interface, implemented category browsing and filter logic, structured MySQL schemas for product variants, and developed the administrative product entry forms.",
    githubUrl: "https://github.com/santhosh-s/abc-gold-place-ecommerce",
    liveDemoUrl: null,
    gradient: "from-amber-500 via-orange-500 to-purple-600",
    accentColor: "#f59e0b",
    metrics: [
      { label: "Type", value: "E-Commerce Catalog" },
      { label: "Admin Panel", value: "Inventory System" },
      { label: "Styling", value: "Tailwind Glassmorphism" }
    ]
  }
];
