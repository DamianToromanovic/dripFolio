import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVite,
  SiPostman,
  SiNetlify,
  SiVercel,
} from "react-icons/si";

export default function About() {
  return (
    <section className="relative min-h-screen max-w-4xl mx-auto py-24 px-6 bg-[#f1f5f9] dark:bg-[#0f172a] text-zinc-800 dark:text-zinc-200 transition-colors duration-500">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center">
        About Me
      </h2>

      <div className="space-y-8 mb-20">
        <h3 className="text-2xl font-bold mb-4">📖 My Journey</h3>
        <div className="border-l-4 border-blue-500 pl-6">
          <p>
            🤾 I'm Damian – a former{" "}
            <strong>professional handball player</strong> who traded the court
            for code.
          </p>
        </div>
        <div className="border-l-4 border-blue-500 pl-6">
          <p>
            💡 I followed my curiosity for tech and turned it into a passion.
            Since then, I've been fully committed to growing as a developer and
            learning the modern web.
          </p>
        </div>
      </div>

      <div className="space-y-8 mb-20">
        <h3 className="text-2xl font-bold mb-4">🧠 Mindset & Vision</h3>
        <div className="border-l-4 border-blue-500 pl-6">
          <p>
            🚀 I bring <strong>discipline, focus, and team spirit</strong> from
            sports into development. My favorite part? Turning ideas into useful
            and beautiful apps.
          </p>
        </div>
        <div className="border-l-4 border-blue-500 pl-6">
          <p>
            🎯 I'm currently deepening my fullstack skills with the MERN stack
            and building real-world projects like this portfolio.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-6">🧰 Tech Stack & Tools</h3>

        <div className="space-y-12 border-l-4 border-blue-500 pl-6">
          <div>
            <h4 className="text-xl font-semibold mb-4">🎨 Frontend</h4>
            <div className="grid grid-cols-6 sm:grid-cols-8 gap-6 text-4xl text-blue-500 dark:text-blue-400 justify-items-center">
              <FaReact title="React" />
              <SiVite title="Vite" />
              <SiTailwindcss title="Tailwind CSS" />
              <FaJs title="JavaScript" />
              <FaHtml5 title="HTML" />
              <FaCss3Alt title="CSS" />
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">🧠 Backend</h4>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-6 text-4xl text-green-600 dark:text-green-400 justify-items-center">
              <FaNodeJs title="Node.js" />
              <SiExpress title="Express" />
              <SiMongodb title="MongoDB" />
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">
              🧰 Tools & Deployment
            </h4>
            <div className="grid grid-cols-6 sm:grid-cols-8 gap-6 text-4xl text-zinc-600 dark:text-zinc-300 justify-items-center">
              <SiNetlify title="Netlify" />
              <SiVercel title="Vercel" />
              <SiPostman title="Postman" />
              <FaGithub title="GitHub" />
              <FaGitAlt title="Git" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
