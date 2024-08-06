import { createContext, useEffect } from 'react'
import { useUserState } from '../hooks/userState'
import { useNavigate } from 'react-router-dom'
import {
  createUser,
  deletedUserById,
  getUsers,
  loginWithEmailAndPassword,
} from '../APIs/userAPIs'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const { user, setUser } = useUserState()
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userData = JSON.parse(localStorage.getItem('userData'))

    if (token && userData) {
      setUser({ token, userData })
    }
  }, [])

  const getAllUsers = async () => {
    const users = await getUsers()
    return users
  }

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

  const deleteUser = async (id) => {
    console.log('UserProvider: ', id)

    const userDeleted = deletedUserById(id)
    return userDeleted
  }

  const logout = () => {
    localStorage.removeItem('userData')
    localStorage.removeItem('token')
    setUser({ userData: null, token: null })
  }

  return (
    <UserContext.Provider
      value={{ getAllUsers, register, login, logout, user, deleteUser }}
    >
      {children}
    </UserContext.Provider>
  )
}
