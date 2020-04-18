function main() {
    var t = parseInt(readLine());
    for (var a0 = 0; a0 < t; a0++) {
        var n = BigInt(parseInt(readLine()));

        let a = BigInt(1);
        let b = BigInt(2);
        let c = BigInt(0);

        let sum = BigInt(0);
        let third = 3;

        while (c < n) {

            c = a + b;
            a = b;
            b = c;

            if (third < 3) {
                third++;
            } else {
                third = 1;
                sum += a;
            }
        }

        console.log(`${sum}`);

    }
}