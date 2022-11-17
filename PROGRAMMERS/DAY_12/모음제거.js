function solution(my_string) {
	const mo = ['a', 'e', 'i', 'o', 'u'];
	const strArr = my_string.split('');
	const filteredArr = strArr.filter((str) => !mo.includes(str));
	const answer = filteredArr.join('');
	return answer;
}
