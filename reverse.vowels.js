var reverseVowels = function(s) {

    let str=s.split('')
    let vowels=['a','e','i','o','u','A','E','I','O','U'];
    let left=0; 
    let right=str.length-1;

    while(left<right){

        if(!vowels.includes(str[left])){
          left++;
        continue;
        }

        else if(!vowels.includes(str[right])){
          right--;
          continue;

        }
         
         [str[left],str[right]]=[str[right],str[left]];
         left++;
         right--;

    }
    
       return str.join('');
    


};

let s = "IceCreAm";
console.log(reverseVowels(s));