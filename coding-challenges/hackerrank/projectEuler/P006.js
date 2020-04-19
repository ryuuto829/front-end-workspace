function sumSquare(n) {
    let sum = 0;
    let sum2 = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
        sum2 += (i ** 2);
    }

    return console.log((sum ** 2) - sum2);
}