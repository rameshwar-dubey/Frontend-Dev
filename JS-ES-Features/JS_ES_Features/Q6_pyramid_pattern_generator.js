'use strict';
// Q6 - Pyramid Pattern Generator
// Generate pyramid and observe var vs let behaviors. Outer loop limit user-controlled (default 5).

(function pyramidDemo(){
  console.log('--- Q6 Pyramid Pattern Generator ---');
  const defaultLimit = 5;
  const limit = Number(process && process.env && process.env.PY_LIMIT) || defaultLimit; // allow env override in Node
  console.log('Using limit =', limit);

  // Using let (block-scoped)
  console.log('Pyramid using let:');
  for (let i = 1; i <= limit; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += '* ';
    }
    console.log(line.trim());
  }

  // Using var (function-scoped)
  console.log('\nPyramid using var (observe scoping differences):');
  for (var a = 1; a <= 4; a++) {
    var lineVar = '';
    for (var b = 1; b <= a; b++) {
      lineVar += '* ';
    }
    console.log(lineVar.trim());
  }
  // Note: var variables leak to function scope; using 'use strict' helps catch accidental globals
  console.log('--- End Q6 ---\n');
})();