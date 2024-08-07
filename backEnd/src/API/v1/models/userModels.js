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

export const removeUser = async (id) => {
  const SQLquery = {
    text: 'DELETE FROM users WHERE id = $1',
    values: [id],
  }

  const response = await pool.query(SQLquery)
  return response.rows[0]
}
