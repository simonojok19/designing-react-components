import React, { createContext } from "react";
import useSpeakerFilter from "../hooks/useSpeakerFilter";

export const SpeakerFilterContext = createContext();

export default function SpeakerFilterProvider({
  children,
  startShowSessions = false,
}) {
  const { showSessions, setShowSessions } = useSpeakerFilter(startShowSessions);
  return (
    <SpeakerFilterContext.Provider value={{ showSessions, setShowSessions }}>
      {children}
    </SpeakerFilterContext.Provider>
  );
}
