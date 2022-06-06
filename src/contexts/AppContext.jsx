import React, { useState } from "react";

export const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

export function AppProvider(props) {

    const [user, setUser] = useState(null);
    const userSelected = (data) => setUser({ username: data.username });
    const userLogedOff = () => {setUser(null);};

    const value = {
        user,
        userSelected,
        userLogedOff,
      };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
}