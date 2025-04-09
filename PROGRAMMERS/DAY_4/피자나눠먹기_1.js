function solution(n) {
	let answer = parseInt(n / 7);
	if (n % 7 !== 0) {
		answer += 1;
	}
	return answer;
}
