(function () {

    let keepScore = score();
    let questionSet = [];
    let quizQuestions = [
        ['What is my name ?', ['Dima', 'John', 'Emma'], 0],
        ['Is the earth getting warmer?', ['Yes', 'No'], 0],
        ['Is the earth flat?', ['Yes', 'No'], 1],
        ['Is the sky blue ?', ['Yes', 'No'], 0],
        ['Is schrodinger cat dead ?', ['Yes', 'No', 'It\'s tough question'], 2],
        ['How many string does the usual bass have ?', ['6 strings', '4 strings', '7 strings'], 1]
    ];

    function Question(question, answerList, correctAnswer) {
        this.question = question;
        this.answerList = answerList;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.showQuestion = function () {
        console.log(this.question);

        for (let i = 0; i < this.answerList.length; i++) {
            console.log(`${i + ' : ' + this.answerList[i]}`);
        }
    }

    Question.prototype.checkAnswer = function (answer, callback) {
        let sc;
        if (Number(answer) === this.correctAnswer) {
            sc = callback(true);
            console.log('Your answer is correct!');
        } else {
            sc = callback(false);
            console.log('Wroooong, .. try again.')
        }
        return this.showScore(sc);
    }

    Question.prototype.showScore = function (score) {
        console.log('Your current score = ' + score + ' .');
        console.log('------------------------------------');
    }

    setQuizQuestions(questionSet);
    startGame(questionSet);

    function startGame(arr) {
        let questionNumber = Math.floor(Math.random() * arr.length);
        arr[questionNumber].showQuestion();
        let playerAnswer = askPlayer();
        if (playerAnswer === 'exit') {
            console.log('----------------END-----------------');
        } else {
            arr[questionNumber].checkAnswer(playerAnswer, keepScore);
            startGame(arr);
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

    function score() {
        let score = 0;
        return function (correct) {
            if (correct) {
                score++;
            }
            return score;
        }
    }
})();