
var productExceptSelf = function(nums) {
    let prefix=[];
    let suffix=[];
    let result=[];

   prefix[0]=1;
    for(i=1;i<nums.length;i++){
        prefix[i]=prefix[i-1]*nums[i-1];
    }

   suffix[nums.length-1]=1;
   for(i=nums.length-2;i>=0;i--){
    suffix[i]=suffix[i+1]*nums[i+1];
   }

  for(i=0;i<nums.length;i++){
           result[i]=prefix[i]*suffix[i];
  }
   return result;
   };
   
   let nums = [1,2,3,4];
   console.log(productExceptSelf(nums));