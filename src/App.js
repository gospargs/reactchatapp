import { Route,Routes } from "react-router-dom";
import { ChatPage } from "./pages/ChatPage";
import { UserPage } from "./pages/UserPage";
import { UserContext } from '../src/contexts/UserContext'
import React, { useContext } from 'react'
export default function App() {

  const userState = useContext(UserContext)

  return (
    <Routes>
      <Route index element={ !userState.user ? <UserPage/> : <ChatPage/>}/> 
      <Route path="chat" element={<ChatPage/>}/> 
    </Routes>

  );
}
