import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="px-6 py-4 flex justify-between items-center border-b border-zinc-700">
      <div className="text-xl font-bold">
        <Link to="/">DripFolio</Link>
      </div>
      <nav>
        <Link to="/about" className="hover:text-blue-400">
          About
        </Link>
        <Link to="/projects" className="hover:text-blue-400">
          Projects
        </Link>
        <Link to="/contact" className="hover:text-blue-400">
          Contact
        </Link>
      </nav>
    </header>
  );
}
