import { pool } from '../../../../config/db/conectionDB.js'
import bcrypt from 'bcryptjs'

export const getAllUsersModel = async () => {
  const SQLquery = {
    text: 'SELECT * FROM users',
  }

  const response = await pool.query(SQLquery)
  return response.rows
}

export const createUser = async (data) => {
  const {
    firstname,
    lastname,
    email,
    password,
    occupation,
    workplace,
    role_id,
  } = data

  const hashedPasword = bcrypt.hashSync(password)

  const SQLquery = {
    text: 'INSERT INTO users (role_id, firstname, lastname, email, password, occupation, workplace) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    values: [
      role_id,
      firstname,
      lastname,
      email,
      hashedPasword,
      occupation,
      workplace,
    ],
  }

  const response = await pool.query(SQLquery)
  return response.rows[0]
}

export const findUserByEmail = async (data) => {
  const { email } = data

  const SQLquery = {
    text: 'SELECT * FROM users WHERE email = $1',
    values: [email],
  }

  const response = await pool.query(SQLquery)
  return response.rows[0]
}

export const updateUser = async (id, newUserData) => {
  const { role_id, firstname, lastname, occupation, workplace } = newUserData
  let SQLquery

  console.log('New user data model: ', newUserData)

  if (newUserData.password) {
    const hashedPasword = bcrypt.hashSync(newUserData.password)
    SQLquery = {
      text: 'UPDATE users SET role_id = $1, firstname = $2, lastname = $3, password = $4, occupation = $5, workplace = $6 WHERE id = $7 RETURNING *',
      values: [
        role_id,
        firstname,
        lastname,
        hashedPasword,
        occupation,
        workplace,
        id,
      ],
    }
  } else {
    SQLquery = {
      text: 'UPDATE users SET role_id = $1, firstname = $2, lastname = $3, occupation = $4, workplace = $5 WHERE id = $6 RETURNING *',
      values: [role_id, firstname, lastname, occupation, workplace, id],
    }
  }

  const response = await pool.query(SQLquery)
  return response.rows[0]
}

export const removeUser = async (id) => {
  const SQLquery = {
    text: 'DELETE FROM users WHERE id = $1',
    values: [id],
  }

  const response = await pool.query(SQLquery)
  return response.rows[0]
}
