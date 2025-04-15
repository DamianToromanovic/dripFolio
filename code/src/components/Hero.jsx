import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-black dark:text-white">Hey, I'm Damian 👋</h1>
        <p className="text-xl text-zinc-400 max-w-xl mb-6">
          Clean code. Scalable systems. Purpose-driven development.
        </p>
        <a
          href="/projects"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
        >
          Explore my work
        </a>
      </section>

      <aside className="fixed left-6 bottom-6 flex flex-col gap-4 text-zinc-400 text-2xl">
        <a
          href="https://github.com/DamianToromanovic"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/DEINNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin />
        </a>
      </aside>
    </>
  );
}
