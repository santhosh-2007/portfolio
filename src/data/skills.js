export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & Database" },
  { id: "programming", label: "Programming" },
  { id: "tools", label: "Version Control & Tools" },
];

export const skillsData = [
  // Programming
  {
    name: "Java",
    category: "programming",
    level: "Object-Oriented Programming",
    description: "Core OOP principles, class hierarchies, inheritance, abstraction and data structures.",
    icon: "Coffee",
    badge: "Programming"
  },

  // Frontend
  {
    name: "HTML",
    category: "frontend",
    level: "Proficient",
    description: "Semantic web structures, accessible markup, document outlining and SEO-friendly layout.",
    icon: "Layout",
    badge: "Markup"
  },
  {
    name: "CSS",
    category: "frontend",
    level: "Proficient",
    description: "Responsive layouts, Flexbox, Grid systems, animations and modern web styling.",
    icon: "Palette",
    badge: "Styling"
  },
  {
    name: "React",
    category: "frontend",
    level: "Advanced",
    description: "Component architecture, hooks, state management, SPA routing and responsive UIs.",
    icon: "Atom",
    badge: "UI Library"
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: "Proficient",
    description: "Utility-first CSS framework, rapid UI prototyping, responsive layouts and custom themes.",
    icon: "Sparkles",
    badge: "CSS Framework"
  },

  // Backend & Database
  {
    name: "Node",
    category: "backend",
    level: "Proficient",
    description: "Server-side JavaScript runtime, RESTful API architecture and backend microservices.",
    icon: "Server",
    badge: "Backend Runtime"
  },
  {
    name: "PostgreSQL",
    category: "backend",
    level: "Working Knowledge",
    description: "Advanced relational database management, SQL schema design, relations and query optimization.",
    icon: "Database",
    badge: "Relational DB"
  },

  // Tools & Version Control
  {
    name: "Git",
    category: "tools",
    level: "Proficient",
    description: "Distributed version control, branching, merge conflict resolution and commit history tracking.",
    icon: "GitBranch",
    badge: "Version Control"
  },
  {
    name: "GitHub",
    category: "tools",
    level: "Proficient",
    description: "Cloud repository hosting, collaborative open-source workflows, issue tracking and project management.",
    icon: "Github",
    badge: "Dev Platform"
  }
];
