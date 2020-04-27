let main = (() => {

    class Construction {
        constructor(name, buildYear) {
            this.name = name;
            this.buildYear = buildYear;
        }
    }

    class Park extends Construction {
        constructor(name, buildYear, trees, area) {
            super(name, buildYear);
            this.trees = trees;
            this.area = area;
        }

        calcDensity() {
            return this.trees / this.area;
        }

        hasManyTrees() {
            return (this.trees > 1000);
        }

        getAge() {
            return parseInt(new Date().getFullYear()) - this.buildYear;
        }
    }

    class Street extends Construction {
        constructor(name, buildYear, lengthS, size = 'normal') {
            super(name, buildYear);
            this.lengthS = lengthS;
            this.size = size;
        }
    }

    // Main data storage
    let reportData = {
        parks: new Map(),
        streets: new Map(),

        getAverageAge: function () {
            let average = 0;
            for (let key of this.parks.values()) {
                average += key.getAge();
            }
            return (average / this.parks.size).toFixed(2);
        },

        totalLength: function () {
            let total = 0;
            for (let key of this.streets.values()) {
                total += key.lengthS;
            }
            return total;
        },

        averageLength: function () {
            return this.totalLength() / this.streets.size;
        }
    };

    let addItem = function (p1, ...args) {
        if (p1.includes('Park')) {
            reportData.parks.set(`${p1}`, new Park(p1, ...args));
        } else {
            reportData.streets.set(`${p1}`, new Street(p1, ...args));
        }
    };

    // generate initial data
    let initialData = () => {
        addItem('Green Park', 1760, 600, 1.2);
        addItem('National Park', 1880, 2300, 2.5);
        addItem('Oak Park', 1975, 350, 0.8);
        addItem('Ocean Avenue', 1995, 1.5, 'small');
        addItem('Evergreen Street', 2010, 2.8);
        addItem('4th Street', 2018, 10.2, 'huge');
        addItem('Sunset Avenue', 1980, 7.1, 'big');
    };

    let displayReport = function () {
        let text = ` --------- PARKS REPORT ---------`;

        text += `\n Our ${reportData.parks.size} parks have an average age of ${reportData.getAverageAge()} years.`;

        for (let item of reportData.parks.values()) {
            text += `\n ${item.name} has a density of ${item.calcDensity()} trees per square km.`;
        }

        for (let item of reportData.parks.values()) {
            if (item.hasManyTrees()) {
                text += `\n ${item.name} has more than 1000 trees.`;
            }
        }

        text += `\n --------- STREETS REPORT ---------`;
        text += `\n Our ${reportData.streets.size} streets have a total length of ${reportData.totalLength()} km, with an average of ${reportData.averageLength()} km.`;

        for (let item of reportData.streets.values()) {
                text += `\n ${item.name}, built in ${item.buildYear}, is a ${item.size} street.`;
        }

        console.log(text);
    };

    return {
        init: () => {
            initialData();
            displayReport();
        }
    };
})();

main.init();