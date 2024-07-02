import { createContext } from 'react'
import { createUser, loginWithEmailAndPassword } from '../APIs/userAPIs'
import { useUserState } from '../hooks/userState'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const { user, setUser } = useUserState()
  const navigate = useNavigate()

  const register = async (data) => {
    const newUser = await createUser(data)
    return newUser
  }

  const login = async (email, password) => {
    console.log(email, password)

    const userLogged = await loginWithEmailAndPassword(email, password)

    if (userLogged.userData) {
      navigate('/')
    }

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
