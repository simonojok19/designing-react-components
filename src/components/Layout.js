import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function Layout({ startingTheme, children }) {
  const [theme, setTheme] = useState(startingTheme);
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: setTheme,
      }}
    >
      <divs
        className={
          theme === "light" ? "container-fluid" : "container-fluid dark"
        }
      >
        {children}
      </divs>
    </ThemeContext.Provider>
  );
}
