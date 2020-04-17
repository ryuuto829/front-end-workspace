let scores, roundScore, activePlayer, gamePlaying, sixInARow, winningScore;

function getInputValue() {
    winningScore = document.querySelector('.score__input').value;
    console.log(winningScore);
}

function initGame() {
    gamePlaying = true;
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    sixInARow = 0;
    winningScore = (winningScore || 100);
    winningScore = document.querySelector('.score__input').value = winningScore;

    document.querySelector('.board__dice--0').style.visibility = 'hidden';
    document.querySelector('.board__dice--1').style.visibility = 'hidden';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('#name-0').classList.add('side-card__player-name--active');
    document.querySelector('#name-1').classList.remove('side-card__player-name--active');
    document.querySelector('.side-card--player1').classList.add('side-card--active');
    document.querySelector('.side-card--player2').classList.remove('side-card--active');
}
initGame();

document.querySelector('.board__btn--roll').addEventListener('click', function () {
    if (gamePlaying) {
        let dice0 = Math.floor(Math.random() * 6) + 1;
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice0DOM = document.querySelector('.board__dice--0');
        let dice1DOM = document.querySelector('.board__dice--1');
        dice0DOM.style.visibility = 'visible';
        dice1DOM.style.visibility = 'visible';
        dice0DOM.textContent = dice0;
        dice1DOM.textContent = dice1;

        if (dice0 === 6 && dice0 === 6) {
            sixInARow += 1;
        }
        if (sixInARow === 2) {
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        } else {
            if ((dice0 !== 1) && (dice1 !== 1)) {
                roundScore += dice0 + dice1;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            } else {
                nextPlayer();
            }
        }
    }
});

document.querySelector('.board__btn--hold').addEventListener('click', function () {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.board__dice--0').style.visibility = 'hidden';
            document.querySelector('.board__dice--1').style.visibility = 'hidden';
            document.querySelector('#name-' + activePlayer).classList.remove('side-card__player-name--active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    sixInARow = 0;
    roundScore = 0;
    activePlayer ? activePlayer = 0 : activePlayer = 1;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.side-card--player1').classList.toggle('side-card--active');
    document.querySelector('.side-card--player2').classList.toggle('side-card--active');

    document.querySelector('#name-0').classList.toggle('side-card__player-name--active');
    document.querySelector('#name-1').classList.toggle('side-card__player-name--active');

    document.querySelector('.board__dice--0').style.visibility = 'hidden';
    document.querySelector('.board__dice--1').style.visibility = 'hidden';
}

document.querySelector('.board__btn--new-game').addEventListener('click', initGame);