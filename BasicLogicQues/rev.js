function rev(str) {
  const str1 = str.split("");
  for (var i = 0; i < str.length; i++) {
    let temp = str1[i];
    str1[i] = str1[i + 2];
    str1[i + 2] = temp;
    i = i + 2;
  }
  return str1.join("");
}
console.log("rev", rev("Suneel123"));
