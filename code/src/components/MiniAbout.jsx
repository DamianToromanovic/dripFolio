import React from "react";
import { Link } from "react-router-dom";

export default function MiniAbout() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 snap-start">
      <h2 className="text-4xl font-bold mb-4">Who am I?</h2>
      <p className="max-w-xl text-lg text-zinc-400 mb-6">(Dein Text)</p>
      <Link
        to="/about"
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
      >
        Learn more
      </Link>
    </section>
  );
}
