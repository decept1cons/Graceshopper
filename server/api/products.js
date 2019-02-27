const router = require('express').Router()
const {Product, User} = require('../db/models')
const db = require('../db/db')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()

    res.json(products)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  const id = req.params.id
  try {
    const product = await Product.findById(Number(id))
    if (product) {
      res.json(product)
    } else {
      console.error('No product found!!!') // check this latter!
    }
  } catch (err) {
    next(err)
  }
})

// router.put('/cart/:productId', async (req, res, next) => {
//   const productId = req.params.productId
//   // const userId = req.session.user.id
//   try {
//     const user = await User.findById(Number(4))
//     await user.addProducts(Number(productId))
//     //const all = await user.getProducts();
//     const products = await db.models.cart.findAll()
//     res.send(products)
//   } catch (error) {
//     next(error)
//   }
// })
