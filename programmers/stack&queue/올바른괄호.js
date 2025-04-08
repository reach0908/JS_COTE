function solution(s) {
	if (s.length % 2 !== 0) return false;

	const sArr = s.split("");

	const queue = [];

	while (sArr.length > 0) {
		const cur = sArr.pop();
		if (cur === "(") {
			queue.push(cur);
		} else {
			if (queue.length === 0) return false;
			queue.pop();
		}
	}

	return sArr.length === 0 && queue.length === 0;
}
