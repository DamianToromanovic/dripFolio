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
    <div className="bg-zinc-900 text-zinc-200 p-6 rounded-xl shadow-md transition-colors duration-300 border border-zinc-700">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-yellow-500">Section</h2>
        <div className="flex gap-2">
          {[
            { key: "about", label: "About" },
            { key: "projects", label: "Projects" },
            { key: "contact", label: "Contact" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3 py-2 rounded-md font-medium text-sm transition
                ${
                  activeTab === tab.key
                    ? "text-yellow-500 bg-zinc-800 ring-1 ring-yellow-500 shadow"
                    : "text-zinc-400 bg-zinc-700 hover:bg-zinc-600"
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
