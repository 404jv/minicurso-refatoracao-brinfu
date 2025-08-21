function handleProcess(order, active) {
  if (active) {
    console.log(`Processando pedido ${order.id}`);
  } else {
    console.log(`Pedido ${order.id} está inativo`);
  }
}

function handle(order, active) {
  return handleProcess(order, active)
}

handle();

// refatoração (change function declaration pg. 153)
// 1. procedimento simples
// 2. migração
