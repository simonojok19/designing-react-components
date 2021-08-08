import { useState } from "react";

export default function useTheme(startingTheme = "light") {
  const [theme, setTheme] = useState(startingTheme);
  return { theme, setTheme };
}
