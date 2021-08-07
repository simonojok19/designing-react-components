import React, { useState } from "react";
import Speaker from "./Speaker";
import { data } from "../../SpeakerData";

export default function SpeakersList({ showSessions }) {
  const [speakerData, setSpeakerData] = useState(data);

  const onFavoriteToggle = () => {};
  return (
    <div className="container speakers-list">
      <div className="row">
        {speakerData.map((speaker) => {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
              onFavoriteToggle={onFavoriteToggle}
            />
          );
        })}
      </div>
    </div>
  );
}
