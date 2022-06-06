import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/AppContext';

export function ChatPage() {

    const appState = useContext(AppContext);

    console.log(appState.user.username);
    return (
            <div>hello  {appState.user.username}</div>
        );
}



