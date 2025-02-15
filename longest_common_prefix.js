function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""; // If no words, return empty

    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i]; // Take one letter from the first word

        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return strs[0].slice(0, i); // Return the prefix found so far
            }
        }
    }

    return strs[0]; // If all match, return first word
}


let strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));