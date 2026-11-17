export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Databases" },
  { id: "programming", label: "Languages" },
  { id: "tools", label: "DevOps & Tools" },
  { id: "ai", label: "AI & Innovation" },
];

export const skillsData = [
  // Programming
  {
    name: "C",
    category: "programming",
    level: "Core & Algorithms",
    description: "Fundamental systems programming, memory management & data structures.",
    icon: "Code2",
    badge: "Core Language"
  },
  {
    name: "JavaScript",
    category: "programming",
    level: "Advanced (ES6+)",
    description: "Modern asynchronous JavaScript, closures, DOM manipulation & API integrations.",
    icon: "FileCode",
    badge: "Primary Language"
  },
  {
    name: "Python",
    category: "programming",
    level: "Intermediate",
    description: "Scripting, data analysis workflows, automation and algorithm problem-solving.",
    icon: "Terminal",
    badge: "Versatile"
  },
  {
    name: "Java",
    category: "programming",
    level: "Object-Oriented Core",
    description: "OOP concepts, class architecture, abstraction, inheritance and collections.",
    icon: "Cpu",
    badge: "OOP Core"
  },

  // Frontend
  {
    name: "HTML5",
    category: "frontend",
    level: "Proficient",
    description: "Semantic structures, web accessibility standards, SEO-ready document outlines.",
    icon: "Layout",
    badge: "Frontend"
  },
  {
    name: "CSS3",
    category: "frontend",
    level: "Proficient",
    description: "Responsive layouts, flexbox, CSS grid, keyframe animations & modern styling.",
    icon: "Palette",
    badge: "Frontend"
  },
  {
    name: "React.js",
    category: "frontend",
    level: "Advanced",
    description: "Component architecture, custom hooks, state management, SPA routing and lifecycle.",
    icon: "Atom",
    badge: "Core Framework"
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: "Proficient",
    description: "Utility-first design systems, custom themes, dark mode and rapid UI prototyping.",
    icon: "Sparkles",
    badge: "UI Styling"
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    level: "Proficient",
    description: "Event-driven runtime, asynchronous I/O, npm ecosystem and microservice backends.",
    icon: "Server",
    badge: "Backend"
  },
  {
    name: "Express.js",
    category: "backend",
    level: "Proficient",
    description: "RESTful API development, custom middlewares, routing, and controller pipelines.",
    icon: "Network",
    badge: "Backend"
  },
  {
    name: "PHP",
    category: "backend",
    level: "Working Knowledge",
    description: "Server-side scripting, request handling, session management and MySQL integration.",
    icon: "Binary",
    badge: "Server-Side"
  },

  // Database
  {
    name: "MySQL",
    category: "database",
    level: "Proficient",
    description: "Relational schema design, normalization, complex joins, indexing and data integrity.",
    icon: "Database",
    badge: "Relational DB"
  },
  {
    name: "PostgreSQL",
    category: "database",
    level: "Working Knowledge",
    description: "Advanced relational database management, schema constraints and SQL querying.",
    icon: "Database",
    badge: "Enterprise DB"
  },

  // Tools & DevOps
  {
    name: "Git",
    category: "tools",
    level: "Proficient",
    description: "Branching strategies, conflict resolution, version history and git workflows.",
    icon: "GitBranch",
    badge: "Version Control"
  },
  {
    name: "GitHub",
    category: "tools",
    level: "Proficient",
    description: "Collaborative repository management, PR reviews, issues tracking and CI triggers.",
    icon: "Github",
    badge: "Dev Platform"
  },
  {
    name: "VS Code",
    category: "tools",
    level: "Primary Environment",
    description: "Customized development workflow, debugging configurations, extensions and linters.",
    icon: "Code",
    badge: "IDE"
  },
  {
    name: "Canva",
    category: "tools",
    level: "Proficient",
    description: "UI wireframing, presentation design, design assets and visual asset creation.",
    icon: "Layers",
    badge: "Design"
  },
  {
    name: "Docker",
    category: "tools",
    level: "Foundational / Working",
    description: "Containerization basics, Dockerfile creation, image building and container runtime.",
    icon: "Box",
    badge: "DevOps"
  },
  {
    name: "Jenkins",
    category: "tools",
    level: "Foundational / Working",
    description: "Automated continuous integration pipelines, build trigger automation and testing.",
    icon: "Workflow",
    badge: "CI/CD"
  },
  {
    name: "AWS",
    category: "tools",
    level: "Foundational / Working",
    description: "Cloud computing fundamentals, EC2 instance management and basic cloud hosting.",
    icon: "Cloud",
    badge: "Cloud"
  },
  {
    name: "Terraform",
    category: "tools",
    level: "Foundational / Working",
    description: "Infrastructure as Code (IaC) principles, configuration files and resource declaration.",
    icon: "Boxes",
    badge: "IaC"
  },
  {
    name: "Linux",
    category: "tools",
    level: "Proficient",
    description: "Command-line navigation, shell scripting, file permissions and process monitoring.",
    icon: "TerminalSquare",
    badge: "OS & Shell"
  },

  // AI Tools
  {
    name: "Gemini AI",
    category: "ai",
    level: "Practiced",
    description: "Prompt engineering, API integration, architecture ideation and code optimization.",
    icon: "Bot",
    badge: "LLM & AI"
  },
  {
    name: "AI-Assisted Dev Tools",
    category: "ai",
    level: "Practiced",
    description: "Accelerated development workflows, automated testing scaffolding and code reviews.",
    icon: "Wand2",
    badge: "Productivity"
  }
];
