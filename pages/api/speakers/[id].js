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
          JSON.stringify({ speakers: newSpeakersArray }, null, 2)
        );
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(recordBody, null, 2));
        console.log("GET /api/speakers status: 200");
      }
    } catch (e) {
      console.log("/api/speakers error", e);
      res.status(404).send("File Not Found on Server");
    }
  }
}
