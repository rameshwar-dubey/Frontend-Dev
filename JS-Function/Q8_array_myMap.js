// Q8: Custom myMap() method for arrays

Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

// Example
console.log([1,2,3].myMap(num => num * 2));
