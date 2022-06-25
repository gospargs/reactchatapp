import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import '../Styles/userForm.css'
import { LoadingSpinner } from './LoadingSpinner'

export function UserForm() {
  const generateRandomAvatarColor = () => {
    return '#' + Math.floor(Math.random() * 0xffffff).toString(16)
  }

  const [username, setUsername] = useState(null)
  const [userAvatarColor, setuserAvatarColor] = useState(
    generateRandomAvatarColor(),
  )
  const userState = useContext(UserContext)
  const [usernameError, setUsernameError] = useState('')

  const handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name

    setUsername((username) => ({
      ...username,
      [name]: value,
    }))

    if (value === '') {
      setUsernameError('')
    }
  }

  const handleUserAvatarColorChange = (event) => {
    const value = event.target.value
    const name = event.target.name

    if (value !== '#000000') {
      setuserAvatarColor((userAvatarColor) => ({
        ...userAvatarColor,
        [name]: value,
      }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validateUsername(username)) {
      userState.userSelected(username)
    }
  }

  const validateUsername = (username) => {
    if (
      username === undefined ||
      username === null ||
      username.username.toString() === ''
    ) {
      setUsernameError('Please enter a username!')
      return false
    } else {
      username = username.username.toString()
    }
    if (username.length < 4 || username.length > 30) {
      setUsernameError('Username must be between 4 and 20 characters long!')
      return false
    }
    if (username.match(/\W/)) {
      setUsernameError('Username cannot contain special characters!')
      return false
    }
    return true
  }

  const loadUserForm = () => {
    return (
      <div className="user-select-Form">
        <form onSubmit={handleSubmit} autoComplete="off">
          <label className="user-label"> Choose a username!</label>
          <br />
          <input
            className="username-input"
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <br />

          <input
            type="color"
            id="color"
            name="color"
            value={userAvatarColor}
            onChange={handleUserAvatarColorChange}
          />
          <label>Avatar color</label>

          <span className="error-message">{usernameError}</span>
          <button className="button" type="submit">
            Start to chat!
          </button>
        </form>
      </div>
    )
  }

  return <div>{userState.isLoading ? <LoadingSpinner /> : loadUserForm()}</div>
}
