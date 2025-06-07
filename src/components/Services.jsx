import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

export default function Services() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6">
      {[
        {
          icon: <FaCode />,
          title: "Frontend Development",
          desc: "Modern user interfaces with React, TailwindCSS & a component-driven approach.",
        },
        {
          icon: <FaServer />,
          title: "API & Backend Development",
          desc: "Fast, scalable REST APIs & server logic with Node.js and Express.",
        },
        {
          icon: <FaDatabase />,
          title: "Database Design & Integration",
          desc: "Efficient data modeling and integration tailored to your application's needs.",
        },
        {
          icon: <FaTools />,
          title: "Digital Solutions",
          desc: "From custom dashboards to internal tools – building exactly what you need.",
        },
      ].map((service, i) => (
        <div
          key={i}
          className="p-5 rounded-lg bg-minor-cards  transition-all shadow-innerShadow flex  gap-2 lg:flex-row items-center text-center lg:gap-6 lg:text-left"
        >
          <div className="text-5xl hidden sm:block  text-[#D7AA58] mb-3">
            {service.icon}
          </div>
          <div>
            <h3 className="sm:text-2xl text-lg font-semibold sm:font-bold mb-1">
              {service.title}
            </h3>
            <p className="sm:text-lg text-sm text-my-muted-foreground">
              {service.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
