import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { createUser } from '../models/userModel.js'

export const newUser = async (req, res) => {
  const { firstname, lastname, email, password } = req.body

  try {
    const user = await createUser({
      firstname,
      lastname,
      email,
      password: bcrypt.hashSync(password, 10),
    })

    res.status(201).json({ success: true, user })
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario', error })
  }
}

export const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await findUserByEmail(email)

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 86400,
      })

      res.status(200).json({
        success: true,
        token,
        userData: {
          id: user._id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
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
