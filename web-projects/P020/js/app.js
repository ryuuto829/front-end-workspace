let main = function () {

    let DOMstrings = {
        entries: document.getElementById('entries'),
        body: document.getElementById('table-body')
    };

    let currentEntries = getEntriesNumer();

    // 1. create table data -> store generated data in obj
    let tableData = [];
    let NumberOfTableData = tableData.length;

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

    generateTableData(150);

    // 2. read entries number - 10, 25, 50

    let getEntriesNumer = function () {
        return parseInt(DOMstrings.entries.value);
    };

    // 3. display table items from start to end

    let displayTableData = function (start, end) {
        let item, formattedItem;
        
        item = '<tr> <td>%name%</td> <td>%position%</td> <td>%office%</td> <td>%age%</td> </tr>';

        for (let i = start; i <= end; i++) {
            formattedItem = item.replace('%name%', tableData[i].name);
            formattedItem = formattedItem.replace('%position%', tableData[i].position);
            formattedItem = formattedItem.replace('%office%', tableData[i].office);
            formattedItem = formattedItem.replace('%age%', tableData[i].age);
            DOMstrings.body.insertAdjacentHTML('beforeend', formattedItem);
        }
    };

    let calcPages = function (num) {

        // body func

    };
    calcPages();

    // 3. update caption description
    // 4. update pagining active page and numbers of pages
    // 5. show html data with entries lines
    // 6. after clicking on next page - load another set of data, then (3), (4)
    // 7. after changing number of entries do (3), (4), (5) 

    let setupEventListeners = function () {
        DOMstrings.entries.addEventListener('change', function() {

        currentEntries = 
            
        });
    };

    return {
        init: function () {
            displayTableData(0, 9); // change it to func
            setupEventListeners();
        },

        test: function () {
            console.log(tableData[0].name);
        }
    };
}();

main.init();