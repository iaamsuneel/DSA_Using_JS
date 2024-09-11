var wordBreak = function (s, wordDict) {
  const res = [];
  for (let i = 0; i < wordDict.length; i++) {
    if (s.includes(wordDict[i])) {
      const startIndex = s.indexOf(wordDict[i]);
      const endIndex = startIndex + wordDict[i].length;
      s = s.slice(0, startIndex) + s.slice(endIndex);
      console.log(s);
      res.push(true);
    } else {
      res.push(false);
    }
  }
  console.log(res, s);
  return res.every((v) => v == true);
};
const s = "catsandog",
  wordDict = ["cats", "dog", "sand", "and", "cat"];
console.log(wordBreak(s, wordDict));
