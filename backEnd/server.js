/* import './middleware/validateMicrosoftParams'
import { loggingRouter } from './config/routes/microsoftLoginRoutes'
import passport from 'passport' */
import express from 'express'
import userRoutes from './config/routes/userRoutes'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000
app.listen(3000, () => {
  console.log(`server is running on port ${PORT}`)
})

// A la espera de aprobación por parte del area de seguridad

/* app.use(passport.initialize())
app.use('/auth', loggingRouter) */

// Microsoft Routes y Middlewares se mantendran a la espera de aprobación por parte del area

app.use('/api/v1', userRoutes)
