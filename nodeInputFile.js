const fs = require('fs');

// 1. 하나의 값을 입력받을 때
export const oneValue = () => {
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return input;
};

//2. 공백으로 구분된 한 줄의 값들을 입력받을 때
export const onLineValue = () => {
	const input = fs
		.readFileSync('/dev/stdin')
		.toString()
		.trim()
		.split(' ');
	return input;
};

// 3. 여러 줄의 값들을 입력받을 때
export const multiLineValue = () => {
	const input = fs
		.readFileSync('/dev/stdin')
		.toString()
		.trim()
		.split('\n');
	return input;
};

// 4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
export const oneLineValueWithLength = () => {
	const input = fs
		.readFileSync('/dev/stdin')
		.toString()
		.trim()
		.split(/\s/);

	return input;
};
// 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
export const multiLineValueWithLength = () => {
	const input = fs
		.readFileSync('/dev/stdin')
		.toString()
		.trim()
		.split('\n');

	return input;
};

// 6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
//  ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
export const etcValue = () => {
	const input = fs
		.readFileSync('/dev/stdin')
		.toString()
		.trim()
		.split(/\s/);
	const n = input[0];
	const n_arr = input.slice(1, n + 1);
	const [m, ...m_arr] = input.slice(n + 1);

	return [input, n, n_arr, m, m_arr];
};
