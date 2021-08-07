import React from "react";
import { data } from "../../SpeakerData";
import SpeakersList from "./SpeakersList";
import Header from "./Header";

export default function Speakers() {
  return (
    <div className="container-fluid">
      <Header />
      <SpeakersList data={data} />
    </div>
  );
}
