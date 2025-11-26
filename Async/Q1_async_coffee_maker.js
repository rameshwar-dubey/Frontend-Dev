// Q1 – The Startup Morning: Async Coffee Maker
// Each step returns a Promise resolving after 1-2 seconds.
// Random failure simulated using Math.random().

function boilWater() {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Boiler failure'));
      console.log('Water boiled');
      resolve('boiled water');
    }, delay);
  });
}

function brewCoffee(boiledWater) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Brew failed'));
      console.log('Coffee brewed using', boiledWater);
      resolve('brewed coffee');
    }, delay);
  });
}

function pourIntoCup(coffee) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Cup cracked'));
      console.log('Poured into cup:', coffee);
      resolve('coffee in cup');
    }, delay);
  });
}

// Use Promise chaining (.then()) and .catch()
function makeCoffee() {
  boilWater()
    .then(result => brewCoffee(result))
    .then(result => pourIntoCup(result))
    .then(() => console.log('Coffee ready for the team!'))
    .catch(err => console.error('Coffee process failed:', err.message));
}

// Run demo
makeCoffee();
