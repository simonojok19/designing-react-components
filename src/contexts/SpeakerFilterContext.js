import React, { createContext } from "react";
import useSpeakerFilter from "../hooks/useSpeakerFilter";

export const SpeakerFilterContext = createContext();

export default function SpeakerFilterProvider({
  children,
  startShowSessions = false,
  startingEventYear = "2019",
}) {
  const {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    searchQuery,
    setSearchQuery,
    EVENT_YEAR,
  } = useSpeakerFilter(startShowSessions, startingEventYear);
  return (
    <SpeakerFilterContext.Provider
      value={{
        showSessions,
        setShowSessions,
        eventYear,
        setEventYear,
        searchQuery,
        setSearchQuery,
        EVENT_YEAR,
      }}
    >
      {children}
    </SpeakerFilterContext.Provider>
  );
}
