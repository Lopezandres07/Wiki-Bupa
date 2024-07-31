import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {
  createUser,
  findUserByEmail,
  getAllUsersModel,
} from '../models/userModels.js'

export const getUsersController = async (req, res) => {
  try {
    const users = await getAllUsersModel()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios', error })
  }
}

export const newUser = async (req, res) => {
  const { data } = req.body
  console.log('New User Controller: ', data)

  try {
    const user = await createUser(data)

    res.status(201).json({ success: true, user })
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario', error })
  }
}

export const loginUser = async (req, res) => {
  const { data } = req.body

  try {
    const findUser = await findUserByEmail(data)

    if (findUser && bcrypt.compareSync(data.password, findUser.password)) {
      const token = jwt.sign(
        { email: findUser.email },
        process.env.JWT_SECRET,
        {
          expiresIn: 86400,
        }
      )

      res.status(200).json({
        success: true,
        token,
        userData: {
          id: findUser.id,
          role_id: findUser.role_id,
          firstname: findUser.firstname,
          lastname: findUser.lastname,
          email: findUser.email,
        },
      })
    } else {
      res.status(401).json({ message: 'Usuario o contraseña incorrectos' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al loguearse', error })
  }
}

export const updateUserProfile = async (req, res) => {
  const { id } = req.params
  const { firstname, lastname, email, password } = req.body

  try {
    const userUpdated = await updateUser(id, {
      firstname,
      lastname,
      email,
      password: bcrypt.hashSync(password, 10),
    })

    res.status(200).json({ success: true, userUpdated })
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el usuario', error })
  }
}

export const deleteUser = async (req, res) => {
  const { id } = req.params

  try {
    await removeUser(id)

    res.status(204).json({ success: true })
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el usuario', error })
  }
}
