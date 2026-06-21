export const personalInfo = {
  name: "Sudhir Kushwaha",
  title: "Frontend React & Next.js Developer",
  tagline: "Building scalable, high-performance web experiences",
  email: "sudhirkushwaha077@gmail.com",
  phone: "+91 9560592677",
  location: "Mumbai, India",
  linkedin: "https://www.linkedin.com/in/sudhir-kushwaha-5b6a34107/",
  github: "https://github.com/sudhir05566",
  gitlab: "https://gitlab.com/sudhir05566",
  yearsOfExperience: "3.8+",
  resumeUrl: "/Sudhir-Kushwaha-Resume.pdf",
  resumeFileName: "Sudhir-Kushwaha-Resume.pdf",
  profileImage: "/sudhir-profile.png",
};

export const typewriterRoles = [
  "Frontend React Developer",
  "Next.js Specialist",
  "UI/UX Enthusiast",
  "Performance Optimizer",
];

export const aboutTypewriterRoles = [
  "Frontend React & Next.js Developer",
  "Scalable Web App Builder",
  "OTT & E-commerce Expert",
];

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  category: string;
  links: ProjectLink[];
  image: string;
};

export const profile = `Frontend Developer with 3.8+ years of experience building scalable, high-performance web applications using React.js, Next.js, TypeScript, and Redux Toolkit. Specialized in SSR/SSG, performance optimization, and reusable component architecture. Delivered multiple production-grade applications across OTT, e-commerce, fintech, and dashboard platforms. Strong expertise in REST API integration, state management, and responsive UI development, with a focus on improving user experience and application performance in Agile environments.`;

