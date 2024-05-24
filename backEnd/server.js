/* import { loggingRouter } from './config/routes/microsoftLoginRoutes'
import passport from 'passport' */
import express from 'express'
import './middleware/validateMicrosoftParams'

const app = express()
const PORT = process.env.PORT || 3000

// A la espera de aprobación por parte del area de seguridad
// Microsoft Routes y Middlewares se mantendran a la espera de aprobación por parte del area

/* app.use(passport.initialize())
app.use('/auth', loggingRouter) */

app.listen(3000, () => {
  console.log(`server is running on port ${PORT}`)
})
