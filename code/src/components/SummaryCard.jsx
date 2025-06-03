import React, { useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function SummaryCard() {
  const [activeTab, setActiveTab] = useState("about");

  const renderTabs = () => {
    switch (activeTab) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-zinc-900 text-zinc-200 p-6 rounded-xl shadow-md transition-colors duration-300 border border-zinc-700 relative">
      <div className="flex items-center justify-between mb-6 ">
        <div></div>
        <div className="flex gap-6 absolute  top-0 right-0 bg-zinc-800">
          {[
            { key: "about", label: "About" },
            { key: "resume", label: "Resume" },
            { key: "projects", label: "Projects" },
            { key: "contact", label: "Contact" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3 py-2  font-medium text-xl transition 
                ${
                  activeTab === tab.key
                    ? "border-b-2 border-b-yellow-500   shadow hover:bg-zinc-600"
                    : "text-zinc-400  hover:bg-zinc-600"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {renderTabs()}
    </div>
  );
}
