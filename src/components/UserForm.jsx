import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContext';

export function UserForm() {
  const [state, setState] = useState(null);
  const userState = useContext(UserContext);

  const handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name

    setState((state) => ({
      ...state,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => { // Ugradit validaciju kod odabira username-a
    event.preventDefault()
    if (state !== undefined && state !== '') {
        userState.userSelected(state);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label> Choose a username!!</label>
      <br />
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />
      <br />
      <button type="submit">Start to chat!</button>
    </form>
  )
}
