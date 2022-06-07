import  { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContext';
import '../Styles/input.css';
export function Input() {

    const userState = useContext(UserContext);
    const [state, setState] = useState('');

    const handleOnSubmit  = (event) => {

        event.preventDefault();
    }
    const handleOnChange = (event) => {
        setState(event.target.value);
    }
    
    return (
      <div className='input'>
        {state && <span>{userState.user.username} is typing...</span>}  
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