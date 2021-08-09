import { useState } from "react";

export default function useSpeakerFilter(startingShowSessions) {
  const [showSessions, setShowSessions] = useState(startingShowSessions);
  return { showSessions, setShowSessions };
}
