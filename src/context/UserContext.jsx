import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({
  user: null,
  setUser: () => {},
});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      axios.get("/profile", { withCredentials: true }).then(({ data }) => {
        setUser(data);
      });
    }
  }, [user]);

  const UserContextValue = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={UserContextValue}>
      {children}
    </UserContext.Provider>
  );
}
