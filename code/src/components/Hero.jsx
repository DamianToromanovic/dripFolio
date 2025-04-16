import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <aside className="fixed left-6 top-1/4 flex flex-col gap-4 text-zinc-400 text-2xl bg-[#f1f5f9]/70 dark:bg-[#0f172a]/70 backdrop-blur-md p-4 rounded-xl shadow-xl transition-all duration-300">
        <a
          href="https://github.com/DamianToromanovic"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-transform"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/DEINNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-transform"
        >
          <FaLinkedin />
        </a>
      </aside>
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-[#f1f5f9] dark:bg-[#0f172a] transition-colors duration-500">
        <h1 className="text-5xl sm:text-6xl md:text-3xl font-extrabold tracking-wide text-zinc-900 dark:text-white mb-6">
          Hey, I'm Damian 👋
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-300 max-w-xl mb-2 italic">
          Clean code.
        </p>
        <p className="text-xl text-zinc-500 dark:text-zinc-300 max-w-xl mb-2 italic">
          Scalable systems.
        </p>
        <p className="text-xl text-zinc-500 dark:text-zinc-300 max-w-xl mb-6 italic">
          Purpose-driven development.
        </p>
        <a
          href="/projects"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          Explore my work
        </a>
      </section>
    </>
  );
}
