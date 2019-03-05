import ls from 'local-storage'
export const _removeProductButton = (
  isLoggedIn,
  removeProduct,
  cart,
  reRender
) => {
  reRender()
  isLoggedIn ? removeProduct(cart.id, cart.userId) : ls.remove(cart.id)
}
