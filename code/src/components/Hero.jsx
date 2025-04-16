import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef, useState } from "react";

export default function Hero() {
  const heroRef = useRef(null);
  const [showMore, setShowMore] = useState(false);

  const birthDate = new Date("1997-04-01");
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="w-full px-6 py-12 bg-[#f1f5f9] dark:bg-[#0f172a] transition-colors duration-500"
    >
      <div className="max-w-md mx-auto border rounded-xl shadow-lg p-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white relative">
        <div className="flex items-start justify-between">
          <div className="flex gap-4 items-center">
            <div className="w-16 h-16 overflow-hidden rounded-full shrink-0">
              <img
                src="/assets/sticker.png"
                alt="Damian Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">Damian Toromanovic</h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                FullStack Developer
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowMore(!showMore)}
            className="text-sm text-blue-600 dark:text-blue-400"
          >
            {showMore ? "▲" : "▼"}
          </button>
        </div>

        {showMore && (
          <div className="mt-4 text-sm space-y-2">
            <p>📍 Location: Germany / Morocco</p>
            <p>🎂 Age: {age}</p>
            <p>✉️ Email: damian@example.com</p>
            <hr className="border-zinc-300 dark:border-zinc-700" />
            <div className="flex gap-4 pt-1">
              <a
                href="https://github.com/DamianToromanovic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                <FaGithub className="inline" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/DEINNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                <FaLinkedin className="inline" /> LinkedIn
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
