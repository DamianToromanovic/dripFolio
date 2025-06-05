import { projects } from "../lib/projects.js";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as DiIcons from "react-icons/di";

function getIconComponent(icon) {
  return FaIcons[icon] || SiIcons[icon] || DiIcons[icon] || null;
}

export default function Projects() {
  return (
    <section className="py-6 px-6 text-xl min-h-screen 3xl:px-20">
      <h1 className="font-bold mb-8 text-4xl">Projects</h1>
      <div className="flex flex-col gap-10 md:px-4">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-my-card rounded-2xl p-6 shadow border border-my-muted lg:px-12"
          >
            {/* Bild */}
            <img
              src={project.images?.[0]}
              alt={project.title}
              className="w-full  object-cover rounded-xl mb-6 h-72 md:h-96 lg:h-[440px] xl:h-[500px] 2xl:h-[550px]"
            />

            {/* Titel und Jahr */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-3xl">{project.title}</h2>
              <span className="text-my-gold font-bold">{project.year}</span>
            </div>
            <span className="inline-block py-2 px-6 bg-minor-cards shadow-innerShadow rounded-2xl mb-4">
              {project.status}
            </span>
            {/* Beschreibung */}
            <p className="text-lg italic text-my-muted-foreground mb-4 3xl:w-1/2">
              {project.description}
            </p>

            {/* Techstack */}
            <div className="flex flex-wrap mb-4">
              {(project.techStack || []).map((t, i) => {
                const IconComponent = getIconComponent(t.icon);
                return (
                  <span
                    key={i}
                    className={`inline-flex items-center gap-4 cursor-pointer rounded-xl  p-3 bg-my-muted hadow transition-transform duration-150 hover:scale-110 lg:hover:scale-105 text-base font-medium mr-2 mb-2 ${
                      t.color || ""
                    }`}
                  >
                    {IconComponent && (
                      <IconComponent className="inline-block text-3xl" />
                    )}
                    {t.label}
                  </span>
                );
              })}
            </div>

            {/* Features */}
            <h2 className="text-2xl font-semibold mb-4 inline-block border-b-my-gold border-b-4">
              Features
            </h2>
            {project.features && (
              <ul className="mb-3 ml-5 list-disc text-base">
                {project.features.map((f, i) => (
                  <li className=" flex items-center gap-3 mb-2" key={i}>
                    <span className="w-2 h-2 rounded-full inline-block bg-my-gold">
                      {" "}
                    </span>{" "}
                    <span className="">{f}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Open Points */}
            {project.openPoints && project.openPoints.length > 0 && (
              <div className="mb-3">
                <span className="font-bold text-my-gold">Noch offen:</span>
                <ul className="ml-5 list-[circle] text-base">
                  {project.openPoints.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Rolle */}
            <div className="italic mb-2">{project.myRole}</div>

            {/* Links */}
            <div className="flex gap-6 mt-2">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-my-gold"
                >
                  Check my Github Profile
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-my-gold"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
