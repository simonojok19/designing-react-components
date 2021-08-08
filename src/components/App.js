import React, { useState, createContext } from "react";
import Header from "./Header";
import Speakers from "./Speakers";

export const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: setTheme,
      }}
    >
      <div
        className={
          theme === "light" ? "container-fluid" : "container-fluid dark"
        }
      >
        <Header />
        <Speakers />
      </div>
    </ThemeContext.Provider>
  );
}
