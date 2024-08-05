var palindromePairs = function (words) {
	const arr = [];
	for (let i = 0; i < words.length; i++) {
		for (let j = 0; j < words.length; j++) {
			let str = words[i] + words[j];
			let str1 = str.split("").reverse().join("");
			console.log(str, str1);
			if (str === str1 && i !== j) {
				arr.push([i, j]);
			}
		}
	}
	return arr;
};
console.log(palindromePairs(["a", ""]));
