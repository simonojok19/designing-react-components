import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children, startingTheme }) {
  const [theme, setTheme] = useState(startingTheme);
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
