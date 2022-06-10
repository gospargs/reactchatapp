import '../Styles/header.css';
import { RiLogoutCircleRLine } from 'react-icons/ri';

export function Header(props) {

  const handleOnSubmit = () => {
    props.setUserIsLoggingOut(true);
  }

  return (
    <div className="header">
      <div className='header-components'>
        <span className='log-out-icon' onClick={handleOnSubmit} ><RiLogoutCircleRLine /></span>
      </div>
    </div>
  )
}
