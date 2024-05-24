import axios from 'axios'

const API = 'http://localhost:3001/api/v1/'

export const createUser = async (data) => {
  try {
    const response = await axios.post(`${API}register`, data)
    return response.data
  } catch (error) {
    console.error('Error al crear el usuario:', error)
    throw error
  }
}

export const loginWithEmailAndPassword = async (email, password) => {
  try {
    const response = await axios.post(`${API}login`, { email, password })
    return response.userData
  } catch (error) {
    console.error('Error al loguearse:', error)
    throw error
  }
}
