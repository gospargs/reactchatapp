import '../Styles/messages.css';
import '../App.css';

export function Messages(props) {
  const { messages } = props

  const loadAllMessages = (m) => {
    const { user, message, id } = m;
    const { messageFromMe } = props;
    const myMessage = user.id === messageFromMe;
    const className = myMessage
      ? 'messages-message current-user'
      : 'messages-message';

    return (
      <li key={id} className={className}>
        <div className="message-content">
          <div className="username">{user.username}</div>
          <div className="text">{message}</div>
        </div>
      </li>
    )
  }

  return (
    <ul className="messages-list chat-window">{messages.map((m) => loadAllMessages(m))}</ul>
  )
}
