'use strict';

// Day 0: Hello, World!

function greeting(parameterVariable) {
    console.log('Hello, World!');
    console.log(parameterVariable);
}

// Day 0: Data Types

function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    console.log(parseInt(secondInteger, 10) + firstInteger);
    const firstDecimal = 4.0;
    console.log(parseFloat(secondDecimal) + firstDecimal);
    const firstString = 'HackerRank ';
    console.log(firstString + secondString);
}

// Day 1: Arithmetic Operators

function getArea(length, width) {
    let area;
    area = length * width;
    return area;
}

function getPerimeter(length, width) {
    let perimeter;
    perimeter = 2 * length + 2 * width;
    return perimeter;
}

// Day 1: Functions

function factorial(n) {

    let i = 1;

    function multiplyNumber(i) {

        if (i > n) {
            return 1;

        } else {
            return i * multiplyNumber(i + 1);
        }
    }

    return multiplyNumber(i);
}

// Day 1: Let and Const

function main() {
    const PI = Math.PI;
    let r = readLine();
    console.log(PI * r * r);
    console.log(2 * PI * r);
}

// Day 2: Conditional Statements: If-Else

function getGrade(score) {
    let grade;
    if (score <= 30 && score > 25) {
        grade = "A";
    } else if (score <= 25 && score > 20) {
        grade = "B";
    } else if (score <= 20 && score > 15) {
        grade = "C";
    } else if (score <= 15 && score > 10) {
        grade = "D";
    } else if (score <= 10 && score > 5) {
        grade = "E";
    } else {
        grade = "F";
    }

    return grade;
}

// Day 2: Conditional Statements: Switch

function getLetter(s) {
    let letter;
    let arrayAll = [
        ["a", "e", "i", "o", "u"],
        ["b", "c", "d", "f", "g"],
        ["h", "j", "k", "l", "m"],
        ["n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
    ];

    let caseNumber = function (letter) {
        for (let i = 0; i < arrayAll.length; i++) {
            if ((arrayAll[i]).some(s => s == letter)) return i;
        }
    };

    switch (caseNumber(s.charAt(0))) {
        case 0:
            letter = "A";
            break;
        case 1:
            letter = "B";
            break;
        case 2:
            letter = "C";
            break;
        case 3:
            letter = "D";
            break;
    }


    return letter;
}

// Day 2: Loops

function vowelsAndConsonants(s) {
    let vowels = ["a", "e", "i", "o", "u"];
    for (let letter of s) {
        if (vowels.some(n => n == letter)) {
            console.log(letter);
        }
    }
    for (let letter of s) {
        if (!(vowels.some(n => n == letter))) {
            console.log(letter);
        }
    }   
}