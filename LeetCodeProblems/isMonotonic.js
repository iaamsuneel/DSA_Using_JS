function isMonotonic(arr) {
	let isDec = true;
	let isInc = true;
	// 1st Method
	/* for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) isInc = false
	}
	for (let j = 0; j < arr.length; j++) {
		if (arr[j] < arr[j + 1]) isDec = false;
	} */
	// 2nd Method
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) return (isInc = false);
		else if (arr[i] < arr[i + 1]) isDec = false;
	}
	//for (let i = 1; i < arr.length; i++) {
	/*  if (arr[i] > arr[i - 1]) isDecreasing = false;
        if (arr[i] < arr[i - 1]) isIncreasing = false; */

	return isDec || isInc;
}
console.log("isMonotonic", isMonotonic([6, 5, 2, 4, 4]));
