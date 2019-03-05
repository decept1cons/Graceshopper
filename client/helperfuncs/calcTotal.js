export const _calcTotal = cart => {
  return Math.round(
    cart.reduce((totalQuantity, cartItem) => {
      return totalQuantity + cartItem.price * cartItem.quantity
    }, 0)
  )
}
