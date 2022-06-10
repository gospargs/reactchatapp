import '../Styles/header.css';

export function Header(props) {

  const handleOnSubmit = () => {
    props.setUserIsLoggingOut(true);
  }

  return (
    <div className="header chat-window">
      <h1>Chat application</h1>
      <button onClick={handleOnSubmit}> Log out </button>
    </div>
  )
}
