import { createContext } from "react";

export const SpeakerContext = createContext();

export default function SpeakerProvider({ children, speaker, updateRecord }) {
  return (
    <SpeakerContext.Provider value={{ speaker, updateRecord }}>
      {children}
    </SpeakerContext.Provider>
  );
}
