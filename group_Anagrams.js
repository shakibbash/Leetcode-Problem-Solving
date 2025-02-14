var groupAnagrams = function(strs) {
    let map={};
    for(let words of strs){
        let key =words.split('').sort().join('');
        if(!map[key]){
            map[key]=[];
        }
        
            map[key].push(words);
        
    }

    
    
    return Object.values(map).sort()
  


};


console.log(groupAnagrams(strs = ["eat","tea","tan","ate","nat","bat"]));