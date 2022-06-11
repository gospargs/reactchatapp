import '../Styles/header.css'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import ReactTooltip from 'react-tooltip'
import { useState,useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

export function Header(props) {
  const [tooltip, showTooltip] = useState(true)
  const userState = useContext(UserContext)

  const handleOnSubmit = () => {
    props.setUserIsLoggingOut(true)
    userState.userTyping('')
  }

  return (
    <div className="header">
      {tooltip && <ReactTooltip effect="solid" />}
      <div
        data-tip="Log out!"
        onMouseEnter={() => showTooltip(true)}
        onMouseLeave={() => {
          showTooltip(false)
          setTimeout(() => showTooltip(true), 50)
        }}
        className="log-out-icon"
        onClick={handleOnSubmit}
      >
        <RiLogoutCircleRLine />
      </div>
      {userState.userTyping && <div>{userState.userTyping} is typing...</div>}
    </div>
  )
}
