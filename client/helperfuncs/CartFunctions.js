/* eslint-disable max-params */
import ls from 'local-storage'

export const _onlineCartFunctions = (
  functions,
  cart,
  compFunc,
  product,
  userId,
  identifier
) => {
  if (identifier) {
    functions.updateQuantity(cart.id, cart.userId, compFunc(cart.quantity, 1))
    functions.getCart(cart.userId)
  } else {
    functions.addProduct(product.id, userId, product.price)
  }
}

export const _offlineCartFunctions = (newProduct, compFunc, identifier) => {
  const offlineCart = Object.values(window.localStorage).map(item =>
    JSON.parse(item)
  )
  if (offlineCart.length) {
    //not zero
    let filteredData = offlineCart.filter(
      internalObject => internalObject.id === newProduct.id
    )
    //stop subtracting after 1
    if (
      filteredData.length &&
      filteredData[0].quantity === 1 &&
      identifier === 'subtract'
    ) {
      return
    }
    newProduct.quantity = filteredData.length
      ? compFunc(filteredData[0].quantity, 1) //either add or subtract
      : 1
    ls.set(newProduct.id, newProduct)
  } else {
    newProduct.quantity = 1
    ls.set(newProduct.id, newProduct)
  }
}
