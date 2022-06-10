import { UserForm } from '../components/UserForm'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'

export function UserPage() {
  const userState = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (userState.user) {
      navigate('/chat')
    }
  },[userState.user]);

  return <UserForm />
}
