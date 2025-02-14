var maxProduct = function(nums) {
    let maxValue=0;
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            let max=(nums[i]-1)*(nums[j]-1);
             maxValue=Math.max(max,maxValue);
        }
    }

return maxValue;

};

let nums = [3,7];
maxProduct(nums);