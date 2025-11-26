'use strict';
// Q3 - Transaction Validator
// Throw custom errors for negative, missing, null entries, and categorize results.

class TransactionError extends Error {
  constructor(message, type) {
    super(message);
    this.type = type;
  }
}

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

(function validateTransactions(){
  console.log('--- Q3 Transaction Validator ---');
  const valid = [];
  const invalid = [];

  for (let i = 0; i < transactions.length; i++) {
    try {
      const tx = transactions[i];
      if (tx === null) throw new TransactionError('Null transaction', 'NullEntry');
      if (typeof tx !== 'object') throw new TransactionError('Invalid type', 'InvalidType');
      if (!('id' in tx)) throw new TransactionError('Missing id', 'MissingField');
      if (!('amount' in tx)) throw new TransactionError('Missing amount', 'MissingField');
      if (typeof tx.amount !== 'number') throw new TransactionError('Amount not a number', 'InvalidField');
      if (tx.amount < 0) throw new TransactionError('Negative amount', 'NegativeAmount');

      valid.push(tx);
    } catch (err) {
      if (err instanceof TransactionError) {
        console.warn(`Transaction at index ${i} failed: ${err.message} [${err.type}]`);
        invalid.push({index:i, error:err.message, type:err.type});
      } else {
        console.error('Unexpected error at index', i, err);
        invalid.push({index:i, error: err.message || String(err), type:'Unknown'});
      }
    }
  }

  console.log('Valid transactions count:', valid.length);
  console.log('Invalid transactions count:', invalid.length);
  console.log('Invalid details:', invalid);
  console.log('--- End Q3 ---\n');
  // debugger; // Uncomment to set breakpoint and watch 'valid' and 'invalid' in a debugger.
})();