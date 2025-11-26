'use strict';
// Q4 - Debugging Mystery
// In strict mode, assigning to undeclared variable throws ReferenceError.
// Fix by declaring variable with let/var/const and explain scope.

(function fixShowMessage(){
  console.log('--- Q4 Debugging Mystery ---');
  function showMessage() {
    // greeting = 'Welcome'; // ReferenceError in strict mode: cannot create global implicit var
    let greeting = 'Welcome'; // fixed: declared variable in local scope
    console.log(greeting);
  }
  showMessage();

  console.log('Explanation: Under "use strict", assigning to an undeclared identifier throws a ReferenceError. Declaring with let/const/var creates a local binding and avoids the error.');
  console.log('--- End Q4 ---\n');
})();