import React from "react";
import { data } from "../SpeakerData";

export default function useRequestSpeaker() {
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
}
