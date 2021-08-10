import { data } from "../../../SpeakerData";
import path from "path";
import fs from "fs";

const { promisify } = require("util");
const { readFile } = promisify(fs.readFile);
const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export default async function handle(req, res) {
  res.status(200).send(JSON.stringify(data, null, 2));
}
