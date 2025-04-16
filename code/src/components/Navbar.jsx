import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="px-6 py-4 flex justify-between items-center bg-[#f1f5f9] dark:bg-[#0f172a] sticky top-0 z-50 ">
      <div className="text-2xl font-extrabold tracking-wide text-zinc-900 dark:text-white">
        <Link
          to="/"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          DripFolio
        </Link>
      </div>

      <nav className="flex gap-6 text-lg font-medium text-zinc-700 dark:text-zinc-300">
        <Link
          to="/about"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Contact
        </Link>
      </nav>

      <ThemeToggle />
    </header>
  );
}
