let total = 0;
let expensiveItems = [];

for (const item of items) {
  total += item.price;
  if (item.price > 100) {
    expensiveItems.push(item);
  }
} 

// refatoração (split in phase pg. 183)
