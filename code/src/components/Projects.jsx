import { projects } from "../lib/projects.js";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as DiIcons from "react-icons/di";

function getIconComponent(icon) {
  return FaIcons[icon] || SiIcons[icon] || DiIcons[icon] || null;
}

export default function Projects() {
  return (
    <section className="py-6 px-6 text-xl min-h-screen">
      <h1 className="font-bold mb-8 text-4xl">Projects</h1>
      <div className="flex flex-col gap-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-my-card rounded-2xl p-6 shadow border border-my-muted"
          >
            {/* Bild */}
            <img
              src={project.images?.[0]}
              alt={project.title}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />

            {/* Titel und Jahr */}
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-bold text-2xl">{project.title}</h2>
              <span className="text-my-gold font-bold">{project.year}</span>
            </div>
            {/* Beschreibung */}
            <p className="text-base mb-4">{project.description}</p>

            {/* Techstack */}
            <div className="flex flex-wrap mb-4">
              {(project.techStack || []).map((t, i) => {
                const IconComponent = getIconComponent(t.icon);
                return (
                  <span
                    key={i}
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-1 bg-my-muted text-sm font-medium mr-2 mb-2 ${
                      t.color || ""
                    }`}
                  >
                    {IconComponent && (
                      <IconComponent className="inline-block text-lg" />
                    )}
                    {t.label}
                  </span>
                );
              })}
            </div>

            {/* Features */}
            {project.features && (
              <ul className="mb-3 ml-5 list-disc text-base">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
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
                  Code
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
