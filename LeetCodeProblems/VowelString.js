const revVowelString = (s) => {
  let vowels = "AEIOUaeiou";
  s = s.split("");
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (!vowels.includes(s[i])) {
      i++;
    } else if (!vowels.includes(s[j])) {
      j--;
    } else {
      [s[i], s[j]] = [s[j], s[i]];
      i++;
      j--;
    }
  }
  return s.join("");
};
console.log("revVowelString-->", revVowelString("leetcode")); // leotcede
console.log("revVowelString-->", revVowelString("ihellou")); // uhollei
