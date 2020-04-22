// BUDGET CONTROLLER
let budgetController = (function () {

    let Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calculatePercentage = function(totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function () {
        return this.percentage;
    };

    let Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let calculateTotal = function (type) {
        let sum = 0;

        data.allItems[type].forEach(function (cur) {
            sum += cur.value;
        });
        data.totals[type] = sum;
    }

    let data = {
        allItems: {
            inc: [],
            exp: []
        },
        totals: {
            inc: 0,
            exp: 0
        },
        budget: 0,
        percetage: -1
    };

    return {
        addItem: function (type, des, val) {
            let newItem, id;

            if (data.allItems[type].length > 0) {
                id = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                id = 0;
            }

            if (type === 'exp') {
                newItem = new Expense(id, des, val);
            } else if (type === 'inc') {
                newItem = new Income(id, des, val);
            }

            data.allItems[type].push(newItem);
            return newItem;
        },

        deleteItem: function(type, id) {
            let ids, index;

            ids = data.allItems[type].map( function(current) {
                return current.id;
            });

            index = ids.indexOf(id);

            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
        },

        calculateBudget: function () {
            calculateTotal('exp');
            calculateTotal('inc');

            data.budget = data.totals.inc - data.totals.exp;

            if (data.totals.inc > 0) {
                data.percetage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percetage = -1;
            }
        },

        calculatePercentages: function () {
            data.allItems.exp.forEach(function(cur) {
                cur.calculatePercentage(data.totals.inc);
            });
        },

        getPercentages: function () {
            let allPerc = data.allItems.exp.map(function(cur) {
                return cur.getPercentage();
            });
            return allPerc;
        },

        getBudget: function () {
            return {
                budget: data.budget,
                totalIncome: data.totals.inc,
                totalExpanse: data.totals.exp,
                percetage: data.percetage
            };
        },

        testing: function () {
            console.log(data);
        }
    };

})();

// UI CONTROLLER
let UIController = (function () {

    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.budget-list--income',
        expenseContainer: '.budget-list--expenses',
        budgetLabel: '.budget__value--general',
        incomeLabel: '.budget__value--inc',
        expenseLabel: '.budget__value--exp',
        percetageLable: '.budget__percentage--main',
        container: '.container',
        expensesPercLabel: '.budget-list__percentage'
    };

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            }
        },
        addListItem: function (obj, type) {
            let html, newHtml, element;

            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                html = '<div class="budget-list__item" id="inc-%id%"> <p class="budget-list__description">%description%</p> <div class="right"><p class="budget-list__value">%value%</p> <div class="btn"><div class="close icon"></div> </div> </div> </div>';
                element = DOMstrings.incomeContainer;
            } else if (type === 'exp') {
                element = DOMstrings.expenseContainer;
                html = '<div class="budget-list__item" id="exp-%id%"> <p class="budget-list__description">%description%</p> <div class="right"> <p class="budget-list__value budget-list__value--left">%value%</p> <div class="budget-list__percentage">50 %</div> <div class="btn"><div class="close icon"></div> </div> </div> </div>';
            }

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },

        deleteListItem: function(selectorID) {
            let el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },

        clearFields: function () {
            let fields, fieldsArr;

            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function (element) {
                element.value = "";
            });

            fieldsArr[0].focus();
        },

        displayBudget: function (obj) {
            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalIncome;
            document.querySelector(DOMstrings.expenseLabel).textContent = obj.totalExpanse;

            if (obj.percetage > 0) {
                document.querySelector(DOMstrings.percetageLable).textContent = obj.percetage + '%';
            } else {
                document.querySelector(DOMstrings.percetageLable).textContent = '---';
            }
        },

        displayPercentages: function(percentages){
            let fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

            let nodeListForEach = function(list, callback) {
                for (let i = 0;  i < list.length; i++) {
                    callback(list[i], i);
                }
            };

            nodeListForEach(fields, function(current, index) {
                if (percentages[index] > 0 ) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---'
                }
                
            });
        },

        getDOMstrings: function () {
            return DOMstrings;
        }
    };

})();

// GLOBAL APP CONTROLLER
let controller = (function (budgetCtrl, UICtrl) {

    let setupEventListeners = function () {
        let DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    };


    let updateBudget = function () {

        budgetCtrl.calculateBudget();

        let budget = budgetCtrl.getBudget();

        UICtrl.displayBudget(budget);

    };

    let updatePercentages = function () {
        budgetCtrl.calculatePercentages();

        let percentages = budgetCtrl.getPercentages();

        UICtrl.displayPercentages(percentages);
    };

    let ctrlAddItem = function () {
        let input, newItem;

        input = UICtrl.getInput();

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {

            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            UICtrl.addListItem(newItem, input.type);

            UICtrl.clearFields();

            updateBudget();

            updatePercentages();
        }
    };

    let ctrlDeleteItem = function (event) {
        let itemID, splitID, type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.id;
        console.log(itemID);

        if (itemID) {
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            budgetCtrl.deleteItem(type, ID);

            UICtrl.deleteListItem(itemID);

            updateBudget();

            updatePercentages();
        }

    };

    return {
        init: function () {
            UICtrl.displayBudget({
                budget: 0,
                totalIncome: 0,
                totalExpanse: 0,
                percetage: -1
            });
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();