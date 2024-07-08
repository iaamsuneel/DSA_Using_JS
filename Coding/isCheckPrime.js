function isCheckPrime(n) {
	if (n <= 1) return false;
	for (i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false;
	}
	return true;
}
