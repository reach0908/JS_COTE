function solution(array) {
	const object = {};
	let maxNum = 0;
	let maxKey = '';
	array.forEach((num) => {
		if (!object[num]) {
			object[num] = 1;
		} else {
			object[num] += 1;
		}
		if (maxNum <= object[num]) {
			maxNum = object[num];
			maxKey = num;
		}
	});
	const count = Object.values(object).filter(
		(e) => e === maxNum
	).length;
	if (count > 1) {
		return -1;
	}
	return maxKey;
}
