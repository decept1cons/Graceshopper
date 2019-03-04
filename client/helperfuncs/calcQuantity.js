export const _calcQuantity = cart => {
  return cart.reduce((totalQuantity, cartItem) => {
    return totalQuantity + cartItem.quantity
  }, 0)
}
