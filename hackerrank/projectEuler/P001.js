function main() {
    var t = parseInt(readLine());
    for (var a0 = 0; a0 < t; a0++) {
        var n = parseInt(readLine());

        let bigN = n - 1;

        let res = Math.floor(bigN / 3) * (3 + Math.floor(bigN / 3) * 3) / 2;
        let res2 = Math.floor(bigN / 5) * (5 + Math.floor(bigN / 5) * 5) / 2;
        let res3 = Math.floor(bigN / 15) * (15 + Math.floor(bigN / 15) * 15) / 2;


        let res4 = res + res2 - res3;

        console.log(res4);
    }
}