var kthDistinct = function (arr, k) {
	const obj = {};
	arr.forEach((ele) => {
		if (obj[ele]) {
			obj[ele] += 1;
		} else {
			obj[ele] = 1;
		}
	});
	let count = 0;
	for (let ele in obj) {
		if (obj[ele] === 1) {
			count++;
		}
		if (count === k) return ele;
	}
	return "";
};
console.log("kthDistinct", kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
console.log("kthDistinct", kthDistinct(["aaa", "aa", "a"], 1));
console.log("kthDistinct", kthDistinct(["a", "b", "a"], 3));

//["a","b","a"], k = 3

//["aaa","aa","a"]
