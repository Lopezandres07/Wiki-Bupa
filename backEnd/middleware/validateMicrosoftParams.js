import passport from 'passport'
import { Strategy as MicrosoftStrategy } from 'passport-microsoft'

passport.use(
  'auth-microsoft',
  new MicrosoftStrategy(
    {
      clientID: process.env.MICROSOFT_CLIENT_ID,
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
      callbackURL: process.env.MICROSOFT_CALLBACK_URL,
      scope: ['user.read'],
      authorizationURL:
        'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
      tokenURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile)
      return done(null, profile)
    }
  )
)
