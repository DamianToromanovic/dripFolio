export const webshop = {
  status: "finished",
  title: "Modern E-Commerce Frontend",
  description:
    "A fully responsive and modern e-commerce frontend built with Next.js and Tailwind CSS. The goal is to deliver an appealing shop experience with smooth navigation, filter features, and a functional shopping cart.",
  year: 2025,
  techStack: [
    { label: "Next.js", icon: "SiNextdotjs", color: "text-white" },
    ,
    { label: "TailwindCSS", icon: "SiTailwindcss", color: "text-cyan-300" },

    { label: "Vercel", icon: "SiVercel", color: "text-white" },
    { label: "Git/GitHub", icon: "FaGitAlt", color: "text-orange-500" },
  ],
  features: [
    "Dynamic category and product detail pages with sidebar navigation",
    "Shopping cart with add/remove/change quantity and automatic subtotal",
    "Product detail views with description, image, price, and 'add to cart' button",
    "Search functionality with live suggestions and results page",
    "Fully responsive design for desktop, tablet, and mobile",
    "Modular, reusable components (product card, sidebar, navbar, product grid, etc.)",
  ],
  myRole:
    "Designed and implemented the complete frontend architecture, created all major components, and ensured modularity and responsiveness. Responsible for the entire UI/UX concept and state management.",
  images: [
    "/images/webshop/screen1.png",
    "/images/webshop/screen2.png",
    "/images/webshop/screen3.png",
    "/images/webshop/screen4.png",
    "/images/webshop/screen5.png",
  ],
  repo: "https://github.com/DamianToromanovic/ecommerce",

  structure: [
    "App folder structure with dynamic routing for categories and products",
    "Reusable UI components",
    "Static data in lib/",
    "Optimized public asset usage for images",
  ],
};

export const projectManager = {
  title: "TaskNestor",
  description:
    "A modular project management tool with context-based AI-Support for organizing projects, tracking tasks, taking notes, and collaborating in teams. Built for flexibility, extensibility, and real-world workflow needs.",
  year: 2025,
  techStack: [
    { label: "Next.js", icon: "SiNextdotjs", color: "text-white" },
    { label: "TypeScript", icon: "SiTypescript", color: "text-blue-400" },
    { label: "TailwindCSS", icon: "SiTailwindcss", color: "text-cyan-300" },
    { label: "Supabase", icon: "SiSupabase", color: "text-green-400" },

    { label: "shadCn", icon: "SiShadcnui" },
  ],
  features: [
    "Project dashboard with tab navigation (overview, tasks, notes, team)",
    "Kanban-style task management with drag & drop and priorities",
    "Note section for project documentation and meeting notes",
    "Team management and role assignment",
    "Real-time data sync with Supabase",
    "Modular architecture for easy feature extension",
  ],
  openPoints: [
    "Implement calendar and event scheduling per user",
    "Add notifications for deadlines and task updates",
    "Enhance access control and permissions for teams",
    "Integrate AI-powered assistant for meeting summaries",
    "Mobile optimization and offline mode",
  ],
  myRole:
    "Architected the application structure, designed the UI, and implemented all core features. Focused on modularity, clean state management, and database integration.",
  images: [
    "/images/webshop/screen1.png",
    "/images/webshop/screen2.png",
    "/images/webshop/screen3.png",
    "/images/webshop/screen4.png",
    "/images/webshop/screen5.png",
  ],
  repo: "https://github.com/DamianToromanovic/llama-project-assist",

  status: "in progress",
  structure: [
    "App structure with modular feature tabs",
    "Database schema in Supabase",
    "Reusable components for tasks, notes, teams",
  ],
};

export const orderDigitization = {
  title: "Restaurant Order Digitization",
  description:
    "A digital ordering system for restaurants with separate interfaces for guests and staff. Guests can order via QR code at their table, while staff manage orders and table statuses in a dedicated admin view.",
  year: 2024,
  techStack: [
    { label: "React", icon: "FaReact", color: "text-cyan-400" },
    { label: "Next.js", icon: "SiNextdotjs", color: "text-white" },
    { label: "TailwindCSS", icon: "SiTailwindcss", color: "text-cyan-300" },

    { label: "shadCn", icon: "SiShadcnui" },
  ],
  features: [
    "Customer frontend for viewing the menu and placing orders via QR code",
    "Admin dashboard for managing and tracking all incoming orders",
    "Live status updates for each table (free, ordered, served, reserved, etc.)",
    "Separation of concerns with two distinct UIs: customer and staff",
    "Responsive design optimized for mobile and tablet",
    "Modular architecture for easy expansion (e.g., analytics, kitchen display)",
  ],
  myRole:
    "Solely responsible for designing and implementing both the customer and staff frontends, including all UI components, navigation flows, and responsive layouts.",
  images: [
    "/images/webshop/screen1.png",
    "/images/webshop/screen2.png",
    "/images/webshop/screen3.png",
    "/images/webshop/screen4.png",
    "/images/webshop/screen5.png",
  ],
  status: "mvp",

  structure: [
    "Separate frontend codebases for customers and staff",
    "Reusable component structure for menu, cart, and order handling",
    "State management with Zustand for real-time order status",
  ],
};

export const projects = [webshop, projectManager, orderDigitization];
