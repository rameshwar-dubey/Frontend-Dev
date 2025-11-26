// Q7: makeMultiplier using closure

function makeMultiplier(multiplier) {
    // Inner function remembers 'multiplier'
    return function(num) {
        return num * multiplier;
    };
}

// Example
const triple = makeMultiplier(3);
console.log(triple(5)); // 15

/*
Closure Explanation:
makeMultiplier() returns an inner function.
That inner function keeps access to 'multiplier'
even after makeMultiplier() finishes executing.
*/
