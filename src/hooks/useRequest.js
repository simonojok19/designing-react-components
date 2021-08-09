import React, { useEffect, useState } from "react";
import { data } from "../../SpeakerData";

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

  const updateRecord = (record, doneCallback) => {
    const originalRecords = [...data];
    const records = data.map((rec) => {
      return rec.id === record.id ? record : rec;
    });
    async function delayFunction() {
      try {
        await delay(delayTime);
        if (doneCallback) {
          doneCallback();
        }
        setData(records);
      } catch (e) {
        console.error("error thrown inside delayFunction", e);
      }
    }
    delayFunction().then();
  };

  const insertRecord = (record, doneCallback) => {
    const originalRecords = [...data];
    const newRecords = [record, ...data];
    async function delayFunction() {
      try {
        await delay(delayTime);
        if (doneCallback) {
          doneCallback();
        }
        setData(newRecords);
      } catch (e) {
        console.error("error thrown inside delayFunction", e);
      }
    }
    delayFunction().then();
  };

  const deleteRecord = (record, doneCallback) => {
    const originalRecords = [...data];
    const newRecords = data.find((r) => r.id !== record.id);
    async function delayFunction() {
      try {
        await delay(delayTime);
        if (doneCallback) {
          doneCallback();
        }
        setData(newRecords);
      } catch (e) {
        console.error("error thrown inside delayFunction", e);
      }
    }
    delayFunction().then();
  };
  return { data, status, error, updateRecord, insertRecord, deleteRecord };
}
