import React, { useState } from "react";
import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";
import SpeakerFilterProvider from "../contexts/SpeakerFilterContext";

export default function Speakers() {
  return (
    <SpeakerFilterProvider startShowSessions={false}>
      <SpeakersToolbar />
      <SpeakersList />
    </SpeakerFilterProvider>
  );
}
