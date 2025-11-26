'use strict';
// Q7 - Smart Calculator with switch & custom error handling

class InvalidOperationError extends Error {
  constructor(op) {
    super('Invalid operation: ' + op);
    this.name = 'InvalidOperationError';
  }
}

const operations = ['add', 'divide', 'power', 'root', 'subtract'];
const num1 = 25, num2 = 0;

(function calculatorDemo(){
  console.log('--- Q7 Smart Calculator ---');
  function operate(op, a, b) {
    switch(op) {
      case 'add': return a + b;
      case 'subtract': return a - b;
      case 'divide':
        if (b === 0) throw new Error('Division by zero');
        return a / b;
      case 'power': return Math.pow(a, b);
      case 'root':
        if (a < 0) throw new Error('Root of negative number');
        return Math.pow(a, 1 / b);
      default:
        throw new InvalidOperationError(op);
    }
  }

  for (const op of operations.concat('unknown')) {
    try {
      const result = operate(op, num1, num2);
      console.log(`Operation: ${op} => Result: ${result}`);
    } catch (err) {
      console.error(`Operation: ${op} => Error: ${err.message}`);
    }
  }
  console.log('--- End Q7 ---\n');
})();