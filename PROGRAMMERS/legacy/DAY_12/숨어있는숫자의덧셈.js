function solution(my_string) {
	let sum = 0;
	for (let i = 0; i < my_string.length; i++) {
		const code = my_string.charCodeAt(i);
		if (code >= 48 && code <= 57) {
			sum += Number(my_string[i]);
		}
	}
	return sum;
}
