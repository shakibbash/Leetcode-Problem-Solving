var isAnagram = function(s, t) {
    let anagramS= s.split('').sort().join('');
    let anagramT= t.split('').sort().join('');
 if(anagramS===anagramT){
     return true;
 }
 return false;
 };
 
 
 
 let s = "hat";
 let t = "rat";
console.log( isAnagram(s,t));