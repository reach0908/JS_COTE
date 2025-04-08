function solution(phone_book) {
	phone_book.sort((a, b) => a.length - b.length);

	for (let i = 0; i < phone_book.length - 1; i++) {
		for (let j = i + 1; j < phone_book.length; j++) {
			if (
				phone_book[i] === phone_book[j].slice(0, phone_book[i].length)
			) {
				return false;
			}
		}
	}
	return true;
}

// 하지만 위문제는 해쉬로 풀지 않음, 효율성 테스트에서 시간초과가 됨
function solution2(phone_book) {
	const hashTable = {};

	// 요소를 해시 테이블에 저장한다.
	for (const number of phone_book) {
		hashTable[number] = true;
	}

	for (const number of phone_book) {
		for (let i = 1; i < number.length; i++) {
			const prefix = number.substring(0, i);
			if (hashTable[prefix]) return false;
		}
	}

	// 전부 통과했다면 true를 반환한다.
	return true;
}

function solution3(phone_book) {
	phone_book.sort();

	// some은 배열의 요소중 콜백함수의 판별식을 전부 통과하는지 검사한다.
	// 통과하면 true, 실패하면 false이기 때문에 반대로 retrun 해 준다.
	const isPrefix = phone_book.some((book, idx) => {
		return phone_book[idx + 1]?.startsWith(book);
	});

	return !isPrefix;
}
