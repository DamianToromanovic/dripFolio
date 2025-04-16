import React from "react";
import { Link } from "react-router-dom";

export default function MiniAbout() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 snap-start bg-[#f1f5f9] dark:bg-[#0f172a] transition-colors duration-500 overflow-hidden">
      <span className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
        Next-Gen Developer
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-800 dark:text-white mb-4">
        Who am I?
      </h2>

      <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
        I'm Damian – a frontend developer passionate about creating clean,
        modern, and accessible web experiences. Currently mastering the MERN
        stack & building tools that solve real-world problems.
      </p>

      <Link
        to="/about"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-transform hover:scale-105"
      >
        Learn more
      </Link>
    </section>
  );
}
