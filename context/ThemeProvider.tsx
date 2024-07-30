"use client";

import React, { createContext, useState, useEffect, useContext } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (mode: string) => void;
}

// ! Create a theme context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ! Create a custom hook to use the theme context
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // ! 1. Create a state to store the theme
  const [theme, setTheme] = useState("dark");

  // ! 2. Create a function to handle the theme change
  const handleThemeChange = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.add("light");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    handleThemeChange();
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export default ThemeProvider;
