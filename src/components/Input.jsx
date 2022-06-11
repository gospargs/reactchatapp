import { useState } from 'react'
import '../Styles/input.css'

export function Input(props) {

  const [state, setState] = useState('')

  const handleOnSubmit = (event) => {
    props.onSendMessage(state)
    setState('')
    event.preventDefault()
}
  const handleOnChange = (event) => {
    setState(event.target.value)
   
  }

  return (
    <div className="input">
      <form onSubmit={handleOnSubmit} className='form-align'>
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
