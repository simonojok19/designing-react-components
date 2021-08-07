import React, { useState } from "react";
import { data } from "../../SpeakerData";
import Header from "./Header";
import Speakers from "./Speakers";

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div
      className={theme === "light" ? "container-fluid" : "container-fluid dark"}
    >
      <Header theme={theme} />
      <Speakers data={data} setTheme={setTheme} theme={theme} />
    </div>
  );
}
