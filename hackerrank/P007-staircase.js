let n = 4;

staircase(n);

function staircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log(`${ ' '.repeat(n - i) + '#'.repeat(i)}`);
    }
}