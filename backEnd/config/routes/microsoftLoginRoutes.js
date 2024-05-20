import passport from 'passport'

export const loggingRouter = express.Router()

loggingRouter.get(
  '/microsoft',
  passport.authenticate('auth-microsoft', {
    prompt: 'select_account',
    session: false,
  }),
  (req, res) => {}
)
