import React, { useContext } from "react";
import ThemeProvider, { ThemeContext } from "../contexts/ThemeContext";

const LayoutNoThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={theme === "light" ? "container-fluid" : "container-fluid dark"}
    >
      {children}
    </div>
  );
};

export default function Layout({ startingTheme, children }) {
  return (
    <ThemeProvider startingTheme={startingTheme}>
      <LayoutNoThemeProvider>{children}</LayoutNoThemeProvider>
    </ThemeProvider>
  );
}
