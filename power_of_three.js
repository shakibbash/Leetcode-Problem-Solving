var isPowerOfThree = function(n) {
    if (n <= 0) return false;  // Powers of 3 are always positive.
    while (n % 3 === 0) {
        n /= 3;  // Keep dividing by 3.
    }
    return n === 1;  // If we end up with 1, it's a power of 3.
};

// Test cases
console.log(isPowerOfThree(9));   // true  (3^2)

