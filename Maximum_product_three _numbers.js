var maximumProduct = function(nums) {
    nums.sort((a, b) => a - b);  // Sort the array in ascending order
    let n = nums.length;

    // Two possible maximum products
    let maxProduct = Math.max(
        nums[n-1] * nums[n-2] * nums[n-3],  // Three largest numbers
        nums[0] * nums[1] * nums[n-1]       // Two smallest negative numbers and the largest number
    );

    return maxProduct;
};

let nums = [-100, -98, -1, 2, 3, 4];
console.log(maximumProduct(nums)); // Output: 39200