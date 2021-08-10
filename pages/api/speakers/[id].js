import { data } from "../../../SpeakerData";
import path from "path";
import fs, { writeFile } from "fs";

const { promisify } = require("util");
const { readFile } = promisify(fs.readFile);
const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export default async function handle(req, res) {
  const jsonFile = path.resolve("./", "db.json");
  const method = req?.method;
  const id = parseInt(req?.query.id);
  const recordBody = req?.body;

  switch (method) {
    case "POST": {
      await postMethod();
      break;
    }
    case "PUT": {
      await putMethod();
      break;
    }
    case "DELETE": {
      await deleteMethod();
      break;
    }
    default: {
      res.status(501).send(`Method ${method} not implemented`);
      console.log(`Method ${method} not implemented`);
    }
  }

  async function putMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const speakers = JSON.parse(readFileData).speakers;
      if (speakers) {
        const newSpeakersArray = speakers.map((speaker) =>
          speaker.id === id ? recordBody : speaker
        );
        writeFile(
          jsonFile,
          JSON.stringify({ speakers: newSpeakersArray }, null, 2),
          (data) => {
            console.log(data);
          }
        );
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(recordBody, null, 2));
        console.log("PUT /api/speakers status: 200");
      }
    } catch (e) {
      console.log("PUT /api/speakers error", e);
      res
        .status(500)
        .send(`PUT /api/speakers/${id} status: 500 unexpected error`);
    }
  }

  async function postMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const speakers = JSON.parse(readFileData).speakers;
      if (speakers) {
        const idNew =
          speakers.reduce((accumulator, currentValue) => {
            const idCurrent = parseInt(currentValue.id);
            return idCurrent > accumulator ? idCurrent : accumulator;
          }, 0) + 1;

        const newRec = { ...recordBody, id: idNew };
        const newSpeakersArray = [newRec, ...speakers];
        writeFile(
          jsonFile,
          JSON.stringify({ speakers: newSpeakersArray }, null, 2),
          (data) => {
            console.log(data);
          }
        );
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(newRec, null, 2));
        console.log("POST /api/speakers status: 200");
      }
    } catch (e) {
      console.log("POST /api/speakers error", e);
      res
        .status(500)
        .send(`POST /api/speakers/${id} status: 500 unexpected error`);
    }
  }
}
