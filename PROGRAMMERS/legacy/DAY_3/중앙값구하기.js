function solution(array) {
	array.sort((a, b) => a - b);
	const center =
		array.length === 1
			? 0
			: parseInt(array.length / 2);
	return array[center];
}

// js의 배열 sort
// 기본 정렬은 문자열의 유니코드 코드 포인트
