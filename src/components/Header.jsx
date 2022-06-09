import '../Styles/header.css'

export function Header(props) {
  return (
    <div className="header chat-window">
      <h1>Chat application</h1>
      <button onClick={props.logOut}> Log out </button>
    </div>
  )
}
