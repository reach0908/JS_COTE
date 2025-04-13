function solution(numbers, direction) {
	const array = numbers;
	if (direction === 'right') {
		const res = array.pop();
		array.unshift(res);
		return array;
	} else {
		const res = array.shift();
		array.push(res);
		return array;
	}
}
