function Star(n) {
	for (let i = 0; i < n; i++) {
		let str = "";
		for (let j = 0; j < n; j++) {
			if (j < n - i - 1) {
				str += " ";
			} else {
				str += "*";
			}
		}
		console.log(str);
	}
}
console.log(Star(6));
