function solution(my_string) {
	const answer = [];
	for (let i = 0; i < my_string.length; i++) {
		const code = my_string.charCodeAt(i);
		if (code >= 48 && code <= 57) {
			answer.push(
				Number(
					my_string[
						i
					]
				)
			);
		}
	}
	answer.sort((a, b) => a - b);
	return answer;
}
