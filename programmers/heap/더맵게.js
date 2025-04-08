function findInsertPosition(arr, target) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if (arr[mid] === target) return mid;
		if (arr[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return left;
}

function solution(scoville, K) {
	let answer = 0;
	// 초기 정렬 한 번만 수행
	scoville.sort((a, b) => a - b);

	while (scoville[0] < K && scoville.length >= 2) {
		// 가장 작은 두 값 추출
		const first = scoville.shift();
		const second = scoville.shift();
		const newFood = first + second * 2;

		// 이진 탐색으로 삽입 위치 찾기
		const insertIndex = findInsertPosition(scoville, newFood);
		scoville.splice(insertIndex, 0, newFood);

		answer++;
	}

	// 모든 음식의 스코빌 지수가 K 이상인지 확인
	return scoville[0] >= K ? answer : -1;
}
