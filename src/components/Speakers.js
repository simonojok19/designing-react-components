import React from "react";
import { data } from "../../SpeakerData";
import SpeakersList from "./SpeakersList";
export default function Speakers() {
  return (
    <div className="container-fluid">
      <SpeakersList data={data} />
    </div>
  );
}
