function solution(answers) {
	const supo1 = [1, 2, 3, 4, 5];
	const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
	const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

	const count = [0, 0, 0];

	answers.forEach((v, i) => {
		if (supo1[i % supo1.length] === v) {
			count[0]++;
		}

		if (supo2[i % supo2.length] === v) {
			count[1]++;
		}

		if (supo3[i % supo3.length] === v) {
			count[2]++;
		}
	});

	const maxCount = Math.max(...count);
	const result = [];
	count.forEach((num, index) => {
		if (maxCount === num) {
			result.push(index + 1);
		}
	});

	return result;
}
