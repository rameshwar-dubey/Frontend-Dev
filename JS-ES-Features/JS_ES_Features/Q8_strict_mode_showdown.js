'use strict';
// Q8 - Strict Mode Showdown
// Demonstrate behavior differences with duplicate params, implicit globals, delete operator

(function strictShowdown(){
  console.log('--- Q8 Strict Mode Showdown ---');
  try {
    function demo(a, a) { // duplicate parameter names are invalid in strict mode
      total = 10; // would create global in non-strict, but strict disallows implicit global
      delete total; // delete of plain identifier is invalid
    }
    console.log('In strict mode, duplicate params or implicit globals throw errors when executed.');
  } catch (err) {
    console.error('Strict mode error:', err.message);
  }

  console.log('Correct ES6 version:');
  function demoCorrect(a, b) {
    const total = 10;
    // delete total; // not allowed on local variables
    return a + b + total;
  }
  console.log('demoCorrect(5,10)=', demoCorrect(5,10));
  console.log('--- End Q8 ---\n');
})();