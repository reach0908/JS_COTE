function solution(age) {
	let answer = '';
	age.toString()
		.split('')
		.forEach(
			(str) =>
				(answer +=
					String.fromCharCode(
						Number(
							str
						) +
							97
					))
		);
	return answer;
}
