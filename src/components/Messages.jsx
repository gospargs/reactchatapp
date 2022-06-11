import '../Styles/messages.css'
import '../App.css'
import { useEffect, useRef } from 'react'

export function Messages(props) {
  const { messages } = props

  const messagesEndRef = useRef()

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        block: 'end',
        behavior: 'smooth',
      })
    }
  }, [messages])

  const loadAllMessages = (m) => {
    const { user, message, id } = m
    const { messageFromMe } = props
    const myMessage = user.id === messageFromMe
    const className = myMessage ? 'current-user' : 'other-user' ; 
    const classNameChat = myMessage ? 'my-chat-settings' : 'other-chat-settings'

    return (
      <li key={id} className={className}>
        <div className={classNameChat}>
          <div className="username">{user.username}</div>
          <div className="text">{message}</div>
        </div>
      </li>
    )
  }

  return (
    <div>
      <ul className="messages-list">
        {messages.map((m) => loadAllMessages(m))}
        <div ref={messagesEndRef}></div>
      </ul>
    </div>
  )
}
