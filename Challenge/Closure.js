function count() {
	let value = 0;
	return () => ++value;
}
let res = count();
console.log(res());
console.log(res());
console.log(res());
