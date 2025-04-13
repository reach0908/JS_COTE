function solution(n, k) {
	const serviceCan = parseInt(n / 10);
	let can = k;
	if (serviceCan > 0) {
		can -= serviceCan;
	}
	return 12000 * n + can * 2000;
}
