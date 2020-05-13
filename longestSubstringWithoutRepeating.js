const lengthOfLongestSubstring = string => {
    const substringsWithoutRepetion = [...string];
    for(let i = 0; i < string.length; i++){
        let subString = string[i];
        for(let j = i + 1; j < string.length; j++){
            if(!subString.includes(string[j])){
                subString += string[j];
                if(j === string.length - 1){
                    substringsWithoutRepetion.push(subString);
                }
            }else{
                substringsWithoutRepetion.push(subString);
                break;
            }
        }
    }
    let maxLength = 0;
    for(let i = 0; i < substringsWithoutRepetion.length; i++){
        if(substringsWithoutRepetion[i].length > maxLength){
            maxLength = substringsWithoutRepetion[i].length;
        }
    }
    console.log(substringsWithoutRepetion)
    return maxLength;
};

console.log(lengthOfLongestSubstring("au"))