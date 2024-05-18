import React, { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("dark");
  const refreshTheme = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  };

  const toggleTheme = () => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
    refreshTheme();
  };

  useEffect(() => {}, []);
  return { theme, toggleTheme, refreshTheme };
};
