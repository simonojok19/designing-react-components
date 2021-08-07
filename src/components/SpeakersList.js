import React, { useState, useEffect } from "react";
import Speaker from "./Speaker";
import { data } from "../../SpeakerData";

export default function SpeakersList({ showSessions }) {
  const [speakerData, setSpeakerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    async function delayFunc() {
      try {
        await delay(2000);
        setIsLoading(false);
        setSpeakerData(data);
      } catch (e) {
        setIsLoading(false);
        setHasError(true);
        setError(e);
      }
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

  if (hasError) {
    return (
      <div className="text-danger">
        Error: <b>loading Speaker Data Failed {error}</b>
      </div>
    );
  }

  if (isLoading) return <div>Loading...</div>;

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
