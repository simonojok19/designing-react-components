import React from "react";
import {data} from "../SpeakerData";

const IndexPage = () => {
    const {id, bio, first, last, favorite, twitterHandle, company, sessions} = data[0];
    return (
        <div className="container speakers-list">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
                    <div className="card card-height p-4 mt-4">
                        <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
                            <img
                                src={`/images/speaker-${id}.jpg`}
                                className="contain-fit"
                                width="300"
                                alt={`${first} ${last}`}
                            />
                        </div>
                        <div className="speaker-info">
                            <div className="d-flex justify-content-between mb-3">
                                <h3 className="text-truncate w-200">
                                    {first} {last}
                                </h3>
                            </div>
                            <div>
                                <p>{bio} {twitterHandle} {favorite}</p>
                            </div>
                        </div>
                        <div className="sessionBox card h-250">
                            <span className="session w-100">
                                {sessions[0].title} <strong>Room: {sessions[0].room.name}</strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndexPage;