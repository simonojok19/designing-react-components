import React from "react";
import { data } from "../../SpeakerData";
import Speaker from "./Speaker";

export default function SpeakersList() {
  return (
    <div className="container speakers-list">
      <div className="row">
        {data.map((speaker) => {
          return <Speaker key={speaker.id} speaker={speaker} />;
        })}
      </div>
    </div>
  );
}
