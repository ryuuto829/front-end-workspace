/*
    Chessboard

    Write a program that creates a string that represents an 8×8 grid, using newline
    characters to separate lines. At each position of the grid there is either a space
    or a "#" character. The characters should form a chessboard.
*/

// ver. 1
let board = "";
for (let i = 0; i < (9 * 8); i++) {

    if (!(i % 9)) {
        board += "\n";
    } else {
        if (!(i % 2)) {
            board += "# ";
        } else { board += "1 "; }
    }
}
console.log(board);

// ver.2

board = "";
for (let j = 0; j < 8; j++) {
    if (!(j % 2)) {
        for (let i = 0; i < 8; i++) {
            if (!(i % 2)) {
                board += "# ";
            } else {
                board += "1 ";
            }
        }
        board += "\n";
    } else {
        for (let i = 0; i < 8; i++) {
            if (!(i % 2)) {
                board += "1 ";
            } else {
                board += "# ";
            }
        }
        board += "\n";
    }
}
console.log(board);

/*
    When you have a program that generates this pattern, define a binding size
    = 8 and change the program so that it works for any size, outputting a grid
    of the given width and height.
*/

board = "";
let size = 8;
for (let j = 0; j < size; j++) {
    if (!(j % 2)) {
        for (let i = 0; i < size; i++) {
            if (!(i % 2)) {
                board += "# ";
            } else {
                board += "1 ";
            }
        }
        board += "\n";
    } else {
        for (let i = 0; i < size; i++) {
            if (!(i % 2)) {
                board += "1 ";
            } else {
                board += "# ";
            }
        }
        board += "\n";
    }
}
console.log(board);