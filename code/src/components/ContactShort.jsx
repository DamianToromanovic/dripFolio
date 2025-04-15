import React from "react";
import { Link } from "react-router-dom";

export default function ContactShort() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 snap-start">
      <h2 className="text-4xl font-bold mb-4">Let’s build something great</h2>
      <p className="text-zinc-400 mb-6">
        I'm always open to new ideas, collaborations or freelance projects.
      </p>
      <Link
        to="/contact"
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
      >
        Contact Me
      </Link>
    </section>
  );
}
