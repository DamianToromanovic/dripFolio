export const webshop = {
  status: "finished",
  title: "Webshop Frontend",
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
    "Dynamic pages with category and product details",
    "Sidebar navigation across all product pages",
    "Cart with add, remove and quantity change",
    "Auto subtotal calculation in shopping cart",
    "Detailed product view with image and button",
    "Search with live suggestions and results",
    "Fully responsive: desktop, tablet, mobile",
    "Modular and reusable component structure",
  ],

  images: [
    "/images/webshop/screen1.png",
    "/images/webshop/screen2.png",
    "/images/webshop/screen3.png",
    "/images/webshop/screen4.png",
    "/images/webshop/screen5.png",
  ],
  repo: "https://ecommerce-damiantoromanovics-projects.vercel.app/",
};

export const projectManager = {
  title: "Task-Manager",
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

  images: ["/images/project-manager/screen2.png"],
  repo: "https://github.com/DamianToromanovic/llama-project-assist",

  status: "in progress",
};

export const orderDigitization = {
  title: "Food Order App",
  description:
    "A digital ordering system for restaurants with separate interfaces for guests and staff. Guests can order via QR code at their table, while staff manage orders and table statuses in a dedicated admin view.",
  year: 2025,
  techStack: [
    { label: "React", icon: "FaReact", color: "text-cyan-400" },
    { label: "Next.js", icon: "SiNextdotjs", color: "text-white" },
    { label: "TailwindCSS", icon: "SiTailwindcss", color: "text-cyan-300" },

    { label: "shadCn", icon: "SiShadcnui" },
  ],
  features: [
    "Frontend for menu browsing and QR orders",
    "Admin dashboard to manage all active orders",
    "Status display for each table and state",
    "Separate UIs for staff and customers",
    "Mobile-first design for restaurants and tablets",
    "Modular codebase prepared for future features",
    "Multilingual UI and database structure",
    "Manage categories, sides, and modifiers",
    "API integration for auto translations",
  ],

  images: [
    "/images/webshop/screen1.png",
    "/images/webshop/screen2.png",
    "/images/webshop/screen3.png",
    "/images/webshop/screen4.png",
    "/images/webshop/screen5.png",
  ],
  status: "mvp",
  // repo: "https://github.com/BurnoutStudio",
};

export const projects = [orderDigitization, webshop];
