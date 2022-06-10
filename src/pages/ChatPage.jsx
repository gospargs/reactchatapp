import React, { useContext, useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Messages } from '../components/Messages'
import { UserContext } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'

export function ChatPage() {
  const { user, drone, logOut } = useContext(UserContext)
  const [messages, setMessages] = useState([])
  const [userIsLoggingOut, setUserIsLoggingOut] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
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

  useEffect(() => {
    if (userIsLoggingOut) {
      logOut()
      navigate('/')
    }
  })

  const onSendMessage = (message) =>
    drone.publish({
      room: 'observable-room',
      message,
    })

  return (
    <>
      <Header username={user.username} setUserIsLoggingOut={setUserIsLoggingOut}></Header>
      <Messages messages={messages} messageFromMe={user.id}></Messages>
      <Input onSendMessage={onSendMessage}></Input>
    </>
  )
}
