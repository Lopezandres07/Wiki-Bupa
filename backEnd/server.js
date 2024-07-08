/* import './middleware/validateMicrosoftParams'
import { loggingRouter } from './config/routes/microsoftLoginRoutes'
import passport from 'passport' */

import express from 'express'
import userRoutes from './config/routes/userRoutes.js'
import cors from 'cors'
import { pool } from './config/db/conectionDB.js'

// A la espera de aprobación por parte del area de seguridad

/* app.use(passport.initialize())
app.use('/auth', loggingRouter) */

// Microsoft Routes y Middlewares se mantendran a la espera de aprobación por parte del area

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api/v1', userRoutes)

const PORT = process.env.DB_PORT || 3000
app.listen(3000, () => {
  console.log(`server is running on port ${PORT}`)
})

async function testDBConnection() {
  try {
    const response = await pool.query('SELECT NOW()')
    console.log(
      'Database connection successful. Current time:',
      response.rows[0].now
    )
  } catch (error) {
    console.error('Database connection failed:', error)
  }
}

testDBConnection()
