var reverse = function(x) {
    const isNegative = x < 0; // Check if the number is negative
    let numStr = Math.abs(x).toString().split('').reverse().join(''); // Reverse digits
    let revNum = parseInt(numStr); // Convert back to integer

    // Apply sign
    if (isNegative) revNum = -revNum;

    // Check 32-bit integer overflow
    if (revNum < -2147483648 || revNum > 2147483647) {
        return 0;
    }

    return revNum;
};

// Test cases
console.log(reverse(123));      // Output: 321
console.log(reverse(-123));     // Output: -321
console.log(reverse(120));      // Output: 21
console.log(reverse(0));        // Output: 0
console.log(reverse(1534236469)); // Output: 0 (since it overflows)
