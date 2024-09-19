const parenthesisChecker = (str) => {
  const stack = [];
  const map = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  if (str.length % 2 !== 0) return false;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (map.has(char)) {
      stack.push(map.get(char));
      console.log("stack", stack);
    } else if (char !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
};
//console.log(parenthesisChecker())// Input: exp = “[()]{}{[()()]()}”  true
console.log(parenthesisChecker("[()]{}{[()()]()}")); //Input: exp = “[(])” false
