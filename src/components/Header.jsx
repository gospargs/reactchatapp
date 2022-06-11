import '../Styles/header.css'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import ReactTooltip from 'react-tooltip'
import { useState } from 'react'

export function Header(props) {
  const [tooltip, showTooltip] = useState(true)

  const handleOnSubmit = () => {
    props.setUserIsLoggingOut(true)
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
    </div>
  )
}
