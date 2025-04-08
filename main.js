const readline = require("readline");

// readline 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 게임 상태를 관리할 클래스
class Game369 {
  constructor(playerCount) {
    this.playerCount = playerCount;
    this.players = [];
    this.currentNumber = 0;
    this.currentPlayerIndex = 0;
    this.activePlayers = 0;
  }

  // 플레이어 초기화
  initializePlayers() {
    for (let i = 0; i < this.playerCount; i++) {
      this.players.push({
        id: i + 1,
        name: `플레이어 ${i + 1}`,
        wrongAnswers: 0,
        totalAnswers: 0,
        active: true,
      });
    }
    this.activePlayers = this.playerCount;
  }

  // 다음 플레이어 인덱스 계산
  getNextPlayerIndex() {
    let nextIndex = (this.currentPlayerIndex + 1) % this.playerCount;
    while (!this.players[nextIndex].active) {
      nextIndex = (nextIndex + 1) % this.playerCount;
    }
    return nextIndex;
  }

  // 정답 확인
  checkAnswer(answer) {
    this.currentNumber++;
    const correctAnswer = this.getCorrectAnswer(this.currentNumber);
    const currentPlayer = this.players[this.currentPlayerIndex];

    currentPlayer.totalAnswers++;

    if (answer !== correctAnswer) {
      currentPlayer.wrongAnswers++;
      console.log(`\n틀렸습니다! 정답은 "${correctAnswer}" 입니다.`);
    } else {
      console.log("\n정답입니다!");
    }

    // 오답률 체크
    const wrongRate =
      (currentPlayer.wrongAnswers / currentPlayer.totalAnswers) * 100;
    if (wrongRate > 50) {
      currentPlayer.active = false;
      this.activePlayers--;
      console.log(
        `\n${currentPlayer.name}의 오답률이 50%를 넘어 게임에서 제외되었습니다!`
      );
    }

    // 다음 플레이어로 전환
    this.currentPlayerIndex = this.getNextPlayerIndex();

    return this.activePlayers > 1;
  }

  // 현재 숫자에 대한 정답 생성
  getCorrectAnswer(number) {
    const numberStr = number.toString();
    let answer = "";

    // 3, 6, 9가 포함된 경우 해당 숫자마다 "짝"을 추가
    const claps = numberStr
      .split("")
      .filter((digit) => ["3", "6", "9"].includes(digit)).length;

    if (claps > 0) {
      answer = "짝".repeat(claps);
    } else {
      answer = numberStr;
    }

    return answer;
  }

  // 현재 게임 상태 출력
  printGameStatus() {
    console.log("\n====================");
    console.log(`현재 숫자: ${this.currentNumber + 1}`);
    console.log(`차례: ${this.players[this.currentPlayerIndex].name}`);

    console.log("\n플레이어 상태:");
    this.players.forEach((player) => {
      if (player.active) {
        const wrongRate =
          player.totalAnswers === 0
            ? 0
            : (player.wrongAnswers / player.totalAnswers) * 100;
        console.log(
          `${player.name}: 오답률 ${wrongRate.toFixed(2)}% (${
            player.wrongAnswers
          }/${player.totalAnswers})`
        );
      } else {
        console.log(`${player.name}: 탈락`);
      }
    });
    console.log("====================\n");
  }

  // 승자 출력
  printWinner() {
    const winner = this.players.find((player) => player.active);
    console.log(`\n🎉 축하합니다! ${winner.name}가 승리했습니다! 🎉`);
  }
}

// 게임 실행 함수
function startGame() {
  rl.question("플레이어 수를 입력하세요: ", (playerCount) => {
    const count = parseInt(playerCount);

    if (isNaN(count) || count < 2) {
      console.log("2명 이상의 플레이어 수를 입력해주세요.");
      startGame();
      return;
    }

    const game = new Game369(count);
    game.initializePlayers();
    console.log(`\n${count}명의 플레이어로 369 게임을 시작합니다!`);
    console.log('3, 6, 9가 들어있는 숫자는 "짝"으로 대체합니다.');
    console.log("오답률이 50%를 초과하면 게임에서 제외됩니다.\n");

    playTurn(game);
  });
}

// 한 턴 진행
function playTurn(game) {
  game.printGameStatus();

  const currentPlayer = game.players[game.currentPlayerIndex];
  rl.question(
    `${currentPlayer.name}의 차례입니다. 답을 입력하세요: `,
    (answer) => {
      const continuePlaying = game.checkAnswer(answer);

      if (continuePlaying) {
        playTurn(game);
      } else {
        game.printWinner();
        rl.close();
      }
    }
  );
}

// 게임 시작
console.log("369 게임에 오신 것을 환영합니다!");
startGame();
