var commonChars = function (words, result = []) {
  // we just need to take the first element from the array for comparison
  for (const letter of words[0]) {
    // check letter in word
    if (words.every((w) => w.includes(letter))) {
      result.push(letter);
      // remove letter from word
      words = words.map((w) => w.replace(letter, ""));
    }
  }
  // the duplicate letter
  return result;
};
console.log("CoomonEle", commonChars(["bella", "label", "roller"]));
