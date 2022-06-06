import React from "react";
import { Route,Routes } from "react-router-dom";
import { ChatPage } from "./pages/ChatPage";
import { UserPage } from "./pages/UserPage";

export default function App() {
  return (
    <Routes>
      <Route index element={<UserPage/>}/> 
      <Route path="chat" element={<ChatPage/>}/> 
    </Routes>

  );
}
