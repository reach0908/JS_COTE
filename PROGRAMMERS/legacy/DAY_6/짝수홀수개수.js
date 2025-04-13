function solution(num_list) {
	let jjak = 0;
	let hol = 0;
	num_list.forEach((num) => {
		if (num % 2 === 0) {
			jjak += 1;
		} else {
			hol += 1;
		}
	});
	return [jjak, hol];
}
