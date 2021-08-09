import React, { useContext, useState } from "react";
import useRequest from "../hooks/useRequest";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
import SpeakerProvider, { SpeakerContext } from "../contexts/SpeakerContext";

const Session = ({ title, room }) => {
  return (
    <span className="session w-100">
      {title} <strong>Room: {room.name}</strong>
    </span>
  );
};

const Sessions = ({ sessions }) => {
  const { eventYear } = useContext(SpeakerFilterContext);
  return (
    <div className="sessionBox card h-250">
      {sessions
        .filter((session) => session.eventYear === eventYear)
        .map((session) => (
          <Session className="session w-100" key={session.id} {...session} />
        ))}
    </div>
  );
};

const SpeakerImage = () => {
  const {
    speaker: { id, first, last },
  } = useContext(SpeakerContext);
  return (
    <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
      <img
        src={`/images/speaker-${id}.jpg`}
        className="contain-fit"
        width="300"
        alt={`${first} ${last}`}
      />
    </div>
  );
};

const SpeakerFavorite = () => {
  const { speaker, updateRecord } = useContext(SpeakerContext);
  const [inTransition, setInTransition] = useState(false);
  const doneCallback = () => {
    setInTransition(false);
  };
  return (
    <div className="action padB1">
      <span
        onClick={() => {
          setInTransition(true);
          updateRecord(
            {
              ...speaker,
              favorite: !speaker.favorite,
            },
            doneCallback
          );
        }}
      >
        <i
          className={
            speaker.favorite === true
              ? "fa fa-star orange"
              : "fa fa-star-o orange"
          }
        />{" "}
        Favorite{" "}
        {inTransition && <span className="fas fa-circle-notch fa-spin" />}
      </span>
    </div>
  );
};

const SpeakerDemographics = () => {
  const { first, last, bio, twitterHandle, company } =
    useContext(SpeakerContext);
  return (
    <div className="speaker-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {first} {last}
        </h3>
      </div>
      <SpeakerFavorite />
      <div>
        <p className="card-description">{bio}</p>
        <div className="social d-flex flex-row mt-4">
          <div className="company">
            <h5>Company</h5>
            <h6>{company}</h6>
          </div>
          <div className="twitter">
            <h5>Twitter</h5>
            <h6>{twitterHandle}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

const Speaker = ({ speaker, updateRecord }) => {
  const { id, first, last, sessions } = speaker;
  const { showSessions } = useContext(SpeakerFilterContext);
  return (
    <SpeakerProvider speaker={speaker} updateRecord={updateRecord}>
      <div
        key={id}
        className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12"
      >
        <div className="card card-height p-4 mt-4">
          <SpeakerImage />
          <SpeakerDemographics />
          {showSessions && <Sessions sessions={sessions} />}
        </div>
      </div>
    </SpeakerProvider>
  );
};

export default Speaker;
