import React, { useContext, useEffect, useState } from 'react'
import { ChatContext } from '../contexts/ChatContext'
import { UserContext } from '../contexts/UserContext'

export function ChatPage() {
  const userState = useContext(UserContext)
  const chatState = useContext(ChatContext)
  const messages = useState([])

  useEffect(() => {
    if (userState) {
      // Subscribe after the 'open' or 'authenticate' event from the Scaledrone instance
      const room = userState.drone.subscribe('observable-room')
      room.on('message', (message) => {})
    }
  }, [])

  return (
    <div>
      <div>
        <h1>hello {userState.user.username}</h1>
      </div>
    </div>
  )
}
