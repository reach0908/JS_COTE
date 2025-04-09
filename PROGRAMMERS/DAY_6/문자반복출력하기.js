function solution(my_string, n) {
	let answer = '';
	const stringArr = my_string.split('');
	stringArr.forEach((str) => {
		answer += new Array(n).fill(str).join('');
	});
	return answer;
}
