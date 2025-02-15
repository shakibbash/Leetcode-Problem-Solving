var plusOne = function(digits) {
    let num=parseInt(digits.join(''));
    let ans=(num+1);
let arr=ans.toString().split('').map(Number);


return arr;



};


let digits=[1,2,3];
console.log(plusOne(digits));