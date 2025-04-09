const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [a, b] = fs
	.readFileSync(filePath)
	.toString()
	.trim()
	.split(' ')
	.map((v) => Number(v));

console.log(a / b);
