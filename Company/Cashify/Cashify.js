/* const nestedObj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: 4,
        },
    },
    g: 5,
};
{
    "a": 1,
    "b.c": 2,
    "b.d.e": 3,
    "b.d.f": 4,
    "g": 5
}
longest substring without repeating character
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1. */

const nestedObj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: [3, 5],
      f: 4,
    },
  },
  g: 5,
};
// flatten object
const flattenObject = (obj, parentKey = "", result = {}) => {
  for (const ele of Object.entries(obj)) {
    const [key, value] = ele;
    const newKey = parentKey ? `${parentKey}_${key}` : key;
    if (typeof value === "object" && value !== null) {
      flattenObject(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  }
  return result;
};
console.log(flattenObject(nestedObj));

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
