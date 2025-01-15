/* CSS: position, display, how to align 2divs horizontal
JavaScript: closure, hoisting, denouncing weakset, weakmap, forEach v/s map 
React: hooks, hocs, context api, props, 
class based and functional based, lifecycle
events Few programming questions like :
Check whether the given array is sorted or not.
Create a modified object by interchanging key-value pair of original object. */
// Define Stack. Explain its working

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
      e: 3,
      f: 4,
    },
  },
  g: 5,
};
// flatten object
const flattenObject = (obj, parentKey = "", result = {}) => {
  for (const ele of Object.entries(obj)) {
    const [key, value] = ele;
    console.log("key, value", ele);
    const newKey = parentKey ? `${parentKey}_${key}` : key;
    console.log("newKey", newKey, typeof value);
    if (typeof value === "object" && value !== null) {
      flattenObject(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  }
  return result;
};
console.log(flattenObject(nestedObj));

const lengthOfLongestSubstring = (s) => {
  let maxLength = 0;
  let start = 0;
  const charIndexMap = new Map(); // To store the last index of each character
  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];
    // If the character is already in the map and its index is within the current window
    if (
      charIndexMap.has(currentChar) &&
      charIndexMap.get(currentChar) >= start
    ) {
      start = charIndexMap.get(currentChar) + 1; // Move the start to avoid repetition
    }
    charIndexMap.set(currentChar, end); // Update the last index of the character
    maxLength = Math.max(maxLength, end - start + 1); // Update max length
  }
  return maxLength;
};

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
console.log(lengthOfLongestSubstring("")); // Output: 0
console.log(lengthOfLongestSubstring("abcdef")); // Output: 6
