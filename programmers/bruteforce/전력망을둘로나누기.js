function solution(n, wires) {
	const createTree = (wires) => {
		const tree = Array.from({ length: n + 1 }, () => []);

		// 인접리스트 트리 만들기
		wires.forEach(([v1, v2]) => {
			tree[v1].push(v2);
			tree[v2].push(v1);
		});

		return tree;
	};

	// BFS를 통해 연결된 송전탑의 개수를 계산
	const countNodes = (start, tree, visited) => {
		let count = 0;

		const queue = [start];

		visited[start] = true;

		while (queue.length > 0) {
			const node = queue.shift();
			count++;

			tree[node].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.push(neighbor);
				}
			});
		}

		return count;
	};

	let minDifference = Infinity;

	wires.forEach(([v1, v2]) => {
		// 현재 전선을 제거한 상태로 트리 생성
		const filteredWires = wires.filter(([a, b]) => !(a === v1 && b === v2));
		const tree = createTree(filteredWires);

		const visited = new Array(n + 1).fill(false);

		const count1 = countNodes(1, tree, visited);

		const count2 = n - count1;

		const diff = Math.abs(count1 - count2);

		minDifference = Math.min(minDifference, diff);
	});

	return minDifference;
}

console.log(
	solution(9, [
		[1, 3],
		[2, 3],
		[3, 4],
		[4, 5],
		[4, 6],
		[4, 7],
		[7, 8],
		[7, 9],
	])
); // 3
console.log(
	solution(4, [
		[1, 2],
		[2, 3],
		[3, 4],
	])
); // 0
console.log(
	solution(7, [
		[1, 2],
		[2, 7],
		[3, 7],
		[3, 4],
		[4, 5],
		[6, 7],
	])
); // 1
