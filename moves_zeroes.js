
let moveZeroes = function(nums) {
    let pos=0;
    for(let i=0;i<nums.length;i++){
       if(nums[i]!==0){
          [nums[pos] ,nums[i]]=[nums[i],nums[pos]];
          pos++;
       }
    }   
   };
   
   
   let nums=[0,1,0,3,12];
   moveZeroes(nums);
   console.log(nums);