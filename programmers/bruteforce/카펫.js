function solution(brown, yellow) {
	const size = brown + yellow;

	// 노란색이 중간에 들어가야하기에 x는 3보다크고, 3으로 나눴을 때
	for (let y = 3; size / y >= 3; y++) {
		if (size % y !== 0) {
			continue;
		}

		let x = size / y;

		if (x < 3) {
			continue;
		}
		// 테두리 한줄의 값을 너비에서 뺀거가 노란색이랑 같아야함
		if (size - (x * 2 + y * 2 - 4) === yellow) {
			return [x, y];
		}
	}
}
