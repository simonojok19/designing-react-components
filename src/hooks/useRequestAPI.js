import React, { useEffect, useState } from "react";
import axios from "axios";
export const STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

const BASE_URL = "/api/speakers";

export default function useRequestAPI() {
  const [data, setData] = useState();
  const [status, setStatus] = useState(STATUS.LOADING);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    async function delayFunc() {
      try {
        const result = await axios.get(BASE_URL);
        setStatus(STATUS.SUCCESS);
        setData(result.data);
      } catch (e) {
        setStatus(STATUS.FAILURE);
        // setError(e);
      }
    }
    delayFunc().then();
  }, []);

  const updateRecord = (record, doneCallback) => {
    const originalRecords = [...data];
    const records = data.map((rec) => {
      return rec.id === record.id ? record : rec;
    });
    async function delayFunction() {
      try {
        await axios.put(`${BASE_URL}/${record.id}`, record);
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
        await axios.post(`${BASE_URL}/9999`, record);
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
    const newRecords = data.filter((r) => r.id !== record.id);
    async function delayFunction() {
      try {
        await axios.delete(`${BASE_URL}/${record.id}`, record);
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
