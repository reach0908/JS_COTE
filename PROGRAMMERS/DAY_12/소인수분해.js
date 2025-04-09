function solution(n) {
	let i = 2;
	const primeFactors = [];

	while (true) {
		// 나눠지면 소인수임
		if (n % i === 0) {
			n = n / i;
			primeFactors.push(i);
			// i 초기화
			i = 1;
		}
		i++;
		if (i > n) {
			break;
		}
	}
	const answer = [];
	primeFactors.forEach((num) => {
		if (!answer.includes(num)) {
			answer.push(num);
		}
	});
	return answer.sort((a, b) => a - b);
}
