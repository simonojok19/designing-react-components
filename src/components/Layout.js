import React, { createContext, useState } from "react";
import Header from "./Header";
import Speakers from "./Speakers";

export const ThemeContext = createContext();

export default function Layout() {
  const [theme, setTheme] = useState("light");
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
        <Header />
        <Speakers />
      </divs>
    </ThemeContext.Provider>
  );
}
