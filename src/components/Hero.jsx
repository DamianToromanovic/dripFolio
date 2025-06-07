import { useRef, useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import "flag-icons/css/flag-icons.min.css";

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
      className="w-full  text-zinc-200 transition-colors duration-500"
    >
      <div className=" mx-auto border border-my-muted rounded-2xl shadow-lg p-6 bg-my-card text-zinc-200 relative">
        <button
          className="absolute right-0 top-0 bg-[#2b2b2c] hover:bg-[#2c2c2f] p-3 rounded-tr-2xl rounded-bl-2xl"
          type="button"
          onClick={() => setShowMore(!showMore)}
        >
          {!showMore ? (
            <ChevronDown className="text-my-gold" />
          ) : (
            <ChevronUp className="text-my-gold" />
          )}
        </button>
        <div className="flex items-start justify-between">
          <div className="flex gap-4 items-center 3xl:flex-col">
            <div className="w-20 h-20 sm:w-32 sm:h-32 overflow-hidden rounded-[20%] shrink-0  bg-bright-gray">
              <img
                src="/assets/sticker.png"
                className="w-full object-cover"
                alt=""
              />
            </div>
            <div className="">
              <h1 className="text-lg sm:text-2xl md:text-3xl font-bold ">
                Damian Toromanovic
              </h1>
              <p className="text-sm text-zinc-200 bg-my-muted py-1 px-2 inline-block sm:text-xl rounded-lg mt-4">
                Fullstack Developer
              </p>
            </div>
          </div>
        </div>

        {showMore && (
          <div className="mt-4 text-sm space-y-2">
            <hr className="border-my-muted" />
            <div className="flex gap-4 items-center">
              <div className="p-3 shadow-innerShadow bg-minor-cards rounded-xl">
                {" "}
                <Mail className="text-my-gold" />
              </div>

              <div className="flex flex-col overflow-hidden">
                <span className="text-my-muted-foreground">EMAIL</span>
                <span className="text-lg ">d.toromanovic@web.de</span>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="p-3 shadow-innerShadow bg-minor-cards rounded-xl">
                {" "}
                <MapPin className="text-my-gold" />
              </div>

              <div className="flex flex-col mb-3">
                <span className="text-my-muted-foreground">Location</span>
                <span className="text-lg">Germany</span>
              </div>
            </div>

            <div className="flex gap-4 items-center overflow-hidden ">
              {/* GitHub */}
              <a
                href="https://github.com/DamianToromanovic"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 shadow-innerShadow bg-minor-cards rounded-xl flex items-center gap-2 hover:bg-[#2c2c2f] transition"
              >
                <Github className="text-my-gold" />
                <span className="text-sm sm:text:lg">GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/DEINNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 shadow-innerShadow  bg-minor-cards rounded-xl flex items-center gap-2 hover:bg-[#2c2c2f] transition"
              >
                <Linkedin className="text-my-gold" />
                <span className="text-sm sm:text:lg">LinkedIn</span>
              </a>
            </div>
            <hr className="border-my-muted " />
            <p className="text-my-muted-foreground text-lg ">My Languages</p>
            <div className=" md:flex grid  grid-cols-2 gap-2 3xl:grid 3xl:grid-cols-2 ">
              <div className="flex gap-2  bg-minor-cards shadow-innerShadow rounded-xl p-3 md:max-w-56">
                <span class="fi fi-de text-2xl"></span>
                <span className="text-lg italic">German</span>{" "}
              </div>
              <div className="flex gap-2  bg-minor-cards shadow-innerShadow rounded-xl p-3 md:max-w-56">
                <span class="fi fi-gb text-2xl"></span>
                <span className="text-lg italic">English</span>
              </div>
              <div className="flex gap-2 bg-minor-cards shadow-innerShadow rounded-xl p-3 md:max-w-56">
                <span class="fi fi-ba text-2xl"></span>
                <span className="text-lg italic">Bosnian</span>
              </div>

              <div className="flex gap-2  bg-minor-cards shadow-innerShadow rounded-xl p-3 md:max-w-56">
                <span class="fi fi-sa text-2xl"></span>
                <span className="text-lg italic">Arabic</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
