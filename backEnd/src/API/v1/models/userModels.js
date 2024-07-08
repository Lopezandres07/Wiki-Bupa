import { pool } from '../../../../config/db/conectionDB.js'
import bcrypt from 'bcryptjs'

export const createUser = async (data) => {
  const { firstname, lastname, email, password, role_id } = data
  console.log('DB user: ', firstname, lastname, email, password, role_id)

  const hashedPasword = bcrypt.hashSync(password)

  const SQLquery = {
    text: 'INSERT INTO users (role_id, firstname, lastname, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    values: [role_id, firstname, lastname, email, hashedPasword],
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
