'use strict';

let secretNumber = Math.round(Math.random() * 20);
const message = document.querySelector('.message');
let score = document.querySelector('.score');
let hightScore = document.querySelector('.highscore');

validSecreteNumer(secretNumber);

//start game
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  validIfUserWin(guess);
});

//reset game
document.querySelector('.again').addEventListener('click', function () {
  const winnerBackground = document.querySelector('body');
  winnerBackground.style.backgroundColor = '#222';
  const guess = (document.querySelector('.guess').value = '');
  score.textContent = 20;
  secretNumber = Math.round(Math.random() * 20);
  validSecreteNumer(secretNumber);
  message.textContent = 'Start guessing...';
});

function validSecreteNumer(number) {
  if (number === 0) {
    secretNumber = Math.round(Math.random() * 20);
    document.querySelector('.number').textContent = secretNumber;
  } else {
    document.querySelector('.number').textContent = secretNumber;
  }
}

//Check if win or not
function validIfUserWin(guess) {
  if (!guess) {
    message.textContent = '🛑Input a number';
  } else if (guess === secretNumber) {
    const winnerBackground = document.querySelector('body');
    const btnCheck = document.querySelector('.check');
    winnerBackground.style.backgroundColor = '#60b347';
    hightScoreValidate(score.textContent);
    btnCheck.removeEventListener;
    message.textContent = gameMessage('guess');
  } else if (guess > secretNumber) {
    message.textContent = gameMessage('hight');
    score.textContent -= 1;
  } else {
    message.textContent = gameMessage('low');
    score.textContent -= 1;
  }
}

//Check if the hightScore is greater
function hightScoreValidate(score) {
  if (score > Number(hightScore.textContent)) {
    hightScore.textContent = score;
  }
}

//Return the correct message
function gameMessage(text) {
  if (text === 'hight') {
    return '📈 Too Hight';
  } else if (text === 'low') {
    return '📉 Too Low';
  } else {
    return '🏆 Correct a number';
  }
}
