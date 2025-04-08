function solution(clothes) {
	let answer = 1;
	const hash = {};

	for (const [name, type] of clothes) {
		hash[type] = (hash[type] || 0) + 1;
	}

	for (let key in hash) {
		answer *= hash[key] + 1;
	}

	return answer - 1;
}

// 약수 개수 구하는 방식
// 각 파츠 별 경우의 수를 모두 곱해서 최종 경우의 수를 구함
