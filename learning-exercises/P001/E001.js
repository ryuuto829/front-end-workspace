/*
    Looping a triangle:

    Write a loop that makes seven calls to console.log to output the following triangle:
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

// ver. 1
let block = "";
for (let i = 0; i < 7; i++) {
    block += "#";
    console.log(block);
}

// ver. 2
block = "";
while (block.length <= 7) {
    console.log(block);
    block += "#";
}
console.log("----------");

// final version

for (let a = "#"; a.length <= 7; a +="#") {
    console.log(a);
}