import React, { createContext } from 'react'
import { createUser, loginWithEmailAndPassword } from '../APIs/userAPIs'
import { useUserState } from '../hooks/userState'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const { user, setUser } = useUserState()

  const register = async (data) => {
    const newUser = await createUser(data)
    return newUser
  }

  const login = async (email, password) => {
    const userLogged = await loginWithEmailAndPassword(email, password)
    setUser(userLogged)
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userData')
    setUser({ userData: null, token: null })
  }

  return (
    <UserContext.Provider value={{ register, login, logout, user }}>
      {children}
    </UserContext.Provider>
  )
}
