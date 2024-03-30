"use client";

import { useEffect, useState, createContext, useContext } from "react";

type Theme = "light" | "dark";

type SwitchThemeProviderProps = {
  children: React.ReactNode;
};

type SwitchThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const SwitchThemeContext = createContext<SwitchThemeContextType | null>(null);

export default function SwitchThemeProvider({
  children,
}: SwitchThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <SwitchThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </SwitchThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(SwitchThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a SwitchThemeProvider");
  }

  return context;
}
