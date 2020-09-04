const longestPalindrome = (string) => {
  if (string === string.split("").reverse().join("")) {
    return string;
  }

  const substrings = [...string];
  for (let i = 0; i < string.length; i++) {
    let subString = string[i];
    for (let j = i + 1; j < string.length; j++) {
      subString += string[j];
      if (subString.length > 1) {
        substrings.push(subString);
      }
    }
  }
  let longestPalindrome = "";
  for (let i = 0; i < substrings.length; i++) {
    if (
      substrings[i] === substrings[i].split("").reverse().join("") &&
      substrings[i].length > longestPalindrome.length
    ) {
      longestPalindrome = substrings[i];
    }
  }

  return longestPalindrome;
};

console.log(
  longestPalindrome(
    "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
  )
);
