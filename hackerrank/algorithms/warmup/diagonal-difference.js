
function diagonalDifference(arr) {
    let n = 3;
    let a = 0, b = 0;
    for (let i = 0; i < n; i++) {
        a += arr[i][i];
        b += arr[i][n - i - 1];
    }
    return Math.abs(a - b);
}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));