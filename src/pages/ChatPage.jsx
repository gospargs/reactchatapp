import React, { useContext, useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Messages } from '../components/Messages'
import { UserContext } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'

export function ChatPage() {
  
  const { user, drone, logOut } = useContext(UserContext)
  const [messages, setMessages] = useState([])
  const [members, setMembers] = useState({ online: [] });
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

      room.on("members", (member) => {
        members.online = member;
        setMembers({...members})
      });
      room.on("member_join", (member) => {
        members.online.push(member);
        setMembers({ ...members });
      });
      room.on("member_leave", ({ id }) => {
        const index = members.online.findIndex((member) => member.id === id);
        members.online.splice(index, 1);
        setMembers({ ...members });
      });
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
    <div className='chat-app'>
      <Header username={user.username} setUserIsLoggingOut={setUserIsLoggingOut} member = {members}></Header>
      <Messages messages={messages} messageFromMe={user.id}></Messages>
      <Input onSendMessage={onSendMessage}></Input>
    </div>
  )
}
