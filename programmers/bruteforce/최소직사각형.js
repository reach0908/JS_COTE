function solution(sizes) {
	const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

	let maxSize = [0, 0];

	rotated.forEach(([w, h]) => {
		maxSize[0] = Math.max(w, maxSize[0]);
		maxSize[1] = Math.max(h, maxSize[1]);
	});

	return maxSize[0] * maxSize[1];
}

// 결국 가로가 전부 길게 변경하는 방법이 제일 맞는 거였다.
