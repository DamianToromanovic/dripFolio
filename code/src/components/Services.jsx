import { FaCode, FaServer, FaLaptopCode, FaTools } from "react-icons/fa";

export default function Services() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {[
        {
          icon: <FaCode />,
          title: "Frontend Development",
          desc: "Modern UIs with React, Tailwind, and component-driven design.",
        },
        {
          icon: <FaServer />,
          title: "Backend Development",
          desc: "REST APIs, MongoDB, Node.js – fast & scalable infrastructure.",
        },
        {
          icon: <FaLaptopCode />,
          title: "Fullstack Apps",
          desc: "Bringing it all together – frontend, backend & deployment.",
        },
        {
          icon: <FaTools />,
          title: "Process Automation",
          desc: "Custom tools for small businesses to save time and effort.",
        },
      ].map((service, i) => (
        <div
          key={i}
          className="p-5 rounded-lg bg-zinc-800 text-zinc-200 shadow hover:shadow-md transition-all border border-zinc-700"
        >
          <div className="text-3xl text-yellow-500 mb-3">{service.icon}</div>
          <h3 className="text-lg font-semibold mb-1 text-yellow-400">
            {service.title}
          </h3>
          <p className="text-sm text-zinc-400">{service.desc}</p>
        </div>
      ))}
    </div>
  );
}
