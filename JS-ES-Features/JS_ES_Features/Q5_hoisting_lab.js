'use strict';
// Q5 - Hoisting Lab: The Sequence Trap
// Predict and explain hoisting, then fix the code. Also provide arrow-function version.

(function hoistingDemo(){
  console.log('--- Q5 Hoisting Lab ---');
  // Original problematic code:
// console.log(score);
// announce();
// var score = 50;
// function announce() { console.log('Game started'); }
// let status = 'ready';
// startGame();
// function startGame() { console.log(status); }

  console.log('Prediction: var declarations are hoisted (initialized as undefined), function declarations hoisted fully, let is in TDZ until initialized.');

  // Fixed version:
  var score = 50;
  function announce() { console.log('Game started'); }
  let status = 'ready';
  console.log(score); // 50
  announce(); // 'Game started'
  startGame(); // 'ready'
  function startGame() { console.log(status); }

  // Arrow function version (functions as consts - not hoisted like declarations)
  const announceArrow = () => console.log('Game started (arrow)');
  const startGameArrow = () => console.log(status);

  // Note: these const arrow functions are not available before declaration (temporal dead zone)
  announceArrow();
  startGameArrow();

  console.log('Explanation: Function declarations are hoisted and available before use; var variables are hoisted but undefined until assignment. let/const are not initialized until their declaration (TDZ). Arrow functions assigned to const/let are not hoisted as callable functions.');
  console.log('--- End Q5 ---\n');
})();