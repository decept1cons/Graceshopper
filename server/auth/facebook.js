var passport = require('passport'),
  FacebookStrategy = require('passport-facebook').Strategy
const router = require('express').Router()
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

passport.use(
  new FacebookStrategy(
    {
      clientID: '386082358839632',
      clientSecret: 'e3016d4f165b4f351e5eeec30c8282d5',
      callbackURL: 'auth/facebook/callback',
      profileFields: ['id', 'displayName', 'picture.type(large)', 'email']
    },
    function(accessToken, refreshToken, profile, done) {
      console.log(profile)
      const facebookId = profile.id
      const email = profile.emails[0].value
      const imageUrl = profile.photos[0].value

      User.findOrCreate({
        where: {facebookId},
        defaults: {email, imageUrl}
      })
        .then(([user]) => done(null, user))
        .catch(done)
    }
  )
)

// passport.serializeUser((user, done) => {
//   done(null, user.id)
// })

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await User.findById(id)
//     done(null, user)
//   } catch (error) {
//     done(error)
//   }
// })

router.get('/', passport.authenticate('facebook', {scope: ['email']}))

router.get(
  '/callback',
  passport.authenticate('facebook', {failureRedirect: '/login'}),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/home')
  }
)
// }

module.exports = router
