import React, { useContext } from "react";
import Speaker from "./Speaker";
import ReactPlaceholder from "react-placeholder";
import useRequest, { STATUS } from "../hooks/useRequest";
import { data } from "../../SpeakerData";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
import SpeakerAdd from "./SpeakerAdd";

export default function SpeakersList() {
  const {
    data: speakerData,
    status,
    error,
    updateRecord,
    insertRecord,
    deleteRecord,
  } = useRequest(2000, data);
  const { searchQuery, eventYear } = useContext(SpeakerFilterContext);

  if (status === STATUS.FAILURE) {
    return (
      <div className="text-danger">
        Error: <b>loading Speaker Data Failed {error}</b>
      </div>
    );
  }

  return (
    <div className="container speakers-list">
      <ReactPlaceholder
        type="media"
        rows={15}
        className="speakerslist-placeholder"
        ready={STATUS !== STATUS.LOADING}
      >
        <SpeakerAdd eventYear={eventYear} insertRecord={insertRecord} />
        <div className="row">
          {speakerData &&
            speakerData
              .filter(
                (speaker) =>
                  speaker.first.toLowerCase().includes(searchQuery) ||
                  speaker.last.toLowerCase().includes(searchQuery)
              )
              .filter((speaker) =>
                speaker.sessions.find(
                  (session) => session.eventYear === eventYear
                )
              )
              .map((speaker) => {
                return (
                  <Speaker
                    key={speaker.id}
                    speaker={speaker}
                    updateRecord={updateRecord}
                    insertRecord={insertRecord}
                    deleteRecord={deleteRecord}
                  />
                );
              })}
        </div>
      </ReactPlaceholder>
    </div>
  );
}
