let main = function () {

    let DOMstrings = {
        entries: document.getElementById('entries'),
        body: document.getElementById('table-body'),
        displayFrom: document.getElementById('from'),
        displayTo: document.getElementById('to'),
        displayEntries: document.getElementById('display-entries'),
        pageNum: document.querySelector('.pagination')
    };

    // 1. create table data -> store generated data in obj
    let tableData = [];

    let TableDataItem = function (name, position, office, age) {
        this.name = name;
        this.position = position;
        this.office = office;
        this.age = age;
    }

    let generateTableData = function (num) {
        let dataSet, randomPerson, newItem;

        dataSet = [
            ['Airi Satou', 'Software Engineer', 'Tokyo', '33'],
            ['Bradley Greer', 'Software Engineer', 'London', '41'],
            ['Brielle Williamson', 'Sales Assistant', 'New York', '31'],
            ['Gavin Cortez', 'Developer', 'Edinburgh', '38']
        ];

        for (let i = 1; i <= num; i++) {
            randomPerson = dataSet[Math.round(Math.random() * 3)];
            newItem = new TableDataItem(randomPerson[0], randomPerson[1], randomPerson[2], randomPerson[3]);
            tableData.push(newItem);
        }
    };

    // initial table control values

    let tableControl = {
        entries: 10,
        currentPage: 0,
        from: 0,
        to: 9
    }

    // 2. read entries number - 10, 25, 50

    let getEntriesNumer = function () {
        tableControl.entries = parseInt(DOMstrings.entries.value);
    };

    // 3. calc start and end point of table row

    let calcTableRange = function () {
        tableControl.from = tableControl.currentPage * tableControl.entries;

        if ((tableControl.from + tableControl.entries - 1) <= tableData.length) {
            tableControl.to = tableControl.from + tableControl.entries - 1;
        } else {
            tableControl.to = tableData.length - 1;
        }
    };

    // 4. calc number of pages (150 / 10 = 15)

    let calcPages = function () {
        tableControl.pages = Math.ceil(tableData.length / tableControl.entries);
    };

    // 5. display table items from start to end

    let displayTableData = function () {
        let item, formattedItem;

        item = '<tr id="row-%id%"> <td>%name%</td> <td>%position%</td> <td>%office%</td> <td>%age%</td> </tr>';

        for (let i = tableControl.from; i <= tableControl.to; i++) {
            formattedItem = item.replace('%name%', tableData[i].name);
            formattedItem = formattedItem.replace('%position%', tableData[i].position);
            formattedItem = formattedItem.replace('%office%', tableData[i].office);
            formattedItem = formattedItem.replace('%age%', tableData[i].age);
            formattedItem = formattedItem.replace('%id%', i);
            DOMstrings.body.insertAdjacentHTML('beforeend', formattedItem);
        }
    };

    // 5. display updated caption

    let displayCaption = function () {
        DOMstrings.displayFrom.textContent = tableControl.from + 1;
        DOMstrings.displayTo.textContent = tableControl.to + 1;
        DOMstrings.displayEntries.textContent = tableData.length;
    };

    // 6. display page navigation

    let displayPageNav = function () {
        let item, formattedItem, btn;

        btn = '<li class="page-item" id="pre-btn"><a class="page-link" href="#">Previous</a></li>';
        DOMstrings.pageNum.insertAdjacentHTML('beforeend', btn);
        item = '<li class="page-item"><a class="page-link" href="#">%page%</a></li>';

        for (let i = 1; i <= tableControl.pages; i++) {
            formattedItem = item.replace('%page%', i);
            DOMstrings.pageNum.insertAdjacentHTML('beforeend', formattedItem);
        }

        btn = '<li class="page-item" id="next-btn"><a class="page-link" href="#">Next</a></li>';
        DOMstrings.pageNum.insertAdjacentHTML('beforeend', btn);
    };

    // 7. show active page on navigation

    let showActivePage = function () {
        for (let i = 1; i <= tableControl.pages; i++) {

            if (i === tableControl.currentPage + 1) {
                DOMstrings.pageNum.children[i].classList.add('active');
            } else {
                DOMstrings.pageNum.children[i].classList.remove('active');
            }
        }
    };

    // 8. remove table content and nav bar

    let clearTabel = function () {
        DOMstrings.body.innerHTML = '';
    };

    let clearNav = function () {
        DOMstrings.pageNum.innerHTML = '';
    };

    // 9. update UI and nav bar

    let updateUI = function () {
        displayCaption();
        displayTableData();
        showActivePage();
    }

    let updateNav = function () {
        clearTabel();
        calcTableRange();
        updateUI();
    };

    // 10. update button in nav bar
    
    let updateButtons = function () {
        if (tableControl.currentPage === 0) {
            DOMstrings.pageNum.firstElementChild.classList.add('disabled'); 
        } else {
            DOMstrings.pageNum.firstElementChild.classList.remove('disabled'); 
        }
        if (tableControl.currentPage === tableControl.pages - 1) {
            DOMstrings.pageNum.lastElementChild.classList.add('disabled');
        } else {
            DOMstrings.pageNum.lastElementChild.classList.remove('disabled');
        }
    };

    // 11. setup events: change the numbers of entries and change the page number

    let setupEventListeners = function () {
        DOMstrings.entries.addEventListener('change', function () {
            tableControl.currentPage = 0;
            clearTabel();
            clearNav();
            getEntriesNumer();
            calcPages();
            calcTableRange();
            displayPageNav();
            updateUI();
            updateButtons();
        });

        DOMstrings.pageNum.addEventListener('click', function (event) {

            if (event.target.textContent === 'Previous') {

                if (tableControl.currentPage !== 0) {
                    tableControl.currentPage = tableControl.currentPage - 1;
                    updateNav();
                    updateButtons();
                }  

            } else if (event.target.textContent === 'Next') {

                if (tableControl.currentPage !== tableControl.pages - 1) {
                    tableControl.currentPage = tableControl.currentPage + 1;
                    updateNav();
                    updateButtons();
                }

            } else {
                tableControl.currentPage = parseInt(event.target.textContent) - 1;
                updateNav();
                updateButtons();
            }
        });
    };

    return {
        init: function () {
            generateTableData(60);
            calcPages();
            displayPageNav();
            updateUI();
            updateButtons();

            setupEventListeners();
        },

        test: function () {
            console.log(tableControl.currentPage);
        }
    };
}();

main.init();