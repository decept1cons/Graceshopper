const eagerLoader = async id => {
  const data = await Order.findOne({
    where: {id},
    include: [
      {
        model: Product,
        attributes: ['imageUrl', 'name', 'type']
      }
    ]
  })
  return data
}

router.post('/:id', async (req, res, next) => {
  const {price, productId, userId} = req.body
  try {
    let [instance, created] = await Order.findOrCreate({
      where: {price, productId, userId}
    })
    //findOrCreate returns an array with 0th as instance, 1st as boolean representing created (T) or found (F)
    if (!created) updateQuantity(instance)
    console.log('INSTANCE')
    const eagerLoadedOrder = eagerLoader(instance.id)
    res.status(201).json({eagerLoadedOrder, create: created})
  } catch (error) {
    console.log(error)
    next(error)
  }
})
