import React from "react";
import { IoBookOutline } from "react-icons/io5";
const skills = [
  "Working daily with the terminal and Linux",
  "Building responsive UIs with HTML5 and CSS3",
  "Writing modern JavaScript (ES6+) and async code",
  "Developing React apps using Hooks and state",
  "Styling interfaces with TailwindCSS and UI libs",
  "Implementing SPA routing with React and Next.js",
  "Designing REST APIs with Node.js and Express",
  "Modeling data and CRUD with MongoDB (NoSQL)",
  "Applying basic SQL and relational data modeling",

  "Applying authentication and web security basics",
  "Managing code with Git and team collaboration",
  "Contributing in agile teams and pair programming",
  "Deploying web apps on cloud platforms",
  "Applying UI/UX and accessibility standards",
  "Planning projects from prototype to release",
  "Exploring Supabase and new tech (self-taught)",
];

const softskills = [
  "Showing discipline  in daily training",
  "Setting ambitious goals with determination",
  "Working effectively in high-performing teams",
  "Staying resilient and assertive under pressure",
  "Taking responsibility in challenging situations",
];

const internshipSkills = [
  "Supporting daily office operations and administration",
  "Managing data and tasks with Excel and spreadsheets",
  "Supporting the organization of company events",
  "Assisting and communicating with customers",
  "Coordinating schedules and handling correspondence",
];

export default function Resume() {
  return (
    <section className=" py-6 px-6 text-xl">
      <h1 className="font-bold mb-8 text-4xl">Resume</h1>
      <div>
        {/* education icon plus titel*/}
        <div className="flex gap-6 items-center mb-6">
          <div className="p-3 shadow-innerShadow bg-minor-cards rounded-xl">
            <IoBookOutline className="text-my-gold" />
          </div>
          <h2 className="text-2xl font-bold">Education</h2>
        </div>

        {/* education stationen-box*/}
        <div>
          <div>
            <h3 className=" font-semibold">
              DCI Digital Career Institute GmbH
            </h3>

            <p className="text-my-gold my-4">2024-2025</p>
            <ul className="mt-4 pl-6">
              {skills.map((skill, index) => (
                <li
                  className="text-my-muted-foreground flex items-center gap-3 mb-2"
                  key={index}
                >
                  <span className="w-2 h-2 rounded-full inline-block bg-my-gold">
                    {" "}
                  </span>{" "}
                  <span className="">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* schule */}
          <div>
            <h3 className="font-semibold mt-6">Wüllenweber-Gymnasium</h3>
            <p className="my-4 text-my-gold">2010-2017</p>
            <div className="text-my-muted-foreground flex items-center gap-3 mb-2 pl-6">
              <span className="w-2 h-2 rounded-full inline-block bg-my-gold"></span>{" "}
              <span>
                Advanced technical college entrance qualification (Fachabitur)
              </span>
            </div>
          </div>
        </div>
        {/* experience tiel plus icon */}
        <div className="flex gap-6 items-center mb-6 mt-8">
          <div className="p-3 shadow-innerShadow bg-minor-cards rounded-xl">
            <IoBookOutline className="text-my-gold" />
          </div>
          <h2 className="text-2xl font-bold">Experience</h2>
        </div>
        {/* hagen */}
        <div>
          <h3 className="font-semibold mt-6">
            Professional handball player
            <br />
            <p className="text-lg font-light text-my-muted-foreground mt-1 italic">
              at VfL Eintracht Hagen
            </p>
          </h3>
          <p className="my-6 text-my-gold">2018-2024</p>
          <ul className="mt-4 pl-6">
            {softskills.map((skill, index) => (
              <li
                className="text-my-muted-foreground flex items-center gap-3 mb-2"
                key={index}
              >
                <span className="w-2 h-2 rounded-full inline-block bg-my-gold">
                  {" "}
                </span>{" "}
                <span className="">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* praktikum */}
        <div>
          <h3 className="font-semibold mt-6">
            Office Assistant (One-Year Internship)
            <br />
            <p className="text-lg font-light text-my-muted-foreground mt-1 italic">
              At VfL Gummersbach & Eintracht Hagen
            </p>
          </h3>
          <p className="my-6 text-my-gold">2017-2018</p>
          <ul className="mt-4 pl-6">
            {internshipSkills.map((skill, index) => (
              <li
                className="text-my-muted-foreground flex items-center gap-3 mb-2"
                key={index}
              >
                <span className="w-2 h-2 rounded-full inline-block bg-my-gold">
                  {" "}
                </span>{" "}
                <span className="">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
