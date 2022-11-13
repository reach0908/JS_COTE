const getGcdAndLcm = (num1, num2) => {
	const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
	const lcm = (a, b) => (a * b) / gcd(a, b);
	return [gcd(num1, num2), lcm(num1, num2)];
};

function solution(n) {
	if (n % 6 === 0) {
		return n / 6;
	}
	const [gcd, lcm] = getGcdAndLcm(n, 6);
	return lcm / 6;
}
