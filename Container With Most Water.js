var maxArea = function(height) {
    let maxWater = 0;
    let left = 0;
    let right=height.length-1;
    while(left<right){
        let width=right-left;
        let minHeight=Math.min(height[left],height[right]);
     let area=width*minHeight;

     maxWater=Math.max(area,maxWater);
       if(height[left]<height[right]){
        left++;
    }else{
        right--;
    }
    } 

  
return maxWater;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
