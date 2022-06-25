import { useState } from 'react'
import '../Styles/input.css'

export function Input(props) {

  const [state, setState] = useState('')
  const handleOnSubmit = (event) => {
    if(state !== '' && state !==undefined && state !== '\n' && state.replaceAll('\n','').length>0){
        props.onSendMessage(state);
        setState('')
        event.preventDefault()
      
    }

  }
  const handleOnChange = (event) => {
    setState(event.target.value)
   
  }

  function handleKeyUp(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
      handleOnSubmit(event);
    }
  }
  return (
    <div className="input">
      <form onKeyUp={handleKeyUp} onSubmit={handleOnSubmit} className='form-align'>
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
