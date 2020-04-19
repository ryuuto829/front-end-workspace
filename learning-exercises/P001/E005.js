/*
    Recursion

    We’ve seen that % (the remainder operator) can be used to test whether a
    number is even or odd by using % 2 to see whether it’s divisible by two. Here’s
    another way to define whether a positive whole number is even or odd:
    • Zero is even.
    • One is odd.
    • For any other number N, its evenness is the same as N - 2.
    Define a recursive function isEven corresponding to this description. The
    function should accept a single parameter (a positive, whole number) and return
    a Boolean.
    Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
    way to fix this?
*/

function isEven(num) {
    if (num < 0) {
        return showEven(null);
    } else {
        if (num == 0) {
            return showEven(true);
        } else {
            if (num == 1) {
                return showEven(false);
            } else {
                return isEven(num - 2);
            }
        }
    }
}

function showEven(even) {
    if (even == null) {
        return "Negative number / not whole number";
    } else {
        if (even) {
            return "Number is " + "even.";
        } else {
            return "Number is " + "odd.";
        }
    }
}

console.log(isEven(2.2));