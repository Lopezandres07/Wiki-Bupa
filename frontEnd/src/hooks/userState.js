import { useState, useEffect } from 'react'

export const useUserState = () => {
  const [user, setUser] = useState({
    userData: null,
    token: null,
  })

  useEffect(() => {
    const token = localStorage.getItem('token') || null
    const userData = JSON.parse(localStorage.getItem('userData')) || null
    setUser({ token, userData })
  }, [])

  return { user, setUser }
}
