let scores, roundScore, activePlayer, gamePlaying;

function initGame() {
    gamePlaying = true;
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.board__dice').style.display = 'none';
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
        let dice = Math.floor(Math.random() * 6) + 1;
        let diceDOM = document.querySelector('.board__dice');
        diceDOM.style.display = 'block';
        diceDOM.textContent = dice;

        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.board__btn--hold').addEventListener('click', function () {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.board__dice').style.display = 'none';
            document.querySelector('#name-' + activePlayer).classList.remove('side-card__player-name--active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    roundScore = 0;
    activePlayer ? activePlayer = 0 : activePlayer = 1;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.side-card--player1').classList.toggle('side-card--active');
    document.querySelector('.side-card--player2').classList.toggle('side-card--active');

    document.querySelector('#name-0').classList.toggle('side-card__player-name--active');
    document.querySelector('#name-1').classList.toggle('side-card__player-name--active');

    document.querySelector('.board__dice').style.display = 'none';
}

document.querySelector('.board__btn--new-game').addEventListener('click', initGame);