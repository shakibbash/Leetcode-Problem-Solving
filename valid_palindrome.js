var isPalindrome = function(s) {
   let str= s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split('').join('');
   let rev=str.split('').reverse().join('');

if(str===rev){ 
    return true;

}
   

return false;

};



s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s));