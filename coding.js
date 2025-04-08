const example1 = [4, 6, 8];
const exampleK = 3;

function solution(nums, k) {
  // 숫자 빈도수를 저장하는 객체
  const counter = {};

  // 각 숫자의 빈도수 카운트
  for (const num of nums) {
    counter[num] = (counter[num] || 0) + 1;
  }

  // k번 연산 수행
  for (let i = 0; i < k; i++) {
    // 최댓값 찾기
    let maxNum = -Infinity;
    for (const num in counter) {
      if (counter[num] > 0 && Number(num) > maxNum) {
        maxNum = Number(num);
      }
    }

    // 최댓값 개수 감소
    counter[maxNum]--;

    // 최댓값을 절반으로 나누고 올림한 값의 개수 증가
    const newValue = Math.ceil(maxNum / 2);
    counter[newValue] = (counter[newValue] || 0) + 1;
  }

  // 최종 배열의 합 계산
  let sum = 0;
  for (const num in counter) {
    sum += Number(num) * counter[num];
  }

  return sum;
}

console.log(solution(example1, exampleK));
