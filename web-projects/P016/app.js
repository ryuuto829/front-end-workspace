'use strict'

function Person(name, bills, billValues, tipPercentage) {
    this.name = name,
        this.bills = bills,
        this.billValues = billValues,
        this.tipPercentage = tipPercentage,
        this.calcTips = function () {
            this.tips = [];
            this.sumBillsTips = [];
            let percentage = this.tipPercentage;
            let value = this.billValues;

            for (let bill of this.bills) {
                if (bill <= value[0]) {
                    addTips(bill, percentage[0], this.tips, this.sumBillsTips);
                } else if (bill > value[0] && bill < value[1]) {
                    addTips(bill, percentage[1], this.tips, this.sumBillsTips);
                } else {
                    addTips(bill, percentage[2], this.tips, this.sumBillsTips);
                }
            }

            function addTips(bill, percentage, arrayTips, arraySum) {
                arrayTips.push(Math.round(bill * (percentage / 100)));
                arraySum.push(bill + Math.round(bill * (percentage / 100)));
            }
        }
}

let john = new Person('John', [124, 48, 268, 180, 42], [50, 200], [20, 15, 10]);
let mark = new Person('Mark', [77, 375, 110, 45], [100, 300], [20, 10, 25]);
john.calcTips();
mark.calcTips();
john.average = calcAverageTips(john);
mark.average = calcAverageTips(mark);
console.log(mark);
console.log(john);

function calcAverageTips(person) {
    let current = 0;
    for (let item of person.tips) {
        current += item;
    }
    return (current / person.tips.length);
}