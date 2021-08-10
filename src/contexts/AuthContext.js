import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children, initialLoggedInUser }) {
  const [user, setUser] = useState(initialLoggedInUser);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
