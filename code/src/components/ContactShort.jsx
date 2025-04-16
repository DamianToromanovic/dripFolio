import React from "react";
import { Link } from "react-router-dom";

export default function ContactShort() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 snap-start bg-[#f1f5f9] dark:bg-[#0f172a] transition-colors duration-500">
      <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-800 dark:text-white mb-4">
        Let’s build something great
      </h2>

      <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 max-w-xl leading-relaxed">
        I'm always open to new ideas, collaborations or freelance projects.
        Let’s connect and make it happen.
      </p>

      <Link
        to="/contact"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
      >
        Contact Me
      </Link>
    </section>
  );
}
