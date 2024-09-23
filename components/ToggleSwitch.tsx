"use client";
import { useState, useEffect } from "react";

const ToggleSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Set initial theme based on user preference or system preference
  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={handleToggle}
          className="sr-only"
        />
        <div
          className={`w-8 h-4 rounded-full shadow-inner transition-colors ${
            darkMode ? "bg-gray-700" : "bg-gray-400"
          }`}
        ></div>
        <div
          className={`absolute left-0 top-0 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
            darkMode ? "translate-x-4" : "translate-x-0"
          }`}
        ></div>
      </div>
      <span className="ml-3 text-gray-700 dark:text-gray-300">
        {darkMode ? "" : ""}
      </span>
    </label>
  );
};

export default ToggleSwitch;
