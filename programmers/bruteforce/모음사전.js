function solution(word) {
	const alphabet = "AEIOU";
	const aArr = alphabet.split("");

	const dictionary = [];

	// 백트래킹을 통해 사전에 단어 넣기
	const generateWords = (currentWord) => {
		if (currentWord.length > 5) {
			return;
		}

		dictionary.push(currentWord);

		for (let i = 0; i < aArr.length; i++) {
			generateWords(currentWord + aArr[i]);
		}
	};

	// index 찾기
	generateWords("");

	dictionary.sort();

	return dictionary.indexOf(word);
}
