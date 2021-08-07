import React, { useState, useEffect } from "react";
import Speaker from "./Speaker";
import { data } from "../../SpeakerData";

export default function SpeakersList({ showSessions }) {
  const [speakerData, setSpeakerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    async function delayFunc() {
      await delay(2000);
      setSpeakerData(data);
    }
    delayFunc().then((r) => console.log(r));
  }, []);

  const onFavoriteToggle = (id) => {
    return () => {
      const speakers = speakerData.map((speaker) => {
        if (speaker.id === id) {
          return {
            ...speaker,
            favorite: !speaker.favorite,
          };
        }
        return speaker;
      });
      setSpeakerData(speakers);
    };
  };
  return (
    <div className="container speakers-list">
      <div className="row">
        {speakerData.map((speaker) => {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
              onFavoriteToggle={onFavoriteToggle(speaker.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
