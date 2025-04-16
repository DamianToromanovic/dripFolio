import { FaGithub, FaLinkedin } from "react-icons/fa";
import CreapyMe from "./CreapyMe";
import { useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = x / rect.width;
    const percentY = y / rect.height;

    const offsetX = (percentX - 0.5) * 12;
    const offsetY = (percentY - 0.5) * 8;

    const leftEye = document.querySelector("#left-eye");
    const rightEye = document.querySelector("#right-eye");

    if (leftEye)
      leftEye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    if (rightEye)
      rightEye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="h-screen w-full flex items-center justify-center bg-[#f1f5f9] dark:bg-[#0f172a] transition-colors duration-500 px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white leading-tight">
            Hi, I'm Damian
          </h1>

          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-md">
            I build modern web applications with performance, accessibility and
            clean code in mind.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
            <a
              href="https://github.com/DamianToromanovic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/DEINNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <CreapyMe />
        </div>
      </div>
    </section>
  );
}
