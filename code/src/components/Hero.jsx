import { useRef, useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

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
      <div className=" mx-auto border border-zinc-700 rounded-2xl shadow-lg p-6 bg-[#1e1e1f] text-zinc-200 relative">
        <button
          className="absolute right-0 top-0 bg-[#2b2b2c] hover:bg-[#2c2c2f] p-3 rounded-2xl"
          type="button"
          onClick={() => setShowMore(!showMore)}
        >
          {!showMore ? <ChevronDown /> : <ChevronUp />}
        </button>
        <div className="flex items-start justify-between">
          <div className="flex gap-4 items-center 2xl:flex-col">
            <div className="w-32 h-32 overflow-hidden rounded-[20%] shrink-0  bg-zinc-800">
              <img
                src="/assets/sticker.png"
                className="w-full object-cover"
                alt=""
              />
            </div>
            <div className="">
              <h1 className="text-3xl font-bold ">Damian Toromanovic</h1>
              <p className="text-sm text-zinc-200 bg-[#2b2b2c] py-1 px-2 inline-block rounded-lg mt-4">
                FullStack Developer
              </p>
            </div>
          </div>
        </div>

        {showMore && (
          <div className="mt-4 text-sm space-y-2">
            <hr className="border-zinc-700" />
            <div className="flex gap-4 items-center">
              <div className="p-3 bg-[#202022] rounded-xl">
                {" "}
                <Mail className="text-[#DAA520]" />
              </div>

              <div className="flex flex-col overflow-hidden">
                <span className="text-zinc-600">EMAIL</span>
                <span className="text-lg ">d.toromanovic@web.de</span>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="p-3 bg-[#202022] rounded-xl">
                {" "}
                <MapPin className="text-[#DAA520]" />
              </div>

              <div className="flex flex-col mb-3">
                <span className="text-zinc-600">Location</span>
                <span className="text-lg">Germany</span>
              </div>
            </div>

            <div className="flex gap-4 items-center overflow-hidden ">
              {/* GitHub */}
              <a
                href="https://github.com/DamianToromanovic"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#202022] rounded-xl flex items-center gap-2 hover:bg-[#2c2c2f] transition"
              >
                <Github className="text-[#DAA520]" />
                <span className="text-lg">GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/DEINNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#202022] rounded-xl flex items-center gap-2 hover:bg-[#2c2c2f] transition"
              >
                <Linkedin className="text-[#DAA520]" />
                <span className="text-lg">LinkedIn</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
