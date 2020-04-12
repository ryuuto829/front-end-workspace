/*
    FizzBuzz

    Write a program that uses console.log to print all the numbers from 1 to 100,
    with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
    number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/

for (let num = 1; num <= 100; num++) {
    if (!(num % 3)) {
        console.log("Fizz");
    } else {
        if (!(num % 5)) {
            console.log("Buzz");
        } else {
            console.log(num);
        }
    }
}

/*
    When you have that working, modify your program to print "FizzBuzz" for
    numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
    for numbers divisible by only one of those)
*/
// ver. 1
for (let num = 1; num <= 100; num++) {
    if (!(num % 3) && !(num % 5)) {
        console.log("FizzBuzz");
    } else {
        if (!(num % 3)) {
            console.log("Fizz");
        } else {
            if (!(num % 5)) {
                console.log("Buzz");
            } else {
                console.log(num);
            }
        }
    }
}

// ver. 2
let text = "";
for (let num = 1; num <= 100; num++) {
    if ((num % 3) && (num % 5)) {
        text = String(num);
    } else {
        if (!(num % 3)) {
            text += "Fizz";
        }
        if (!(num % 5)) {
            text += "Buzz";
        }
    }
    console.log(text);
    text = "";
}
console.log("----------");

// final version

for (let i = 1; i <= 100; i++) {
    let n = "";
    if (!(i % 3)) n = "Fizz";
    if (!(i % 5)) n += "Buzz";
    console.log((n || i));
}