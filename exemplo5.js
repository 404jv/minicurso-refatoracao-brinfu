function handleProcess(order, active) {
  if (active) {
    console.log(`Processando pedido ${order.id}`);
  } else {
    console.log(`Pedido ${order.id} está inativo`);
  }
}

handleProcess();

// refatoração (change function declaration pg. 153)
// 1. procedimento simples
// 2. migração
