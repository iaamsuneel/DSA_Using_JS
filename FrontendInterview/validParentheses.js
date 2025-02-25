/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type. */
let s = "()[]{()}";
function isCheckValidParentheses() {
  const stack = [];
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  if (s.length % 2 !== 0) return false;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (pairs[char]) {
      stack.push(pairs[char]);
    } else if (char !== stack.pop()) return false;
  }
  return stack.length === 0;
}
console.log("isCheckValidParentheses :: ", isCheckValidParentheses(s));
