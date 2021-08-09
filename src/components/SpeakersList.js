import React from "react";
import Speaker from "./Speaker";
import ReactPlaceholder from "react-placeholder";
import useRequest, { STATUS } from "../hooks/useRequest";
import { data } from "../../SpeakerData";

export default function SpeakersList() {
  const {
    data: speakerData,
    status,
    error,
    updateRecord,
  } = useRequest(2000, data);
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
        <div className="row">
          {speakerData &&
            speakerData.map((speaker) => {
              return (
                <Speaker
                  key={speaker.id}
                  speaker={speaker}
                  onFavoriteToggle={(doneCallback) => {
                    updateRecord(
                      {
                        ...speaker,
                        favorite: !speaker.favorite,
                      },
                      doneCallback
                    );
                  }}
                />
              );
            })}
        </div>
      </ReactPlaceholder>
    </div>
  );
}
