// Q9 – Debugging the Event Loop
console.log('Script start');
setTimeout(() => console.log('Timeout callback'), 0);
Promise.resolve().then(() => console.log('Promise callback'));
console.log('Script end');

/*
Predicted output (comments):
1. Script start
2. Script end
3. Promise callback
4. Timeout callback

Explanation:
Microtasks (Promise callbacks) are executed at the end of the current execution context
before macrotasks (like setTimeout) are processed. Hence Promise callback runs before the timeout.
*/
