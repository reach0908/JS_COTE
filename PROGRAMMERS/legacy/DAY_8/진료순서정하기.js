function solution(emergency) {
	const answer = [];
	emergency.forEach((num1) => {
		let priority = 1;
		emergency.forEach((num2) => {
			if (num1 < num2) {
				priority++;
			}
		});
		answer.push(priority);
	});
	return answer;
}
