function solution(hp) {
	let count = 0;
	count += Math.floor(hp / 5);
	const firstLeft = hp % 5;
	count += Math.floor(firstLeft / 3);
	const secondLeft = firstLeft % 3;
	count += secondLeft;
	return count;
}
