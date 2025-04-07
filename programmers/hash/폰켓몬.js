function solution(nums) {
	let selectNum = Math.floor(nums / 2);

	const hash = {};

	for (const num of nums) {
		hash[num] = (hash[num] || 0) + 1;
	}

	if (Object.keys(hash).length >= selectNum) {
		return selectNum;
	} else {
		return Object.keys(hash).length;
	}
}