export const experience = {
  company: "End Point IT Services Pvt Ltd",
  role: "Frontend Developer",
  period: "Jul 2022 – Mar 2026",
  location: "Mumbai, India",
  highlights: [
    "Developed and maintained scalable web applications using React.js, Next.js, TypeScript, and Redux Toolkit",
    "Built reusable and responsive UI components, improving development efficiency by 40%",
    "Integrated REST APIs and optimized data fetching using Axios and modern React patterns",
    "Improved application performance by 25–30% through SSR, code splitting, lazy loading, and image optimization",
    "Collaborated with cross-functional teams in Agile environments to deliver production-ready applications",
    "Participated in code reviews and maintained coding standards and best practices",
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Material UI"],
  },
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript"],
  },
  {
    category: "Markup & Structure",
    items: ["HTML5"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Bootstrap", "CSS3"],
  },
  {
    category: "State Management",
    items: ["Redux Toolkit", "Context API"],
  },
  {
    category: "Web Technologies",
    items: ["SSR", "SSG", "CSR", "REST APIs", "JWT Authentication"],
  },
  {
    category: "Tools & Practices",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Axios",
      "NPM",
      "Postman",
      "Jira",
      "Agile Methodology",
      "SEO Optimization",
      "Performance Optimization",
      "Responsive Design",
      "Cross-Browser Compatibility",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Cinepolis India Platform",
    period: "Aug 2022 – Jan 2023",
    description:
      "Dynamic movie platform with SSR/SSG, real-time listings, and optimized rendering for faster page loads.",
    highlights: [
      "Improved performance by ~30% using optimized rendering strategies",
      "Developed reusable UI components to enhance scalability",
      "Integrated APIs for real-time movie listings and showtimes",
    ],
    tech: ["Next.js", "JavaScript", "HTML5", "CSS", "Bootstrap"],
    category: "Entertainment",
    links: [{ label: "Visit site", href: "https://cinepolisindia.com/" }],
    image: "/projects/cinepolis-india.png",
  },
  {
    name: "Revivify (E-commerce Platform)",
    period: "Feb 2023 – Aug 2023",
    description:
      "Responsive e-commerce frontend with high-performance product pages and cart management.",
    highlights: [
      "Translated UI/UX designs into high-performance web pages",
      "Improved responsiveness and accessibility across devices",
      "Integrated APIs for product and cart management",
    ],
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "HTML5"],
    category: "E-commerce",
    links: [{ label: "Visit site", href: "https://www.revivify.com/" }],
    image: "/projects/revivify.png",
  },
  {
    name: "Cinepolis Gulf Websites",
    period: "Sep 2023 – Dec 2023",
    description:
      "Multi-region cinema web platform with seamless navigation and dynamic content rendering.",
    highlights: [
      "Built reusable UI components using React architecture",
      "Implemented client-side routing and seamless navigation",
      "Managed complex state using Redux/Context API",
    ],
    tech: ["React.js", "Bootstrap", "JavaScript", "HTML5"],
    category: "Entertainment",
    links: [{ label: "Visit site", href: "https://www.cinepolisgulf.com/" }],
    image: "/projects/cinepolis-gulf.png",
  },
  {
    name: "Peoplematters Website",
    period: "Jan 2024 – Sep 2024",
    description:
      "Content-driven platform with SSR/SSG, search, and filtering for enhanced discoverability.",
    highlights: [
      "Implemented search and filtering functionality",
      "Integrated REST APIs for real-time content delivery",
      "Optimized performance using Tailwind CSS and modern practices",
    ],
    tech: ["Next.js", "Tailwind CSS", "HTML5"],
    category: "Media",
    links: [{ label: "Visit site", href: "https://www.peoplematters.in/" }],
    image: "/projects/peoplematters.png",
  },
  {
    name: "Vrott TV",
    period: "Oct 2024 – Dec 2025",
    description:
      "Production-grade OTT streaming platform with dynamic routing, multilingual content, and media rendering.",
    highlights: [
      "Developed streaming frontend with dynamic routing and content pages",
      "Optimized performance for fast content delivery",
      "Integrated APIs for real-time video data",
    ],
    tech: ["Next.js", "HTML5", "Tailwind CSS", "JavaScript"],
    category: "OTT / Streaming",
    links: [{ label: "Visit site", href: "https://www.vrott.tv/" }],
    image: "/projects/vrott-tv.png",
  },
  {
    name: "Slasherplay",
    period: "Oct 2024 – Dec 2025",
    description:
      "OTT streaming frontend focused on horror and genre content with seamless media playback experience.",
    highlights: [
      "Built production-grade streaming frontend for genre-focused content",
      "Implemented dynamic routing and media content rendering",
      "Integrated APIs for real-time video catalog and playback data",
    ],
    tech: ["Next.js", "HTML5", "Tailwind CSS", "JavaScript"],
    category: "OTT / Streaming",
    links: [{ label: "Visit site", href: "https://www.slasher.tv/" }],
    image: "/projects/slasherplay.png",
  },
  {
    name: "Nuvio Events (Admin Dashboard)",
    period: "Jan 2026 – Mar 2026",
    description:
      "Scalable admin dashboard with filters, tables, and CRUD operations for event management.",
    highlights: [
      "Built scalable admin dashboard with filters, tables, and CRUD operations",
      "Developed reusable dashboard components for maintainability",
      "Integrated APIs for event and ticket management",
    ],
    tech: ["Next.js", "Tailwind CSS", "HTML5", "JavaScript"],
    category: "Dashboard",
    links: [
      {
        label: "Visit site",
        href: "https://uat-opera-core-cms.nuviotech.co/",
      },
    ],
    image: "/projects/nuvio-events.png",
  },
  {
    name: "CareEdge Global",
    period: "Apr 2026 – Present",
    description:
      "Responsive corporate web platform for a global credit rating agency with SEO-friendly pages and dynamic content management.",
    highlights: [
      "Built reusable UI components using React.js / Next.js and Tailwind CSS",
      "Implemented SEO-friendly pages and optimized website performance",
      "Integrated REST APIs for dynamic content management and data rendering",
      "Collaborated directly with stakeholders to implement new features and enhancements",
      "Ensured cross-browser compatibility and mobile responsiveness across devices",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "HTML5", "CSS3"],
    category: "FinTech",
    links: [{ label: "Visit site", href: "https://www.careedgeglobal.com/" }],
    image: "/projects/careedge-global.png",
  },
];

export const education = {
  degree: "B.Tech (Information Technology)",
  institution: "AIMT",
  year: "2018",
  location: "Greater Noida, India",
};

export const languages = ["English", "Hindi"];

export const tools = {
  os: ["Windows", "Linux", "Mac"],
  devTools: [
    "Git",
    "GitHub",
    "GitLab",
    "Postman",
    "MySQL Workbench",
    "Jira",
    "Teams",
    "Slack",
  ],
};

export const skillNames = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Redux Toolkit",
  "REST APIs",
  "SSR / SSG",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
