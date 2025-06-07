import React, { useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";

export default function SummaryCard() {
  const [activeTab, setActiveTab] = useState("about");

  const renderTabs = () => {
    switch (activeTab) {
      case "about":
        return <About />;
      case "resume":
        return <Resume />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-my-card  p-6 rounded-2xl shadow-md transition-colors duration-300 border border-my-muted relative">
      <div className="flex items-center justify-between mb-6 ">
        <div></div>
        <div className="flex gap-6 absolute px-6 rounded-tr-2xl rounded-bl-2xl top-0 right-0 bg-my-muted">
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
                    ? "text-my-gold   shadow"
                    : "text-my-muted-foreground hover:text-my-gold/80 "
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
