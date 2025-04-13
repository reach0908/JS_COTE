function solution(n) {
	const arr = new Array(n + 1).fill(true).fill(false, 0, 2);
	for (let i = 2; i * i <= n; i++) {
		if (arr[i]) {
			for (
				let j = i * i;
				j <= n;
				j += i
			) {
				arr[j] = false;
			}
		}
	}
	const answer = arr.filter((res) => !res).length;
	return answer - 2;
}
