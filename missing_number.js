var missingNumber = function(nums) {
    let n = nums.length;
    let sum=0;

    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }

    missingElement = (n * (n + 1) / 2) - sum;
    return    missingElement;
};

const nums=[9,6,4,2,3,5,7,0,1];
 missingNumber(nums);
 console.log(missingElement);

