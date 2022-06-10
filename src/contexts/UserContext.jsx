import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const UserContext = React.createContext()
export const UserConsumer = UserContext.Consumer

export function UserProvider(props) {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [drone, setDrone] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const userSelected = (data) => {
    if (data) {
      setIsLoading(true)
      const drone = new window.Scaledrone('buj5SNMKOccNFyFR', {
        data: data.username,
      })
      drone.on('open', (error) => {
        if (error) {
          return console.error(error)
        }
        setDrone(drone)
        setUser({ id: drone.clientId, username: data.username })
        setIsLoading(false)
      })
    }
  }

  const logOut = () => {
    setUser(null)
    drone.close()
    setDrone(null)
    navigate('/')
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
