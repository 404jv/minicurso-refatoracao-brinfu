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

function processOrder(order) {
  const subtotal = calculateSubtotal(order.items);
  const discount = calculateSubtotal(order.coupon, subtotal)
  const shipping = calculateShipping(subtotal)
  const total = subtotal - discount + shipping;
  return { subtotal, discount, shipping, total };
}

function calculateSubtotal(items) {
  let subtotal = 0;
  for (const item of items) {
    subtotal += item.price * item.quantity;
  }
  return subtotal
}

function applyCupon(coupon, subtotal) {
  if (order.coupon === "BLACKFRIDAY") {
    return subtotal * 0.5;
  }
  if (coupon === "FRETEGRATIS") {
    return 20;
  }
  return 0;
}

function calculateShipping(subtotal) {
  let shipping = 0;
  if (subtotal > 200) {
    shipping = 0;
  } else {
    shipping = 30;
  }
  return shipping;
}

