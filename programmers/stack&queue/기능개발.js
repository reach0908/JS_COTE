function solution(progresses, speeds) {
	const days = [];

	for (let i = 0; i < progresses.length; i++) {
		days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
	}

	let maxNum = days[0];

	const result = days.reduce((acc, cur, index) => {
		if (index === 0 || maxNum < cur) {
			// 첫 번째 요소이거나, 이전 값보다 현재 값이 큰 경우 새로운 그룹 시작
			acc.push(1);
			maxNum = cur;
		} else {
			// 이전 값이 더 크거나 같은 경우, 마지막 그룹의 카운트를 증가
			acc[acc.length - 1]++;
		}
		return acc;
	}, []);

	return result;
}
