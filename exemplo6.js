function calculateTotal(orders) {
  let total = 0;

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    if (order.isActive && order.amount > 100) {
      total += order.amount;
    }
  }

  return total;
}

function calculateTotal(orders = []) {
  return orders
    .filter(order => order.isActive && order.amount > 100)
    .map(order => order.amount)
    .reduce((sum, amount) => sum + amount, 0);
}

const orders = [
  { name: 'Sapato', isActive: true, amount: 99 },
  { name: 'Tenis', isActive: true, amount: 101 }
]
console.log(calculateTotal(orders))











// function calculateTotal(orders = []) {
//   return orders
//     .filter(order => order.isActive && order.amount > 100)
//     .map(order => order.amount)
//     .reduce((sum, amount) => sum + amount, 0)
// }
