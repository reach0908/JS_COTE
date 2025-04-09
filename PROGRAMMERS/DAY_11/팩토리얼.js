function solution(n) {
	let isNotFound = true;
	let i = 1;
	let curNum = 1;
	while (isNotFound) {
		i++;
		curNum = curNum * i;
		if (curNum > n) {
			isNotFound = false;
		}
	}
	return i - 1;
}
