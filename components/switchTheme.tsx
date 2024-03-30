"use client";

import { useTheme } from "@/providers/switchThemeProvider";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 shadow-2xl rounded-full flex items-center justify-center 
      hover:scale-[1.15] active:scale-105 transition-all w-[3rem] h-[3rem] bg-opacity-80 
      backdrop-blur-[0.5rem] border border-opacity-40 text-xl font-bold
      border-black 
      dark:border-white
      bg-black
      dark:bg-white
      text-white 
      dark:text-black"
      onClick={toggleTheme}
    >
      {theme === "light" ? "D" : "L"}
    </button>
  );
}
