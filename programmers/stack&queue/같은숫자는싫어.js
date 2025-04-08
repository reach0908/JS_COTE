function solution(arr) {
	let lastNum = null;
	const answer = [];
	for (let i = 0; i < arr.length; i++) {
		if (lastNum !== arr[i]) {
			answer.push(arr[i]);
		}
		lastNum = arr[i];
	}

	return answer;
}
