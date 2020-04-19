let gameState = true;
let questionSet = [];
let quizQuestions = [
    ['What is my name ?', ['Dima', 'John', 'Emma'], 0],
    ['Is the earth getting warmer?', ['Yes', 'No'], 0],
    ['Is the earth flat?', ['Yes', 'No'], 1],
    ['Is the sky blue ?', ['Yes', 'No'], 0],
    ['Is schrodinger cat dead ?', ['Yes', 'No', 'It\'s tough question'], 2],
    ['How many string does the usual bass have ?', ['6 strings', '4 strings', '7 strings'], 1]
];

setQuizQuestions(questionSet);

while (gameState) {
    startGame(questionSet);
}

function startGame(arr) {
    let questionNumber = Math.floor(Math.random() * arr.length);
    arr[questionNumber].showQuestion();
    let playerAnswer = askPlayer();
    if (playerAnswer === 'exit') {
        console.log('Your final score is ' + arr[questionNumber].score);
        console.log('----------------END-----------------');
        return gameState = false;
    } else {
        arr[questionNumber].checkAnswer(playerAnswer);
        return arr[questionNumber].showScore();
    }
}

function setQuizQuestions(arr) {
    for (let question of quizQuestions) {
        arr.push(new Question(question[0], question[1], question[2]));
    }
}

function askPlayer() {
    let answer = null;
    while (typeof answer == 'object') {
        answer = (prompt('Type answer number here.') || null);
    }
    return answer;
}

function Question(question, answerList, correctAnswer) {
    this.question = question;
    this.answerList = answerList;
    this.correctAnswer = correctAnswer;
    this.score = 0;
    this.showQuestion = showQuestion;
    this.checkAnswer = checkAnswer;
    this.showScore = showScore;
}

function showQuestion() {
    console.log(this.question);

    for (let i = 0; i < this.answerList.length; i++) {
        console.log(`${i + ' : ' + this.answerList[i]}`);
    }
}

function checkAnswer(answer) {
    if (Number(answer) === this.correctAnswer) {
        this.score += 1;
        return console.log('Your answer is correct!');
    } else {
        return console.log('Wroooong, .. try again.');
    }
}

function showScore() {
    console.log('Your current score = ' + this.score + ' .');
    console.log('------------------------------------');
}