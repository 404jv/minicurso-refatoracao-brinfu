function processOrder(order) {
  // Calcula subtotal
  let subtotal = 0;
  for (const item of order.items) {
    subtotal += item.price * item.quantity;
  }

  // Aplica desconto
  let discount = 0;
  if (order.coupon === "BLACKFRIDAY") {
    discount = subtotal * 0.5;
  } else if (order.coupon === "FRETEGRATIS") {
    discount = 20;
  }

  // Calcula frete
  let shipping = 0;
  if (subtotal > 200) {
    shipping = 0;
  } else {
    shipping = 30;
  }

  // Total
  const total = subtotal - discount + shipping;

  return { subtotal, discount, shipping, total };
}

// refatoração (extract function pg. 134)
