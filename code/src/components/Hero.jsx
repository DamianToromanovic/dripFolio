import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const heroRef = useRef(null);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMore(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="w-full  bg-zinc-950 text-zinc-200 transition-colors duration-500"
    >
      <div className=" mx-auto border border-zinc-700 rounded-xl shadow-lg p-6 bg-zinc-900 text-zinc-200 relative">
        <div className="flex items-start justify-between">
          <div className="flex gap-4 items-center">
            <div className="w-32 h-32 overflow-hidden rounded-2xl shrink-0  bg-zinc-800">
              <img
                src="/assets/sticker.png"
                className="w-full object-cover"
                alt=""
              />
            </div>
            <div className="">
              <h1 className="text-xl font-bold ">Damian Toromanovic</h1>
              <p className="text-sm text-zinc-400 bg-zinc-800 py-1 px-2 inline-block rounded-lg mt-2">
                FullStack Developer
              </p>
            </div>
          </div>
        </div>

        {showMore && (
          <div className="mt-4 text-sm space-y-2">
            <p>📍 Location: Germany</p>
            <p>🎂 Age: {new Date().getFullYear() - 1999}</p>
            <p>✉️ Email: d.toromanovic@web.de</p>
            <hr className="border-zinc-700" />
            <div className="flex gap-4 pt-1">
              <a
                href="https://github.com/DamianToromanovic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:underline"
              >
                <FaGithub className="inline" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/DEINNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:underline"
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
