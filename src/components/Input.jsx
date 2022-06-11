import { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import '../Styles/input.css'

export function Input(props) {
  const userState = useContext(UserContext)
  const [state, setState] = useState('')

  const handleOnSubmit = (event) => {
    props.onSendMessage(state)
    setState('')
    event.preventDefault()
}
  const handleOnChange = (event) => {
    setState(event.target.value)
    if(event.target.value !== ''){
      userState.showWhoIstyping(userState.user.username);
    }else {
      userState.showWhoIstyping('');
    }
   
  }

  return (
    <div className="input">
      <form onSubmit={handleOnSubmit} className='form-align' method='post'>
        <textarea
          className='message-input'
          type="text"
          onChange={handleOnChange}
          value={state}
          placeholder="Type your message!"
        />
        <button className='send-message-btn' type="submit" disabled = {!state}>
          Send
        </button>
      </form>
    </div>
  )
}
