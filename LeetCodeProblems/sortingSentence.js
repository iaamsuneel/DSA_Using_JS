var sortSentence = function (s) {
  const letters = s.split(" ");
  let result = [];
  for (let i = 0; i < letters.length; i++) {
    let letter = letters[i];
    const ind = letter.split("").pop();
    result[ind - 1] = letter.slice(0, -1);
  }

  return result.join(" ");
};
console.log(sortSentence("is2 sentence4 This1 a3"));
