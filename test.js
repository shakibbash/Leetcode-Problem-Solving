
var maximumProduct = function(nums) {

  nums.sort();
  let n = nums.length;
  let maxProduct = Math.max(nums[n-1] * nums[n-2] * nums[n-3], nums[0] * nums[1] * nums[n-1]);

  

return maxProduct;
};

let nums=[1,2,3];
maximumProduct(nums);