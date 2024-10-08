import axios from 'axios'

const API = 'http://localhost:3000/api/v1/'

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API}users`)
    return response.data
  } catch (error) {
    console.log('Error al obtener los usuarios:', error)
    throw error
  }
}

export const createUser = async (data) => {
  try {
    const response = await axios.post(`${API}register`, { data })
    return response.data
  } catch (error) {
    console.error('Error al crear el usuario:', error)
    throw error
  }
}

export const loginWithEmailAndPassword = async (data) => {
  try {
    const response = await axios.post(`${API}login`, { data })
    return response.data
  } catch (error) {
    console.error('Error al loguearse:', error)
    throw error
  }
}

export const updateUserById = async (newUserData) => {
  try {
    const response = await axios.put(`${API}user/${newUserData.id}`, {
      newUserData,
    })
    return response.data
  } catch (error) {
    console.error('Error al actualizar el usuario:', error)
    throw error
  }
}

export const deletedUserById = async (id) => {
  try {
    const response = await axios.delete(`${API}user/${id}`)
    return response.data
  } catch (error) {
    console.error('Error al eliminar el usuario:', error)
    throw error
  }
}
