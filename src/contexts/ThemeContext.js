import React, { createContext } from "react";
import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext();

export default function ThemeProvider({ children, startingTheme }) {
  const { theme, setTheme } = useTheme(startingTheme);
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
