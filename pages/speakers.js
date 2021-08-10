import React from "react";

const Speakers = ({ speakers }) => {
  return (
    <div>
      {speakers.map(({ imageSrc, name }) => {
        return <img src={`images/${imageSrc}`} alt={name} key={name} />;
      })}
    </div>
  );
};

const withData = (Component) => {
  const speakers = [
    { imageSrc: "speaker-1124", name: "Douglas Crockford" },
    { imageSrc: "speaker-1530", name: "Tamara Baker" },
    { imageSrc: "speaker-10803", name: "Eugene Chuvyrov" },
  ];
  return () => {
    return <Component speakers={speakers} />;
  };
};

const EnhancedSpeakerComponent = withData(Speakers);

export default EnhancedSpeakerComponent;
