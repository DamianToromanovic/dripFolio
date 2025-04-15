import React from "react";
import { Link } from "react-router-dom";

export default function FeaturedProjects() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 snap-start">
      <h2 className="text-4xl font-bold mb-8">Featured Projects</h2>

      <div className="grid gap-6 md:grid-cols-2 max-w-4xl w-full">
        <div className="p-6 border rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">Projekt 1</h3>
          <p className="text-zinc-400 mb-4">Kurze Beschreibung vom Projekt 1</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">Projekt 2</h3>
          <p className="text-zinc-400 mb-4">Kurze Beschreibung vom Projekt 2</p>
        </div>
      </div>

      <Link
        to="/projects"
        className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
      >
        See all projects
      </Link>
    </section>
  );
}
