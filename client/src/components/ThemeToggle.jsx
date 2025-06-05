import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <button
      type="button"
      className="text-xl p-2 hover:scale-110 transition"
      onClick={() => setIsDark(!isDark)}
    >
      {" "}
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
