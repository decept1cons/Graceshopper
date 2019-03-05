export const _groupOrders = orders => {
  return orders.reduce((totalOrders, orderItem) => {
    totalOrders[orderItem.gsId.slice(2)] =
      totalOrders[orderItem.gsId.slice(2)] || []
    totalOrders[orderItem.gsId.slice(2)].push(orderItem)
    return totalOrders
  }, {})
}
