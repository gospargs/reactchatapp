import React, { useState } from 'react'

export const UserContext = React.createContext()
export const UserConsumer = UserContext.Consumer

export function UserProvider(props) {
  const [user, setUser] = useState(null)
  const [drone, setDrone] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const userSelected = (username,userAvatarColor) => {
    if (username) {
      setIsLoading(true)
      const drone = new window.Scaledrone('buj5SNMKOccNFyFR', {
        data: username.username,
      })
      drone.on('open', (error) => {
        if (error) {
          return console.error(error)
        }
        setDrone(drone)
        setUser({ id: drone.clientId, username: username.username, avatarColor: userAvatarColor})
        setIsLoading(false)
      })
    }
  }

  const logOut = () => {
    setUser(null)
    drone.close()
    setDrone(null)
  }

  const value = {
    user,
    drone,
    isLoading,
    userSelected,
    logOut,
  }

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  )
}
