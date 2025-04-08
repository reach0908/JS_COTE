function solution(priorities, location) {
	let count = 0;

	const arr = new Array(priorities.length).fill(0).map((_, index) => index);
	const num = arr[location];

	while (arr.length > 0) {
		const curNum = arr.shift();
		const maxPriority = Math.max(...priorities);
		const curPriority = priorities.shift();

		if (curPriority < maxPriority) {
			priorities.push(curPriority);
			arr.push(curNum);
		} else {
			count += 1;
			if (curNum === num) {
				return count;
			}
		}
	}
}
