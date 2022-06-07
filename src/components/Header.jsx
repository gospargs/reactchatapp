import '../Styles/header.css';

export function Header(props) {

    return (
      <div className="header">
          <h1>My chat {props.username}</h1>
      </div>
    )
  }