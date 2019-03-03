const passport = require('passport')
const router = require('express').Router()
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const {User} = require('../db/models')

/**
 * For OAuth keys and other secrets, your Node process will search
 * process.env to find environment variables. On your production server,
 * you will be able to set these environment variables with the appropriate
 * values. In development, a good practice is to keep a separate file with
 * these secrets that you only share with your team - it should NOT be tracked
 * by git! In this case, you may use a file called `secrets.js`, which will
 * set these environment variables like so:
 *
 * process.env.GOOGLE_CLIENT_ID = 'your google client id'
 * process.env.GOOGLE_CLIENT_SECRET = 'your google client secret'
 * process.env.GOOGLE_CALLBACK = '/your/google/callback'
 */

// if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
//   console.log('Google client ID / secret not found. Skipping Google OAuth.')
// } else {
const googleConfig = {
  clientID:
    '1075301925285-0abvksjvgtfnhsgpsigtlkplh685inhf.apps.googleusercontent.com',
  clientSecret: 'fnGSi858zQXyp4sx9j8hreC-',
  callbackURL: 'auth/google/callback'
}

const strategy = new GoogleStrategy(
  googleConfig,
  (token, refreshToken, profile, done) => {
    console.log(profile)
    const googleId = profile.id
    const name = profile.displayName
    const email = profile.emails[0].value

    User.findOrCreate({
      where: {googleId},
      defaults: {name, email}
    })
      .then(([user]) => done(null, user))
      .catch(done)
  }
)

passport.use(strategy)

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id)
    done(null, user)
  } catch (error) {
    done(error)
  }
})

router.get('/', passport.authenticate('google', {scope: 'email'}))

router.get(
  '/callback',
  passport.authenticate('google', {
    successRedirect: '/home',
    failureRedirect: ''
  })
)
// }

module.exports = router
