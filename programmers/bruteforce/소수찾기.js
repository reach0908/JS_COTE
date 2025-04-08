function solution(numbers) {
	const numArr = numbers.split("");

	const resultSet = new Set();

	makedNumbers(resultSet, "", numArr);

	return Array.from(resultSet).filter((num) => isSosu(num)).length;
}

function makedNumbers(set, cur, nums) {
	if (nums.length === 0) {
		return;
	}

	let clone = nums.slice().reverse();

	nums.forEach(() => {
		const su = clone.pop();
		const num = Number(cur + su);
		set.add(num);
		makedNumbers(set, cur + su, clone);
		clone.unshift(su);
	});
}

function isSosu(num) {
	if (num < 2) {
		return false;
	}
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}
