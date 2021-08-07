import React, { useEffect, useState } from "react";
import { data } from "../SpeakerData";

export const STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

export default function useRequest(delayTime = 2000, initialData = []) {
  const [data, setData] = useState(initialData);
  const [status, setStatus] = useState(STATUS.LOADING);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    async function delayFunc() {
      try {
        await delay(delayTime);
        setStatus(STATUS.SUCCESS);
        setData(data);
      } catch (e) {
        setStatus(STATUS.FAILURE);
        setError(e);
      }
    }
    delayFunc().then((r) => console.log(r));
  }, []);

  const updateRecord = (record) => {
    return () => {
      const records = data.map((rec) => {
        return rec.id === record.id ? record : rec;
      });
      async function delayFunction() {
        try {
          await delay(delayTime);
          setData(record);
        } catch (e) {
          console.error(e);
        }
      }
      delayFunction().then();
      setData(records);
    };
  };
  return { speakerData: data, status, error, onFavoriteToggle: updateRecord };
}
