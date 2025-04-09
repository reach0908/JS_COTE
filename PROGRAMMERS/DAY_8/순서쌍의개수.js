// 순서쌍의 개수는 약수의 개수와 같다.

// 일반적인 풀이법
function solution(n) {
	let answerArr = [];

	for (let i = 1; i <= n; i++) {
		if (n % i === 0) {
			answerArr.push(i);
		}
	}

	return answerArr.length;
}

function solution2(n) {
	let ans = 0;
	for (let i = 1; i < Math.sqrt(n); i++)
		if (n % i === 0) ans += 2;

	return Number.isInteger(Math.sqrt(n)) ? ans + 1 : ans;
}
