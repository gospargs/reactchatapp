import  { useState } from "react";
import '../Styles/input.css';
export function Input() {

    const [state, setState] = useState('');

    const handleOnSubmit  = (event) => {
        event.preventDefault();
    }

    const handleOnChange = (event) => {
        setState(event.target.value);
    }
    
    return (
      <div className='input'>
       <form onSubmit={handleOnSubmit}>
        <input type='text'
                onChange={handleOnChange}
                value = {state}
                placeholder='Type your message!'
                />
        <button type='submit' disabled={!state}>Send</button>
       </form>
      </div>
    )
  }