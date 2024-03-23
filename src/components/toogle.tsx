"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="py-1"
      onClick={(e) => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "light" ? (
        <MdOutlineDarkMode className="text-2xl" />
      ) : (
        <MdOutlineLightMode className="text-2xl" />
      )}
    </button>
  );
}

export const dynamic = "force-dynamic";
