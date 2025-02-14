/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let stack= [];
    let i=0;
    while(i<s.length){
         let char=s[i];
     if(char==='('){
         stack.push(')');
     }else if(char==='['){
          stack.push(']');
     }
     else if(char==='{'){
          stack.push('}');
     }else if(stack.pop()!==char){return false;} 
    
     i++;
    }
 
 
 
       return stack.length === 0; 
 };
 
 
 let s="()[]";
 isValid(s);
 console.log(isValid(s));