// 유클리드 호제법을 이용한 최소공배수, 최대공약수를 구하는 문제

function getGcdAndLcm(num1, num2) {
	const 최대공약수 = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
	const 최소공배수 = (a, b) => (a * b) / gcd(a, b);
	return [최대공약수(num1, num2), 최소공배수(num1, num2)];
}

function solution(denum1, num1, denum2, num2) {
	// 최소공배수 하기
	const [gcd, lcm] = getGcdAndLcm(num1, num2);
	// 1번 수에 곱해야할 값 구하기
	const denum1WithLcm = denum1 * (lcm / num1);
	// 2번 수에 곱해야할 값 구하기
	const denum2WithLcm = denum2 * (lcm / num2);
	// 그렇게 나온 두수 더하기
	const denumResult = denum1WithLcm + denum2WithLcm;
	// 결과인 분모 분자의 최대공약수 구하기
	const [gcd2, lcm2] = getGcdAndLcm(denumResult, lcm);
	// 최대공약수로 나눈 값 리턴
	return [denumResult / gcd2, lcm / gcd2];
}
