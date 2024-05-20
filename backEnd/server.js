import express from 'express'
import { loggingRouter } from './config/routes/microsoftLoginRoutes'
import passport from 'passport'
import './middleware/validateMicrosoftParams'

const app = express()
const PORT = process.env.PORT || 3000

app.use(passport.initialize())
app.use('/auth', loggingRouter)

app.listen(3000, () => {
  console.log(`server is running on port ${PORT}`)
})
