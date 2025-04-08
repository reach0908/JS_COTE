function solution(bridge_length, weight, truck_weights) {
	let curWeight = 0;
	let curSec = 0;
	const truckCount = truck_weights.length;

	const curTruckList = new Array(bridge_length).fill(0);
	const passedTruckList = [];

	while (passedTruckList.length !== truckCount) {
		curSec++;
		// 큐에서 제일 첫번째꺼 빼기
		const passedTruck = curTruckList.shift();
		// 0보다 크면 패스드트럭리스트에 넣기
		if (passedTruck > 0) {
			passedTruckList.push(passedTruck);
			curWeight -= passedTruck;
		}
		// 트럭을 추가할 수 있는지 확인
		if (curWeight + truck_weights[0] <= weight) {
			const truck = truck_weights.shift();
			curTruckList.push(truck);
			curWeight += truck;
		} else {
			curTruckList.push(0);
		}
	}
	return curSec;
}
