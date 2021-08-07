import React, { useEffect, useState } from "react";
import { data } from "../SpeakerData";

const STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

export { STATUS };

export default function useRequestSpeaker(delayTime = 2000) {
  const [speakerData, setSpeakerData] = useState([]);
  const [status, setStatus] = useState(STATUS.LOADING);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    async function delayFunc() {
      try {
        await delay(delayTime);
        setStatus(STATUS.SUCCESS);
        setSpeakerData(data);
      } catch (e) {
        setStatus(STATUS.FAILURE);
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
  return { speakerData, status, error, onFavoriteToggle };
}
