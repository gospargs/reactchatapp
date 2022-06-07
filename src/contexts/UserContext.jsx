import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext()
export const UserConsumer = UserContext.Consumer

export function UserProvider(props) {
  
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const [drone, setDrone] = useState(null)

   const userSelected = (data) => {
    if (data) {
      const drone = new window.Scaledrone('buj5SNMKOccNFyFR', {
        data: data.username,
      })
      drone.on('open', (error) => {
        if (error) {
          return console.error(error); // Handle error
        }
        setDrone(drone);
        setUser({ id: drone.clientId, username: data.username });
        navigate("/chat");
      });
    }
  }

  const userLogedOff = () => {
    setUser(null)
  }

  const value = {
    user,
    drone,
    userSelected,
    userLogedOff,
  }

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  )
}
