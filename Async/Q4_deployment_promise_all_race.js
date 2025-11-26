// Q4 – DevOps Delay: Async Timeout Race
// Server A responds in 2s, Server B in 3s. Simulate random failure.

function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Server A failure'));
      resolve('Server A deployed');
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Server B failure'));
      resolve('Server B deployed');
    }, 3000);
  });
}

// Promise.all to wait for all
Promise.all([serverA(), serverB()])
  .then(results => console.log('Deployment completed for all servers:', results))
  .catch(err => console.error('Deployment error (all):', err.message));

// Promise.race to get fastest responder
Promise.race([serverA(), serverB()])
  .then(fast => console.log('Fastest response:', fast))
  .catch(err => console.error('Deployment error (race):', err.message));
