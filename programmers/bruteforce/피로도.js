function solution(k, dungeons) {
	// 최소필요피로도

	// 소모피로도

	// 하루에 한 번 탐험할 수 있는 던전이 여러개

	// 현재 피로도 K

	// 2차원배열
	let result = -Infinity;

	// 순서가 중요한 조합을
	const dungenRoot = getPermutations(dungeons, dungeons.length);

	for (let i = 0; i < dungenRoot.length; i++) {
		let cloneK = k;
		let count = 0;

		dungenRoot[i].forEach((dungen) => {
			if (cloneK >= dungen[0]) {
				count += 1;
				cloneK -= dungen[1];
			}
		});

		result = Math.max(count, result);
	}

	return result;
}

const getPermutations = (arr, selectNumber) => {
	const results = [];

	if (selectNumber === 1) {
		return arr.map((el) => [el]);
	}

	arr.forEach((fixed, index, origin) => {
		const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

		const permutations = getPermutations(rest, selectNumber - 1);

		const attached = permutations.map((el) => [fixed, ...el]);

		results.push(...attached);
	});

	return results;
};
