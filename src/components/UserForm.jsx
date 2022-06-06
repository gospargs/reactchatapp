import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/AppContext';
import { useNavigate } from "react-router-dom";

export function UserForm(props) {
  const [state, setState] = useState(null);
  const navigate = useNavigate();
  const appState = useContext(AppContext);

  const handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name

    setState((state) => ({
      ...state,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (state !== undefined && state !== '') {
        appState.userSelected(state);
        navigate("/chat");
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
