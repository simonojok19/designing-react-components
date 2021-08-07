import React from "react";
import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";

export default function Speakers({ theme, setTheme, data }) {
  return (
    <>
      <SpeakersToolbar theme={theme} setTheme={setTheme} />
      <SpeakersList data={data} />
    </>
  );
}
