import { FaCode, FaServer, FaLaptopCode, FaTools } from "react-icons/fa";

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6 bg-[#f1f5f9] dark:bg-[#0f172a] text-zinc-800 dark:text-zinc-200 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          What I Do
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          I specialize in building scalable fullstack web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="p-6 rounded-xl bg-white dark:bg-zinc-800 shadow-md hover:shadow-lg transition-all">
          <FaCode className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Modern UIs with React, Tailwind, and component-driven design.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white dark:bg-zinc-800 shadow-md hover:shadow-lg transition-all">
          <FaServer className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            REST APIs, MongoDB, Node.js – fast & scalable infrastructure.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white dark:bg-zinc-800 shadow-md hover:shadow-lg transition-all">
          <FaLaptopCode className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fullstack Apps</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Bringing it all together – frontend, backend & deployment.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white dark:bg-zinc-800 shadow-md hover:shadow-lg transition-all">
          <FaTools className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Process Automation</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Custom tools for small businesses to save time and effort.
          </p>
        </div>
      </div>
    </section>
  );
}
