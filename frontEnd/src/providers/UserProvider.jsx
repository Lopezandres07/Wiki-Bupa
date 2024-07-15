import { createContext, useEffect } from 'react'
import { createUser, loginWithEmailAndPassword } from '../APIs/userAPIs'
import { useUserState } from '../hooks/userState'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const { user, setUser } = useUserState()
  const navigate = useNavigate()

  console.log('User Provider: ', user)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userData = JSON.parse(localStorage.getItem('userData'))

    if (token && userData) {
      setUser({ token, userData })
    }
  }, [])

  const register = async (data) => {
    const newUser = await createUser(data)
    return newUser
  }

  const login = async (data) => {
    const userLogged = await loginWithEmailAndPassword(data)

    if (userLogged) {
      localStorage.setItem('token', userLogged.token)
      localStorage.setItem('userData', JSON.stringify(userLogged.userData))
      setUser(userLogged)
      navigate('/')
    }

    setUser(userLogged)
    return userLogged
  }

  const logout = () => {
    setUser({ userData: null, token: null })
  }

  return (
    <UserContext.Provider value={{ register, login, logout, user }}>
      {children}
    </UserContext.Provider>
  )
}
