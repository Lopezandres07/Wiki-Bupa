import { createContext } from 'react'
import { createUser, loginWithEmailAndPassword } from '../APIs/userAPIs'
import { useUserState } from '../hooks/userState'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const { user, setUser } = useUserState()
  console.log('User Provider: ', user)

  const navigate = useNavigate()

  const register = async (data) => {
    const newUser = await createUser(data)
    return newUser
  }

  const login = async (data) => {
    const userLogged = await loginWithEmailAndPassword(data)

    if (userLogged) {
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
