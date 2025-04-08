function solution(genres, plays) {
	const answer = [];

	const hash = {};

	for (let i = 0; i < genres.length; i++) {
		if (!hash[genres[i]]) {
			hash[genres[i]] = {
				total: 0,
				list: [],
			};
		}

		hash[genres[i]].list.push(i);
		hash[genres[i]].total += plays[i];
	}

	for (let [key, value] of hash) {
		if (value.length === 1) {
		}
	}

	// 순서구하기
	const sortedHash = Object.entries(hash).sort(
		(a, b) => b[1].total - a[1].total
	);
	// 들어갈 곡 구하기
	for (let [key, value] of sortedHash) {
		if (value.list.length === 1) {
			answer.push(value.list[0]);
		} else {
			value.list.sort((a, b) => plays[b] - plays[a]);
			answer.push(value.list[0]);
			answer.push(value.list[1]);
		}
	}

	return answer;
}
