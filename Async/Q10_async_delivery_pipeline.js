// Q10 – The Final Delivery: Async Pipeline Debugger
// Steps: takeOrder -> prepare -> pack -> dispatch -> deliver
// Each returns a Promise with 1–2s random delay and random success/failure

function randomDelay() { return 1000 + Math.random()*1000; }
function maybeFail(prob=0.15){ return Math.random() < prob; }

function takeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail()) return reject(new Error('Order acceptance failed'));
      console.log('Step 1: Order taken');
      resolve('order taken');
    }, randomDelay());
  });
}

function prepare() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail()) return reject(new Error('Preparation failed'));
      console.log('Step 2: Food prepared');
      resolve('prepared');
    }, randomDelay());
  });
}

function pack() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail()) return reject(new Error('Packing failed'));
      console.log('Step 3: Package ready');
      resolve('packed');
    }, randomDelay());
  });
}

function dispatch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail()) return reject(new Error('Dispatch failed'));
      console.log('Step 4: Out for delivery');
      resolve('dispatched');
    }, randomDelay());
  });
}

function deliver() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail(0.1)) return reject(new Error('Delivery failed'));
      console.log('Delivery completed!');
      resolve('delivered');
    }, randomDelay());
  });
}

async function runPipeline() {
  console.log('Start Pipeline');
  try {
    await takeOrder();
    await prepare();
    await pack();
    await dispatch();
    await deliver();
    console.log('Pipeline finished successfully');
  } catch (err) {
    console.error('Pipeline failed!', err.message);
  }
}

// Run demo
runPipeline();
