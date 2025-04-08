// 힙 구현
class MinHeap {
	constructor() {
		this.heap = [];
	}

	swap(a, b) {
		[this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
	}

	push(value) {
		this.heap.push(value);
		this.bubbleUp();
	}

	pop() {
		if (this.heap.length === 1) return this.heap.pop();
		if (this.heap.length === 0) return null;

		const min = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.bubbleDown();
		return min;
	}

	bubbleUp() {
		let index = this.heap.length - 1;
		while (index > 0) {
			const parentIndex = Math.floor((index - 1) / 2);
			if (this.heap[index] >= this.heap[parentIndex]) break;
			this.swap(index, parentIndex);
			index = parentIndex;
		}
	}

	bubbleDown() {
		let index = 0;
		const length = this.heap.length;

		while (true) {
			let smallest = index;
			const leftChild = 2 * index + 1;
			const rightChild = 2 * index + 2;

			if (
				leftChild < length &&
				this.heap[leftChild] < this.heap[smallest]
			) {
				smallest = leftChild;
			}
			if (
				rightChild < length &&
				this.heap[rightChild] < this.heap[smallest]
			) {
				smallest = rightChild;
			}

			if (smallest === index) break;

			this.swap(index, smallest);
			index = smallest;
		}
	}

	peek() {
		return this.heap[0];
	}

	size() {
		return this.heap.length;
	}

	isEmpty() {
		return this.heap.length === 0;
	}
}

function solution(scoville, K) {
	const minHeap = new MinHeap();

	// 모든 스코빌 지수를 힙에 넣기
	for (const score of scoville) {
		minHeap.push(score);
	}

	let mixCount = 0;

	// 가장 맵지 않은 음식의 스코빌 지수가 K보다 작은 동안 반복
	while (minHeap.size() >= 2 && minHeap.peek() < K) {
		// 가장 맵지 않은 두 음식을 꺼내서 섞기
		const first = minHeap.pop();
		const second = minHeap.pop();
		const newFood = first + second * 2;

		// 섞은 음식을 힙에 넣기
		minHeap.push(newFood);
		mixCount++;
	}

	// 모든 음식의 스코빌 지수가 K 이상인지 확인
	return minHeap.peek() >= K ? mixCount : -1;
}

module.exports = { MinHeap, solution };
