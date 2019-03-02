export const _calcTotal = cart => {
  return cart.reduce((totalQuantity, cartItem) => {
    return totalQuantity + cartItem.price * cartItem.quantity
  }, 0)
}
