// Q8 – Order Processing Flow: Async Retry Mechanism
// submitOrder fails 50% of the time

function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) reject(new Error('Network/Server error'));
      else resolve('Order processed');
    }, 500 + Math.random()*1000);
  });
}

async function processOrder(maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const res = await submitOrder();
      console.log(`Attempt ${attempt}: Success -`, res);
      return res;
    } catch (err) {
      console.log(`Attempt ${attempt}: Failed -`, err.message);
      if (attempt === maxAttempts) {
        throw new Error('Order could not be processed');
      }
      // optional wait before retry
      await new Promise(r => setTimeout(r, 500));
    }
  }
}

// Usage
processOrder().then(() => console.log('Order completed')).catch(err => console.error(err.message));
