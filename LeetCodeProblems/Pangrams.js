/* function pangram(str) {
	let res = str.toLowerCase();
	let set = new Set(res);
	return set.size === 26;
} */
//console.log(pangram("abcde fghijk lmnopqrstuvwxy2"));
function pangrams(s1) {
	let s = s1.toLowerCase();
	let arr = s.split("");
	const res = arr.filter((item, index) => {
		return arr.indexOf(item) === index && item !== " ";
	});
	return res.length === 26;
}
const s = "The quick brown fox jumps over the lazy dog";
console.log(pangrams(s));
