// Q2 – Task Scheduler: Micro vs Macro Challenge
// Demonstrate ordering of microtasks (Promises) vs macrotasks (setTimeout)

console.log('Start');

// macrotask
setTimeout(() => console.log('setTimeout callback (macrotask)'), 0);

// microtask
Promise.resolve().then(() => console.log('Promise.then callback (microtask)'));

// synchronous log
console.log('Synchronous log');

console.log('End');

/*
Explanation (in comments):
Execution order will be:
1. "Start"         (sync)
2. "Synchronous log"(sync)
3. "End"           (sync)
4. "Promise.then callback (microtask)" (microtasks run after current script but before macrotasks)
5. "setTimeout callback (macrotask)"  (macrotask runs after microtasks)
Microtasks have higher priority: they run at the end of the current execution turn
before the event loop moves on to the macrotask queue.
*/
