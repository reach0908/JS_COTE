const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = fs.readFileSync(filePath).toString().trim().toUpperCase();

const obj = {};

let maxNum = 0;
let maxKey = '';

for (let i = 0; i < input.length; i++) {
	if (!obj[input[i]]) {
		obj[input[i]] = 1;
	} else {
		obj[input[i]] += 1;
	}

	if (maxNum <= obj[input[i]]) {
		maxNum = obj[input[i]];
		maxKey = input[i];
	}
}

const count = Object.values(obj).reduce(
	(cnt, element) => cnt + (maxNum === element),
	0
);

if (count > 1) {
	console.log('?');
} else {
	console.log(maxKey);
}
