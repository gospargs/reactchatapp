import React, { useState } from "react";

export const ChatContext = React.createContext();
export const ChatConsumer = ChatContext.Consumer;

export function ChatProvider(props) {

    const [messages, setMessages] = useState([]);

    const value = {
        messages,
        
    }


  return <ChatContext.Provider value={value}>{props.children}</ChatContext.Provider>;
}