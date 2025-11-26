'use strict';
// Q10 - Nested Hoisting & Closures
// Predict and explain output, then demonstrate with arrow function and debugger statements

(function nestedHoist(){
  console.log('--- Q10 Nested Hoisting & Closures ---');
  function outer() {
    console.log('outer before var count:', count); // hoisted var -> undefined
    var count = 5;
    function inner() {
      console.log('inner before var count:', count); // inner var hoisted -> undefined inside inner
      var count = 10;
      console.log('inner after var count:', count); // 10
    }
    inner();
    console.log('outer after inner, outer count:', count); // 5
  }

  outer();

  console.log('\nArrow inner version:');
  function outerArrow() {
    console.log('outerArrow before var count:', countA); // undefined
    var countA = 7;
    const innerArrow = () => {
      // arrow does not create new 'this' or hoisting context for var inside; but var inside arrow still hoisted if declared
      // if we declare var inside arrow, it will be hoisted to function scope (outerArrow), so avoid redeclaring
      console.log('innerArrow sees outer countA:', countA);
    };
    innerArrow();
  }
  outerArrow();

  console.log('Explanation: Each function has its own variable environment. var declarations are hoisted (initialized as undefined) at the top of their function context. Arrow functions follow same closure scope but behave differently for `this` and cannot be used as constructors.');
  // debugger; // place breakpoint to inspect call stack and environments
  console.log('--- End Q10 ---\n');
})();