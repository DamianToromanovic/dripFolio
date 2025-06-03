import { DiVisualstudio } from "react-icons/di";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaLinux,
  FaNpm,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiSupabase,
  SiVercel,
  SiTypescript,
} from "react-icons/si";

const techs = [
  { label: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { label: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { label: "React", icon: <FaReact className="text-cyan-400" /> },
  { label: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { label: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { label: "Express.js", icon: <FaNodeJs className="text-gray-700" /> },
  { label: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { label: "Supabase", icon: <SiSupabase className="text-green-400" /> },
  { label: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-300" /> },
  { label: "HTML5", icon: <FaHtml5 className="text-orange-400" /> },
  { label: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { label: "Git/GitHub", icon: <FaGitAlt className="text-orange-500" /> },
  { label: "Linux", icon: <FaLinux className="text-gray-200" /> },
  { label: "npm", icon: <FaNpm className="text-red-600" /> },
  { label: "VSCode", icon: <DiVisualstudio className="text-blue-500" /> },
  { label: "Vercel", icon: <SiVercel className="text-white" /> },
];

export default function Techstack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {techs.map((tech) => (
        <div
          key={tech.label}
          className="flex flex-col items-center gap-4 p-3 rounded-xl bg-my-muted border-2 border-minor-cards shadow transition-transform duration-150 hover:scale-110"
        >
          <span className="text-5xl">{tech.icon}</span>
          <span className="text-sm lg:text-lg font-semibold ">
            {tech.label}
          </span>
        </div>
      ))}
    </div>
  );
}
