function solution(money) {
	const iceAmericano = 5500;
	const canBuy = parseInt(money / iceAmericano);
	let leftMoney = 0;
	if (money % iceAmericano > 0) {
		leftMoney = money - iceAmericano * canBuy;
	}

	return [canBuy, leftMoney];
}
