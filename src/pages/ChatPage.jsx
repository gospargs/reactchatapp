import React, { useContext, useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { ChatContext } from '../contexts/ChatContext';
import { UserContext } from '../contexts/UserContext';

export function ChatPage() {
  const userState = useContext(UserContext);
  const chatState = useContext(ChatContext);
  const messages = useState([]);

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
        <Header username= {userState.user.username}></Header>
      </div>
    </div>
  )
}
