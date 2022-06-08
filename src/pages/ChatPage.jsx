import React, { useContext, useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Messages } from '../components/Messages';
import { UserContext } from '../contexts/UserContext';

export function ChatPage() {
  const { user, drone, logOut } = useContext(UserContext)

  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (user) {
      // Subscribe after the 'open' or 'authenticate' event from the Scaledrone instance
      const room = drone.subscribe('observable-room')
      room.on('message', (message) => {
        setMessages((current) => {
          return [
            ...current,
            {
              message: message.data,
              id: message.id,
              user: {
                id: message.member.id,
                username: message.member.clientData,
              },
            },
          ]
        })
      })
    }
  }, [user, drone])

  const onSendMessage = (message) =>
    drone.publish({
      room: 'observable-room',
      message,
    })

  return (
    <>
      <Header username={user.username} logOut={logOut}></Header>
      <Messages messages={messages} messageFromMe={user.id}></Messages>
      <Input onSendMessage={onSendMessage}></Input>
    </>
  )
}
