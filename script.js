'use strict';

// Variables

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.highscore').textContent = highscore;
document.querySelector('.score').textContent = score;

// Handiling Check Button

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // ! When there is no input
  if (!guess || guess < 1 || guess > 20) {
    document.querySelector(
      '.message'
    ).innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Belgilangan oralig'da son tanlang`;

    // ! When player wins
  } else if (guess === secretNumber) {
    document.querySelector(
      '.message'
    ).innerHTML = `<i class="fa-solid fa-trophy"></i> Muvaffaqqiyatli tahmin`;

    document.querySelector('body').classList.remove('lost');
    document.querySelector('body').classList.add('success');
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // ! When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').innerHTML = `${
        guess > secretNumber
          ? `<i class="fa-solid fa-angles-up"></i> Juda ko'p`
          : `<i class="fa-solid fa-angles-down"></i> Juda kam`
      }`;
      score--;
      document.querySelector('.score').textContent = score;
      // ! When player lost
    } else {
      document.querySelector(
        '.message'
      ).innerHTML = `<i class="fa-solid fa-heart-crack"></i> Siz yutqazdingiz`;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').classList.remove('success');
      document.querySelector('body').classList.add('lost');
    }
  }
});

// Handling Again Button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent =
    'Tahmin qilishni boshlang...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').classList.remove('lost', 'success');
});
