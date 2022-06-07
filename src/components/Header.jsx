import React, { useContext, useEffect, useState } from 'react';
import '../Styles/header.css';
import { UserContext } from '../contexts/UserContext';

export function Header(props) {

    const userState = useContext(UserContext);

    const handleLogOut = (event) => { 
        event.preventDefault()
            userState.logOut();
      }

    return (
      <div className="header">
          <h1>My chat {props.username}</h1>
          <button onClick={handleLogOut}> Log out </button>
      </div>
    )

  }