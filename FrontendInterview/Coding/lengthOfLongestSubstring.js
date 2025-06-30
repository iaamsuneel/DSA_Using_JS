// Brute Force Appraoch
function lengthOfLongestSubstring(str) {
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let newArr = str.slice(i, j + 1);
      if (!isDuplicate(newArr) && newArr.length > len) {
        len = newArr.length;
      }
    }
  }
  return len;
}
function isDuplicate(str) {
  const seen = new Set();
  for (let char of str) {
    if (seen.has(char)) return true;
    seen.add(char);
  }
  return false;
}
//console.log(lengthOfLongestSubstring("bbbbb"));
//console.log(lengthOfLongestSubstring("pwwkew"));
//console.log(lengthOfLongestSubstring("abcabcbb"));
/* let charSet = new Set();
  let left = 0;
  let maxLength = 0;
  for (let right = 0; right < str.length; right++) {
    while (charSet.has(str[right])) {
      charSet.delete(str[left]);
      left++;
    }
    charSet.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength; */
// Optimal Appraoch
function lengthOfLongestSubstringOpti(str) {
  let charSet = new Set();
  let left = 0,
    maxLength = 0;
  for (let right = 0; right < str.length; right++) {
    while (charSet.has(str[right])) {
      charSet.delete(str[left]);
      left++;
    }
    charSet.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
//console.log(lengthOfLongestSubstringOpti("bbbbb"));
//console.log(lengthOfLongestSubstringOpti("pwwkew"));
console.log(lengthOfLongestSubstringOpti("abcabcbb"));
