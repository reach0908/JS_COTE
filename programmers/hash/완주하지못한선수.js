function solution(participant, completion) {
	participant.sort();
	completion.sort();

	for (let i = 0; i < participant.length; i++) {
		if (participant[i] !== completion[i]) {
			return participant[i];
		}
	}
}
/**
 * 
 * 채점 결과
정확성: 58.3
효율성: 41.7
합계: 100.0 / 100.0}  
 */

// 근데 해쉬를 사용해서 풀어야함
// 후자가 확실히 효율성테스트에서 시간이 빠름
function solutionByHash(participant, completion) {
	const hash = {};

	for (const c of completion) {
		hash[c] = (hash[c] || 0) + 1;
	}

	for (const p of participant) {
		if (!hash[p]) {
			return p;
		}

		hash[p]--;
	}
}

/**
 * 정확성: 58.3
효율성: 41.7
합계: 100.0 / 100.0
 */
