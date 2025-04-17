function isCheckAnagram(str1, str2) {
  const counter = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (let item of str1) {
    counter[item] = (counter[item] || 0) + 1;
  }
  for (let item of str2) {
    if (!counter[item]) {
      return false;
    }
    counter[item] = counter[item] - 1;
  }
  return true;
}
console.log("isCheckAnagram :::: ", isCheckAnagram("ans", "nad"));
// Find All Anagrams in String
var findAnagrams = function (s, p) {
  let n = p.length;
  let count = 0;
  let res = [];
  let isChecked = true;
  for (let i = 0; i < s.length; i++) {
    if (p.includes(s[i]) && count !== n) {
      count = count + 1;
      console.log("first", s[i], count);
    } else if (count == n && isChecked) {
      console.log("else if");
      let val = i - n;
      isChecked = false;
      res.push(val);
      count = 1;
    } else {
      console.log("eleeee");
      count = 0;
    }
  }
  if (count == n) res.push(s.length - n);
  console.log("arr", count, res);
  return res;
};
console.log("Find All Anagrams in String", findAnagrams("abab", "ab"));
console.log("Find All Anagrams in String", findAnagrams("cbaebabacd", "abc"));
