import React, { useState, useEffect } from "react";
import Speaker from "./Speaker";
import { data } from "../../SpeakerData";
import ReactPlaceholder from "react-placeholder";
import useRequestSpeaker from "../../hooks/useRequestSpeaker";

export default function SpeakersList({ showSessions }) {
  const { speakerData, isLoading, hasError, error, onFavoriteToggle } =
    useRequestSpeaker(2000);

  if (hasError) {
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
        ready={!isLoading}
      >
        <div className="row">
          {speakerData.map((speaker) => {
            return (
              <Speaker
                key={speaker.id}
                speaker={speaker}
                showSessions={showSessions}
                onFavoriteToggle={onFavoriteToggle(speaker.id)}
              />
            );
          })}
        </div>
      </ReactPlaceholder>
    </div>
  );
}
