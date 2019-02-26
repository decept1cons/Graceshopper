const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  const id = req.params.id
  try {
    const user = await User.findById(Number(id))
    if (user) {
      res.json(user)
    } else {
      console.error('No user found!!!') // check this latter!
    }
  } catch (err) {
    next(err)
  }
})
