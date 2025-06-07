import { techs } from "../lib/techs";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as DiIcons from "react-icons/di";

export default function Techstack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {techs.map((tech) => {
        const IconComponent =
          FaIcons[tech.icon] || SiIcons[tech.icon] || DiIcons[tech.icon];
        return (
          <div
            key={tech.label}
            className="flex flex-col items-center gap-4 p-3 rounded-xl bg-my-muted border-2 border-minor-cards shadow transition-transform duration-150 hover:scale-110 lg:hover:scale-105"
          >
            <span className={`text-5xl ${tech.color}`}>
              {IconComponent && <IconComponent />}
            </span>
            <span className="text-xs sm:text-sm lg:text-lg font-semibold ">
              {tech.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
