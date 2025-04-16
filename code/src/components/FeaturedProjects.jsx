import React from "react";
import { Link } from "react-router-dom";

export default function FeaturedProjects() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 snap-start bg-[#f1f5f9] dark:bg-[#0f172a] transition-colors duration-500">
      <span className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
        My Work
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-800 dark:text-white mb-10">
        Featured Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2 max-w-5xl w-full px-4">
        <div className="group p-6 border border-zinc-200 dark:border-zinc-700 rounded-2xl bg-white dark:bg-zinc-900 shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-zinc-800 dark:text-white mb-2 group-hover:text-blue-600">
            Projekt 1
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 mb-4">
            Kurze Beschreibung vom Projekt 1
          </p>
        </div>

        <div className="group p-6 border border-zinc-200 dark:border-zinc-700 rounded-2xl bg-white dark:bg-zinc-900 shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-zinc-800 dark:text-white mb-2 group-hover:text-blue-600">
            Projekt 2
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 mb-4">
            Kurze Beschreibung vom Projekt 2
          </p>
        </div>
      </div>

      <Link
        to="/projects"
        className="mt-12 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 hover:scale-105 transition-all duration-300"
      >
        See all projects
      </Link>
    </section>
  );
}
