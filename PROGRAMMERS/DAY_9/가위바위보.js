function solution(rsp) {
	const rspWinObj = {
		2: '0',
		0: '5',
		5: '2',
	};

	const rspArray = rsp.split('');
	let answer = '';
	rspArray.forEach((str) => (answer += rspWinObj[str]));
	return answer;
}
