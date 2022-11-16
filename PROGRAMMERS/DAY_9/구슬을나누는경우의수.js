function factorial(n) {
	return n ? n * factorial(n - 1) : 1;
}

function solution(balls, share) {
	if (balls === share) {
		return 1;
	}
	return Math.round(
		factorial(balls) /
			(factorial(balls - share) *
				factorial(
					share
				))
	);
}

solution(30, 4);
