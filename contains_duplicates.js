var containsDuplicate = function(nums) {
    nums.sort();
  for (let i = 0; i < nums.length; i++) {
         if (nums[i] === nums[i + 1]) {
             return true; 
         }
     }
 
   return false; 
 
 };
 
 nums = [1,2,3,1];
 
 containsDuplicate(nums);