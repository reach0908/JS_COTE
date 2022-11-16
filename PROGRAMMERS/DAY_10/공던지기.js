function solution(numbers, k) {
	let count = 1;
	let index = 0;
	const length = numbers.length;
	while (count < k) {
		index += 2;
		if (index >= length) {
			index = index % length;
		}
		count++;
	}
	return numbers[index];
}
