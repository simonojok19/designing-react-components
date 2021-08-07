import React from "react";
import { data } from "../../SpeakerData";
import SpeakersList from "./SpeakersList";
import Header from "./Header";
import SpeakersToolbar from "./SpeakersToolbar";

export default function Speakers() {
  return (
    <div className="container-fluid">
      <Header />
      <SpeakersToolbar />
      <SpeakersList data={data} />
    </div>
  );
}
