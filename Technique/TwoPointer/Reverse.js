function stringReverse(str) {
  const s = str.split("");
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
  return s.join("");
}
//console.log("Reverse String ::: ", stringReverse("NewList"));
console.time("stringReverse");
console.log(stringReverse("NewList"));
console.timeEnd("stringReverse");
