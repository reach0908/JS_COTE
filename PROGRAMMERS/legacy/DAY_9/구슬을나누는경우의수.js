function factorial(n) {
	return n ? n * factorial(n - 1) : 1;
}

function solution(balls, share) {
	if (balls === share) {
		return 1;
	}
	console.log(
		Math.round(
			factorial(balls) /
				(factorial(
					balls -
						share
				) *
					factorial(
						share
					))
		)
	);
	console.log(
		factorial(balls) /
			(factorial(balls - share) *
				factorial(
					share
				))
	);
	return Math.round(
		factorial(balls) /
			(factorial(balls - share) *
				factorial(
					share
				))
	);
}

solution(54, 10);
