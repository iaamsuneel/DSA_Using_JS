var groupAnagrams = function (strs) {
	var obj = {};
	for (let i = 0; i < strs.length; i++) {
		let val = strs[i].split("").sort().join("");
		if (!obj[val]) {
			obj[val] = [];
		}
		obj[val] = [...obj[val], strs[i]];
	}
	return Object.values(obj);
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
